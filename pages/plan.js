import Head from "next/head";
import PillCard from "../components/PillCard";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

export default function Plan() {
	return (
		<>
			<Head>
				<title>Athelas | Plan</title>
			</Head>
			<div>
				<PillCard />
				<Fab color="primary" aria-label="add">
					<AddIcon />
				</Fab>
			</div>
		</>
	);
}
