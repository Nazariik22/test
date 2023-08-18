import { adventege, product } from "./GetState.js";
const elementHtml = {
    section1: document.getElementsByClassName('section1_container')[0],
    section2: document.getElementsByClassName('section2_container')[0],
}
let { section1, section2 } = elementHtml
const progress = {
    return() {
        
        async function data() {
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
            for (let i = 0; i < product.length; i++) {
                const element = document.createElement('div');
                element.classList.add('section2_block');
                element.innerHTML = `
                <img src="${product[i].img}" alt="" class="img_content">
                <h3>${product[i]. title}</h3>
                <p>${product[i].text}</p>
                <div class="flex">
                    <div class="price">
                        <b>${product[i]. price} $</b>
                        <p class="gray">${product[i].grams} гр</p>
                    </div>
                    <button class="button_gradient">
                    Заказать
                    <img src="img/main/cost/6.svg" alt="">
                    </button>
                `
                section2.insertAdjacentElement('beforeend', element)
            
            }
        }
        data();
    }
}

progress.return()


