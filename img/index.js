$.validator.addMethod("letters", function(value, element) {
    return this.optional(element) || value == value.match(/^[a-z0-9A-Z0-9\s-#&()]*$/);
});

//for email only
$.validator.addMethod("emailtest", function(value, element) {
    return this.optional(element) || /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i.test(value);
});

$(document).ready(function(){
    $("#submit_form").validate({
       rules: {

                emailid: {
                    emailtest: true,
                    required: true,
                    email: true
                },
                
                 password: {
                    maxlength: 10,
                    minlength: 10,
                   required: true
                },
                 conformpassword: {
                    required: true,
                    equalTo: "#password"
                },
               
                
                test1:"required"
            },

            messages: {
                
                emailid: {
                    required: "email field is required",
                    email: "Please enter a valid email id",
                    emailtest: "Please enter a valid email address"
                },
                password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 10 characters long"
                },
                conformpassword: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 8 characters long",
                    equalTo: "Please enter the same password as above"
                },
                
            }
    });
});