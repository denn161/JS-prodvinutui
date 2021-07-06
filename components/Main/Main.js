
/**
 * Функция отрисовывает в блоке Main необоходимые товары из кталога
 */
class Main{
    /**
     * Метод возвращает разметку на страницу
     */
    render() {
        let htmlContent = '';        
        CATALOG.forEach(({ id, name, img,descr, price }) => {            
            htmlContent += `<li class="products__item">
               <span class="products__name">${name}</span>
               <img class="products__img" src="${img}">
               <p class="products__text">${descr}</p>
               <span class="products__price">${price.toLocaleString()} ₽ </span>           
            </li>           
            `;
        });

        const html = `<div class="products__wrapper">        
         <ul class="products__list">
         ${htmlContent}         
         </ul>       
        </div>`;

        ROOT_MAIN.insertAdjacentHTML('beforeend', html);
       
    }
}

const mainPage = new Main();