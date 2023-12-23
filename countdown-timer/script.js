const testDate = '30 January 2024';

function countdown() {
    const eventDate = new Date(testDate/*csaExam*/);
    const currentDate = new Date();
    //console.log(eventDate - currentDate)    
    const seconds = (eventDate - currentDate ) * 1000;

    const days = Math.floor(seconds / 3600 / 24);

    console.log(days)

} 

countdown();
setInterval(countdown, 1000)
// we should call the function at the end of this script

