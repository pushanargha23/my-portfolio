import React from 'react';
import { Link } from 'react-router-dom';

export default function NextPageNav({ prevLink, prevLabel, nextLink, nextLabel }) {
  return (
    <div className="next-page-nav-wrapper">
      <div className="container">
        <div className="next-page-nav-card">
          {prevLink ? (
            <Link to={prevLink} className="page-nav-btn prev-btn">
              <i className="fa-solid fa-arrow-left"></i>
              <div className="page-nav-text">
                <span className="page-nav-sub">Previous</span>
                <span className="page-nav-title">{prevLabel}</span>
              </div>
            </Link>
          ) : <div />}

          {nextLink && (
            <Link to={nextLink} className="page-nav-btn next-btn">
              <div className="page-nav-text text-right">
                <span className="page-nav-sub">Next Page</span>
                <span className="page-nav-title">{nextLabel}</span>
              </div>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
