const container = document.querySelector(".container");

const throttle = (callback, delay) => {
  let isWaiting = false;
  return (...args) => {
    if (isWaiting) return;
    callback(...args);
    isWaiting = true;
    setTimeout(() => {
      isWaiting = false;
    }, delay);
  };
};

function handleScroll() {
  console.log("Scrolled");
}

const throttled = throttle(handleScroll, 500);

container.addEventListener("scroll", throttled);
