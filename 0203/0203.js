function updateTime() {
    var currentTime = new Date();
    var timeString = currentTime.toLocaleTimeString(); // 转换为本地时间字符串
    document.getElementById('currentTime').textContent = timeString;
}

// 每秒更新时间
setInterval(updateTime, 1000);

// 页面加载时立即更新时间
updateTime();