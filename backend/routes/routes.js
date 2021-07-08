const express = require("express");
const router = express.Router();
const userCopy = require("../models/user");
const favoriteItem = require("../models/Favorite");
const recipe = require("../models/recipes");
const bcrypt = require("bcrypt");

router.post("/signup", async (request, response) => {

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)

    const signedUpUser = new userCopy({
        email:request.body.email,
        username:request.body.username,
        abilityLevel:request.body.abilityLevel,
        password:securePassword,
    })
    
    signedUpUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
});


router.post("/addfavorite", async (request, response) => {

    const favItem = new favoriteItem({
        recipeId:request.body.recipeId,
        userId:request.body.userid

    })
    
    favItem.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
});

router.post("/getfavorites", async (request, response) => {

    console.log("userid when getting favorites:"+request.body.userId)
    const favoriteItems = await favoriteItem.find({
        userId: request.body.userId
       
      });
      response.json(favoriteItems);
    
    
   
});


router.post("/addrecipe", async (request, response) => {

    const recipeItem = new recipe({
        userId:request.body.userId,
        name:request.body.recipeName,
        category :request.body.category, 
        cuisine :request.body.cuisine, 
         prepTimeHours:request.body.prepTimeHours, 
         prep :request.body.prepTimeMinutes, 
         cook:request.body.cookingTimeHours, 
         cook:request.body.cookingTimeMinutes, 
         ingredients:request.body.ingredients, 
         directions :request.body.directions, 
        servings :request.body.servings
        

    })
    
    recipeItem.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
});

router.post("/getrecipes", async (request, response) => {

    const recipes = await recipe.find({
        userId: request.body.userId
       
      });
      response.json(recipes);
    
    
   
});

router.post("/login", async (request, response) => {

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)

    console.log("password:"+securePassword)
    
    const findResult = await userCopy.find({
        email: request.body.email
       
      });
    console.log(findResult);
    if(findResult.length>0)
        response.json(findResult[0]);
        else
        response.json();
    // .then(data => {
    //     response.json(data)
    // })
    // .catch(error => {
    //     response.json(error)
    // })
});

module.exports = router;