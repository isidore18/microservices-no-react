import faker from 'faker';

const mount = (el) => {
    let products = '';
    
    for (let i = 0; i < 5; i++) {
      const name = faker.commerce.productName();
      products += `<div>${name}</div>`;
    }
    
    el.innerHTML = products;
}

/* Context/situation #1 
    We are running this file in developlment in isolation
    we are using our local index.html file
    which DEFINITELY has an el with an id of dev-product
    so we want to render our app immediately in that el
*/

if(process.env.NODE_ENV === 'development') {
    /* assumming our container doesn't have an el with an id of dev-products */
    const el = document.querySelector('#dev-products');
    if (el) {
        mount(el)   
    }  
    // we are probably running in isolation
}

/* Context/situation #2
    We are NOT running this file in developlment in isolation
    we are NOT using our local index.html file
    which DEFINITELY DOESNT have an el with an id of dev-product
    so we DO NOT want to render our app immediately in that el
*/

export {mount}