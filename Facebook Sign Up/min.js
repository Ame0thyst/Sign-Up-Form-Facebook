//border: 1px solid red;
document.getElementById('logo').addEventListener('click', function () {
    // Using an if statement to check the class
    if(this.textContent === "facebook") {
      this.textContent = "Thulasi";
    } else {
      this.textContent = "facebook";
    }  
  });