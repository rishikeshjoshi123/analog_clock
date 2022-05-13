const deg = 6;
//dom element id
const hr = document.getElementById('hr');
const mn = document.getElementById('mn');
const sc = document.getElementById('sc');


setInterval(() => {
    let date = new Date();
    //h,m,s is the degree each hand has to move 
    let h = (date.getHours() * 30) % 360;
    let m = (date.getMinutes() * deg) % 360;
    let s = (date.getSeconds() * deg) % 360;

    //set css transfrom (rotate) to clock hands using DOM
    hr.style.transform = `rotateZ(${h + (m / 12)}deg)`;
    mn.style.transform = `rotateZ(${m}deg)`;
    sc.style.transform = `rotateZ(${s}deg)`;

});

const notice = document.getElementById('notice');
setTimeout(() => {
    notice.style.display = 'none';
}, 3000);