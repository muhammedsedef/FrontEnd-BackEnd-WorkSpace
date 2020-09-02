/*showdisplay function show the clicked item inside the display */

function showDisplay(element) {
    var display=document.getElementById("disp");
    display.value+=element.value;
    
}

function cleanDisplay(){
    var display = document.getElementById("disp");
    display.value="";
}

function calculate() {
    var display = document.getElementById("disp");
        if(display.value.length !==0){
        display.value = eval(display.value);
    }
    
}

function del(){
    var display = document.getElementById("disp");
    display.value = display.value.substring(0,display.value.length-1);

}

function checkKey(event){
    var x = event.charCode || event.keyCode;
    if (x==13){ //When the pressing 'enter' button on the keyboard this event triggered.
        event.preventDefault(); // This line of code help us to block the default property of the element where the event occurs
        calculate();
    }
}



