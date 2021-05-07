function check1()
{
	var answer1 = document.getElementById("quest").value;
	
	if (answer1 == "Internetprobleme") {
		result1.textContent = "Schau, ob dein Router funktioniert.";
	} else if (answer1 == "") {
		result1.textContent = "Du musst rein schreiben. Dort oben."
	}
	
	else {
		result1.textContent = "Ich kann die Frage nicht beantworten.";
	}
}

//https://www.netlify.com/
//https://app.netlify.com/sites/stupefied-shirley-52873f/overview