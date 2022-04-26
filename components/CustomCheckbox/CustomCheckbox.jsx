/**
 *
 * Project: Alorizin (React Developer Recruiting Task)
 * Title: Top Navigation Bar Component
 * Author: Musiur Alam Opu
 *
 * Description: Using this we can navigate all the page we may have
 * in our web application.
 *
 * Date: 27th April, 2022
 *
 */

//main_function
const CustomCheckbox = ({ props }) => {
  const handleOnChangeCheckbox = (e) => {
    console.log(e.target.value);
  };
  return (
    <label htmlFor={props} className="checkbox">
      <input
        type="checkbox"
        name={props}
        id={props}
        className="checkbox__input"
        onChange={handleOnChangeCheckbox}
      />
      <div className="checkbox__checkbox"></div>
    </label>
  );
};

export default CustomCheckbox;
