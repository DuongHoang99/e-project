import { SectionTitle } from "@presentation/components/atoms";
import { Jumbotron } from "@presentation/components/molecules";
import { ProductBox } from "@presentation/components/organism";

export default function Home() {
	return (
		<>
			<Jumbotron />
			<div className="px-[20rem] py-[10px]">
				<p>
					Daniel Wellington – Thương hiệu đồng hồ Thuỵ Điển được thành lập năm
					2011. Thế mạnh về phong cách tối giản, thanh lịch, đồng hồ DW nam, nữ
					rất dễ phối với mọi loại trang phục. Với sức sáng tạo và sự chuyển
					động không ngừng của ngành thời trang, hãng bắt đầu cho ra mắt nhiều
					hơn ở dòng đồng hồ DW nam, nữ, cặp đôi kiểu dây thép, kim loại, đính
					đá, khảm xà cừ, mặt vuông, máy cơ automatic thay vì kiểu dáng mặt tròn
					đơn giản như trước đó.
				</p>
        <SectionTitle text="các sản phẩm" />
				<ProductBox />
			</div>
		</>
	);
}
