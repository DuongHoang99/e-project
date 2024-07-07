import { ProductService } from "@domain/modules/product/services";
import { ProductCard } from "../molecules";

export default function ProductBox() {
	return (
		<div className="grid grid-cols-4 gap-[30px]">
			{ProductService.getAll().map((item) => (
				<ProductCard key={item.code} dataSource={item} />
			))}
		</div>
	);
}
