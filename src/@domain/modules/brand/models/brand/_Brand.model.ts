import type { ConstructableValuesOf } from "@core/interfaces";
import type { IBrandSchema } from "@core/schemas";
import type { IBrand } from "./_IBrand.interface";

export class Brand implements IBrand {
	readonly id: number;
	readonly name: string;
	readonly displayName: string;

	constructor(values?: ConstructableValuesOf<IBrand>) {
		this.id = values?.id ?? 0;
		this.name = values?.name ?? "";
		this.displayName = values?.displayName ?? "";
	}

	static fromSchema(values?: Readonly<IBrandSchema>) {
		return new Brand(values);
	}
}
