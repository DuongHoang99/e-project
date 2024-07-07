import type { ConstructableValuesOf } from "@core/interfaces";
import type { IProductSchema } from "@core/schemas";
import type { ICategory } from "@domain/modules/category/models";
import type { IProduct } from "./_IProduct.interface";
import type { IBrand } from "@domain/modules/brand/models";

import { CategoryService } from "@domain/modules/category/services";
import { BrandService } from "@domain/modules/brand/services";
import { Category } from "@domain/modules/category/models";
import { Brand } from "@domain/modules/brand/models";

export class Product implements IProduct {
	readonly id: number;
	readonly brand: IBrand;
	readonly category: ICategory;
	readonly name: string;
	readonly code: string;
	readonly price: string;
	readonly description: string;
	readonly thumbnail: string;

	constructor(values?: ConstructableValuesOf<IProduct>) {
		this.id = values?.id ?? 0;
		this.brand = new Brand(values?.brand);
		this.category = new Category(values?.category);
		this.name = values?.name ?? "";
		this.code = values?.code ?? "";
		this.price = values?.price ?? "";
		this.description = values?.description ?? "";
		this.thumbnail = values?.thumbnail ?? "";
	}

	static fromSchema(values?: Readonly<IProductSchema>) {
		return new Product({
			...values,
			brand: new Brand(
				BrandService.getAll().find(({ id }) => id === values?.brandId),
			),
			category: new Category(
				CategoryService.getAll().find(({ id }) => id === values?.categoryId),
			),
		});
	}
}
