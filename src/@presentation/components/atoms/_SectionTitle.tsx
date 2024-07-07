interface ISectionTitleProps {
	text: string;
}

export default function SectionTitle({ text }: ISectionTitleProps) {
	return (
		<div className="relative isolate after:-z-10 text-center uppercase after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:border-b-2 after:w-full">
			<span className="z-10 bg-white font-semibold text-[25px] px-[10px]">{text}</span>
		</div>
	);
}
