

arrayBenner.addEventListener('click',()=>{
	let arbannerDots = document.querySelectorAll('#dots-banner p');
	for(let i = 0; i < arbannerDots.length ; i++){
		if(arbannerDots[i].classList[0] === 'active' && i !== arbannerDots.length-1 ){
			arbannerDots[i].classList.remove('active')
			arbannerDots[i+1].classList.add('active');
			banner.style.marginLeft=String(Number(banner.style.marginLeft.slice(0,-2)) -375) + 'px';
			break
		}
		if(arbannerDots[i].classList[0] === 'active' && i == arbannerDots.length-1 ){
			arbannerDots[i].classList.remove('active')
			arbannerDots[0].classList.add('active');
			banner.style.marginLeft='0px';
			break
		}
	}	 
	return banner.style.marginLeft;
})

let startTouch ;

banner.addEventListener('touchstart',(e)=>{
	startTouch = e.targetTouches[0].clientX
})

banner.addEventListener('touchmove',(e)=>{
	let g = e.targetTouches[0].clientX
	if(startTouch >= (g-200)){
		let arbannerDots = document.querySelectorAll('#dots-banner p');
		for(let i = 0; i < arbannerDots.length ; i++){
			if(arbannerDots[i].classList[0] === 'active' && i !== arbannerDots.length-1 ){
				arbannerDots[i].classList.remove('active')
				arbannerDots[i+1].classList.add('active');
				banner.style.marginLeft=String(Number(banner.style.marginLeft.slice(0,-2)) -375) + 'px';
				break
			}
			if(arbannerDots[i].classList[0] === 'active' && i == arbannerDots.length-1 ){
				arbannerDots[i].classList.remove('active')
				arbannerDots[0].classList.add('active');
				banner.style.marginLeft='0px';
				break
			}
		}	 
		return banner.style.marginLeft;
	}
})