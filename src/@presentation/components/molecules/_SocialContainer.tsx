import { SocialButton } from "../atoms";

export default function SocialContainer() {
	return (
		<ul className="flex gap-3 items-center">
			<li>
				<SocialButton type="facebook" className="size-6" />
			</li>
			<li>
				<SocialButton type="instagram" className="size-6" />
			</li>
			<li>
				<SocialButton type="twitter" className="size-6" />
			</li>
		</ul>
	);
}
