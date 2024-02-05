// 广告栏自动滑动
function autoScroll() {
	var ad = document.querySelector('.ad');
	ad.scrollTop += 1;
	if (ad.scrollTop >= ad.scrollHeight - ad.clientHeight) {
		ad.scrollTop = 0;
	}
}

setInterval(autoScroll, 30);
