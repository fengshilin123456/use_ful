let myajax = (url, move) => { //z 封装ajax，下次直接调函数传不同接口就行
        let index_ajax = new XMLHttpRequest() || new ActiveXObject(Microsoft.XMLHTTP); //c 定义ajax
        index_ajax.open('get', url, true); //c get 请求数据
        index_ajax.send();
        index_ajax.onreadystatechange = function() {
            if (index_ajax.readyState == 4 && index_ajax.status == 200) {
                let pag = index_ajax.responseText;
                let pags = JSON.parse(pag);
                console.log(pags);
                move(pags)
            }
        }
    } //v    ajax 一次就好
let move_one = (data) => { //m 函数名要换
    let html = template('tem', { //m每次更新要换新ID
        value: data
    });
    document.querySelector('.tem_one .tem_one_ul').innerHTML = html; //m每次换新要换获取的dom
}
myajax('http://192.168.31.110:3000/guid/hot', move_one);
let move_two = (data) => { //m 函数名要换
    let html = template('tem2', { //m每次更新要换新ID
        value: data
    });
    document.querySelector('.tem_two .tem_two_ul').innerHTML = html; //m每次换新要换获取的dom
}
myajax('http://192.168.31.110:3000/report/new', move_two);
let move_three = (data) => { //m 函数名要换
    let html = template('tem3', { //m每次更新要换新ID
        value: data
    });
    document.querySelector('.tem_three .tem_three_ul').innerHTML = html; //m每次换新要换获取的dom
}
myajax('http://192.168.31.110:3000/report/new', move_three);

let circle = document.querySelector('.circle'); //x获取点击按钮
let sh = document.querySelector('.sh'); //获取加载按钮
let hi = document.querySelector('.hi'); //获取等待按钮
let tem_ = document.querySelector('.tem_one'); //获取数据
circle.addEventListener('click', function() {
    sh.style.display = 'none';
    hi.style.display = 'block';
    setTimeout(function() {
        setTimeout(function() {
            tem_.style.display = 'block';
        }, 1000)
        sh.style.display = 'none';
        hi.style.display = 'none';
    }, 2000)
})