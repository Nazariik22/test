import { adventege, product } from "./GetState.js";
import { obgectBurger, progress } from "./function.js";
const elementHtml = {
    section1: document.getElementsByClassName('section1_container')[0],
    section2: document.getElementsByClassName('section2_container')[0],
}
const { section1, section2 } = elementHtml;
progress(section1, adventege.state)
obgectBurger.render(section2, product.state, product.carentText)
const
    title = document.querySelectorAll('h2'),
    headerLink = Array.from(document.querySelectorAll('.nav>li>a')),
    menu = document.getElementById('menu'),
    button = Array.from(document.getElementsByClassName('button_list'));
scrollTop(menu, 1);
headerLink.forEach((item, index) => scrollTop(item, index));
button.forEach(item => scrollTop(item, 2));

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
    let iteratorCarent = 1;
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
            newcarentText = '€'
            iteratorCarent = 0.9
            break;
        case '€':
            newcarentText = 'BYN'
            iteratorCarent = 10
            break;
        case 'BYN':
            newcarentText = '¥'
            iteratorCarent = 20
            break;
        case '¥':
            newcarentText = '$'
            iteratorCarent = 1
            break;
        default:
            break;
    }
    e.target.innerText = newcarentText;
    product.carentText = newcarentText;
    product.state.map(item => product.newiteratorCarent ?
        item.price = Math.ceil(item.price * iteratorCarent
            / product.newiteratorCarent)
        : item.price = item.price * iteratorCarent);
    obgectBurger.render(section2, product.state, product.carentText)
    product.newiteratorCarent = iteratorCarent;
}
function scrollTop(element, index) {
    element.onclick = () => title[index].scrollIntoView({ behavior: "smooth" })
}