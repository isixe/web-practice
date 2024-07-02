document.querySelector("#app").innerHTML = `
  <div>Please check the console for the API request</div>
`;

const xhr = new XMLHttpRequest();
xhr.open("PUT", "/api/updateData", true);
xhr.send();
