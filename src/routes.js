import Navigo from "navigo";
import Nav from "./components/nav";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import ProductDetailPage from "./pages/product-detail";
import ProductPage from "./pages/product";

const router = new Navigo("/", { hash: true, linksSelector: "a" });

const display = (page) => {
    //document.querySelector('#nav').innerHTML = Nav.render();
    document.querySelector('#root').innerHTML = page;
}

const routes = () => {
    router
        .on("/", () => display(HomePage.render()))
        .on("/about", () => display(AboutPage.render()))
        .on("/product", () => display(ProductPage.render()))
        .on("/product/:id", ({data}) =>{
            console.log('data',data)
            const id = data.id;
            display(ProductDetailPage.render(id))
        }) 
        .notFound(() => {
            console.log("Not Found Page");
        })
        .resolve();
}
export default routes;
