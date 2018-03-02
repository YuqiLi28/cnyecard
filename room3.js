window.onload = function(){
    var intro3 = document.getElementById("intro3");
    var cat5 = document.getElementById("cat5");
    var cat6 = document.getElementById("cat6");
    var cat7 = document.getElementById("cat7");
    var ffny = document.getElementById("ffny");
    var fffireworks = document.getElementById("fffireworks");
    var fireworks = document.getElementById("fireworks");
    var firework1 = document.getElementById("firework1");
    var firework2 = document.getElementById("firework2");
    
    intro3.addEventListener("click", function(){
        intro3.style.visibility = "hidden";
    });
    cat5.addEventListener("click", function(){
       cat7.style.visibility = "visible"; 
       ffny.style.visibility = "visible";
    });
    cat6.addEventListener("click", function(){
       cat7.style.visibility = "visible"; 
       ffny.style.visibility = "visible";
    });
    
    ffny.addEventListener("click", function(){
        ffny.style.visibility = "hidden";
    });
    
    fireworks.addEventListener("click", function(){
        firework1.style.visibility = "visible";
        firework2.style.visibility = "visible";
        fffireworks.style.visibility = "visible";
    })
    fffireworks.addEventListener("click", function(){
        fffireworks.style.visibility = "hidden";
    })
    
 
}