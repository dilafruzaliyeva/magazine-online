import './footer.css';
import '../../fontawesome-free-6.5.1-web/css/all.min.css';
import icon from '../../img/icon-send.png';

function Footer() {
    return(
        <div>
   <footer>
        <div class="footer">
        <div class="footer-item">
      <p class="logo-footer">UP-WAY</p>
      <p class="footer-p">Obuna bo'ling</p>
      <p class="footer-p2">Birinchi buyurtmangizga 10% chegirma oling</p>
      <form class="form" action="">
        <input type="text" placeholder="email kiriting!"/>
        <img src={icon} alt=""/>
      </form>
    </div>
    <div class="footer-item">
        <p class="footer-p">Qo`llab quvvatlash</p>
        <p class="footer-p2" >up-way@gmail.com</p>
        <p class="footer-p2">+998999264754</p>
    </div>
    <div class="footer-item">
        <p class="footer-p">Akkount</p>
        <ul class="footer-ul">
            <li><a href="">Mening sahifam</a></li>
            <li><a href="">Kirish/Ro'yhatdan o'tish</a></li>
            <li><a href="">Shop</a></li>
            <li><a href="">Cart</a></li>
            <li><a href="">Wishlist</a></li>
        </ul>
    </div>
    <div class="footer-item">
        <p class="footer-p">Quick Link</p>
        <ul class="footer-ul">
            <li><a href="">Mahfiylik siyosati</a></li>
            <li><a href="">Foydalanish shartlari</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Kontakt</a></li>
        </ul>
    </div>
    <div class="footer-item">
        <p class="footer-p">UP-WAY ijtimoiy tarmoqlari</p>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-telegram"></i>
    </div>
</div>
<hr/>
<p class="company">UP-WAY 2024.</p>
    </footer>
        </div>
    )
    
}

export default Footer;