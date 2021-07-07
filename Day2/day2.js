setInterval(() => {
    let d = new Date();
    console.log(d);
    let h = d.getHours();
    let m = d.getMinutes();
    console.log(m);
    let s = d.getSeconds();
    // to get the rotation of hour hand, 
    // 12hours->360 deg
    // 1hour->30 deg
    // h hours->30h deg but we must add the rotation caused by the minutes
    // so 60min->30deg rotation in hour hand
    // then 1min->1/2deg 
    // m min->1/2m deg
    // so h hours->30h+1/2m deg
let hRotation = 30*h + m/2;
// to get the rotation of minute hand
// 60min->360deg rotation of minute hand
// 1 min->6deg
// m min->6m deg
let mRotation = 6*m;
// to get the rotation of second hand
// 60sec->360deg rotation of second hand
// 1sec->6deg
// s sec->6s deg
let sRotation = 6*s;
// now we apply transform property to the hour,minute and second divs
hour.style.transform = (`rotate(${hRotation}deg)`);
minute.style.transform = (`rotate(${mRotation}deg)`);
second.style.transform = (`rotate(${sRotation}deg)`);
}, 1000);
