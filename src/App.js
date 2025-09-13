// src/App.js
import React, { useState, useMemo } from "react";
import DishList from "./components/DishList";
import Filters from "./components/Filters";
import IngredientModal from "./components/IngredientModal";
import { mockDishes } from "./data/mockDishes";
import "./App.css";

const App = () => {
  // State management
  const [selectedCategory, setSelectedCategory] = useState("STARTER");
  const [searchQuery, setSearchQuery] = useState("");
  const [vegFilter, setVegFilter] = useState(false);
  const [nonVegFilter, setNonVegFilter] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState(new Set());
  const [ingredientModalDish, setIngredientModalDish] = useState(null);

  // Categories configuration
  const categories = [
    { key: "STARTER", label: "Starter" },
    { key: "MAIN COURSE", label: "Main Course" },
    { key: "DESSERT", label: "Dessert" },
    { key: "SIDES", label: "Sides" },
  ];

  // Filter dishes based on current filters
  const filteredDishes = useMemo(() => {
    return mockDishes.filter((dish) => {
      // Category filter
      if (dish.mealType !== selectedCategory) return false;

      // Search filter (case-insensitive)
      if (
        searchQuery &&
        !dish.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Veg/Non-veg filter
      if (vegFilter && nonVegFilter) {
        // Both selected, show all
        return true;
      } else if (vegFilter) {
        return dish.type === "VEG";
      } else if (nonVegFilter) {
        return dish.type === "NON_VEG";
      }

      // No filter selected, show all
      return true;
    });
  }, [selectedCategory, searchQuery, vegFilter, nonVegFilter]);

  // Calculate selected count by category
  const selectedCountByCategory = useMemo(() => {
    const counts = {};
    categories.forEach((cat) => {
      counts[cat.key] = mockDishes.filter(
        (dish) => dish.mealType === cat.key && selectedDishes.has(dish.id)
      ).length;
    });
    return counts;
  }, [selectedDishes, categories]);

  // Total selected dishes count
  const totalSelectedCount = selectedDishes.size;

  // Event handlers
  const handleToggleSelect = (dishId) => {
    setSelectedDishes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(dishId)) {
        newSet.delete(dishId);
      } else {
        newSet.add(dishId);
      }
      return newSet;
    });
  };

  const handleViewIngredients = (dish) => {
    setIngredientModalDish(dish);
  };

  const handleCloseModal = () => {
    setIngredientModalDish(null);
  };

  return (
    <div className="app">
      {/* Header */}
      <div className="app-header">
        <div className="header-content">
          <div className="title-section">
            <button className="back-btn">←</button>
            <h1 className="app-title">Select dishes for your party</h1>
          </div>

          {/* Search and Filters */}
          <Filters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            vegFilter={vegFilter}
            nonVegFilter={nonVegFilter}
            onVegFilterChange={setVegFilter}
            onNonVegFilterChange={setNonVegFilter}
          />

          {/* Category Tabs */}
          <div className="category-tabs">
            {categories.map((category) => {
              const count = selectedCountByCategory[category.key];
              return (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`category-tab ${
                    selectedCategory === category.key ? "active" : ""
                  }`}
                >
                  {category.label} {count > 0 && `(${count})`}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="app-content">
        <DishList
          dishes={filteredDishes}
          selectedDishes={selectedDishes}
          onToggleSelect={handleToggleSelect}
          onViewIngredients={handleViewIngredients}
          currentCategory={selectedCategory}
        />
      </div>

      {/* Bottom Summary */}
      <div className="bottom-summary">
        <div className="summary-content">
          <div className="total-count">
            <span className="cart-icon">🛒</span>
            <span className="count-text">
              Total Selected: {totalSelectedCount}
            </span>
          </div>

          <button className="continue-btn">Continue</button>
        </div>
      </div>

      {/* Ingredient Modal */}
      <IngredientModal
        dish={ingredientModalDish}
        isOpen={!!ingredientModalDish}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default App;
