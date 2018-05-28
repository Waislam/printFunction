
window.onload = function(){
	var print = document.getElementById('do');
	print.onclick = function(){
		
		//print.style.visibility="hidden";//for hiding pring button
		print.style.display ="none";//or for hiding pring button
		window.print();
		

		//print.style.visibility="visible";//for showing print button
		print.style.display ="block";// or for showing print button
	}
}
