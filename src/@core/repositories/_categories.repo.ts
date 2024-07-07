import type { ICategorySchema } from "../schemas";

export const CategoriesRepo: ReadonlyArray<ICategorySchema> = [
	{
		id: 0,
		name: "luxury",
		displayName: "Đồng hồ sang trọng",
	},
	{
		id: 1,
		name: "classic",
		displayName: "Đồng hồ cổ điển",
	},
	{
		id: 2,
		name: "smart",
		displayName: "Đồng hồ thông minh",
	},
];
