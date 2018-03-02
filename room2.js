window.onload = function(){
    var ffclock = document.getElementById("ffclock");
    var fftv = document.getElementById("fftv");
    var ffmoney = document.getElementById("ffmoney");
    var ffanimal = document.getElementById("ffanimal");
    var intro2 = document.getElementById("intro2");
    var luckym = document.getElementById("luckym");
    var luckymopen = document.getElementById("luckymopen");
    var clock = document.getElementById("clock");
    var painting = document.getElementById("painting");
    var tv = document.getElementById("tv");
    var orange1 = document.getElementById("orange1");
    var orange2 = document.getElementById("orange2");
    var orange3 = document.getElementById("orange3");
    var orange4 = document.getElementById("orange4");
    var orangepeal = document.getElementById("orangepeal");
    var orangebonus = document.getElementById("orangebonus");
    var num1;
    var num2;
    var num3;
    var num4;
    var num5;
    var result;
    
    
    intro2.addEventListener("click", function(){
        intro2.style.visibility = "hidden";
    });
    
    luckym.addEventListener("click", function(){
        ffmoney.style.visibility = "visible";
        luckym.style.visibility = "hidden";
        luckymopen.style.visibility = "visible";
    });
    ffmoney.addEventListener("click", function(){
        ffmoney.style.visibility = "hidden";
    });
    
    clock.addEventListener("click", function(){
        ffclock.style.visibility = "visible";
    });
    ffclock.addEventListener("click", function(){
        ffclock.style.visibility = "hidden";
    });
    
    painting.addEventListener("click", function(){
        ffanimal.style.visibility = "visible";
    });
    ffanimal.addEventListener("click", function(){
        ffanimal.style.visibility = "hidden";
    });
    
    tv.addEventListener("click", function(){
        fftv.style.visibility = "visible";
        
        var myframe = document.createElement("iframe");
        myframe.style.height = "30vh";
        myframe.style.width = "30vw";
        myframe.style.border = "none"
        myframe.style.position = "absolute";
        myframe.style.left = "37%";
        myframe.style.top = "30%";
        myframe.src = "https://www.youtube.com/embed/Xn02Kie0J6o?autoplay=1&controls=0";
        document.body.appendChild(myframe);
    });
    fftv.addEventListener("click", function(){
        fftv.style.visibility = "hidden";
    });
    
    orange1.addEventListener("click", function(){
        orange1.style.visibility = "hidden";
        num1 = 1;
        
        result = num1 + num2 + num3 + num4 + num5;
    if(result == 15){
        orangebonus.style.visibility = "visible";
    };
    });
    orange2.addEventListener("click", function(){
        orange2.style.visibility = "hidden";
        num2 = 2;
        
        result = num1 + num2 + num3 + num4 + num5;
    if(result == 15){
        orangebonus.style.visibility = "visible";
    };
    });
    orange3.addEventListener("click", function(){
        orange3.style.visibility = "hidden";
        num3 = 3;
        
        result = num1 + num2 + num3 + num4 + num5;
    if(result == 15){
        orangebonus.style.visibility = "visible";
    };
    });
    orange4.addEventListener("click", function(){
        orange4.style.visibility = "hidden";
        num4 = 4;
        
        result = num1 + num2 + num3 + num4 + num5;
    if(result == 15){
        orangebonus.style.visibility = "visible";
    };
    });
    orangepeal.addEventListener("click", function(){
        orangepeal.style.visibility = "hidden";
        num5 = 5;
        
        result = num1 + num2 + num3 + num4 + num5;
    if(result == 15){
        orangebonus.style.visibility = "visible";
    };
    });
   
    orangebonus.addEventListener("click", function(){
        orangebonus.style.visibility = "hidden";
    })

    
    
    //clock js, ref: https://codepen.io/kirbyedy/pen/Nxxezm
    function moveClock() {
    with(new Date()) {
        var h = 30 * (getHours() % 12 + getMinutes() / 60); // 30 degrees hour
        var m = 6 * getMinutes(); // 6 degrees every minute
        var s = 6 * getSeconds(); // 6 degrees every second
        document.getElementById('second').style.transform = "rotate(" + s + "deg)";
        document.getElementById('minute').style.transform = "rotate(" + m + "deg)";
        document.getElementById('hour').style.transform = "rotate(" + h + "deg)";
        
        //document.getElementById('second').style.cssText = "-webkit-transform:rotate(" + s + "deg);"; // setting the rotate CSS attribute to those degree values
        //document.getElementById('minute').style.cssText = "-webkit-transform:rotate(" + m + "deg);";
        //document.getElementById('hour').style.cssText = "-webkit-transform:rotate(" + h + "deg);";

        setTimeout(moveClock, 1000); // calling the function every second
    }
}

window.onload = moveClock; // making sure the function starts on load of webpage
}