const bannerItems = document.querySelectorAll('#banner-item');
let bannerDots = document.querySelector('#dots-banner');
const arrayBanner = document.querySelector('#array-banner');
const arrayBannerPc = document.querySelector('#array-banner-PC')
let banner = document.querySelector('#banner');

let dotsHtml= ``;
bannerItems.forEach((item,i)=>{
	if(i === bannerItems.length-1){
		dotsHtml=`<p class='active'></p>`+ dotsHtml;
	}else{
		dotsHtml=`<p></p>`+ dotsHtml;
	}
})

bannerDots.innerHTML=dotsHtml


arrayBannerPc.addEventListener('click',()=>{
	let arbannerDots = document.querySelectorAll('#dots-banner p');
	for(let i = 0; i < arbannerDots.length ; i++){
		if(arbannerDots[i].classList[0] === 'active' && i !== arbannerDots.length-1 ){
			arbannerDots[i].classList.remove('active')
			arbannerDots[i+1].classList.add('active');
			banner.style.left=String(Number(banner.style.left.slice(0,-2)) -1410) + 'px';
			break
		}
		if(arbannerDots[i].classList[0] === 'active' && i == arbannerDots.length-1 ){
			arbannerDots[i].classList.remove('active')
			arbannerDots[0].classList.add('active');
			banner.style.left='0px';
			break
		}
	}	 
	return banner.style.marginLeft;
})



arrayBanner.addEventListener('click',()=>{
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


const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
	




let burger = document.querySelector('#burger');
let menuBurger = document.querySelector('#menu-burger');
burger.addEventListener('click',()=>{
	let backBody = document.querySelector('#back-body-menu');
	if(burger.classList[1] === 'active'){
		menuBurger.classList.remove('active');
		burger.classList.remove('active');
		backBody.classList.remove('active');
		document.querySelector('html').style.overflow='';
	}else{
		menuBurger.classList.add('active');
		burger.classList.add('active');
		backBody.classList.add('active')
		document.querySelector('html').style.overflow='hidden';
	}
})