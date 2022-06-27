class Shopping{
    handleClear(){
        ROOT_SHOPPING.innerHTML = '';
    }

    render(){
        
        let productsStore = new LocalStorageUtil().getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        productsPage.CATALOG.forEach(({id, name, price})=>{
           
            if(productsStore.indexOf(id) !== -1){
                htmlCatalog += `

                <tr>
                    <td class="shopping-element__name">⚡️ ${name}</td>
                    <td class="shopping-element__price">${price.toLocaleString()} USD</td>
                <tr/>
                `;
                sumCatalog += price
            }
        })

        const html = `
        <div class="shopping-container">
         <div class="shopping__close" onclick="shoppingPage.handleClear()"></div>
          <table>
             ${htmlCatalog}
             <tr>
             <td class="shopping-element__name">💥 Сума:</td>
             <td class="shopping-element__price">${sumCatalog.toLocaleString()} USD</td>
         <tr/>
          </table>
       </div>
        `;
        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();

