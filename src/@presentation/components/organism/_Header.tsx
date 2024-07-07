import logo from "@assets/images/logo.jpg";

import { SearchInput, SocialContainer } from "../molecules";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div className="flex flex-col gap-3 border-b border-gray-200">
			<div className="flex pl-[45vw] justify-between items-center px-[20vw]">
				<img src={logo} alt="logo" className="size-48" />
				<div className="flex gap-[10px]">
					<SearchInput />
					<SocialContainer />
				</div>
			</div>
			<ul className="flex justify-evenly text-[20px]">
				<li className="border-b-2 border-b-transparent hover:border-b-black">
					<Link to="/" className="px-[10px]">
						Home
					</Link>
				</li>
				<li className="border-b-2 border-b-transparent hover:border-b-black">
					<span className="px-[10px]">Category</span>
				</li>
				<li className="border-b-2 border-b-transparent hover:border-b-black">
					<Link to="about-us" className="px-[10px]">
						About Us
					</Link>
				</li>
			</ul>
		</div>
	);
}
