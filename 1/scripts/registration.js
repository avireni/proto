$(document).ready(function(){
	$('#registerForm').submit(function(event) {
		event.preventDefault();
		// validations here
		$('#message').html('');
		var firstname = $("#firstname").val().trim();
		var lastname = $("#lastname").val().trim();
		var username = $("#username").val().trim();
		var email = $("#email").val().trim();
		var password = $("#password").val();
		var confPassword = $("#confrmpassword").val();
		var namePattern = /^[a-zA-Z]+$/; // ^ start of string, $end of string https://www.regex101.com/
		var emailPattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
		console.log(firstname + " from before if");
		console.log(username);
		if((firstname.length == 0)||(!(firstname.match(namePattern)))) {
			$("#message").html("Please enter your firstname. Only characters are allowed");
			$("#firstname").focus();
			return false;
		}
		else if((lastname.length == 0)||(!(lastname.match(namePattern)))) {
			$("#message").html("Please enter your lastname. Only characters are allowed");
			$("#lastname").focus();
			return false;
		} 
		else if((username.length == 0)||(!(username.length >= 8 && username.length <= 12))) {
			$("#message").html("Please enter a username between 8 - 12 characters");
			$("#username").focus();
			return false;
		}
		else if((email.length == 0)||(!(email.match(emailPattern)))) {
			$('#message').html("Please enter a valid email");
			return false;
		}
		else if(password.length == 0) {
			$("#message").html("Please enter a password");
			return false;
		}
		else if((confrmpassword.length == 0) || (password !== confPassword)) {
			$("#message").html("Password and confirm password should be the same");
			return false;
		}
		// ajax call
		$.ajax ({
			type: 'POST',
			url: 'registration.php',
			data: $(this).serialize(),
			dataType: 'json',
			success: function (data) {
					console.log(data);
					if (data.msg === "happened"){
						$('#message').html("Registration success");
					}
	                else {
	                    $("#message").html("Registration failed.");
	                }
				},
	               error: function(data){
	              	$("#message").html("your ajax call failed."); 
	               }
		});
	});
});