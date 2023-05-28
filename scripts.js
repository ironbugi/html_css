// A file with js
// Define a function to show an alert message
function showAlert() {
    // Get the input element by its id
    var input = document.getElementById("name");
    // Get the value of the input element
    var name = input.value;
    // Check if the name is not empty
    if (name) {
        // Show an alert message with the name
        alert("Hello, " + name + "!");
    } else {
        // Show an alert message with a default name
        alert("Hello, stranger!");
    }
}
