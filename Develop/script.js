// import moment from "https://cdn.skypack.dev/moment@2.29.1";

const now = moment();
const currentTime = { text: moment().format("h:00 A"), hour: moment().hour() };


// Current day function
function currentday(){
    var nowDay = moment();
    var currentday = document.getElementById("currentDay").innerHTML = nowDay.format('MMMM Do YYYY, h:mm:ss a');
}
currentday();

var timeboxes
function statusChange(){
    // var timeBox = document.getElementById("timeBox");
    // var timeBox2 = document.getElementById("timeBox2");
    
    // var timeboxes = [timeBox, timeBox2];
    
    var nowTime = moment().format("hh:mm a"); 
    var codetime = document.getElementById("time").innerHTML;
    // loop!
    $(".activity-style").each(function(){
        if(nowTime === codetime){
            timeBox.className="present";
        }
        else if(nowTime < codetime){
            timeBox.className="past";
        }
        else if(nowTime > codetime){
            timeBox.className="future";
        } 
    })
  
}


statusChange();
// console.log(currentTime);
// console.log(timeNow = moment().hour()); 

