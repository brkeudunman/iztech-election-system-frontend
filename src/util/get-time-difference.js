export function getTimeDifference(endDate) {
    // Get the time difference in milliseconds
  
    var date = new Date(); // today's date and time in ISO format
    var myDate = Date.parse(date);
    const timeDiff = endDate.getTime() - myDate;


  
    // Convert the time difference to days, hours, minutes, and seconds
    const seconds = Math.floor(timeDiff / 1000) % 60;
    const minutes = Math.floor(timeDiff / (1000 * 60)) % 60;
    const hours = Math.floor(timeDiff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  
    // Return the time difference as an object
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
  
  