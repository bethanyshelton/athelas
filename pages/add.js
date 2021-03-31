import Head from "next/head";
import AddForm from "../components/AddForm";

export default function Add() {
	return (
		<>
			<Head>
				<title>Athelas | Add a Pill</title>
			</Head>
			<div>
				<AddForm />
			</div>
		</>
	);
}
