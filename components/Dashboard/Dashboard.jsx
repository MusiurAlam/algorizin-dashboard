/**
 *
 * Project: Alorizin (React Developer Recruiting Task)
 * Title: Table Component
 * Author: Musiur Alam Opu
 *
 * Description: This is a reuseable table which takes props
 * and render them with styling.
 * It will have many rows and columns and pagination functionality
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
