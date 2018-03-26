//加载完页面才执行
window.onload = () => {
	const page1 = document.getElementById('page1');
	const page2 = document.getElementById('page2');
	const page3 = document.getElementById('page3');
	const music = document.getElementById('music');
	const audio = document.getElementsByTagName('audio')[0];

	audio.addEventListener('ended', () => {
		music.style.animationPlayState="paused";
		music.style.webkitAnimationPlayState="paused";
	});
	music.addEventListener('touchstart', () => {
		if(audio.paused){
			audio.play();
			music.style.animationPlayState="running";
			music.style.webkitAnimationPlayState="running";
		}else{
			audio.pause();
			music.style.animationPlayState="paused";
			music.style.webkitAnimationPlayState="paused";
		}
	},false);

	page1.addEventListener('touchstart', () => {
		page1.style.display = 'none';
		page2.style.display = 'block';
		page3.style.display = 'block';
		page3.style.top		  = '100%'; 

		setTimeout(() => {
			page2.setAttribute('class','page fadeOut');
			page3.setAttribute('class','page fadeIn');
		},5500)
	},false);
}