
function submitData(name, email) {
  const formData = {
    name: name,
    email: email
  };

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      const idElement = document.createElement("div");
      idElement.textContent = object.id;
      document.body.appendChild(idElement);
    })
    .catch(function(error) {
      const errorElement = document.createElement("div");
      errorElement.textContent = error.message;
      document.body.appendChild(errorElement);
    });
}