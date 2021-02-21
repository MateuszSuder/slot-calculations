import { featuresArray, SlotSymbol, slotSymbols, specialSymbols, Win } from './ts/index';
import express from 'express';
import bodyParser from 'body-parser';
import { Spins } from './ts/Spins';
import cors from 'cors';
import { Spin } from './ts/Spin';
import { Bonus } from './ts/Bonus';

const port = 4000;

const app = express();

const corsOptions = {
	origin: 'http://localhost:3000',
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get('/spin/features', (req, res) => {
	res.send(featuresArray);
});

app.get('/spin/symbols', (req, res) => {
	const result: SlotSymbol[] = [];
	slotSymbols.forEach(el => {
		const proxy = new Proxy(el, symbolHandler);
		result.push(proxy);
	});
	specialSymbols.forEach(el => {
		const proxy = new Proxy(el, symbolHandler);
		result.push(proxy);
	});
	res.send(result);
});

app.post('/spin/spin', (req, res) => {
	try {
		const spin = new Spins(req.body.bet);
		const result = new Proxy(spin, hideSensitive);
		res.send(result);
	} catch(e) {
		res.status(400).jsonp(e.message);
	}
	
});

app.listen(port, () => {
	console.log(`Spin Service running on port ${port}`);
});

const symbolHandler = {
	get: function(target: SlotSymbol, prop: keyof SlotSymbol) {
		if(prop.includes('_')) {
			return;
		} else {
			return target[prop];
		}
	}
};

const hideSensitive: any = {
	get: function(target: Spins & Spin & Bonus & Win, prop: keyof typeof target) {
		if([ 'name', 'index' ].includes(prop))
			return;
		if([ 'position', 'LEVEL', 'features' ].includes(prop))
			return target[prop];
		if(prop.toString().includes('_')) {
			return;
		} else {
			if(Array.isArray(target[prop])) {
				const res = [];
				for(const i of target[prop]) {
					if(Array.isArray(i)) {
						const resInner = [];
						for(const j of i) {
							resInner.push(new Proxy(j, hideSensitive));
						}
						res.push(resInner);
					} else {
						res.push(new Proxy(i, hideSensitive));
					}
				}
				return res;
			} else if(typeof target[prop] === 'object' && target[prop] !== null) {
				return new Proxy(target[prop], hideSensitive);
			}
			return target[prop];
		}
	}
};