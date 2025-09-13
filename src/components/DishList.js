// src/components/DishList.js
import React from "react";
import DishCard from "./DishCard";
import { CiSearch } from "react-icons/ci";

const DishList = ({
  dishes,
  selectedDishes,
  onToggleSelect,
  onViewIngredients,
  currentCategory,
}) => {
  const selectedCount = dishes.filter((dish) =>
    selectedDishes.has(dish.id)
  ).length;

  return (
    <div className="dish-list">
      <div className="category-header">
        <h2 className="category-title">
          {currentCategory.charAt(0) + currentCategory.slice(1).toLowerCase()}
        </h2>
        <p className="selection-count">
          {selectedCount} {selectedCount === 1 ? "dish" : "dishes"} selected
        </p>
      </div>

      {dishes.length === 0 ? (
        <div className="no-dishes">
          <div className="no-dishes-icon">
            <CiSearch />
          </div>
          <p className="no-dishes-text">No dishes found</p>
          <p className="no-dishes-subtext">
            Try adjusting your search or filters
          </p>
        </div>
      ) : (
        <div className="dishes-grid">
          {dishes.map((dish) => (
            <DishCard
              key={dish.id}
              dish={dish}
              isSelected={selectedDishes.has(dish.id)}
              onToggleSelect={onToggleSelect}
              onViewIngredients={onViewIngredients}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DishList;
