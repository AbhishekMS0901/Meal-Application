const search_meals = document.getElementById("search_bar"); // Get the reference to the HTML element with the id "search_bar" and store it in the variable search_meals.
const suggestion_list = document.getElementById("search_results_list"); // Get the reference to the HTML element with the id "search_results_list" and store it in the variable suggestion_list.

//Function to get Details from the API
const meals_search = async (search_value) => 
    {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search_value}`); // Using the Fetch API to send a request to 'https://www.themealdb.com/api/json/v1/1/search.php?s='.
        const data = await response.json(); // Parsing the response data as JSON and assigning it to the variable 'data'.
        return data.meals; // Returning the 'meals' property from the parsed JSON data.
    };


// Function to render search results from API
const render_search_value = (meals) => 
    {
        suggestion_list.innerHTML = "";
        meals.forEach((meal) => 
        {
           const li = document.createElement("li"); // Creating a new list item (<li>) element. 
           const a = document.createElement("a"); // Creating a hyperlink (<a>) element for the meal name.
           const fav_a=document.createElement("a"); 
           const fav_button=document.createElement("button"); //Creating the new button to add Favourite meals. 
           fav_button.textContent="Add to My Favourite List"; //Add the textcontent to add Favourite meals button. 
           fav_button.classList.add("style_fav_button"); //Adding the CSS class "style_fav_button" to the 'fav_button' element.
           a.textContent = meal.strMeal; // Setting the text content of the anchor ('a') element to the name of the meal.
           a.href = `meals_Details.html?id=${meal.idMeal}`; // Use backticks for template literals
           fav_a.appendChild(fav_button); // Appending the 'fav_button' (button element) to the 'fav_a' (anchor element).
           fav_a.href=`my_favourite.html?id=${meal.idMeal}`;  // Setting the 'href' attribute of the anchor ('fav_a') element to a dynamically generated URL.
           li.appendChild(a); // Appending the anchor ('a') element to the list item ('li') element.
           li.appendChild(fav_a); // Appending the anchor ('fav_a') element, which contains the 'fav_button', to the list item ('li') element.
           suggestion_list.appendChild(li);  // Appending the list item ('li') element, which represents a meal entry, to the suggestion list ('suggestion_list').
       
        });
    };
    
search_meals.addEventListener("input", async () => 
    {
        const search_value = search_meals.value.trim(); // Get the trimmed value of the input field with the id "search_meals" and store it in the variable 'search_value'.
        if (search_value.length > 0)  // Check if the length of the cleaned-up search value is greater than 0.
            {
              // Asynchronously call the 'meals_search' function with the cleaned-up search value.
             // The 'await' keyword is used to wait for the function to complete and return a result.  
              const meals_list = await meals_search(search_value); // Asynchronously call the 'meals_search' function with the cleaned-up search value.
              render_search_value(meals_list); // Call the 'render_search_value' function and pass the 'meals_list' as an argument.
            } 

        else 
            {
               suggestion_list.innerHTML = ""; // Clearing the existing HTML content of the 'suggestion_list' element.
            }


    });


