var btns = document.querySelector('.btns');
var list = document.querySelectorAll('.list li');
btns.addEventListener('click', function() {
    // console.log(list[0].innerHTML.slice(0, 2));
    // 台数
    var num1 = list[0].innerHTML.slice(0, 2);
    if (num1 >= 01) {
        num1--;
        num1 = num1 < 10 ? '0' + num1 : num1;
        list[0].innerHTML = num1 + '台';
    } else {
        alert('抢光了')
    }
    // 人数
    var num2 = list[2].innerHTML.slice(0, 3);
    if (num2 <= 145) {
        num2++;
        list[2].innerHTML = num2 + '人申请';
    }
})


//   到计时
// var d = time.getDate();
// var h = time.getHours();
// var m = time.getMinutes();
count_down();


function count_down() {
    var span_ = document.querySelector('.span_')
    var time = new Date();
    var over = new Date('2 26 ,2022,14:00:00');
    var diff_time = over.getTime() - time.getTime();
    var d = parseInt(diff_time / 1000 / 60 / 60 / 24);
    var h = parseInt(diff_time / 1000 / 60 / 60 % 24);
    var m = parseInt(diff_time / 1000 / 60 % 60);
    var s = parseInt(diff_time / 1000 % 60);
    s = s < 10 ? '0' + s : s;
    m = m < 10 ? '0' + m : m;
    h = h < 10 ? '0' + h : h;
    d = d < 10 ? '0' + d : d;
    span_.innerHTML = '时间剩余：' + d + '天' + h + '小时' + m + '分钟' + s + '秒'
}

setInterval(function() {
    count_down();
}, 1000)


// 热门试用部分
var Ajax_ = new XMLHttpRequest || new ActiveXObject("Micsoft.XMLHTTP");
Ajax_.open('get', 'http://192.168.31.110:3000/report/new', true);
Ajax_.send();
Ajax_.onreadystatechange = function() {
        if (Ajax_.readyState == 4) {
            if (Ajax_.status == 200) {
                var res = JSON.parse(Ajax_.responseText);
                render_html(res);
            }
        }
    }
    // 4.封装函数 把数据和模板引擎关联起来
function render_html(res) {
    console.log(res);
    var html = template("frist", {
        value: res
    })
    document.querySelector('.ul_').innerHTML = html;
}

//  轮播