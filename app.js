const input = document.querySelector("#input");
const h1 = document.querySelector("h1")
const hellow = document.querySelector("#hellow");
const image = document.querySelector("#image");
const hexCode = document.querySelector("#hexCode");



input.addEventListener('input', () => {

    h1.style.color = input.value;
    hellow.style.color = input.value;
    image.style.color = input.value;
    hexCode.textContent = input.value.toUpperCase();
    hexCode.style.color = input.value;
});


    

    image.style.transform = 'translateX(-50%) scale(1.1)';
    setTimeout(() => {
        image.style.transform = 'translateX(-50%) scale(1)';
    }, 200);