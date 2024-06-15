  // 关闭广告栏的函数
  function closeAd() {
    var ad = document.getElementById('floatingAd');
    // ad.style.transition = '2s';
    ad.style.display = 'none';

  }

  // 滚动时调整广告栏位置的函数
  function adjustAdPosition() {
    var ad = document.getElementById('floatingAd');
    var scroll = window.pageYOffset || document.documentElement.scrollTop;
    if (scroll > 100) {
      ad.style.top = '50px';
    } else {
      ad.style.top = '35%';
    }
  }
  
  window.addEventListener('scroll', adjustAdPosition);