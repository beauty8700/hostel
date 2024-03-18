let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
  };
  
  let objectDisplay = document.getElementById("objectDisplay");
  objectDisplay.innerHTML = `
    <h2>Person Object:</h2>
    <p>First Name: ${person.firstName}</p>
    <p>Last Name: ${person.lastName}</p>
    <p>Age: ${person.age}</p>
  `;