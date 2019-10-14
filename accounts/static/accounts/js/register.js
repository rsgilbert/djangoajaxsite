const POST_URL = "http://localhost:8000/register"


// jquery, validation clientside
$().ready(function() {
	const form = $('#registrationForm')
	let isSuccess = false
	form.submit(function(e) {
		e.preventDefault()
	})
	
	var validator = form.validate({
		rules: {
			email: {
				required: true,
				email: true
			},
			gender: {
				required: true,
			},
			password: {
				required: true,
				minlength: 6,
			}, confirm_password: {
				required: true,
				equalTo: '#password'
			}
		},
		messages: {
			email: {
				required: "Please enter your email address",
				email: "Please enter a valid email"
			}, 
			gender: {
				required: "Please select your gender",
			},
			password: {
				required: "Enter your password",
				minlength: "Your password is too short, use atleast 6 characters"
			}, 
			confirm_password: {
				required: "You must confirm your password",
				equalTo: "Your passwords do not match"
			}
		},
		invalidHandler: function(event, validator) {
			var errors = validator.errorList
			if(errors) {
				error1 = errors[0]
				swal({
					text: error1.message,
					icon: 'error'
				})
			}
		},
		submitHandler: function() {
			const formData = form.serialize()
			request = $.ajax({
				url: POST_URL,
				type: 'post',
				data: formData,
			}).done(function(response) {
				if(response.exists) {
					swal({
						text: "Email already exists! Please use a different email",
						icon: "error",
					});
				} else {
					swal({
						title: "Good job!",
						text: "You have successfully registered!",
						icon: "success",
					});
					validator.resetForm()
					$('form').get(0).reset()
				}
				
			})

		}
	})
})
