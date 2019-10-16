var headerBtn = document.getElementById('header-btn');
var headerWrap = document.querySelector('.header-wrap');
var flag = false;

	headerBtn.onclick = function(){
		if(!flag){
			headerWrap.classList.add('header-display');
			flag = true;

		}else{
			headerWrap.classList.remove('header-display');
			flag = false;
		}
	
	}