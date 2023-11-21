// Function to display meal details on the Meal Detail Page
const displayMealDetails = async () => 
      {
         const urlParams = new URLSearchParams(window.location.search); // Create a new URLSearchParams object by extracting and parsing the query parameters from the current window's URL.
         console.log(urlParams);
         const mealId = urlParams.get("id"); // Retrieve the value of the "id" parameter from the URL's query parameters using the 'get' method.
         console.log(mealId);

        if (mealId) 
        {
           const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`); // Use the 'fetch' function to asynchronously request detailed information about a meal by its ID.
           const data = await response.json(); // Parse the response body as JSON and assign the result to the 'data' variable.
           const meal = data.meals[0]; // Extract the first meal object from the 'meals' array within the parsed JSON data.

           // Display meal details on the Meal Detail Page
           document.getElementById("meal_name").textContent = meal.strMeal; // Set the text content of the HTML element with the id "meal_name" to the name of the meal.
           document.getElementById("meal_image").src = meal.strMealThumb; // Set the 'src' attribute of the HTML element with the id "meal_image" to the value of 'meal.strMealThumb'.
           document.getElementById("meal_instructions").textContent = meal.strInstructions; // Set the text content of the HTML element with the id "meal_instructions" to the instructions for preparing the meal.
        } 
        else 
        {
        // Handle the case where there's no mealId parameter
        console.error("No meal ID provided");
        }
     };

// Call the displayMealDetails function when the Meal Detail Page loads
if (document.getElementById("meal_name")) {
    displayMealDetails();
}