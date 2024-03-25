function validate(){
	var user=document.getElementById('uname').value;
	var Password=document.getElementById('Password').value;
	var Password1=document.getElementById('Password1').value;
	var number=document.getElementById('number').value;
	var email=document.getElementById('email').value;

    if(user==null || user==""){
		document.getElementById('aname').innerHTML ="Please fill the username feild";
		return false;
    }

    if((user.length<=2) || (user.length>=30)){
		// alert("enter d username");
		document.getElementById('aname').innerHTML ="Username lenght must be between 3 and 30 ";
		return false;
    }

    if(!isNaN(user)){
		// alert("enter d username");
		document.getElementById('aname').innerHTML ="only character is allowed ";
		return false;
    }

    if(Password==null || Password==""){
		// alert("enter d username");
		document.getElementById('pass').innerHTML ="Please fill the Password feild";
		return false;
	}

    if(Password.length<=5 || Password.length>=20){
		// alert("enter d username");
		document.getElementById('pass').innerHTML ="Password lenght must be between 5 and 20";
		return false;
	}

    if(Password!=Password1){
		// alert("enter d username");
		document.getElementById('pass1').innerHTML ="Password are not matching please enter correct password";
		return false;
	}

    if(Password1==null || Password1==""){
		// alert("enter d username");
		document.getElementById('pass1').innerHTML ="Please fill the Confirm Password feild";
		return false;
	}

    if(number==null || number==""){
		// alert("enter d username");
		document.getElementById('mobnumber').innerHTML ="Please fill the mobilenumber feild";
		return false;
	}

    if(isNaN(number)){
		// alert("enter d username");
		document.getElementById('mobnumber').innerHTML ="mobile number should be in digits";
		return false;
	}

    if(number.length!=10){
		// alert("enter d username");
		document.getElementById('mobnumber').innerHTML ="mobile number should be in 10 digits not more or less than 10.";
		return false;
	}

    if(email==null || email==""){
		// alert("enter d username");
		document.getElementById('usremail').innerHTML ="Please fill the email feild";
		return false;
	}

    if(email.indexOf('@') <= 0){
        // alert("enter d username");
        document.getElementById('usremail').innerHTML ="@ indvalid position";
        return false;

    }

    if((email.charAt(email.length-4)!=".") && (email.charAt(email.length-3)!=".")){
        document.getElementById('usremail').innerHTML =" . invalid position";
        return false;
      }
     
    return true;
    }

        