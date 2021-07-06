
class Header{
    constructor() {
        this.labelAdd = "Добавить";
        this.labelRemove = "Очистить";
    }
    clickOpenBasket() {        
        mainPage.render();      
    }
    clearBasket() {
        ROOT_MAIN.innerHTML = "";
    }
    render() {
        const htmlHeader = `
        <div class="header__inner">
         <button class="header__btn" onclick="headerPage.clickOpenBasket();">
         ${this.labelAdd}</button>
            <button class="header__btn" onclick="headerPage.clearBasket();">
         ${this.labelRemove}</button>                
        </div>         
        `;
        ROOT_HEADER.insertAdjacentHTML('afterbegin', htmlHeader);
    }
}

const headerPage = new Header();

