import products from "./data";
const ProductPage ={
   render(){
    
    return /*html*/`
      


  <div class="container">
        
    <!-- header -->
    <!-- Phần header website -->
    
      <div class="jumbotron text-center" style="margin-bottom:0 ">
        <div class="shopee"><img src="../image/sds.png" alt=""></div>
      </div>

      <!-- Kết thúc phần header website -->

    <!-- Phần menu chính -->
          <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <a class="navbar-brand" href="/">TRANG CHỦ</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/about">Giới thiệu</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Liên hệ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Hỏi & Đáp</a>
            </li>    
          </ul>
          </div>  
          </nav>
        <!-- Kết thúc phần menu chính -->

        <!-- Phần nội dung chính -->
        
      <div class="album py-5 bg-light">
      <div class="container">
      <h1>PRODUCT</h1>
        <div class="row">
          <div class="col-md-4">
            <div class="card mb-4 box-shadow">
              <img class="card-img-top" src="./image/ao6.jpg" alt="Card image cap">
              <div class="card-body">
                <p class="card-text">Áo Khoác Da Nam Lót Lông Cao Cấp AKD20</p>
                <p class="card-text">Giá: 1.298.000 ₫  </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">Xem</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Thêm vào giỏ hàng</button>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          
          
          <!--<div class="grid-cols-4 gap-8">-->
          ${products.map(product =>{
            return /*html*/`
              <div><a href="/product/${product.id}"></a></div>
              <div><img src="" width="100"></div>
              <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src="${product.ima}" alt="Card image cap">
                <div class="card-body">
                  <p class="card-text">${product.name}</p>
                  <p class="card-text">${product.price}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">Xem</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Thêm vào giỏ hàng</button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            `
          }).join("")}
        </div>
          </div>
        </div>
      </div>
      </div>
    
      
      <!-- Cột trái -->

  

        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <!------ Include the above in your HEAD tag ---------->
        
        <!-- Footer -->
          <section id="footer">
            <div class="container">
              <div class="row text-center text-xs-center text-sm-left text-md-left">
                <div class="col-xs-12 col-sm-4 col-md-4">
                  <h5>Chăm sóc khách hàng</h5>
                  <ul class="list-unstyled quick-links">
                    <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Trung tâm hỗ trợ</a></li>
                    <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Hướng dẫn mua hàng</a></li>
                    <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Hướng dẫn bán hàng</a></li>
                    <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Chính sách bảo mật</a></li>
                    <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Trả hàng & hoàn tiền</a></li>
                  </ul>
                </div>
                <div class="col-xs-12 col-sm-4 col-md-4">
                  <h5>Về chúng tôi</h5>
                  <ul class="list-unstyled quick-links">
                    <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Giới thiệu về shop</a></li>
                    <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Điều khoản</a></li>
                    <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Chính sách bảo mật</a></li>
                    <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Chính hãng</a></li>
                    <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Tuyển dụng</a></li>
                  </ul>
                </div>
                <div class="col-xs-12 col-sm-4 col-md-4">
                  <h5>Theo dõi chúng tôi trên</h5>
                  <ul class="list-unstyled quick-links">
                    <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Facebook</a></li>
                    <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Instagram</a></li>
                    <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Linkedln</a></li>
                  </ul>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                  <ul class="list-unstyled list-inline social text-center">
                    <li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-facebook"></i></a></li>
                    <li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-instagram"></i></a></li>
                    <li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-google-plus"></i></a></li>
                    <li class="list-inline-item"><a href="javascript:void();" target="_blank"><i class="fa fa-envelope"></i></a></li>
                  </ul>
                </div>
                <hr>
              </div>  
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                  <p><u><a href="https://www.nationaltransaction.com/"></a></u>Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
                  Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)
                  Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</p>
                </div>
                <hr>
              </div>  
            </div>
          </section>
          <!-- ./Footer -->

    </div>  

    
  </div>
      
    `
  }
}
export default ProductPage;