let myajax = (url, move) => { //z 封装ajax，下次直接调函数传不同接口就行
    let index_ajax = new XMLHttpRequest() || new ActiveXObject(Microsoft.XMLHTTP); //c 定义ajax
    index_ajax.open('get', url, true); //c get 请求数据
    index_ajax.send();
    index_ajax.onreadystatechange = function () {
        if (index_ajax.readyState == 4 && index_ajax.status == 200) {
            let pag = index_ajax.responseText;
            let pags = JSON.parse(pag);
            console.log(pags);
            move(pags)
        }
    }
} //v    ajax 一次就好
let move_one = (data) => { //m 函数名要换
    let html = template('one', { //m每次更新要换新ID
        value: data
    });
    document.querySelector('.play_one').innerHTML = html; //m每次换新要换获取的dom
}
myajax('http://192.168.31.110:3000/report/new', move_one);//z记得更换
let move_two = (data) => { //m 函数名要换
    let html = template('two', { //m每次更新要换新ID
        value: data
    });
    document.querySelector('.play_two').innerHTML = html; //m每次换新要换获取的dom
}
myajax('http://192.168.31.110:3000/report/new', move_two);//z记得更换
let move_three = (data) => { //m 函数名要换
    let html = template('three', { //m每次更新要换新ID
        value: data
    });
    document.querySelector('.play_three').innerHTML = html; //m每次换新要换获取的dom
}
myajax('http://192.168.31.110:3000/report/new', move_three);//z记得更换
// /* 首页加载更多 start*/
let circle = document.querySelector('.circle'); //x获取点击按钮
let sh = document.querySelector('.sh'); //获取加载按钮
let hi = document.querySelector('.hi'); //获取等待按钮
let tem_ = document.querySelector('.play_three'); //获取数据
circle.addEventListener('click', function () {
    sh.style.display = 'none';
    hi.style.display = 'block';
    setTimeout(function () {
        setTimeout(function () {
            tem_.style.display = 'block';
        }, 1000)
        sh.style.display = 'none';
        hi.style.display = 'none';
    }, 2000)
})
// /* 首页加载更多 end*/
/* 2.1 */
let item = (data) => {
    let html = template('item1', {
        value: data
    })
    document.querySelector('.item_one').innerHTML = html;
}
myajax('http://192.168.31.110:3000/report/new', item);
/* 2.1 */
/* 2.2 */
let item1 = (data) => {
    let html = template('item2', {
        value: data
    })
    document.querySelector('.item_two').innerHTML = html;
}
myajax('http://192.168.31.110:3000/report/new', item1);
/* 2.2 */
/* 3.1  品类*/
let ip1 = (data) => {
    let html = template('ipt1', {
        value: data
    })
    document.querySelector('.ip_one').innerHTML = html;
}
myajax('http://192.168.31.110:3000/play/category', ip1)
/* 3.1 */

/* 3.2 */
/* 3.2 */