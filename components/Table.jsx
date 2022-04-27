/**
 *
 * Project: Algorizin (React Developer Recruiting Task)
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
import { Fragment } from "react";
import CustomCheckbox from "./CustomCheckbox/CustomCheckbox";

//main_function
const Table = ({ props }) => {
  const { tableHeading, tableRows } = props[0].tableData;
  return (
    <div className="table__container">
      {/* search bar section  */}
      <section className="searchbar__container">
        <div className="table__search">
          <Image
            src="/static/icons/search.svg"
            alt="search_icon"
            width="17"
            height="17"
          />
          <input name="search__item" placeholder="Search" />
        </div>
      </section>
      <table id="inventoryTable">
        {/* table heading  */}
        <thead className="px-3">
          <tr className="border-background table__heading">
            {tableHeading.map((thData, i) => {
              const { id, tHeading } = thData;
              return (
                <Fragment key={id}>
                  {
                    // showing checkbox for index 0 else th
                    i === 0 ? (
                      <th className="text-left">
                        <CustomCheckbox props={"heading"} />
                      </th>
                    ) : (
                      //this ternery in th will align th text according to the UI design
                      <th className={`${i < 5 ? "text-left" : "text-right"}`}>
                        <span>{tHeading}</span>
                        {
                          // showing up__down__arrow for th: Amount and Title
                          tHeading === "Amount" || tHeading === "Title" ? (
                            <span className="pl-2">
                              <Image
                                src="/static/icons/up__down__arrow.svg"
                                alt="chevron__arrow__down"
                                width="15"
                                height="15"
                              />
                            </span>
                          ) : // showing down__arrow for th: Date update
                          tHeading === "Date updated" ? (
                            <span className="pl-2">
                              <Image
                                src="/static/icons/down__arrow.svg"
                                alt=""
                                width="15"
                                height="15"
                              />
                            </span>
                          ) : // else showing no icon with th
                          null
                        }
                      </th>
                    )
                  }
                </Fragment>
              );
            })}
          </tr>
        </thead>
        {/* table body  */}
        <tbody>
          {tableRows.map((tRow) => {
            const { id, rowData, rowNumber } = tRow;
            return (
              // table rows
              <tr key={id}>
                {rowData.map((tdData, i) => {
                  const { id, td, tHeading } = tdData;

                  const rowIdentity = `row${rowNumber}`; //making unique id for checkboxs

                  // quantity highlighting
                  let QuantityToBold = 0;
                  let QuantityNotToBold = 0;

                  if (tHeading === "Quantity") {
                    QuantityToBold = td?.split("/")[0];
                    QuantityNotToBold = td?.split("/")[1];
                  }

                  return (
                    // row items as td
                    <Fragment key={id}>
                      {
                        // showing checkbox for index 0 else td
                        i === 0 ? (
                          <td className={i < 5 ? "text-left" : "text-right"}>
                            <CustomCheckbox props={rowIdentity} />
                          </td>
                        ) : (
                          <td className={i < 5 ? "text-left" : "text-right"}>
                            {tHeading === "Quantity" ? (
                              <>
                                <span className="font-bold">
                                  {QuantityToBold}
                                </span>
                                /{QuantityNotToBold}
                              </>
                            ) : (
                              <>
                                {
                                  //showing dotted status (Red: out of stock, Orange: in progress, Green: alright)
                                  tHeading === "Status" ? (
                                    <div className="flex items-center gap-3">
                                      <span className="hidden sm:flex">
                                        {td}
                                      </span>
                                      <div
                                        className={`w-2 h-2 rounded-full ${
                                          td === "Out of stock"
                                            ? "bg-red"
                                            : td === "In progress"
                                            ? "bg-orange"
                                            : "bg-success"
                                        }`}
                                      ></div>
                                    </div>
                                  ) : (
                                    td // else showing td
                                  )
                                }
                              </>
                            )}
                          </td>
                        )
                      }
                    </Fragment>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* navigation section at footer */}
      <section className="pagination__bar">
        {/* items number per view  */}
        <div className="pagination__bar--left">
          <div className="pagination__navigators">
            <span>10 pages per view</span>
            <Image
              src="/static/icons/chevron__light__down.svg"
              alt="chevron__light__down"
              width="15"
              height="15"
            />
          </div>
        </div>
        <div className="pagination__bar--right">
          {/* direct navigate a page  */}
          <div className="pagination__navigators">
            <span>Page 1 of 5</span>
            <Image
              src="/static/icons/chevron__light__down.svg"
              alt="chevron__light__down"
              width="15"
              height="15"
            />
          </div>
          {/* previous items btn  */}
          <div className="pagination__navigators">
            <Image
              src="/static/icons/chevron__light__left.svg"
              alt="chevron__light__down"
              width="15"
              height="15"
            />
          </div>
          {/* next items btn  */}
          <div className="pagination__navigators">
            <Image
              src="/static/icons/chevron__light__right.svg"
              alt="chevron__light__down"
              width="15"
              height="15"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Table;
