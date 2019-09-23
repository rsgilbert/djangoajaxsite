const POST_URL = "http://127.0.0.1:8000/register"
let emailParagraph = document.querySelector('.emailExists')

// jquery, validation clientside
$().ready(function() {
    const form = $('#registrationForm')
    form.validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6
            }, confirm_password: {
                required: true,
                equalTo: '#password'
            }
        },
        messages: {
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email"
            }, password: {
                required: "Enter your password",
                minlength: "Short password"
            }, confirm_password: {
                required: "Confirm password",
                equalTo: "Passwords do not match"
            }

        }
    })

    form.submit(function(event) {
         event.preventDefault()
         let $form = $(this)
         let serializedData = $form.serialize()
         request = $.ajax({
             url: POST_URL,
             type: 'post',
             data: serializedData
         }).done(function(response) {
                if(response.exists) {
                    emailParagraph.style.display = 'block'
                }
         })
    })
})