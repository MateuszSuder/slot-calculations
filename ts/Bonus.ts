/* eslint-disable no-unused-vars */

import { Features } from './index';
import { Spin } from './Spin';

export class Bonus {
	spins: Spin[] = [];
	features: [Features, Features, Features];
	bet: number;

	constructor(bet: number, features: [Features, Features, Features]) {
		this.bet = bet;

		this.features = features;
	}
}