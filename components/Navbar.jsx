import Link from "next/link";
import { CgCalendarToday } from "react-icons/cg";
import { GiMedicines } from "react-icons/gi";

export default function Navbar() {
	return (
		<nav className="flex fixed bottom-0 inset-x-0 bg-indigo-900 text-sm divide-x divide-indigo-300 divide-dashed">
			<div className="flex-1">
				<Link href="/">
					<a className="flex justify-center py-2 text-indigo-300">
						<span className="flex flex-col justify-center">
							<CgCalendarToday />
						</span>
						<p className="px-1">Today</p>
					</a>
				</Link>
			</div>
			<div className="flex-1">
				<Link href="/plan">
					<a className="flex justify-center py-2 text-white">
						<span className="flex flex-col justify-center">
							<GiMedicines />
						</span>
						<p className="px-1">Plan</p>
					</a>
				</Link>
			</div>
		</nav>
	);
}
