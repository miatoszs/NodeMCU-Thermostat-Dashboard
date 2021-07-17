//hőfok állítás
var slider = document.getElementById("slider");
var settemp = document.getElementById("setTemp");
settemp.innerHTML = slider.value;
slider.oninput = function() {
  slider.value = this.value;
  settemp.innerHTML = this.value;
}
$.ajaxSetup({timeout:1000});
function temprit(pos) {
  //$.get("http://nodemcu2/setRequiredTemperature?T=" + pos);
  {Connection: close};
}

//aktuális hőfok lekérdezés
setInterval(function ( ) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

    }
  };
  xhttp.open("GET", "http://nodemcu2.home.lan/ds18b20", true);
  xhttp.send();
  xhttp.onreadystatechange = (e) => {
    let str = xhttp.responseText
    document.getElementById("tempreature").innerHTML = str.slice(12);

}

}, 1000)
