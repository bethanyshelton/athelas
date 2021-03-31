import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFound() {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push("/");
		}, 3000);
	}, []);

	return (
		<div className="flex flex-col justify-center items-center text-white mt-48">
			<h1 className="text-5xl m-4">Oooooops!</h1>
			<h2 className="text-2xl m-2">Looks like you're lost!</h2>
			<p className="text-md m-2">
				Let me help you find your way{" "}
				<Link href="/">
					<a>home.</a>
				</Link>
			</p>
		</div>
	);
}
