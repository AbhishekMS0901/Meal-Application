const listItemsContainer = document.getElementById("fav_items_list"); // Get the reference to the HTML element with the id "fav_items_list" and store it in the variable 'listItemsContainer'.

//Function to display the meal Details.
const displayMealDetails = async () => 
    {
        const urlParams = new URLSearchParams(window.location.search); // Create a new URLSearchParams object by extracting and parsing the query parameters from the current window's URL.
        const mealId = urlParams.get("id"); // Retrieve the value of the "id" parameter from the URL's query parameters using the 'get' method.

        if (mealId) 
           {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`); // Use the 'fetch' function to asynchronously request data from the MealDB API for a specific meal ID.
            const data = await response.json(); // Parse the response body as JSON and assign the result to the 'data' variable.
            const meal = data.meals[0]; // Extract the first meal object from the 'meals' array within the parsed JSON data.

            // Create a list item
            const liItem = document.createElement("li"); // Create a new list item ('<li>') element using the 'document.createElement' method.
            liItem.classList.add("li_item_style"); // Add the CSS class "li_item_style" to the created list item ('<li>') element.
            liItem.textContent = meal.strMeal; // Set the text content of the created list item ('<li>') element to the name of the meal.

            // Append the list item to the container
            listItemsContainer.appendChild(liItem); // Append the created list item ('<li>') element to the 'listItemsContainer'.
            const removeButton = document.createElement("button"); // Create a new button element using the 'document.createElement' method.
            removeButton.classList.add("remove_button_style"); // Add the CSS class "remove_button_style" to the created button element.
            removeButton.textContent = "Remove from Favorites"; // Set the text content of the created button element to "Remove from Favorites".
            liItem.appendChild(removeButton); // Append the created button element to the list item ('<li>') element.
            removeButton.addEventListener("click", () =>
               {
                 listItemsContainer.removeChild(liItem);
               }); 
        

           } 
        else 
           {
        // Handle the case where there's no mealId parameter
           console.error("No meal ID provided");
           }
    };




// Call the displayMealDetails function when the Meal Detail Page loads
if (listItemsContainer) 
   {
    displayMealDetails();
   }
