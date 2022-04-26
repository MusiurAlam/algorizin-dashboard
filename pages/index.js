/**
 * 
 * Project: Alorizin (React Developer Recruiting Task)
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
import Dashboard from "../components/Dashboard/Dashboard";
import Layout from "../layout/Layout";


//mian_function
const Home = () => {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  )
}

export default Home;
