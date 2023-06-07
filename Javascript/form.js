document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const contactNo = document.getElementById("contact-number").value;

    const errorMessage = document.getElementById("error-message");

    if (!name || !email || !message || !contactNo) {
      errorMessage.textContent = "Please fill in all the required fields.";
      return;
    }

    // Clear the error message if all fields are filled
    errorMessage.textContent = "";

    console.group("========= Form Submission =========");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log(`Contact Number: ${contactNo}`);
    console.groupEnd();

    // Reset the form fields
    form.reset();
  }
});
