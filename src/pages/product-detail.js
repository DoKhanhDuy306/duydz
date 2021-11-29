import products from "./data";
const ProductDetailPage = {
  render(id) {
    const product = products ? products.find(item => item.id === +id) :[];
    return /*html*/`
      <h2>${product.name}</h2>
      <div><img src="${product.ima}" alt=""></div>
      <div>${product.price}</div>
      <button class="btn btn-">Add</button>
    `
  }
}
export default ProductDetailPage;