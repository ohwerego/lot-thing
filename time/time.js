let F;
let sec = 0;
let min = 0;
let hour = 0;
function start1() {
    F = setInterval("start2()",1000);
}
function start2() {

    if(sec == 60) {
        min ++;
        sec = 0;
    }
    if(min == 60) {
        hour ++;
        min = 0;
    }
    frm.timer.value = hour + "시간" + min + "분" + sec + "초";
    sec++;
}

function stop1() {
    clearInterval(F);
}

function clear1() {
    sec = 0;
    min = 0;
    hour = 0;
    clearInterval(F);
    frm.timer.value ="";
}