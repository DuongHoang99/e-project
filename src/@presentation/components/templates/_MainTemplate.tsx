import type { PropsWithChildren } from "react";
import { Header } from "../organism";

export default function MainTemplate({ children }: PropsWithChildren) {
	return (
		<div className="flex flex-col gap-[20px] min-h-screen">
			<Header />
			<div>{children}</div>
		</div>
	);
}
