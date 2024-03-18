function checkName(){
    let x = document.getElementById("un").value;
    if(x.length == 0){
        alert("Please enter name");
        return false;
    }else{
        return true;
    }
}
function checkEmail() {
    let x = document.getElementById("emailAddress").value;
    let y = x.indexOf("@");
    if (y == -1) {
        alert("Email address must contain @")
    }

    let z = x.includes(".");
    if (!z) {
        alert("Email address must contain . ")
    }
}