import { CategoriesRepo } from "@core/repositories/_categories.repo";
import { Category } from "../models";

export function getAll() {
	return CategoriesRepo.map(Category.fromSchema);
}
