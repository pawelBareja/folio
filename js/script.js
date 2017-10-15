/* mobile menu */
  document.addEventListener("DOMContentLoaded", function(event) {
	var button = document.getElementById('btn-menu');
	
	button.addEventListener('click', toggle);
	
	function toggle(event){
		var menu = document.getElementById('mobile-menu');
	
		if (menu.style.display === "none") {
		menu.style.display = "block";
		} else {
		menu.style.display = "none";
		}
	}
			
  });
    
/* read more button
addEventListener("DOMContentLoaded",function(){

var trigger = document.getElementById('read-more');
var showText = document.getElementsByClassName('text-hidden');

trigger.addEventListener('click',unwrap);

	function unwrap(){

	for (var i = 0; i < showText.length; i++) {
		if (showText[i].style.display === "none") {
			showText[i].style.display = "block";
			trigger.innerHTML = "zwiń";
		} else {
			showText[i].style.display = "none";
			trigger.innerHTML = "czytaj więcej";
		}
	}
}

});
*/


  