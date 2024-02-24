import './navbar.css'
import '../../fontawesome-free-6.5.1-web/css/all.min.css'
import { useState } from 'react';

function Navbar() {

    const [openProfile, setOpenProfile] = useState(false);

    return(
        <div>
  <header>
        <div class="head_content">
            <p>Buyurtmangizni bepul yetkazib beramiz!</p>
 </div>
     <nav class="navbar">
        <p class="logo">UP-WAY</p>
        <ul class="menu">
            <li><a href="">Bosh sahifa</a></li>
            <li><a href="">Kontakt</a></li>
            <li><a href="">Biz haqimizda</a></li>
            <li><a href="">Ro'yhatdan o'tish</a></li>
        </ul>
        <form  action="">
            <input class="search" type="text" placeholder="Siz nimani izlayapsiz?"/>
            <i class="fa-solid fa-magnifying-glass"></i>
        </form>
        <div class="iconca">
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-cart-shopping"></i>
            <div class="profile-dropdown">
                <div class="profile-dropdown-btn" onClick={()=>{setOpenProfile(!openProfile)}}>
                  <i class="fa-regular fa-user"></i>
                 </div>
                 <ul  className={`profile-dropdown-list ${openProfile? 'active' : 'inactive'}`}>
                  <li class="profile-dropdown-list-item">
                      <a href="#">
                          <i class="fa-regular fa-user"></i>
                          Mening akkauntim
                      </a>
                  </li>
                  <li class="profile-dropdown-list-item">
                      <a href="#">
                          <i class="fa-solid fa-bag-shopping"></i>
                          Mening buyurtmam
                      </a>
                  </li>
                  <li class="profile-dropdown-list-item">
                      <a href="#">
                          <i class="fa-regular fa-circle-xmark"></i>
                         Bekor qilish
                      </a>
                  </li>
                  <li class="profile-dropdown-list-item">
                      <a href="#">
                          <i class="fa-regular fa-star"></i>
                          <p class="star-text">Mening sharhlarim</p>
                      </a>
                  </li>
                  <li class="profile-dropdown-list-item">
                      <a href="#">
                          <i class="fa-solid fa-arrow-left"></i>
                          Chiqish
                      </a>
                  </li>
                 </ul>
              </div>
        </div>
     </nav>
     <hr class="hr-nav"/>
    </header>
        </div>
    )
    
}

export default Navbar;