document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('toggleButton');
    var header = document.getElementById('header');
    var footer = document.getElementById('footer');
    var leftBox = document.getElementById('leftBox');
    var contentBox = document.getElementById('contentBox');
    var VueApp = document.getElementById('app');
    var AdBox = document.getElementById('floatingAd');
    var backTopButton = document.getElementById('back-to-top');
    var body = document.body;

    toggleButton.addEventListener('click', function() {
        // 切换背景颜色和文本颜色
        if (header.style.backgroundColor === 'black' || header.style.backgroundColor === '') {
            header.style.backgroundColor = 'white';
            footer.style.backgroundColor = 'white';
            leftBox.style.backgroundColor='rgba(255, 255, 255, 0.30)';
            contentBox.style.backgroundColor='rgba(255, 255, 255, 0.30)';
            VueApp.style.backgroundColor='rgba(255, 255, 255, 0.30)';
            AdBox.style.backgroundColor='rgba(255, 255, 255, 0.50)';
            backTopButton.style.backgroundColor='rgba(0, 0, 0, 0.20)';

            backTopButton.style.color='red';
            AdBox.style.color='black';
            VueApp.style.color='black';
            leftBox.style.color='black';
            contentBox.style.color='black';
            header.style.color = 'black';
            footer.style.color = 'black';

            // changeBackgroundFunction();
        } else {
            header.style.backgroundColor = 'black';
            footer.style.backgroundColor = 'black';
            leftBox.style.backgroundColor='rgba(0, 0, 0, 0.50)';
            contentBox.style.backgroundColor='rgba(0, 0, 0, 0.50)';
            VueApp.style.backgroundColor='rgba(0, 0, 0, 0.50)';
            AdBox.style.backgroundColor='rgba(0, 0, 0, 0.70)';
            backTopButton.style.backgroundColor='rgba(0, 0, 0, 0.50)';

            backTopButton.style.color='white';
            AdBox.style.color='white';
            VueApp.style.color='white';
            leftBox.style.color='white';
            contentBox.style.color='white';
            header.style.color = 'white';
            footer.style.color = 'white';

            // changeBackgroundFunction();
        }
    });
});

// // 背景图片切换
// function changeBackgroundFunction() {
//         // 获取包含背景图片的元素和按钮元素
//         // var body = document.getElementsByTagName('body');
//         // var toggleButton = document.getElementById('toggleButton');

//         // 定义一个数组，包含要切换的背景图片URL
//         var backgrounds = [
//         'url(../img/shuiying.jpg)',
//         'url(../img/shuiying2.jpg)'

//         ];

//         // 初始化背景图片索引
//         var backgroundIndex = 0;

//         // 为按钮添加点击事件监听器
//         toggleButton.addEventListener('click', function() {
//         // 增加背景图片索引
//         backgroundIndex = (backgroundIndex + 1) % backgrounds.length;
//         // 更改背景图片
//         body.style.backgroundImage = backgrounds[backgroundIndex];
//         });
    
// }
