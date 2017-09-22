/* mobile menu*/
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
  