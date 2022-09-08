function ShowHiddiv(text) {
    if (document.getElementById("show").style.display="none") {
        document.getElementById("show").style.display="block"
        document.getElementById("lower-div").style.display="block"
        document.getElementById("lower-div").innerHTML=text;

    }
    else if (document.getElementById("lower-div").innerHTML!=text) {
        document.getElementById("lower-div").innerHTML=text
    }
    

    
}