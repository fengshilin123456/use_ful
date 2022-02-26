let aj = (url, data) => {
    let aj = new XMLHttpRequest();
    aj.open('get', url, true);
    aj.send();
    aj.onreadystatechange = function () {
        if (aj.readyState == 4 && aj.status == 200) {
            let count = JSON.parse(aj.responseText);
            console.log(count);
            data(count);
        }
    }
}
let r1 = (data) => {
    let count = template('re1', {
        value: data
    })
    document.querySelector('.re_u').innerHTML = count;
}
aj('http://192.168.31.110:3000/report/new', r1)
let r2 = (data) => {
    let count = template('re2', {
        value: data
    })
    document.querySelector('.re_u1').innerHTML = count;
}
aj('http://192.168.31.110:3000/report/new', r2)