const HomePage = {
  render() {
    return /*html*/`
    <div class="container">
      
        
      <!-- header -->
      <!-- Phần header website -->
      
<div class="jumbotron text-center" style="margin-bottom:0 ">
    <div class="shopee"><img src="../image/sds.png" alt=""></div>

<!-- <h1>SHOP QUẦN ÁO BỐN MÙA</h1> -->
</div>

<!-- Kết thúc phần header website -->

<!-- Phần menu chính -->
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<a class="navbar-brand" href="#">TRANG CHỦ</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="collapsibleNavbar">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="/about">Giới thiệu</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/product/">Liên hệ</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Hỏi & Đáp</a>
    </li>    
  </ul>
</div>  
</nav>
<!-- Kết thúc phần menu chính -->

<!-- Phần nội dung chính -->
<div class="row">

  <!-- Cột trái -->
  <div class="col-sm-4">
    <h2>Danh mục</h2>
    
    
    <ul class="nav nav-pills flex-column">
      <li class="nav-item">
        <a class="nav-link active" href="/product">Quần áo</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="">Áo khoác</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Quần bò</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Vest</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Quần bò</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Vest</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Quần bò</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Vest</a>
      </li>
    </ul>
    <hr class="d-sm-none">
  </div>
  <!-- Kết thúc cột trái -->
   
  <!-- Cột phải -->
  <div class="col-sm-8">
    <div class="fs">
        <h2>Sản phẩm mới</h2>
       <h5> Ngày 23 tháng 09, 2021</h5>
    </div>
    <div class="anhmoi"><img src="./image/ao4.jpg" alt=""></div>
    <p>Mẫu áo vest nam body fit dáng tuyệt đối phù hợp cho những sự kiện quan trọng, gặp mặt đối tác, khách hàng, cần hình ảnh chuyên nghiệp và chỉnh chu. Màu sắc trầm, không sặc sỡ thể hiện tầm quan trọng của buổi gặp mặt hay đàm phán....</p>
    
    <br>
    
  </div>
  <!-- Kết thúc cột phải -->
   
</div>
</div>
<!-- Kết thúc phần nội dung chính -->

<!-- Phần Footer -->

</div>



      <!-- sile1-->
      <div class="container">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="first-slide w-100" src="../image/ao9.jpg" alt="First slide">
            <div class="container">
              <div class="carousel-caption ">
              <h1>Áo khoác da nam</h1>
                <p>Áo khoác da nam cao cấp với chất liệu da được chọn lọc kỹ lưỡng.Áo da nam hàng hiệu chuẩn da thật</p>
                <p><a class="btn btn-lg btn-danger" href="#" role="button">Xem chi tiết</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img class="second-slide w-100 " src="../image/ao11.png" alt="Second slide">
            <div class="container">
              <div class="carousel-caption">
              <h1 class="text-danger" style="border: 1px inset #15b21f; back-ground: blue">VEST NAM ĐẸP</h1>
              <p>Xu hướng cổ điển đang ngự trị trong những năm gần đây và không ngoại lệ trong những mẫu vest cưới hot nhất 2021.</p>
                <p><a class="btn btn-lg btn-danger" href="#" role="button">Xem chi tiết</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img class="third-slide w-100" src="../image/ao6.jpg" alt="Third slide">
            <div class="container">
              <div class="carousel-caption text-right">
                <h1>One more for good measure.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><a class="btn btn-lg btn-danger" href="#" role="button">Xem chi tiết</a></p>
              </div>
            </div>
          </div>
      </div>
        <!--<a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>-->
    </div>
    </div>
    </div>

    <hr>
    


    

      <!-- article -->
     
      <div class="album py-5 bg-light">
          <div class="container">
          <h1>ÁO KHOÁC</h1>
            <div class="row">
              <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                  <img class="card-img-top" src="./image/ao6.jpg" alt="Card image cap">
                  <div class="card-body">
                    <p class="card-text">Áo Khoác Da Nam Lót Lông Cao Cấp AKD20</p>
                    <p class="card-text">Giá: 1. 298.000 ₫  </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary"><a href="">Xem</a></button>
                        <button type="button" class="btn btn-sm btn-outline-secondary"><a href="">Thêm vào giỏ hàng</a></button>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                  <img class="card-img-top" src="./image/ag.jpg" alt="Card image cap">
                  <div class="card-body">
                    <p class="card-text">Áo giáp cao cấp LS2 AIRY MAN JACKET 2 mặt</p>
                    <p class="card-text">Giá: 1.800.000 ₫  </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary"><a href="">Xem</a></button>
                        <button type="button" class="btn btn-sm btn-outline-secondary"><a href="">Thêm vào giỏ hàng</a></button>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                  <img class="card-img-top" src="./image/ac.jpg" alt="Card image cap">
                  <div class="card-body">
                    <p class="card-text">Áo khoác dù Hahaman dạ quang 2 lớp cao cấp cổ đứng AKD01003</p>
                    <p class="card-text">Giá: 159.000 ₫  </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary"><a href="">Xem</a></button>
                        <button type="button" class="btn btn-sm btn-outline-secondary"><a href="">Thêm vào giỏ hàng</a></button>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                  <img class="card-img-top" src="./image/ao6.jpg" alt="Card image cap">
                  <div class="card-body">
                    <p class="card-text"></p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary"><a href="">Xem</a></button>
                        <button type="button" class="btn btn-sm btn-outline-secondary"><a href="">Thêm vào giỏ hàng</a></button>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                  <img class="card-img-top" src="./image/ao6.jpg" alt="Card image cap">
                  <div class="card-body">
                    <p class="card-text"></p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary"><a href="">Xem</a></button>
                        <button type="button" class="btn btn-sm btn-outline-secondary"><a href="">Thêm vào giỏ hàng</a></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                  <img class="card-img-top" src="./image/ao6.jpg" alt="Card image cap">
                  <div class="card-body">
                    <p class="card-text"></p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary"><a href="">Xem</a></button>
                        <button type="button" class="btn btn-sm btn-outline-secondary"><a href="">Thêm vào giỏ hàng</a></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                  <img class="card-img-top" src="./image/ao6.jpg" alt="Card image cap">
                  <div class="card-body">
                    <p class="card-text"></p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary"><a href="">Xem</a></button>
                        <button type="button" class="btn btn-sm btn-outline-secondary"><a href="">Thêm vào giỏ hàng</a></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                  <img class="card-img-top" src="./image/ao6.jpg" alt="Card image cap">
                  <div class="card-body">
                    <p class="card-text"></p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary"><a class="text-decoration: none" href="">Xem</a></button>
                        <button type="button" class="btn btn-sm btn-outline-secondary"><a href="">Thêm vào giỏ hàng</a></button>
                      </div>
                      <small class="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                  <img class="card-img-top" src="./image/ao6.jpg" alt="Card image cap">
                  <div class="card-body">
                    <p class="card-text"></p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary"><a class="no" href="">Xem</a></button>
                        <button type="button" class="btn btn-sm btn-outline-secondary"><a href="">Thêm vào giỏ hàng</a></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <!-- footer 
            <footer class="row" style="">
      <article class="col-3">
        <h4>Chăm sóc khách hàng</h4>
        <div>
          <ul>
            <li><a href="">Trung tâm trợ giúp</a></li>
            <li><a href="">Vận chuyển</a></li>
            <li><a href="">Hướng dẫn mua hàng</a></li>
            <li><a href="">Hướng dẫn bán hàng</a></li>
          </ul>
        </div>
      </article>
      <article class="col-3">
        <h4>Về shop S</h4>
        <div>
          <ul>
            <li><a href="">Giới thiệu về shop S</a></li>
            <li><a href="">Điều khoản</a></li>
            <li><a href="">Chính sách bảo mật</a></li>
            <li><a href="">Kênh người bán</a></li>
          </ul>
        </div>
      </article>
      <article class="col-3">
        <h4>Thanh toán</h4>
        <div>
          <a href=""><img src="../image/app.png" alt=""></a>
        </div>
      </article>
      <article class="col-3">
    </footer>
    
          -->
      
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
    
    <!-- <div id="root"></div>
        <ul>
          <li><a href="/">Home page</a></li>
          <li><a href="/about">About page</a></li>
        </ul>
      </div> -->
    <!-- <div id="nav"></div> -->
    `
  }
}
export default HomePage;