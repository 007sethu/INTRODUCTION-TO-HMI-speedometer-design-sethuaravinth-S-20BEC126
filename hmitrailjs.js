
var speed=0;
var prevspeed=0;
function increasespeed(){
    if(speed<180)
    {
        speed=speed+10;
        addclass();
    }
}
function decreasespeed(){
    if(speed>0)
    {
        speed=speed-10;
        addclass();
    }
}
function addclass(){
    let newclass="speed-"+speed;
    let prevclass="speed-"+prevspeed;
    let el=document.getElementsByClassName("container")[0];
    if(el.classList.contains(prevclass))
    {
        el.classList.remove(prevclass);
        el.classList.add(newclass);
    }
    prevspeed=speed;

}