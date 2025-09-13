// src/components/Filters.js
import React from "react";
import { CiSearch } from "react-icons/ci";
const Filters = ({
  searchQuery,
  onSearchChange,
  vegFilter,
  nonVegFilter,
  onVegFilterChange,
  onNonVegFilterChange,
}) => {
  return (
    <div className="filters-container">
      {/* Search Bar */}
      <div className="search-container">
        <div className="search-input-wrapper">
          <span className="search-icon">
            <CiSearch />
          </span>
          <input
            type="text"
            placeholder="Search dish for your party..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {/* Veg/Non-Veg Filters */}
      <div className="diet-filters">
        <div className="filter-group">
          <span className="filter-label">Filter:</span>

          <label className="filter-checkbox">
            <input
              type="checkbox"
              checked={vegFilter}
              onChange={(e) => onVegFilterChange(e.target.checked)}
            />
            <span className="checkbox-label">
              <span className="veg-icon">🟢</span>
              Veg
            </span>
          </label>

          <label className="filter-checkbox">
            <input
              type="checkbox"
              checked={nonVegFilter}
              onChange={(e) => onNonVegFilterChange(e.target.checked)}
            />
            <span className="checkbox-label">
              <span className="non-veg-icon">🔴</span>
              Non-Veg
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
