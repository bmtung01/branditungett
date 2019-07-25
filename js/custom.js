// this is my form validation code
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // the following targets the correct form, I used a class to get us there
  var forms = document.getElementsByClassName('validation-required');

  // Collect inputs to clear on successful submit
  var inputs = document.getElementsByClassName('form-control');

    // Loop over them and prevent submission, will display messages under required fields if not validated
  var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        // Contact form submission error
        if (form.checkValidity() === false) {
            // The fields in the form are being checked for being filled dependent on format (text/email), if they are not filled it will loop
            form.classList.add('was-validated');
        }
        // Contact form submit is successful, if validation is true, it'll reset the input and restart the validation process
        else {
          // Show user an alert
          alert('Thanks for reaching out!');

          // Clear input fields
          for (var i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
          }
        }

        // Stop form from submitting
        event.preventDefault();
        event.stopPropagation();
      }, false);
  });
  }, false);
})();

