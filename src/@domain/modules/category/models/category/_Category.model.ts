import type { ConstructableValuesOf } from "@core/interfaces";
import type { ICategorySchema } from "@core/schemas";
import type { ICategory } from "./_ICategory.interface";

export class Category implements ICategory {
	readonly id: number;
	readonly name: string;
	readonly displayName: string;

	constructor(values?: ConstructableValuesOf<ICategory>) {
		this.id = values?.id ?? 0;
		this.name = values?.name ?? "";
		this.displayName = values?.displayName ?? "";
	}

	static fromSchema(values?: Readonly<ICategorySchema>) {
		return new Category(values);
	}
}
