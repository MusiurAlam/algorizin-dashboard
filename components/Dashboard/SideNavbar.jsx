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
import Image from "next/image";
import { useState } from "react";

//kits
const NavItems = [
  {
    id: 1,
    image__src: "/static/icons/home.svg",
    colored__image__src: "/static/icons/home__green.svg",
    item__name: "Dashboard",
  },
  {
    id: 2,
    image__src: "/static/icons/inventory.svg",
    colored__image__src: "/static/icons/inventory__green.svg",
    item__name: "Inventory",
  },
  {
    id: 3,
    image__src: "/static/icons/document.svg",
    colored__image__src: "/static/icons/document__green.svg",
    item__name: "Documents",
  },
  {
    id: 4,
    image__src: "/static/icons/gear.svg",
    colored__image__src: "/static/icons/gear__green.svg",
    item__name: "Settings",
  },
];

//main_function
const SideNavbar = () => {
  // tab management state 
  const [activeTab, setActiveTab] = useState("Inventory");

  // tab management function
  const handleActiveTabSwitching = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      {NavItems.map((item) => {
        const { id, image__src, item__name, colored__image__src } = item;
        return (
          <div
            key={id}
            className={`sidenav__item ${
              activeTab === item__name && "sidenav__item--active"
            }`}
            onClick={() => handleActiveTabSwitching(item__name)}
            role="button"
          >
            {/* tab icon  */}
            <Image
              src={activeTab === item__name ? colored__image__src : image__src}
              alt={item__name}
              width="20"
              height="20"
            />
            {/* tab name  */}
            <span>{item__name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SideNavbar;
