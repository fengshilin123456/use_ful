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

ajax_('http://192.168.31.110:3000/play/new');

function render(res) {
    var html = template("frist", {
        value: res
    })
    document.querySelector('.vess').innerHTML = html;
}


var load = document.querySelector('.load');
var load_1 = document.querySelector('.load_1')
load.addEventListener('click', function() {
    load.style.display = 'none';
    load_1.style.display = 'block';
})