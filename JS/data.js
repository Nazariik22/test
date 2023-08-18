import { adventege, product } from "./GetState.js";
const elementHtml = {
    section1: document.getElementsByClassName('section1_container')[0],
    section2: document.getElementsByClassName('section2_container')[0],
}
let { section1, section2 } = elementHtml
async function progress() {
    for (let i = 0; i < adventege.length; i++) {
        const element = document.createElement('div');
        element.classList.add('section1_block');
        element.innerHTML = `
        <img src="${adventege[i].img}" alt="">
        <h3>${adventege[i].title}</h3>
        <p>${adventege[i].text}</p>
        `
        section1.insertAdjacentElement('beforeend', element)
    }
}
progress()
const title = document.querySelectorAll('h2');
const headerLink = Array.from(document.querySelectorAll('.nav>li>a'));
headerLink.forEach((item, index) => scrollTop(item, index));
const menu = document.getElementById('menu');
scrollTop(menu, 1);
let button = Array.from(document.getElementsByClassName('button_list'));
button.forEach(item => scrollTop(item, 2));
function scrollTop(element, index) {
    element.onclick = () => title[index].scrollIntoView({ behavior: "smooth" })
}
const submitButton = document.getElementsByClassName('submit')[0];
submitButton.addEventListener('click', (e) => {
    const arrItem = [];
    const formInput = Array.from(document.getElementsByTagName('input'));
    formInput.forEach(item => {
        if (!item.value) {
            item.classList.add('red');
            arrItem.push(item.placeholder);
            e.preventDefault();
        } else {
            item.classList.remove('red');
        }
    })
    if (arrItem.length != 0) {
        alert('Заповніть поля:' + arrItem.join(",").toLowerCase());
    } else {
        alert('Дякуємо за покупку');
        formInput.forEach(item => item.value = "");
    }
});
document.getElementsByClassName('currentcy')[0].onclick = (e) => {
    let carentText = e.target.innerText;
    let iteratorCarent = 1
    let newcarentText;
    switch (carentText) {
        case '$':
            newcarentText = '₽'
            iteratorCarent = 80
            break;
        case '₽':
            newcarentText = '₴'
            iteratorCarent = 36
            break;
        case '₴':
            newcarentText = 'BYN'
            iteratorCarent = 10
            break;
        case 'BYN':
            newcarentText = '$'
            iteratorCarent = 1
            break;
        default:
            break;
    }
    e.target.innerText = newcarentText;
    product.carentText = newcarentText;
    product.state.map(item => item.price = item.price * iteratorCarent)
    obgectBurger.render()
    product.state.forEach(item => item.price = item.price / iteratorCarent)
}
const obgectBurger = {
    async render() {
        section2.innerHTML = "";
        for (let i = 0; i < product.state.length; i++) {
            const element = document.createElement('div');
            element.classList.add('section2_block');
            element.innerHTML = `
            <img src="${product.state[i].img}" alt="" class="img_content">
            <h3>${product.state[i].title}</h3>
            <p>${product.state[i].text}</p>
            <div class="flex">
                <div class="price">
                    <b>${product.state[i].price} ${product.carentText}</b>
                    <p class="gray">${product.state[i].grams} гр</p>
                </div>
                <button class="button_gradient button_list">
                Заказать
                <img src="img/main/cost/6.svg" alt="">
                </button>
            `
            section2.insertAdjacentElement('beforeend', element)
        }
    }
}
obgectBurger.render()