import Head from "next/head";
import DoseCard from "../components/DoseCard";

export default function Home() {
	return (
		<>
			<Head>
				<title>Athelas | Today</title>
			</Head>
			<div>
				<DoseCard />
			</div>
		</>
	);
}
