function vfun()
{
    var uname=document.forms["form"]["uname"].value;
    var upw=document.forms["form"]["upw"].value;

    if(uname=="null"||  uname=="")
    {
        document.getElementById("error").innerHTML="enter the username";
        return false;
    }
    if(upw=="null"||  upw=="")
    {
        document.getElementById("error").innerHTML="enter the password";
        return false;
    }
    if(uname != "" && upw !="")
    {
        alert("LOGIN SUCCESSFULLY")
    }

}

function vfun2()
{
    var uname=document.forms["form2"]["uname"].value;
    var email=document.forms["form2"]["email"].value;
    var upw=document.forms["form2"]["upw"].value;
    var upw2=document.forms["form2"]["upw2"].value;

    if(uname=="null"||  uname=="")
    {
        document.getElementById("error").innerHTML="enter the username";
        return false;
    }
    if(email=="null"||  email=="")
    {
        document.getElementById("error").innerHTML="enter the email";
        return false;
    }
    if(upw=="null"||  upw=="")
    {
        document.getElementById("error").innerHTML="enter the password";
        return false;
    }
    if(upw2=="null"||  upw2=="")
    {
        document.getElementById("error").innerHTML="enter confirm password";
        return false;
    }
    if(upw != upw2)
    {
        document.getElementById("error").innerHTML="password Doesn't Match";
        return false;
    }
    if(uname != "" && upw !="" && upw2 !="" && email!="")
    {
        alert("REGISTER SUCCESSFULLY")
    }

}