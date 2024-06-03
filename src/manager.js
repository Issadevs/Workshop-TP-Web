// eslint-disable-next-line no-unused-vars
class Product {
  constructor(id = "", name = "", desc = "", price = 0) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
  }
}

// eslint-disable-next-line no-unused-vars
class Stock {
  constructor() {
    this.list_product = [];
    this.init();
  }

  get_list_product() {
    return this.list_product;
  }

  get_prod_by_id(id) {
    for (var i = 0; i < this.list_product.length; i++) {
      if (this.list_product[i].id == id) {
        return this.list_product[i];
      }
    }
    return null;
  }

  async init (){

    try {
      const response = await fetch('http://localhost:3000/products');
      const data = await response.json();
      this.list_product = data.map(item => new Product(item.id, item.name, item.description, item.price));
    } catch (error) {
      console.error('Error product:', error);
    }
  }
}

class Cart {
  constructor() {
    this.list_cart = {};
  }

  get_list_cart() {
    return this.list_cart;
  }

  addInCart(id) {
    let elemId = null;
    for (const el in this.list_cart) {
      if (el == id) {
        elemId = id;
      }
    }
    if (elemId !== null) {
      this.addExistedElem(elemId);
    } else {
      this.addNew(id);
    }
  }
  removeFromCart(id) {
    let elemId = null;
    for (const el in this.list_cart) {
      if (el == id) {
        elemId = id;
      }
    }
    if (elemId !== null) {
      if (this.list_cart[id] == 1) {
        delete this.list_cart[id];
      } else {
        this.subExistedElem(id);
      }
    }
  }
  addNew(id) {
    this.list_cart[id] = 1;
  }

  addExistedElem(id) {
    let val = this.list_cart[id];
    this.list_cart[id] = ++val;
  }

  subExistedElem(id) {
    let val = this.list_cart[id];
    this.list_cart[id] = --val;
  }

  get_nbr_product() {
    let total = 0;
    for (const el in this.list_cart) {
      total = total + this.list_cart[el];
    }
    return total;
  }

  get_total_price(stk) {
    let total = 0;
    for (const el in this.list_cart) {
      let prd = stk.get_prod_by_id(el);
      total = total + this.list_cart[el] * prd.price;
    }
    return total;
  }
}

export { Product, Stock, Cart };
