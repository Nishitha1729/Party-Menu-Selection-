// src/components/IngredientModal.js
import React from "react";
import { mockIngredients } from "../data/mockDishes";

const IngredientModal = ({ dish, isOpen, onClose }) => {
  if (!isOpen || !dish) return null;

  const ingredients = mockIngredients[dish.id] || mockIngredients.default;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button onClick={onClose} className="back-button">
            ←
          </button>
          <h2 className="modal-title">Ingredient List</h2>
          <div className="header-spacer"></div>
        </div>

        <div className="modal-body">
          <div className="dish-info">
            <h3 className="dish-name">{dish.name}</h3>
            <p className="dish-description">{dish.description}</p>
          </div>

          <div className="ingredients-section">
            <h4 className="ingredients-title">👥 Ingredients (For 2 people)</h4>
            <div className="ingredients-list">
              {ingredients.map((ingredient, index) => (
                <div key={index} className="ingredient-item">
                  <span className="ingredient-name">{ingredient.name}</span>
                  <span className="ingredient-quantity">
                    {ingredient.quantity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientModal;
