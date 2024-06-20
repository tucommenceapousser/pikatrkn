<script type='text/javascript'>
//<![CDATA[
// Anti Klik Kanan
var message="pas toucher ! T'as pas le droit";function clickIE4(){if(2==event.button)return alert(message),!1}function clickNS4(e){if((document.layers||document.getElementById&&!document.all)&&(2==e.which||3==e.which))return alert(message),!1}document.layers?(document.captureEvents(Event.MOUSEDOWN),document.onmousedown=clickNS4):document.all&&!document.getElementById&&(document.onmousedown=clickIE4),document.oncontextmenu=new Function("alert(message);return false");
//]]>
</script>

<body onLoad="LoadFunctions()">
<script language="Javascript">
var msg="TRHACKNON dont authorize the right click";
function rtclickcheck(keyp){
if(navigator.appName == "Netscape" && keyp.which == 3){
alert(msg);
return false;
if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2) {
alert(msg);
return false;
}
}
document.onmousedown=rtclickcheck
</script>
<script>
setInterval(function(){
     $(".berkedip").toggle();
},300);
</script>