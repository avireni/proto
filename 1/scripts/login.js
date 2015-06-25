$(document).ready(function(){
	$("#userLogin").click(function(event) {
		window.location.href = "home.html";
		event.preventDefault();

		// validations here
		// if ($("#username").val()=== "") {
  //               $("#message").html("Please enter the User Name");
  //               return false;
  //               }
        
  //               if ($("#password").val()=== "") {
  //                       $("#message").html("Please enter the Password");
  //                       return false;
  //               }
        
		// ajax call
		$.ajax ({
			type: 'POST',
			url: 'login.php',
			data: $(this).serialize(),
			dataType: 'json',
			success: function (data) {
					console.log(data);
					if (data.msg === "happened"){
					   //$('#message').html("Success Login");
                                           window.location.href = "home.php";
					}
	                               else {
	                                       $("#message").html("Login failed. Provide correct login details");
	                               }
				},
                        error: function(data){
	              	$("#message").html("your ajax call failed."); 
	                }
		});
	});
});