
window.onload = function(){
	var swiper = new Swiper('.swiper-container', {
	direction: 'vertical',
	onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
		swiperAnimateCache(swiper); //隐藏动画元素 
		swiperAnimate(swiper); //初始化完成开始动画
	},
	onSlideChangeEnd: function(swiper) {
		swiperAnimate(swiper); 
	}
});
var bgmc=$("#bgmc").get(0);
$(".bgmcBtn").click(function(){
	 if(bgmc.paused){
            bgmc.play();
            $(".bgmcBtn").html('<img src="img/musicBtn.png"/>');
        }else{
            bgmc.pause();
            $(".bgmcBtn").html('<img src="img/musicBtnOff.png"/>');
        }
	});
};
	


