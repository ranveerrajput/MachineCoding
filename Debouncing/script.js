const inputElement = document.querySelector("#input");

function inputEventHandler(e) {
  console.log(e.target.value);
}

function debounce(callback, delay) {
  let timer;
  return function (...args) {
    clearInterval(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const debounceHandler = debounce(inputEventHandler, 500);

inputElement.addEventListener("keyup", debounceHandler);
