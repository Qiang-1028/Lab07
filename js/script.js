window.addEventListener('load', init);
function init(){
document.getElementById("entrybutton").addEventListener("click", myfunction);
	function myfunction() {
		var message = document.getElementById("entryinput").value;
		alert("Qiang Bao: " + message);
		document.getElementById("textoutput").innerHTML= message; 
}
};
