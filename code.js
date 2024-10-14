
    //"December 31, 2000 23:55:35"
const currentDate = new Date()
var countDays = 92;
var countHours = 23;
var countMinutes = 60;
var days = currentDate.getDate()
var month = currentDate.getMonth()
var hours = currentDate.getHours()
var minutes = currentDate.getMinutes()
var first = true;
var i = 0; var x =0;
days = countDays - days;
hours = countHours - hours;
minutes = countMinutes - minutes;
function countdown(){
    var nameDays = " Дней "
    var nameHours = " Часов "
    var nameMinutes = " Минут"
    if (month == 10) {
        countDays -= 30
    }
    if ( month >= 11) {
        countDays -= 60
    }
    if ((days > 0) || (minutes > 0) || (hours > 0)){
        if ((minutes - 1) > 0){
            minutes -= 1;
        } else{
            if ((hours - 1) > 0){
                minutes = 59;
                hours -= 1;
            } else{
                minutes = 59;
                hours = 23;
                days -=1;
            }
        }
    }
    //Дни
    if ((days != 11) & (days%10 == 1)){
        nameDays = " День ";
    }
    if (((days < 10)||(days > 20) )& ((days%10 >= 2) & days%10 <= 4)){
        nameDays = " Дня ";
    }
    //часы
    if ((hours != 11) & (hours%10 == 1)){
        nameHours = " Час ";
    }
    if (((hours < 10)||(hours > 20) )& ((hours%10 >= 2) & hours%10 <= 4)){
        nameHours = " Часа ";
    }
    //Минуты
    if ((minutes != 11) & (minutes%10 == 1)){
        nameMinutes = " Минута ";
    }
    if (((minutes < 10)||(minutes > 20) )& ((minutes%10 >= 2) & minutes%10 <= 4)){
        nameMinutes = " Минуты ";
    }
    console.log("Минута прошла "+minutes);
    document.getElementById("Clock").innerHTML = (days+nameDays+hours+nameHours+minutes+nameMinutes);
}
function tick()
{
    countdown();
    if (first){
        first = false;
        x = (60 - currentDate.getSeconds())*1000;
    } else{
        x = 60000;
    }
    t = setTimeout('tick()',x);
}