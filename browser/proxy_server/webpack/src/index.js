const xhr = new XMLHttpRequest();
xhr.open("PUT", "/api/updateData", true);
xhr.onload = () => console.log(xhr.responseText);
xhr.send();
