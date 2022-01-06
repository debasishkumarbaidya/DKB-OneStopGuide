//Get the button
var button=document.getElementById("scrlbck");

//When the user scrolls down 700px from top of the document, show the button
window.onscroll = function(){
    
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700){
        button.style.display = "block";
    }
    else{
        button.style.display = "none";
    }
}


//When the user clicks on top button, scroll to the top of the bottom
function topFunction(){
    document.body.scrollTop=0;//For Safari
    document.documentElement.scrollTop=0;//for chrome ,opera,firefox;
}