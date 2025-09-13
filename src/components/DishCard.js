// src/components/DishCard.js
import React from "react";

const DishCard = ({ dish, isSelected, onToggleSelect, onViewIngredients }) => {
  return (
    <div className="dish-card">
      <div className="dish-image">
        {dish.image ? (
          <img src={dish.image} alt={dish.name} />
        ) : (
          <div className="placeholder-image">
            <span className="food-icon">🍽️</span>
          </div>
        )}
        <div className={`veg-indicator ${dish.type.toLowerCase()}`}>
          {dish.type === "VEG" ? (
            <div className="veg-symbol">🟢</div>
          ) : (
            <div className="non-veg-symbol">🔴</div>
          )}
        </div>
      </div>

      <div className="dish-content">
        <h3 className="dish-name">{dish.name}</h3>
        <p className="dish-description">{dish.description}</p>
        <p className="dish-category">{dish.category.name}</p>

        <div className="dish-actions">
          <button
            onClick={() => onToggleSelect(dish.id)}
            className={`action-btn ${isSelected ? "remove-btn" : "add-btn"}`}
          >
            {isSelected ? "Remove" : "Add"}
          </button>

          <button
            onClick={() => onViewIngredients(dish)}
            className="ingredient-btn"
          >
            Ingredient
          </button>
        </div>
      </div>

      {isSelected && <div className="selected-indicator">✓</div>}
    </div>
  );
};

export default DishCard;
