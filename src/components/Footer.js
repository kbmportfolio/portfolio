
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Footer() {
    return (
<div class="justify-content-md-center container my-5">

  <footer class="bg-black text-center text-white">
  {/* <!-- Grid container --> */}
  <div class="container p-4 pb-0">
    {/* <!-- Section: Social media --> */}
    <section class="mb-4">
      

      {/* <!-- Linkedin --> */}
      <a class="btn btn-floating m-1" href="https://github.com/kbmportfolio" role="button"
        ><i class="bi-github ficon"></i></a>

      {/* <!-- Github --> */}
      <a class="btn btn-floating m-1" href="www.linkedin.com/in/kevanmeratinia" role="button"
        ><i class="bi-linkedin ficon"></i>
      </a>
    </section>
    {/* <!-- Section: Social media --> */}
  </div>
  

  {/* <!-- Copyright --> */}
  <div class="text-center p-3" >
    © 2023 Copyright Kevan Meratinia
    
  </div>
  {/* <!-- Copyright --> */}
</footer>
  
</div>

)
}

export default Footer;