function button1() {
	document.getElementsByClassName("back")[0].style.display = 'block';
	document.getElementById('news1').style.opacity = '0.3';
	document.getElementById('news2').style.opacity = '0.3';
	document.getElementById('news3').style.opacity = '0.3';
	document.getElementById('description1').style.display = 'block';
}

function button2() {
	document.getElementsByClassName("back")[0].style.display = 'block';
	document.getElementById('news1').style.opacity = '0.3';
	document.getElementById('news2').style.opacity = '0.3';
	document.getElementById('news3').style.opacity = '0.3';
	document.getElementById('description2').style.display = 'block';
}

function button3() {
	document.getElementsByClassName("back")[0].style.display = 'block';
	document.getElementById('news1').style.opacity = '0.3';
	document.getElementById('news2').style.opacity = '0.3';
	document.getElementById('news3').style.opacity = '0.3';
	document.getElementById('description3').style.display = 'block';
}

function close_description() {
	document.getElementsByClassName("back")[0].style.display = "none";
	document.getElementById('description1').style.display = 'none';
	document.getElementById('description2').style.display = 'none';
	document.getElementById('description3').style.display = 'none';
	document.getElementById('news1').style.opacity = '1';
	document.getElementById('news2').style.opacity = '1';
	document.getElementById('news3').style.opacity = '1';
}
