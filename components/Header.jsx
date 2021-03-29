import { CgCalendarToday } from "react-icons/cg";

export default function Header() {
	return (
		<div className="flex justify-center mt-2 content-center">
			<h1 className="flex justify-center font-sans text-2xl tracking-wide text-indigo-400 p-2">
				<span className="flex flex-col justify-center">
					<CgCalendarToday />
				</span>
				<span className="px-1">Today</span>
			</h1>
		</div>
	);
}
