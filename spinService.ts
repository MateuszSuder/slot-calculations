import { featuresArray, SlotSymbol, slotSymbols, specialSymbols, Win } from './ts/index';
import express from 'express';
import { Spins } from './ts/Spins';
import cors from 'cors';
import { Spin } from './ts/Spin';
import { Bonus } from './ts/Bonus';

const app = express();
const port = 4000;

const corsOptions = {
	origin: 'http://localhost:3000',
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

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
	const spin = new Spins(10);
	const result = new Proxy(spin, hideSensitive);
	res.send(result);
});

app.listen(port, () => {
	console.log('server running');
});


const symbolHandler = {
	get: function(target: SlotSymbol, prop: keyof SlotSymbol) {
		if([ 'payouts', 'chances' ].includes(prop)) {
			return;
		} else {
			return target[prop];
		}
	}
};

const hideSensitive: any = {
	get: function(target: Spins & Spin & Bonus & Win, prop: keyof typeof target) {
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