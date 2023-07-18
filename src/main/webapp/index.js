const mode_button = document.getElementById("mode_button");
const dark_mode = document.getElementById("dark_mode");
const navagation = document.querySelector(".navagation");
let isDark_Mode = true;
mode_button.addEventListener('click', ()=>{
	if(isDark_Mode){
		navagation.classList.add("active");
	}else{
		navagation.classList.remove("active");
	}
	isDark_Mode = !isDark_Mode;
})
