import { CiSearch } from "react-icons/ci";

export default function SearchInput() {
	return (
		<div className="flex gap-2 items-center border rounded-md h-10 bg-slate-400 p-3 w-[300px]">
			<CiSearch />
			<input type="text" placeholder="Tìm sản phẩm hoặc thương hiệu?" className="outline-none bg-transparent placeholder:text-gray-500 w-full" />
		</div>
	);
}
