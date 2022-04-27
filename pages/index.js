/**
 * 
 * Project: Algorizin (React Developer Recruiting Task)
 * Title: Home Page 
 * Author: Musiur Alam Opu
 * 
 * Description: This is our home page. This page is containing
 * Dashboard design
 * 
 * 
 * Date: 26th April, 2022
 * 
 */

//dependencies
import Head from "next/head";
import Dashboard from "../components/Dashboard/Dashboard";
import Layout from "../layout/Layout";


//mian_function
const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Algorizin Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="This is a recruiting task/project for Frontend/React Js developer given by Algorizin"/>
      </Head>
      <Dashboard />
    </Layout>
  )
}

export default Home;
