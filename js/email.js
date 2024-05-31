(function() {
    emailjs.init("C0UdyICffu0hhDRMn");
})();

function sendEmail(event) {
    event.preventDefault();

    var form = event.target;
    var formData = new FormData(form);

    emailjs.send("service_2g6wr06", "template_88fhvka", {
        from_name: formData.get("name"),
        from_email: formData.get("email"),
        message: formData.get("message")
    }).then(function(response) {
        alert("Message sent successfully!");
        form.reset();
    }, function(error) {
        alert("An error occurred. Please try again.");
    });
}