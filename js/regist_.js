function ajax_(url) {
    let Ajax = new XMLHttpRequest || new ActiveXObject("Micsoft.XMLHTTP");
    Ajax.open('get', url, true);
    Ajax.send();
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
    document.querySelector('.vess').innerHTML = html;
}


$(function() {
    $(".btn").on('click', function() {
        var fr_in_ = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/;
        var va_fr = $('.fr_in').val();
        if (fr_in_.test(va_fr)) {} else {
            alert('请输入正确的手机')
        }
    })
})