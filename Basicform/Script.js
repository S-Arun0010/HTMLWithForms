var Name = document.getElementById("Invalid-name");
var Type = document.getElementById("Invalid-type");
var Episode = document.getElementById("Invalid-number");
var date= document.getElementById("Invalid-date");
var Rate = document.getElementById("Invalid-Ratings");

const  validatename = () =>
{
     var n = document.getElementById("name").value;
     if(n.length == 0 )
     {
        Name.innerHTML="Name is Mandatory";
        return false;
     }
     if( !((n>='a' && n<='z') || (n>='A' && n<='Z')))
     {
        Name.innerHTML="Enter Name Correctly";
        return false;
     }
     Name.innerHTML="valid";
     return true;

}
const  validatetype = () =>
{
     var t = document.getElementById("type").value;
     if(t.length == 0 )
     {
        Type.innerHTML="Type is Mandatory";
        return false;
     }
     if( !((t>='a' && t<='z') || (t>='A' && t<='Z')))
     {
        Type.innerHTML="Enter Type Correctly";
        return false;
     }
     Type.innerHTML="valid";
     return true;
}
const  validateepisode = () =>
{
     var epi = document.getElementById("episode").value;
     if(epi.length == 0 )
     {
        Episode.innerHTML="This field is Mandatory";
        return false;
     }
     Episode.innerHTML="valid";
     return true;
}
const  validatedate = () =>
{
     var d = document.getElementById("date").value;
     if(d.length == 0 )
     {
        date.innerHTML="Date is Mandatory";
        return false;
     }
     date.innerHTML="valid";
     return true;
}
const  validaterating = () =>
{
     var r = document.getElementById("rate").value;
     if(r.length == 0 )
     {
        Rate.innerHTML="Rating is Mandatory";
        return false;
     }
     if( !(r>=1 && r<=10) )
     {
        Rate.innerHTML="Enter rating out of 10";
        return false;
     }
     Rate.innerHTML="valid";
     return true;
}

const  validate = () =>
{
       if(!validatename() || !validatetype() || !validateepisode() || !validatedate() || !validaterating())
       {
        document.getElementById("Invalid-data").innerHTML = "Enter the Details Correctly";
        return false;
       }
       document.getElementById("Invalid-data").innerHTML = "Details Entered successfully";
       return true;
}

document.getElementById("form").addEventListener("click", function(event){
   event.preventDefault()
 });

const reload = () =>
{
   location.reload();
}
