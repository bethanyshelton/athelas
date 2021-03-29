import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Athelas</title>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Della+Respira&family=Montserrat&display=swap"
					rel="stylesheet"
				/>
			</Head>{" "}
			<body className="bg-gray-900 h-screen">
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</body>
		</>
	);
}

export default MyApp;
