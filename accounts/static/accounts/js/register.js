const form = document.getElementById('registrationForm')
const POST_URL = "http://127.0.0.1:8000/register"
const MSG = document.querySelector('#message')


// wait for response from django view and write message
let writeMessage = async () => {
    let formData = new FormData(form)
    let jsonMessage = await postForm(formData).catch((err) => console.error(err))
    if(jsonMessage.exists) {
        MSG.innerHTML = "The email address you provided already exists"
        console.log("success")
    }
} 

let postForm = data => fetch(POST_URL, {
    method: "POST",
    body: data
}).then(response => response.json())

// jquery, validation clientside
$().ready(function() {
    console.log('ready')
    $("#registrationForm").validate({
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

    // call ajax
    if($("#registrationForm").valid()) {
        console.log("valid")
        writeMessage()
    }
})