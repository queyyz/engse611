document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value.trim();

    if (name && email && phone && message) {
        alert(`Thank you for reaching out! We will respond to your ${subject} message soon.`);
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill out all the required fields.");
    }
});
