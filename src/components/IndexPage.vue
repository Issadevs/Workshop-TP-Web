<template>
  <div class="IndexPage">
    <br />
    <div class="row">
      <!-- Product list -->
      <div class="col-md-9">
        <div class="row gx-4 gy-4 row-cols-3">
          <div class="col" v-for="(product, id) in list_products" :key="id">
            <div class="p-3 border bg-light">
              <h5>{{ product.name }}</h5>
              <p>{{ product.desc }}</p>
              <p>{{ product.price }}</p>
              <button
                type="button"
                class="btn btn-success btn-sm"
                v-on:click="add_to_cart(product.id)"
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Cart -->
      <div class="col-6 col-md-3">
        <div class="col">
          <div class="p-3 border bg-success">
            <h5>Cart</h5>
          </div>
        </div>
        <div class="row gx-4 row-cols-1">
          <div class="col" v-for="(value, id) in list_cart" :key="id">
            <div class="p-3 border bg-light">
              <h5>{{ get_product_name(id) }}</h5>
              <h6>Quantité : {{ value }}</h6>
              <button
                type="button"
                class="btn btn-success btn-sm"
                v-on:click="remove_from_cart(id)"
              >
                Supprimer
              </button>
            </div>
          </div>
          <!-- show total -->
          <div class="col">
            <div class="p-3 border bg-success">
              <h5>Total : {{ total_price }}</h5>
              <h6>Nombre de produits : {{ nbr_product }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Stock, Cart } from "../manager";

export default {
  name: "IndexPage",
  data: function () {
    return {
      stock: {},
      cart: {},
      list_products: [],
      list_cart: {},
      total_price: 0,
      nbr_product: 0,
    };
  },
  created() {
    this.stock = new Stock();
    this.cart = new Cart();
    this.list_products = this.stock.get_list_product();
  },
  methods: {
    add_to_cart(id) {
      this.cart.addInCart(id);
      this.update_cart();
    },
    get_product_name(id) {
      const product = this.stock.get_prod_by_id(id);
      return product ? product.name : "";
    },
    update_cart() {
      this.list_cart = this.cart.get_list_cart();
      this.update_total();
    },
    update_total() {
      this.total_price = this.cart.get_total_price(this.stock);
      this.nbr_product = this.cart.get_nbr_product();
    },
    remove_from_cart(id) {
      this.cart.removeFromCart(id);
      this.update_cart();
    },
  },
};
</script>

<style scoped></style>
