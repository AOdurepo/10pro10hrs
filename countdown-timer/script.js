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
    console.log(days, hours, minutes, seconds)

} 

countdown();
setInterval(countdown, 1000)
// we should call the function at the end of this script

