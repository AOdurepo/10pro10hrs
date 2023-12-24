const daysEl =  document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('mins');
const secondsEl =document.getElementById('seconds');

const testDate = '30 January 2024';

function countdown() {
    const eventDate = new Date(testDate/*csaExam*/);
    const currentDate = new Date();
    //console.log(eventDate - currentDate)    
    const totalSeconds = (eventDate - currentDate) / 1000 ;  //* 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);
    //console.log(seconds);     
    //console.log(days, hours, minutes, seconds)

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

} ;

function formatTime(time){
    return time < 10 ? (`0${time}`) : time; 
};

countdown();
setInterval(countdown, 1000)
// we should call the function at the end of this script

