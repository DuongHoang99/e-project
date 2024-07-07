import { ProductRepo } from "@core/repositories/_products.repo";
import { Product } from "../models";

export function getAll() {
	return ProductRepo.map(Product.fromSchema);
}
