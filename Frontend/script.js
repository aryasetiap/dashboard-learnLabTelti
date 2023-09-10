fetch("http://localhost:3000/")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("nama").innerHTML = data.nama;
    document.getElementById("npm").innerHTML = data.npm;
  })
  .catch((error) => console.error("Ada kesalahan:", error));
