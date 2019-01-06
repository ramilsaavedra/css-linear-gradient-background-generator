let inputs = document.querySelector('.inputs');
let direction = document.querySelector('select[name="direction"]');
let color1 = document.querySelector('input[name="color1"]');
let color2 = document.querySelector('input[name="color2"]');
let body = document.querySelector('body');
let css = document.querySelector('.css');

// function changeBackground(){
// 	css.textContent = "linear-gradient(" + direction.value + ", " + color1.value + ", " + color2.value + ")";
// 	body.style.background = css.textContent;
// };

const changeBackground = () => {
	css.textContent = "linear-gradient(" + direction.value + ", " + color1.value + ", " + color2.value + ")";
	body.style.background = css.textContent;
}

inputs.addEventListener('input', changeBackground);