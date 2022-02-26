let myajax = (url, data) => {
    let ajax_ = new XMLHttpRequest();
    ajax_.open('get', url, true);
    ajax_.send();
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4 && ajax_.status == 200) {
            let count = JSON.parse(ajax_.responseText);
            console.log(count)
            data(count);
        }
    }
}
let c1 = (data) => {
    let count = template('i1', {
        value: data
    })
    document.querySelector('.ui1').innerHTML = count;
}
myajax('http://192.168.31.110:3000/useing/public', c1)
let c2 = (data) => {
    let count = template('i2', {
        value: data
    })
    document.querySelector('.ui1_').innerHTML = count;
}
/*  */
let c3 = (data) => {
    let count = template('i3', {
        value: data
    })
    document.querySelector('.ui2').innerHTML = count;
}
myajax('http://192.168.31.110:3000/useing/master', c3)
/*  */
/*  */
let c4 = (data) => {
    let count = template('i4', {
        value: data
    })
    document.querySelector('.ui3').innerHTML = count;
}
myajax('http://192.168.31.110:3000/report/new', c4)
/*  */
/*  */
let c5 = (data) => {
    let count = template('i5', {
        value: data
    })
    document.querySelector('.ui4').innerHTML = count;
}
myajax('http://192.168.31.110:3000/useing/master', c5)
/*  */
/*  */
let c6= (data) => {
    let count = template('i6', {
        value: data
    })
    document.querySelector('.u1').innerHTML = count;
}
myajax('http://192.168.31.110:3000/useing/master', c6)
/*  */
/*  */
let c7= (data) => {
    let count = template('i7', {
        value: data
    })
    document.querySelector('.u2').innerHTML = count;
}
myajax('http://192.168.31.110:3000/report/new', c7)
/*  */
/*  */
let c8= (data) => {
    let count = template('i8', {
        value: data
    })
    document.querySelector('.u3').innerHTML = count;
}
myajax('http://192.168.31.110:3000/useing/master', c8)
/*  */
/*  */
let c9= (data) => {
    let count = template('i9', {
        value: data
    })
    document.querySelector('.u4').innerHTML = count;
}
myajax('http://192.168.31.110:3000/report/new', c9)
/*  */