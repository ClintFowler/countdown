//change the text below to reflect your own,
var before = "Groundhog's Day!";
var current = "Today is Groundhog's Day!";
var montharray = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");

function countdown(yr, m, d) {
    if(new Date().getFullYear() === yr && new Date().getMonth() === (m - 1) && new Date().getDate() === d){
        document.forms.count.count2.value = current;
    }
    else{
        document.forms.count.count2.value ="Only "+ Math.floor((new Date(yr,(m-1),d).getTime()- new Date().getTime())/(1000*60*60*24)) + " Days " 
                                            + Math.floor(((new Date(yr,(m-1),d).getTime()- new Date().getTime())/(1000*60*60))-(Math.floor((new Date(yr,(m-1),d).getTime()- new Date().getTime())/(1000*60*60*24))*24)) +" Hours "
                                            + Math.floor(((new Date(yr,(m-1),d).getTime()- new Date().getTime())/(1000*60))-(Math.floor((new Date(yr,(m-1),d).getTime()- new Date().getTime())/(1000*60*60))*60)) +" Minutes "
                                            + Math.floor(((new Date(yr,(m-1),d).getTime()- new Date().getTime())/(1000))-(Math.floor((new Date(yr,(m-1),d).getTime()- new Date().getTime())/(1000*60))*60)) +" Seconds "
                                            + "until " + before;
    }    
}

//enter the count down date using the format year/month/day
setInterval(function () {countdown(2015, 2, 2)},1000);