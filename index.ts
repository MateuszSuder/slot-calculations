import express from 'express';
import { Spins } from './ts/Spins';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	const test = new Spins(10);
	res.send(test);
});

app.listen(port, () => {
	console.log('server running');
});