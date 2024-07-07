import type { ICategory } from "@domain/modules/category/models";
import type { IBrand } from "@domain/modules/brand/models";

export interface IProduct {
	id: number;
	brand: IBrand;
	category: ICategory;
	name: string;
	code: string;
	price: string;
	description: string;
}
