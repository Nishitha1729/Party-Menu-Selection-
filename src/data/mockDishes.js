// src/data/mockDishes.js

export const mockDishes = [
  // Starters
  {
    id: 101,
    name: "Tandoori Chicken",
    mealType: "STARTER",
    type: "NON_VEG",
    description:
      "Tandoori chicken is a dish made from chicken marinated in yogurt and spices.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop",
    category: { id: 1, name: "North Indian" },
    dishType: "APPETIZER",
  },
  {
    id: 102,
    name: "Paneer Tikka",
    mealType: "STARTER",
    type: "VEG",
    description:
      "Grilled paneer cubes marinated with yogurt and spices served hot.",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=200&fit=crop",
    category: { id: 1, name: "North Indian" },
    dishType: "APPETIZER",
  },
  {
    id: 103,
    name: "Fish Tikka",
    mealType: "STARTER",
    type: "NON_VEG",
    description:
      "Fresh fish marinated with herbs and spices, grilled to perfection.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop",
    category: { id: 1, name: "North Indian" },
    dishType: "APPETIZER",
  },
  {
    id: 104,
    name: "Aloo Tikki",
    mealType: "STARTER",
    type: "VEG",
    description: "Crispy potato patties served with mint and tamarind chutney.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop",
    category: { id: 1, name: "North Indian" },
    dishType: "APPETIZER",
  },

  // Main Course
  {
    id: 1,
    name: "Tandoori Chicken",
    mealType: "MAIN COURSE",
    type: "NON_VEG",
    description:
      "Tandoori chicken is a dish made from chicken marinated shgdhsdhgdshd is a dish made from chicken marinated",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop",
    category: { id: 1, name: "North Indian" },
    dishType: "CURRY",
  },
  {
    id: 2,
    name: "Dak Makhni",
    mealType: "MAIN COURSE",
    type: "VEG",
    description:
      "Dal makhani is an Indian dish originating from the Punjab region.",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop",
    category: { id: 1, name: "North Indian" },
    dishType: "CURRY",
  },
  {
    id: 3,
    name: "Cabbage",
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Cabbage, comprising several cultivars of Brassica oleracea.",
    image:
      "https://images.unsplash.com/photo-1594282474691-ba8c1739044b?w=300&h=200&fit=crop",
    category: { id: 1, name: "North Indian" },
    dishType: "CURRY",
  },
  {
    id: 4,
    name: "Butter Chicken",
    mealType: "MAIN COURSE",
    type: "NON_VEG",
    description:
      "Tender chicken in rich tomato and butter gravy with aromatic spices.",
    image:
      "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=300&h=200&fit=crop",
    category: { id: 1, name: "North Indian" },
    dishType: "CURRY",
  },
  {
    id: 5,
    name: "Palak Paneer",
    mealType: "MAIN COURSE",
    type: "VEG",
    description:
      "Fresh cottage cheese in creamy spinach gravy with aromatic spices.",
    image:
      "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?w=300&h=200&fit=crop",
    category: { id: 1, name: "North Indian" },
    dishType: "CURRY",
  },
  {
    id: 6,
    name: "Chicken Biryani",
    mealType: "MAIN COURSE",
    type: "NON_VEG",
    description:
      "Fragrant basmati rice with tender chicken pieces and traditional spices.",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop",
    category: { id: 1, name: "North Indian" },
    dishType: "RICE",
  },

  // Desserts
  {
    id: 201,
    name: "Gulab Jamun",
    mealType: "DESSERT",
    type: "VEG",
    description: "Sweet milk dumplings soaked in sugar syrup with cardamom.",
    image:
      "https://images.unsplash.com/photo-1571167726963-75bfd6ce7206?w=300&h=200&fit=crop",
    category: { id: 2, name: "Indian Sweets" },
    dishType: "DESSERT",
  },
  {
    id: 202,
    name: "Rasgulla",
    mealType: "DESSERT",
    type: "VEG",
    description: "Soft cottage cheese balls in sweet sugar syrup.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
    category: { id: 2, name: "Indian Sweets" },
    dishType: "DESSERT",
  },
  {
    id: 203,
    name: "Kheer",
    mealType: "DESSERT",
    type: "VEG",
    description: "Creamy rice pudding garnished with nuts and cardamom.",
    image:
      "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop",
    category: { id: 2, name: "Indian Sweets" },
    dishType: "DESSERT",
  },
  {
    id: 204,
    name: "Kulfi",
    mealType: "DESSERT",
    type: "VEG",
    description: "Traditional Indian ice cream with pistachios and cardamom.",
    image:
      "https://images.unsplash.com/photo-1571167726963-75bfd6ce7206?w=300&h=200&fit=crop",
    category: { id: 2, name: "Indian Sweets" },
    dishType: "DESSERT",
  },

  // Sides
  {
    id: 301,
    name: "Naan",
    mealType: "SIDES",
    type: "VEG",
    description: "Soft leavened bread baked in traditional tandoor.",
    image:
      "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=300&h=200&fit=crop",
    category: { id: 3, name: "Bread" },
    dishType: "BREAD",
  },
  {
    id: 302,
    name: "Roti",
    mealType: "SIDES",
    type: "VEG",
    description: "Whole wheat flatbread cooked on tawa.",
    image:
      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=300&h=200&fit=crop",
    category: { id: 3, name: "Bread" },
    dishType: "BREAD",
  },
  {
    id: 303,
    name: "Jeera Rice",
    mealType: "SIDES",
    type: "VEG",
    description: "Fragrant basmati rice tempered with cumin seeds.",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop",
    category: { id: 3, name: "Rice" },
    dishType: "RICE",
  },
  {
    id: 304,
    name: "Raita",
    mealType: "SIDES",
    type: "VEG",
    description: "Fresh yogurt with cucumber, mint and mild spices.",
    image:
      "https://images.unsplash.com/photo-1565299585323-38174c4a6c29?w=300&h=200&fit=crop",
    category: { id: 3, name: "Accompaniment" },
    dishType: "SIDE",
  },
];

export const mockIngredients = {
  1: [
    { name: "Chicken", quantity: "1 Pc" },
    { name: "Yogurt", quantity: "1 cup" },
    { name: "Ginger-Garlic Paste", quantity: "2 tbsp" },
    { name: "Red Chili Powder", quantity: "1 tsp" },
    { name: "Turmeric", quantity: "1/2 tsp" },
    { name: "Garam Masala", quantity: "1 tsp" },
    { name: "Lemon Juice", quantity: "2 tbsp" },
    { name: "Oil", quantity: "2 tbsp" },
  ],
  2: [
    { name: "Black Lentils", quantity: "500g" },
    { name: "Butter", quantity: "100g" },
    { name: "Heavy Cream", quantity: "150ml" },
    { name: "Onions", quantity: "2 medium" },
    { name: "Tomatoes", quantity: "3 medium" },
    { name: "Ginger-Garlic Paste", quantity: "2 tbsp" },
    { name: "Spices", quantity: "mixed" },
  ],
  101: [
    { name: "Cauliflower", quantity: "01 Pc" },
    { name: "Mustard oil", quantity: "1/2 ltrs" },
    { name: "Cauliflower", quantity: "01 Pc" },
    { name: "Tomato", quantity: "01 Pc" },
  ],
  default: [
    { name: "Main Ingredient", quantity: "500g" },
    { name: "Onions", quantity: "2 medium" },
    { name: "Ginger-Garlic Paste", quantity: "1 tbsp" },
    { name: "Spices", quantity: "as needed" },
    { name: "Oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" },
  ],
};
