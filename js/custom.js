// this is my form validation code
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // the following targets the correct form, I used a class to get us there
    var forms = document.getElementsByClassName('validation-required');
      // Loop over them and prevent submission, will display messages under required fields if not validated
    var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
        }, false);
    });
    }, false);
})();


