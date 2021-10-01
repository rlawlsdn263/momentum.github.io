const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

/*
const clockTitle = document.querySelector(".js-clock");

function calculator() {
  const today = new Date();
  const christmas = new Date(2021, 12 - 1, 25);
  const timeDiff = christmas.getTime() - today.getTime();

  const days = String(timeDiff.getDays())
  
  const hours = Math.ceil((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.ceil((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.ceil((timeDiff % (1000 * 60)) / 1000);

  clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

calculator();
setInterval(calculator, 1000);
 */