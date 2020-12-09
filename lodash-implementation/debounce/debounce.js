// get referneces of input fields
// add event listeners
// upon firing add node and verify
// finally include debounce functionality

const normalInput = document.getElementById('input-normal');
const debouncedInput = document.getElementById('input-debounced');

normalInput.addEventListener('keyup', fire);
debouncedInput.addEventListener('keyup', debounce(fire, 600));

function fire(e) {
    e.target.parentElement.nextElementSibling.innerHTML += e.target.value + '<br>';
}

function debounce(fn, wait) {
    let timer;
    return function(...args) {
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args)
        }, wait)
    }
}