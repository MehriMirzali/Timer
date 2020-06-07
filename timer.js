let count = prompt("Please enter seconds")
let day = document.getElementsByTagName("span")[0];
let hour = document.getElementsByTagName("span")[2];
let minute = document.getElementsByTagName("span")[4];
let seconds = document.getElementsByTagName("span")[6];
CountDown();
let time = setInterval(CountDown, 1000);
function CountDown() {
    day.innerHTML = `${(Math.floor(count / 86400))} `
    hour.innerHTML = `${Math.floor((count % 86400) / 3600)} `
    minute.innerHTML = `${Math.floor(((count % 86400) % 3600) / 60)} `
    seconds.innerHTML = `${(count) % 60} `
    --count;
    if (count == 0) {
        alert("Bitdi")
        location.reload();
        clearInterval(time);
    }
}