/**
 *
 * Project: Algorizin (React Developer Recruiting Task)
 * Title: Dashboard Component
 * Author: Musiur Alam Opu
 *
 * Description: This will be the main component used in
 * index.js or, Home page
 *
 *
 * Date: 26th April, 2022
 *
 */

//dependencies
import TableData from "../../public/static/json-data/table-data.json";
import Table from "../Table";
import SideNavbar from "./SideNavbar";

//main_function
const Dashboard = () => {
  return (
    <div className="dashboard__container">
      {/* dashboard side bar section */}
      <section className="side__navbar padding__container">
        <SideNavbar />
      </section>

      {/* dashboard table section */}
      <section className="dashboard__table">
        <div className="table__heading padding__container">
          <h3>Inventory</h3>
        </div>
        <div className="padding__container">
          {/* custom reuseable table component  */}
          <Table props={TableData}/>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
