        // 获取包含背景图片的元素和按钮元素
        var backgroundContainer = document.getElementById('backgroundContainer');
        var changeBackgroundButton = document.getElementById('aa');

        // 定义一个数组，包含要切换的背景图片URL
        var backgrounds = [
        'url(img/background1.png)',
        'url(img/background2.png)',
        'url(img/background3.png)',
        'url(img/background4.png)',
        'url(img/background5.png)'
        ];

        // 初始化背景图片索引
        var backgroundIndex = 0;

        // 为按钮添加点击事件监听器
        changeBackgroundButton.addEventListener('click', function() {
        // 增加背景图片索引
        backgroundIndex = (backgroundIndex + 1) % backgrounds.length;
        // 更改背景图片
        backgroundContainer.style.backgroundImage = backgrounds[backgroundIndex];
        });