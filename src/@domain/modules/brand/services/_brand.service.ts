import { BrandsRepo } from "@core/repositories/_brands.repo";
import { Brand } from "../models";

export function getAll() {
	return BrandsRepo.map(Brand.fromSchema);
}
