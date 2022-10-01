import type { NextPage } from "next";
import Head from "next/head";
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
	return <Wrapper>
			<Head>
				<title>Substore</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content="The all-in-one data store platform, built from the ground up." />
			</Head>
			<Navbar/> 
		</Wrapper>
};

export default Home;
