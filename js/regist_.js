function ajax_(url) {
    let Ajax = new XMLHttpRequest || new ActiveXObject("Micsoft.XMLHTTP");
    Ajax.open('post', 'http://192.168.31.110:3000/users/register', true);
    let us = 'phone=13803780388&code=r2b7&username=lisi01&password=123456789s'
    Ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    Ajax.send(us);
    Ajax.onreadystatechange = function() {
        if (Ajax.readyState == 4) {
            if (Ajax.status == 200) {
                var res = JSON.parse(Ajax.responseText);
                render(res)
            }
        }
    }
}

function render(res) {
    console.log(res);
    var html = template("frist", {
        value: res
    })
    ul_.innerHTML = html;
}
ajax_()

$(function() {
    $(".btn").on('click', function() {
        var fr_in_ = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/;
        var va_fr = $('.fr_in').val();
        if (fr_in_.test(va_fr)) {} else {
            alert('请输入正确的手机')
        }
        var th_in_ = /^\d{4}$/;
        var va_th = $('.th_in').val();
        if (th_in_.test(va_th)) {} else {
            alert('验证码输入有误')
        }
        var fo_in_ = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
        var va_fo = $('.fo_in').val();
        var va_fv = $('.fv_in').val();
        if (fo_in_.test(va_fo)) {} else {
            alert('密码输入有误')
        }
        if (va_fo != va_fv) {
            alert('两次输入密码不一致')
        }
    })
})