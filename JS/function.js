export const obgectBurger = {
    async render(section, product, carentText) {
        section.innerHTML = "";
        for (let i = 0; i < product.length; i++) {
            const element = document.createElement('div');
            element.classList.add('section2_block');
            element.innerHTML = `
            <img src="${product[i].img}" alt="" class="img_content">
            <h3>${product[i].title}</h3>
            <p>${product[i].text}</p>
            <div class="flex">
                <div class="price">
                    <b>${product[i].price} ${carentText}</b>
                    <p class="gray">${product[i].grams} гр</p>
                </div>
                <button class="button_gradient button_list">
                Заказать
                <img src="img/main/cost/6.svg" alt="">
                </button>
            `
            section.insertAdjacentElement('beforeend', element)
        }
    }
}
export async function progress(section, state) {
    for (let i = 0; i < state.length; i++) {
        const element = document.createElement('div');
        element.classList.add('section1_block');
        element.innerHTML = `
        <img src="${state[i].img}" alt="">
        <h3>${state[i].title}</h3>
        <p>${state[i].text}</p>
        `
        section.insertAdjacentElement('beforeend', element)
    }
}