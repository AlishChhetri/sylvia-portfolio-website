(function() {
    emailjs.init("TbUf0QSxa36evtJZG");
})();

function sendEmail(event) {
    event.preventDefault();

    var form = event.target;
    var formData = new FormData(form);

    emailjs.send("service_fpmkdel", "template_c57pano", {
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