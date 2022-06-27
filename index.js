
function render(){
   let productsStore = localStorageUtil.getProducts()
   
   headerPage.render(productsStore.length)
   productsPage.render()
   
}

//'server/catalog.json'
fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        productsPage.CATALOG = body;

        setTimeout(() => {
            spinnerPage.handleClear()
        render();
        },1000);
        
    })
    .catch(error => {
        error.log(error);
    })