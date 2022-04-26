/**
 *
 * Project: Alorizin (React Developer Recruiting Task)
 * Title: Top Navigation Bar Component
 * Author: Musiur Alam Opu
 *
 * Description: Using this we can navigate all the page we may have
 * in our web application.
 *
 * Date: 26th April, 2022
 *
 */

//dependencies
import Image from "next/image";

//main_function
const Navbar = () => {
  return (
    <div className="nav__container">
      {/* left div  */}
      <div className="brand__name">
        <span>Starbucks</span>
        <Image
          src="/static/icons/chevron__down.svg"
          alt="chevron__down"
          width="8"
          height="5"
        />
      </div>

      {/* right div  */}
      <div className="profile">
        {/* search bar  */}
        <div className="profile__searchbar">
          <Image
            src="/static/icons/search.svg"
            alt="search_icon"
            width="17"
            height="17"
          />
          <input name="search__item" placeholder="Search"/>
        </div>

        {/* profile parts */}
        <div className="profile__options">
          {/* bell icon  */}
          <Image
            src="/static/icons/bell.svg"
            alt="chevron__down"
            width="17"
            height="17"
          />

          {/* avatar  */}
          <Image
            src="/static/images/avatar.svg"
            alt="chevron__down"
            width="30"
            height="30"
          />
          {/* user name  */}
          <span>John Doe</span>

          {/* chevron down icon  */}
          <Image
            src="/static/icons/chevron__down.svg"
            alt="chevron__down"
            width="8"
            height="5"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
