import type { IProductSchema } from "../schemas";

import { faker } from "@faker-js/faker";

function generateProduct(): IProductSchema {
	return {
		id: faker.number.int(),
		brandId: faker.helpers.arrayElement([0, 1, 2]),
		categoryId: faker.helpers.arrayElement([0, 1, 2]),
		code: faker.string.uuid(),
		description: faker.lorem.paragraph(),
		name: faker.company.buzzNoun(),
		price: faker.finance.amount({ dec: 0, min: 500000, max: 3000000 }),
	};
}

export const ProductRepo: ReadonlyArray<IProductSchema> = Array.from(
	{ length: 100 },
	generateProduct,
);
