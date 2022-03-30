import React, { useState } from "react";
import SlognsShow from "./SlognsShow";
import { slogons } from "../../assets/data/data";
const Pagination = () => {
  const [pages] = useState(Math.round(slogons.length / 18));
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSlogons, setCurrentSlogons] = useState(slogons.slice(0, 18));

  const prevPage = () => {
    if (currentPage > 1) {
      let newCurrentPage = currentPage - 1;
      setCurrentPage(newCurrentPage);
      let newCurrentSlogons = slogons.slice(
        (newCurrentPage - 1) * 18,
        newCurrentPage * 18
      );
      setCurrentSlogons(newCurrentSlogons);
    }
  };
  const nextPage = () => {
    if (currentPage < pages) {
      let newCurrentPage = currentPage + 1;
      setCurrentPage(currentPage + 1);
      setCurrentSlogons(
        slogons.slice(newCurrentPage * 18 - 18, newCurrentPage * 18)
      );
    }
  };
  const pageGroup = () => {
    if (currentPage <= pages) {
      let pageGroup = [];
      let i = currentPage;
      for (; i <= currentPage + 2; i++) {
        if (i <= pages) {
          pageGroup.push(i);
        }
      }
      return pageGroup;
    }
  };

  const goTopage = (page) => {
    let newCurrentPage = page;
    setCurrentPage(page);
    setCurrentSlogons(
      slogons.slice(newCurrentPage * 18 - 18, newCurrentPage * 18)
    );
  };
  return (
    <div>
      <div className="slogon_section">
        <SlognsShow currentSlogons={currentSlogons}></SlognsShow>
      </div>
      <div className="pagination">
        <button
          onClick={prevPage}
          className={`page_btn ${currentPage === 1 ? "disabled_btn" : ""}`}
        >
          {"<"} Prev
        </button>
        {
          <div className="page_group_btn">
            {pageGroup().map((page) => {
              return (
                <button
                  key={page}
                  onClick={() => {
                    goTopage(page);
                  }}
                  className={`no_btn ${
                    page === currentPage ? "active_btn" : ""
                  }`}
                >
                  {page}
                </button>
              );
            })}
            {pages === currentPage ? null : (
              <div className="last_page_btn">
                <span className="three_dots">....</span>
                <button className="no_btn">{pages}</button>
              </div>
            )}
          </div>
        }
        <button
          onClick={nextPage}
          className={`page_btn ${currentPage === pages ? "disabled_btn" : ""}`}
        >
          Next {">"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
