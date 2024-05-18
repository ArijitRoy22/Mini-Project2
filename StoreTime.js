// Custom start times in milliseconds (1 minute and 4 hours from now)
const customStartTimes = [
    new Date().getTime() + (24 * 60 * 60 * 1000), // Example: 1 minute from now
    new Date("May 29, 2024").getTime(),
    new Date("May 20, 2024").getTime(),
    new Date("May 15, 2024").getTime(),
    new Date("May 17, 2024").getTime(),
    new Date("May 19, 2024").getTime(),
    // new Date().getTime() + (1 * 60 * 60 * 1000),
    // new Date().getTime() + (2 * 60 * 60 * 1000), // Change to 2 minutes from now for card 3
    // new Date().getTime() + (4 * 60 * 60 * 1000), // Example: 4 hours from now
    // new Date().getTime() + (5 * 60 * 60 * 1000),
    // new Date().getTime() + (7 * 60 *60 * 1000),
  ];
  
  // Loop through each custom start time and create a countdown timer
  customStartTimes.forEach((startTime, index) => {
    createCountdownTimer(startTime, index + 1);
    // console.log(`${index + 1}`)
  });
  
  // Function to create a countdown timer for a given custom start time and card ID
  // Function to create a countdown timer for a given custom start time and card ID
  function createCountdownTimer(startTime, cardId) {
    // console.log(`Creating countdown timer for card ${cardId} with start time ${new Date(startTime).toLocaleString()}`);
    const x = setInterval(function() {
        const now = new Date().getTime(); // Get current time
        const distance = startTime - now;
        
        // console.log(`Distance for card ${cardId}: ${distance} milliseconds`);
        
        if (distance <= 0) { // Check if time has already passed or is exactly zero
          clearInterval(x);
          // console.log(`Countdown timer for card ${cardId} has expired`);
          const timerElement = document.getElementById("timer" + cardId);
          if (timerElement) {
            timerElement.innerHTML = "EXPIRED";
          }
          return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
        // Display the countdown in the respective card
        const daysElement = document.getElementById("days" + cardId);
        if (daysElement) {
          daysElement.innerHTML = days > 0 ? days + "d " : "";
        }
        const hoursElement = document.getElementById("hours" + cardId);
        if (hoursElement) {
          hoursElement.innerHTML = hours > 0 ? hours + "h " : "";
        }
        const minutesElement = document.getElementById("minutes" + cardId);
        if (minutesElement) {
          minutesElement.innerHTML = (hours > 0 || minutes > 0) ? minutes + "m " : "";
        }
        const secondsElement = document.getElementById("seconds" + cardId);
        if (secondsElement) {
          secondsElement.innerHTML = seconds + "s ";
        }
    }, 1000); // Update every second
  }
  