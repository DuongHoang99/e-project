import type { IProductSchema } from "../schemas";

import { faker } from "@faker-js/faker";

import product1 from "@assets/images/SFJ009P1/Seiko-SFJ0091-1.avif";
import product2 from "@assets/images/SPB409J1/Seiko-SPB409J-.avif";
import product3 from "@assets/images/SRPH29K1/SRPH29K1.avif";
import product4 from "@assets/images/SRPH75K1/SRPH75K1.avif";

function generateProduct(): IProductSchema {
	return {
		id: faker.number.int(),
		brandId: faker.helpers.arrayElement([0, 1, 2]),
		categoryId: faker.helpers.arrayElement([0, 1, 2]),
		code: faker.string.uuid(),
		description: faker.lorem.paragraph(),
		name: faker.company.buzzNoun(),
		price: faker.finance.amount({ dec: 0, min: 500000, max: 3000000 }),
		thumbnail: faker.helpers.arrayElement([ product1, product2, product3, product4 ]),
	};
}

export const ProductRepo: ReadonlyArray<IProductSchema> = Array.from(
	{ length: 50 },
	generateProduct,
);
