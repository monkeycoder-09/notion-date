function updateDate() {
    const date = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    document.getElementById("month").textContent = months[date.getMonth()].toUpperCase();
    document.getElementById("dayOfWeek").textContent = days[date.getDay()];
    document.getElementById("day").textContent = date.getDate();
}

setInterval(updateDate, 1000); // Update the date every second
updateDate(); // Initial call to set the date immediately
