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

import TableData from "../../public/static/json-data/table-data.json";
import Table from "../Table";
import SideNavbar from "./SideNavbar";

//main_function
const Dashboard = () => {
  return (
    <div className="dashboard__container">
      <div className="side__navbar padding__container">
        <SideNavbar />
      </div>
      <div className="dashboard__table">
        <div className="table__heading padding__container">
          <h3>Inventory</h3>
        </div>
        <div className="padding__container">
          <Table props={TableData}/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
