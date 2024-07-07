import type { IProduct } from "@domain/modules/product/models";

interface IProductCardProps {
	dataSource: IProduct;
}

export default function ProductCard({ dataSource: { thumbnail, price, name, brand, code } }: IProductCardProps) {
	return (
		<div className="flex flex-col items-center size-full">
			<img src={thumbnail} alt={name} className="w-full" />
			<div className="flex flex-col items-center">
				<p className="text-[18px] text-center capitalize">
					{brand.displayName} {name} - {code}
				</p>
				<p className="text-[20px] font-bold">{price}</p>
			</div>
		</div>
	);
}
