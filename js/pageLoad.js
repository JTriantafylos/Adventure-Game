/* Class to handle loading of each page */

window.onload = function() {
	document.getElementById("messageBox").style.opacity = "1";
	
	var noteFound1 = sessionStorage.getItem("hasNote1");
	var noteFound2 = sessionStorage.getItem("hasNote2");
	var noteFound3 = sessionStorage.getItem("hasNote3");
	
	if (noteFound1 == "true")
	{
		document.getElementById("imgNotePiece1").style.visibility = "visible";	
	}
					
	if (noteFound2 == "true")
	{
		document.getElementById("imgNotePiece2").style.visibility = "visible";	
	}
		
	if (noteFound3 == "true")
	{
		document.getElementById("imgNotePiece3").style.visibility = "visible";	
	}
};

function findNote1() {
	sessionStorage.setItem('hasNote1', 'true');
}

function findNote2() {
	sessionStorage.setItem('hasNote2', 'true');
}

function findNote3() {
	sessionStorage.setItem('hasNote3', 'true');
}