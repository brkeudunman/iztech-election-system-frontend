export function getTimeDifference(startDate, endDate) {
    // Get the time difference in milliseconds
    const timeDiff = endDate.getTime() - startDate.getTime();
  
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
  
  