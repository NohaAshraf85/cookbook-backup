const mongoose = require("mongoose");

const favorite = new mongoose.Schema({
    recipeId: {
        type: String,
    },
    userId: {
        type: String
    },
    // name: {
    //     type: String,
    //     required: true,
    //   },
    //   // url string for thumbnail image
    //   image: {
    //     type: String,
    //     default: "",
    //   },
    //   // Type of meal: Breakfast, Lunch, etc
    //   category: {
    //     type: String,
    //     default: "",
    //   },
    //   // Italian, Chinese, etc
    //   cuisine: {
    //     type: String,
    //     default: "",
    //   },
    //   // Time to prepare the recipe
    //   prep: {
    //     type: String,
    //     default: "",
    //   },
    //   // Time to cook the recipe
    //   cook: {
    //     type: String,
    //     default: "",
    //   },
    //   // Ingredients used in the recipe
    //   ingredients: [String],
    //   // Directions for the recipe
    //   directions: [String],
    //   // Serving Size
    //   servings: {
    //     type: Number,
    //   },
      // Current date when recipe was posted
      dateAdded: {
        type: Date,
        default: Date.now,
      }
})

module.exports = mongoose.model("favorite", favorite);