// Add your code here
// Function to submit data to the server
function submitData(name, email) {
    // Define the URL of the server
    const url = "http://localhost:3000/users";
  
    // Create an object containing the data to be sent
    const formData = {
      name: name,
      email: email,
    };
  
    // Configure the fetch request
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    };
  
    // Send the POST request using fetch
    return fetch(url, configurationObject)
      .then((response) => {
        if (!response.ok) {
          // If the response status is not okay, throw an error
          throw new Error("Network response was not ok");
        }
        // Parse the response as JSON
        return response.json();
      })
      .then((data) => {
        // Handle the successful response and update the DOM
        const userId = data.id;
        document.body.innerHTML = `User ID: ${userId}`;
      })
      .catch((error) => {
        // Handle errors and update the DOM with an error message
        console.error("Error:", error.message);
        document.body.innerHTML = `Error: ${error.message}`;
      });
  }
  
  // Example usage:
  submitData("John Doe", "johndoe@example.com");
  