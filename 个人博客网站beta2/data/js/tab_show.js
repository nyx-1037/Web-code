var lis = document.querySelector('.tab_list').querySelectorAll('li');
var divs = document.querySelector('.tab_con').querySelectorAll('div');
for (var i=0;i<lis.length;i++){
    lis[i].setAttribute('index',i); //给5个小li设置索引号
    lis[i].onclick = function(){
        // 1.上面的模块选项卡，点击一个，他的底色变成红色
        // 排他思想  
        // 消除所有人
        for (var j=0;j<lis.length;j++){
            lis[j].className = '';
        }
        // 保留我自己
        this.className = 'current';  //this 指向事件函数的调用者
        // 2.下面的显示内容模块
        for (var k=0;k<divs.length;k++){
             // 消除所有人
            divs[k].style.display = 'none';
        }
        var index = this.getAttribute('index');
         // 保留我自己
        divs[index].style.display = 'block';
    }
}