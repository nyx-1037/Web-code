document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('toggleButton');
    var header = document.getElementById('header');
    var footer = document.getElementById('footer');
    var leftBox = document.getElementById('leftBox');
    var contentBox = document.getElementById('contentBox');
    var VueApp = document.getElementById('app');
    var body = document.body;

    toggleButton.addEventListener('click', function() {
        // 切换背景颜色和文本颜色
        if (header.style.backgroundColor === 'black' || header.style.backgroundColor === '') {
            header.style.backgroundColor = 'white';
            footer.style.backgroundColor = 'white';
            leftBox.style.backgroundColor='rgba(255, 255, 255, 0.30)';
            contentBox.style.backgroundColor='rgba(255, 255, 255, 0.30)';
            VueApp.style.backgroundColor='rgba(255, 255, 255, 0.30)';

            VueApp.style.color='black';
            leftBox.style.color='black';
            contentBox.style.color='black';
            header.style.color = 'black';
            footer.style.color = 'black';
        } else {
            header.style.backgroundColor = 'black';
            footer.style.backgroundColor = 'black';
            leftBox.style.backgroundColor='rgba(0, 0, 0, 0.50)';
            contentBox.style.backgroundColor='rgba(0, 0, 0, 0.50)';
            VueApp.style.backgroundColor='rgba(0, 0, 0, 0.50)';

            VueApp.style.color='white';
            leftBox.style.color='white';
            contentBox.style.color='white';
            header.style.color = 'white';
            footer.style.color = 'white';
        }
    });
});