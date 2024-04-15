const imageAlt3 = document.getElementById("imageAlt3");
const imageAlt4 = document.getElementById("imageAlt4");

// Set the initial state of the images
imageAlt3.style.display = "block";
imageAlt4.style.display = "none";

// Create a function to toggle the images
function toggleImagesAlt2() {
  if (imageAlt3.style.display === "block") {
    imageAlt3.style.display = "none";
    imageAlt4.style.display = "block";
  } else {
    imageAlt3.style.display = "block";
    imageAlt4.style.display = "none";
  }
}

// Call the toggleImages function every 5 seconds
setInterval(toggleImagesAlt2, 3000);
