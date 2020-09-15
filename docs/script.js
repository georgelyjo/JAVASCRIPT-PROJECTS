var count = 1;
function calc(val) {
    document.getElementById("screen").value += val;
    
}
function clearscr() {
    document.getElementById("screen").value = "";
}
function calcequ() {
 var text;
 text = document.getElementById("screen").value;
 try {
    document.getElementById("screen").value =eval(text); 
} catch (e) {
    if (e instanceof SyntaxError) {
        alert(e.message);
    }
}

}
