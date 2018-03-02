window.onload = function(){
    var fish = document.getElementById("fish");
    var fffish = document.getElementById("fffish");
    var calendar = document.getElementById("calendar");
    var ffcalendar = document.getElementById("ffcalendar");
    var fu = document.getElementById("fu");
    var fffu = document.getElementById("fffu");
    var intro1 = document.getElementById("intro1");
    var dumplings = document.getElementById("dumplings");
    var ffdumpling = document.getElementById("ffdumpling");


    fish.addEventListener("click", function(){
        fffish.style.visibility = "visible";
    });
    fffish.addEventListener("click", function(){
        fffish.style.visibility = "hidden";
    });

    fu.addEventListener("click", function(){
        fffu.style.visibility = "visible";
    });
    fffu.addEventListener("click", function(){
        fffu.style.visibility = "hidden";
    });
    
    calendar.addEventListener("click", function(){
        ffcalendar.style.visibility = "visible";
    });
    ffcalendar.addEventListener("click", function(){
        ffcalendar.style.visibility = "hidden";
    });
    
    dumplings.addEventListener("click", function(){
        ffdumpling.style.visibility = "visible";
    })
    ffdumpling.addEventListener("click", function(){
        ffdumpling.style.visibility = "hidden";
    })
    
    intro1.addEventListener("click", function(){
        intro1.style.visibility = "hidden";
    })

}