import { Match } from "effect";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

interface ISocialButtonProps {
	type: "facebook" | "twitter" | "instagram";
	className?: string;
}

function getIconMatcher() {
	return Match.type<ISocialButtonProps>().pipe(
		Match.when({ type: "facebook" }, () => ({
			Icon: FaFacebook,
			href: "https://www.facebook.com/",
		})),
		Match.when({ type: "twitter" }, () => ({
			Icon: FaXTwitter,
			href: "https://x.com/",
		})),
		Match.when({ type: "instagram" }, () => ({
			Icon: FaSquareInstagram,
			href: "https://www.instagram.com/",
		})),
		Match.exhaustive,
	);
}

export default function SocialButton(props: ISocialButtonProps) {
	const { Icon, href } = getIconMatcher()(props);

	return (
		<a href={href} target="_blank" rel="noreferrer">
			<Icon className={props.className} />
		</a>
	);
}
