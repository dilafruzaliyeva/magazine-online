import './home-page.css'
import '../../fontawesome-free-6.5.1-web/css/all.min.css'
import ser1 from '../../img/Services.png'
import ser2 from '../../img/Services (1).png'
import ser3 from '../../img/Services (2).png'
import ele from '../../img/ele.png'
import Rectangle18 from '../../img/Rectangle 18.png'
import g92 from '../../img/g92-2-500x500 1.png'
import g27 from '../../img/g27cq4-500x500 1.png'
import gam from '../../img/gammaxx-l240-argb-1-500x500 1.png'
import ak from '../../img/ak-900-01-500x500 1.png'
import camera from '../../img/Category-Camera (1).png'
import headp from '../../img/Category-Headphone.png'
import phone from '../../img/Category-CellPhone.png'
import gamepad from '../../img/Category-Gamepad.png'
import swatch from '../../img/Category-SmartWatch (1).png'
import computer from '../../img/Category-Computer.png'
import gp11 from '../../img/GP11_PRD3 1.png'
import jbl from '../../img/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png'
import ps5 from '../../img/ps5-slim-goedkope-playstation_large 1.png'
import a69 from '../../img/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1@2x.png'

function Homepage() {
    
const initSlider2 =()=>{
    const imageList = document.querySelector(".category-item .category-list");
    const slideButtons = document.querySelectorAll(".scroll2 .slide-button2");

    slideButtons.forEach(button =>{
        button.addEventListener("click", ()=>{
            // console.log(button);
            const direction = button.id === "prev-slide2" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"});
        });
    });
}
window.addEventListener("load", initSlider2);

const initSlider3 =()=>{
    const imageList = document.querySelector(".slider-our-product .product-list");
    const slideButtons = document.querySelectorAll(".scroll3 .slide-button3");

    slideButtons.forEach(button =>{
        button.addEventListener("click", ()=>{
            // console.log(button);
            const direction = button.id === "prev-slide3" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"});
        });
    });
}
window.addEventListener("load", initSlider3);
    return(
        <div className='body'>
    <main>
        <div class="slider-main">
        <div class="slider">
            <div class="slides">
                <input type="radio" name="radio-btn" id="radio1"/>
                <input type="radio" name="radio-btn" id="radio2"/>
                <input type="radio" name="radio-btn" id="radio3"/>
                <input type="radio" name="radio-btn" id="radio4"/>
                <div class="slide first">
                     <img src={ele} alt=""/>
                </div>
                <div class="slide">
                    {/* <img src={image} alt=""/> */}
               </div>
               <div class="slide">
                {/* <img src={image} alt=""/> */}
           </div>
           <div class="slide">
            {/* <img src={image} alt=""/> */}
       </div>
       <div class="navigation-auto">
        <div class="auto-btn1"></div>
        <div class="auto-btn2"></div>
        <div class="auto-btn3"></div>
        <div class="auto-btn4"></div>
       </div>
            </div>
            <div class="navigation-manual">
                <label for="radio1" class="manual-btn"></label>
                <label for="radio2" class="manual-btn"></label>
                <label for="radio3" class="manual-btn"></label>
                <label for="radio4" class="manual-btn"></label>
            </div>
        </div>
    </div>
    <section class="container">
            <div class="day">
            <img src={Rectangle18} alt=""/>
            <p>Bugungi</p>
        </div>
        <div class="sale-time">
            <p class="title-p">Chegirmalar vaqti</p>
             <div class="time">
            <div class="days">
                <h5>Kun</h5>
                <h2>03</h2>
            </div>
            <p class="point">:</p>
            <div class="hours">
                <h5>Soat</h5>
                <h2>23</h2>
            </div>
            <p class="point">:</p>
            <div class="minutes">
                <h5>Minut</h5>
                <h2>19</h2>
            </div>
            <p class="point">:</p>
            <div class="seconds">
                <h5>Sikund</h5>
                <h2>56</h2>
            </div>
        </div>
             <div class="scroll">
                <button onClick={initSlider2()} id="prev-slide" class="slide-button">{'<'}</button>
                <button onClick={initSlider2()} id="next-slide" class="slide-button">{'>'}</button>
            </div>
        </div>
        <div class="slider-wrapper">
            <div class="image-list">
        <div class="product">
            <div class="product-img">
               <p class="discount">-40%</p>
               <div class="product-iconca">
               <div class="heart">
                <i class="fa-regular fa-heart"></i>
            </div>
            <div class="shopping">
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div class="eye">
                <i class="fa-regular fa-eye"></i>
            </div>
        </div>
                <img src={g92} alt=""/>
            </div>
            <div class="slider-text">
                <p class="category">HAVIT HV-G92 Gamepad</p>
             <div class="price-buy">
                <p class="sale">35 990 so`m</p>
                <del class="price">
                    <p>75 430 so`m</p>
                </del>
             </div>
             <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            </div>
        </div>
        <div class="product">
            <div class="product-img">
            <p class="discount">-30%</p>
            <div class="product-iconca">
            <div class="heart">
            <i class="fa-regular fa-heart"></i>
        </div>
        <div class="shopping">
            <i class="fa-solid fa-cart-shopping"></i>
        </div>
        <div class="eye">
            <i class="fa-regular fa-eye"></i>
        </div>
    </div>
                <img src={g27} alt=""/>
            </div>
            <div class="details">
                <p class="category">IPS LCD Gaming Monitor</p>
             <div class="price-buy">
                <p class="sale">35 990 ₽</p>
                <del class="price">
                    <p>75 430 ₽</p>
                </del>
             </div>
            </div>
            <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
        </div>
        <div class="product">
            <div class="product-img">
            <p class="discount">-30%</p>
            <div class="product-iconca">
            <div class="heart">
            <i class="fa-regular fa-heart"></i>
        </div>
        <div class="shopping">
            <i class="fa-solid fa-cart-shopping"></i>
        </div>
        <div class="eye">
            <i class="fa-regular fa-eye"></i>
        </div>
    </div>
                <img src={gam} alt=""/>
            </div>
            <div class="details">
                <p class="category">RGB liquid CPU Cooler</p>
             <div class="price-buy">
                <p class="sale">35 990 ₽</p>
                <del class="price">
                    <p>75 430 ₽</p>
                </del>
             </div>
            </div>
            <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
        </div>
        <div class="product">
            <div class="product-img">
            <p class="discount">-30%</p>
            <div class="product-iconca">
            <div class="heart">
            <i class="fa-regular fa-heart"></i>
        </div>
        <div class="shopping">
            <i class="fa-solid fa-cart-shopping"></i>
        </div>
        <div class="eye">
            <i class="fa-regular fa-eye"></i>
        </div>
    </div>
                <img src={ak} alt=""/>
            </div>
            <div class="details">
                <p class="category">AK-900 Wired Keyboard</p>
             <div class="price-buy">
                <p class="sale">35 990 ₽</p>
                <del class="price">
                    <p>75 430 ₽</p>
                </del>
             </div>
             <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            </div>
        </div>
        <div class="product">
            <div class="product-img">
               <p class="discount">-40%</p>
               <div class="product-iconca">
               <div class="heart">
                <i class="fa-regular fa-heart"></i>
            </div>
            <div class="shopping">
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div class="eye">
                <i class="fa-regular fa-eye"></i>
            </div>
        </div>
                <img src={g92} alt=""/>
            </div>
            <div class="slider-text">
                <p class="category">HAVIT HV-G92 Gamepad</p>
             <div class="price-buy">
                <p class="sale">35 990 ₽</p>
                <del class="price">
                    <p>75 430 ₽</p>
                </del>
             </div>
             <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            </div>
        </div>
        <div class="product">
            <div class="product-img">
            <p class="discount">-30%</p>
            <div class="product-iconca">
            <div class="heart">
            <i class="fa-regular fa-heart"></i>
        </div>
        <div class="shopping">
            <i class="fa-solid fa-cart-shopping"></i>
        </div>
        <div class="eye">
            <i class="fa-regular fa-eye"></i>
        </div>
    </div>
                <img src={g27} alt=""/>
            </div>
            <div class="details">
                <p class="category">IPS LCD Gaming Monitor</p>
             <div class="price-buy">
                <p class="sale">35 990 ₽</p>
                <del class="price">
                    <p>75 430 ₽</p>
                </del>
             </div>
            </div>
            <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
        </div>
        <div class="product">
            <div class="product-img">
            <p class="discount">-30%</p>
            <div class="product-iconca">
            <div class="heart">
            <i class="fa-regular fa-heart"></i>
        </div>
        <div class="shopping">
            <i class="fa-solid fa-cart-shopping"></i>
        </div>
        <div class="eye">
            <i class="fa-regular fa-eye"></i>
        </div>
    </div>
                <img src={gam} alt=""/>
            </div>
            <div class="details">
                <p class="category">RGB liquid CPU Cooler</p>
             <div class="price-buy">
                <p class="sale">35 990 so`m</p>
                <del class="price">
                    <p>75 430 s`om</p>
                </del>
             </div>
            </div>
            <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
        </div>
        <div class="product">
            <div class="product-img">
            <p class="discount">-30%</p>
            <div class="product-iconca">
            <div class="heart">
            <i class="fa-regular fa-heart"></i>
        </div>
        <div class="shopping">
            <i class="fa-solid fa-cart-shopping"></i>
        </div>
        <div class="eye">
            <i class="fa-regular fa-eye"></i>
        </div>
    </div>
                <img src={ak} alt=""/>
            </div>
            <div class="details">
                <p class="category">AK-900 Wired Keyboard</p>
             <div class="price-buy">
                <p class="sale">35 990 ₽</p>
                <del class="price">
                    <p>75 430 ₽</p>
                </del>
             </div>
             <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            </div>
        </div>
</div>
</div>
<button class="product-btn">Barcha mahsulotni ko`rish</button>
<hr class="hr"/>
    </section>
    <div class="category-content">
        <div class="day">
            <img src={Rectangle18} alt=""/>
            <p>Kategoriyalar</p>
        </div>
        <div class="category-head">
            <p class="title-p">Turkum bo`yicha ko`rib chiqish</p>
            <div class="scroll2">
                <button id="prev-slide2" class="slide-button2">{'<'}</button>
                <button id="next-slide" class="slide-button2">{'>'}</button>
            </div>
        </div>
         <div class="category-item">
            <div class="category-list">
            <div class="category-about">
                <img src={phone} alt=""/>
                <p>Telefon</p>
            </div>
            <div class="category-about">
                <img src={camera} alt=""/>
                <p>Kamera</p>
            </div>
            <div class="category-about">
                <img src={computer} alt=""/>
                <p>Kompyuter</p>
            </div>
            <div class="category-about">
                <img src={gamepad} alt=""/>
                <p>Geympad</p>
            </div>
            <div class="category-about">
                <img src={headp} alt=""/>
                <p>Naushnik</p>
            </div>
            <div class="category-about">
                <img src={swatch} alt=""/>
                <p>SmartWatch</p>
            </div>
            <div class="category-about">
                <img src={phone} alt=""/>
                <p>Telefon</p>
            </div>
            <div class="category-about">
                <img src={camera} alt=""/>
                <p>Kamera</p>
            </div>
            <div class="category-about">
                <img src={computer} alt=""/>
                <p>Kompyuter</p>
            </div>
            <div class="category-about">
                <img src={gamepad} alt=""/>
                <p>Geympad</p>
            </div>
            <div class="category-about">
                <img src={headp} alt=""/>
                <p>Naushnik</p>
            </div>
            <div class="category-about">
                <img src={swatch} alt=""/>
                <p>SmartWatch</p>
            </div>
         </div>
        </div>
        <hr class="hr"/>
    </div>
    <section class="this-month">
        <div class="day">
            <img src={Rectangle18} alt=""/>
            <p>Shu oy</p>
        </div>
        <div class="category-head">
            <p class="title-p">Eng ko'p sotiladigan mahsulotlar</p>
                <button class="best-sell">Hammasini ko'rish</button>
        </div>
        <div class="best-sell-product">
            <div class="product">
                <div class="product-img">
                <div class="product-iconca">
                <div class="heart">
                <i class="fa-regular fa-heart"></i>
            </div>
            <div class="shopping">
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div class="eye">
                <i class="fa-regular fa-eye"></i>
            </div>
        </div>
                    <img src="img/ipone.png" alt=""/>
                </div>
                <div class="details">
                    <p class="category">AK-900 Wired Keyboard</p>
                 <div class="price-buy">
                    <p class="sale">35 990 so'm</p>
                    <del class="price">
                        <p>75 430 so'm</p>
                    </del>
                 </div>
                 <div class="star-up">
                 <div class="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <p class="star-up-p">(86)</p>
            </div>
                </div>
            </div>
            <div class="product">
                <div class="product-img">
                <div class="product-iconca">
                <div class="heart">
                <i class="fa-regular fa-heart"></i>
            </div>
            <div class="shopping">
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div class="eye">
                <i class="fa-regular fa-eye"></i>
            </div>
        </div>
                    <img src="img/ipone.png" alt=""/>
                </div>
                <div class="details">
                    <p class="category">AK-900 Wired Keyboard</p>
                 <div class="price-buy">
                    <p class="sale">35 990 so'm</p>
                    <del class="price">
                        <p>75 430 so'm</p>
                    </del>
                 </div>
                 <div class="star-up">
                 <div class="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <p class="star-up-p">(86)</p>
            </div>
                </div>
            </div>
            <div class="product">
                <div class="product-img">
                <div class="product-iconca">
                <div class="heart">
                <i class="fa-regular fa-heart"></i>
            </div>
            <div class="shopping">
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div class="eye">
                <i class="fa-regular fa-eye"></i>
            </div>
        </div>
                    <img src="img/ipone.png" alt=""/>
                </div>
                <div class="details">
                    <p class="category">AK-900 Wired Keyboard</p>
                 <div class="price-buy">
                    <p class="sale">35 990 so'm</p>
                    <del class="price">
                        <p>75 430 so'm</p>
                    </del>
                 </div>
                 <div class="star-up">
                 <div class="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <p class="star-up-p">(86)</p>
            </div>
                </div>
            </div>
            <div class="product">
                <div class="product-img">
                <div class="product-iconca">
                <div class="heart">
                <i class="fa-regular fa-heart"></i>
            </div>
            <div class="shopping">
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div class="eye">
                <i class="fa-regular fa-eye"></i>
            </div>
        </div>
                    <img src="img/ipone.png" alt=""/>
                </div>
                <div class="details">
                    <p class="category">AK-900 Wired Keyboard</p>
                 <div class="price-buy">
                    <p class="sale">35 990 so'm</p>
                    <del class="price">
                        <p>75 430 so'm</p>
                    </del>
                 </div>
                 <div class="star-up">
                 <div class="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <p class="star-up-p">(86)</p>
            </div>
                </div>
            </div>
        </div>
    </section>
    <div class="content-music">
        <div class="music">
            <p class="music-p">Kategoriyalar</p>
            <h3>Musiqa <br/> tajribangizni oshiring</h3>
            <div class="music-time">
                <div class="time-hour">
                    <p class="time-number">23</p>
                    <p class="time-text">Hours</p>
                </div>
                <div class="time-day">
                    <p class="time-number">05</p>
                    <p class="time-text">Days</p>
                </div>
                <div class="time-minute">
                    <p class="time-number">59</p>
                    <p class="time-text">Minutes</p>
                </div>
                <div class="time-second">
                    <p class="time-number">35</p>
                    <p class="time-text">Seconds</p>
                </div>
            </div>
            <button class="buy-now">Hozir harid qilish!</button>
        </div>
        <img src={jbl} alt=""/>
    </div>
    <section class="our-product">
        <div class="day">
            <img src={Rectangle18} alt=""/>
            <p>Mahsulotlarimiz</p>
        </div>
        <div class="category-head">
            <p class="title-p">Mahsulotlarimiz bilan tanishing</p>
            <div class="scroll3">
                <button id="prev-slide3" class="slide-button3">{'<'}</button>
                <button id="next-slide3" class="slide-button3">{'>'}</button>
            </div>
        </div>
        <div class="slider-our-product">
            <div class="product-list">
                <div class="product">
                    <div class="product-img">
                    <div class="product-iconca">
                    <div class="heart">
                    <i class="fa-regular fa-heart"></i>
                </div>
                <div class="shopping">
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <div class="eye">
                    <i class="fa-regular fa-eye"></i>
                </div>
            </div>
                        <img src="img/ipone.png" alt=""/>
                    </div>
                    <div class="details">
                        <p class="category">AK-900 Wired Keyboard</p>
                     <div class="star-up2">
                        <p class="sale">35 990 so'm</p>
                     <div class="star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <p class="star-up-p">(86)</p>
                </div>
                    </div>
                </div>
                <div class="product">
                    <div class="product-img">
                    <div class="product-iconca">
                    <div class="heart">
                    <i class="fa-regular fa-heart"></i>
                </div>
                <div class="shopping">
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <div class="eye">
                    <i class="fa-regular fa-eye"></i>
                </div>
            </div>
                        <img src="img/ipone.png" alt=""/>
                    </div>
                    <div class="details">
                        <p class="category">AK-900 Wired Keyboard</p>
                     <div class="star-up2">
                        <p class="sale">35 990 so'm</p>
                     <div class="star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <p class="star-up-p">(86)</p>
                </div>
                    </div>
                </div>
                <div class="product">
                    <div class="product-img">
                    <div class="product-iconca">
                    <div class="heart">
                    <i class="fa-regular fa-heart"></i>
                </div>
                <div class="shopping">
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <div class="eye">
                    <i class="fa-regular fa-eye"></i>
                </div>
            </div>
                        <img src="img/ipone.png" alt=""/>
                    </div>
                    <div class="details">
                        <p class="category">AK-900 Wired Keyboard</p>
                     </div>
                     <div class="star-up2">
                        <p class="sale">35 990 so'm</p>
                     <div class="star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <p class="star-up-p">(86)</p>
                </div>
                    </div>
                <div class="product">
                    <div class="product-img">
                    <div class="product-iconca">
                    <div class="heart">
                    <i class="fa-regular fa-heart"></i>
                </div>
                <div class="shopping">
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <div class="eye">
                    <i class="fa-regular fa-eye"></i>
                </div>
            </div>
                        <img src="img/ipone.png" alt=""/>
                    </div>
                    <div class="details">
                        <p class="category">AK-900 Wired Keyboard</p>
                        <div class="star-up2">
                            <p class="sale">35 990 so'm</p>
                         <div class="star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="star-up-p">(86)</p>
                    </div>
                    </div>
                </div>
                <div class="product">
                    <div class="product-img">
                    <div class="product-iconca">
                    <div class="heart">
                    <i class="fa-regular fa-heart"></i>
                </div>
                <div class="shopping">
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <div class="eye">
                    <i class="fa-regular fa-eye"></i>
                </div>
            </div>
                        <img src="img/ipone.png" alt=""/>
                    </div>
                    <div class="details">
                        <p class="category">AK-900 Wired Keyboard</p>
                        <div class="star-up2">
                            <p class="sale">35 990 so'm</p>
                         <div class="star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="star-up-p">(86)</p>
                    </div>
                    </div>
                </div>
                <div class="product">
                    <div class="product-img">
                    <div class="product-iconca">
                    <div class="heart">
                    <i class="fa-regular fa-heart"></i>
                </div>
                <div class="shopping">
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <div class="eye">
                    <i class="fa-regular fa-eye"></i>
                </div>
            </div>
                        <img src="img/ipone.png" alt=""/>
                    </div>
                    <div class="details">
                        <p class="category">AK-900 Wired Keyboard</p>
                        <div class="star-up2">
                            <p class="sale">35 990 so'm</p>
                         <div class="star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="star-up-p">(86)</p>
                    </div>
                    </div>
                </div>
                <div class="product">
                    <div class="product-img">
                    <div class="product-iconca">
                    <div class="heart">
                    <i class="fa-regular fa-heart"></i>
                </div>
                <div class="shopping">
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <div class="eye">
                    <i class="fa-regular fa-eye"></i>
                </div>
            </div>
                        <img src="img/ipone.png" alt=""/>
                    </div>
                    <div class="details">
                        <p class="category">AK-900 Wired Keyboard</p>
                        <div class="star-up2">
                            <p class="sale">35 990 so'm</p>
                         <div class="star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="star-up-p">(86)</p>
                    </div>
                    </div>
                </div>
                <div class="product">
                    <div class="product-img">
                    <div class="product-iconca">
                    <div class="heart">
                    <i class="fa-regular fa-heart"></i>
                </div>
                <div class="shopping">
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <div class="eye">
                    <i class="fa-regular fa-eye"></i>
                </div>
            </div>
                        <img src="img/ipone.png" alt=""/>
                    </div>
                    <div class="details">
                        <p class="category">AK-900 Wired Keyboard</p>
                        <div class="star-up2">
                            <p class="sale">35 990 so'm</p>
                         <div class="star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="star-up-p">(86)</p>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            <button class="product-btn">Barcha mahsulotni ko'rish</button>
    </section>
    <div class="featured">
        <div class="day">
            <img src={Rectangle18} alt=""/>
            <p>Tavsiya etilgan</p>
        </div>
        <div class="category-head">
            <p class="title-p">Yangi kelgan</p>
        </div>
        <div class="new-arrival">
            <div class="new-arrival1">
                <img class="new-arrival-img" src={ps5} alt=""/>
                <div class="new-arrival-text">
                    <h5 class="new-arrival-category">PlayStation 5</h5>
                    <p class="new-arrival-p">PS5 ning qora va oq versiyasi sotuvga chiqariladi.</p>
                    <a class="new-arrival-a" href="">Hoziroq harid qilish</a>
                </div>
            </div>
            <div class="new-arrival2">
            <div class="new-arrival2-1">
                <div class="new-arrival-text2">
                    <h5 class="new-arrival-category">GP11 Shooter USB Gamepad</h5>
                    <p class="new-arrival-p">PS5 ning qora va oq versiyasi sotuvga chiqariladi.</p>
                    <a class="new-arrival-a" href="">Hoziroq harid qilish</a>
                </div>
                <img  src={gp11} alt=""/>
            </div>
            <div class="new-arrival2-2">
                <div class="new-arrival2-3">
<img class="new-arrival-img2" src={a69} alt=""/>
<div class="new-arrival-text3">
    <h5 class="new-arrival-category">Spikerlar</h5>
    <p class="new-arrival-p">Amazon simsiz dinamiklari</p>
    <a class="new-arrival-a" href="">Hoziroq harid qilish</a>
</div>
                </div>
                <div class="new-arrival2-3">
                    <img class="new-arrival-img2" src={a69} alt=""/>
                    <div class="new-arrival-text3">
                        <h5 class="new-arrival-category">Spikerlar</h5>
                        <p class="new-arrival-p">Amazon simsiz dinamiklari</p>
                        <a class="new-arrival-a" href="">Hoziroq harid qilish</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    <section class="service">
        <div class="service-item">
            <img src={ser1} alt=""/>
            <h5>Bepul va tez yetkazib berish</h5>
        </div>
        <div class="service-item">
            <img src={ser2} alt=""/>
            <h5>Do'stona 24/7 mijozlarni qo'llab-quvvatlash</h5>
        </div>
        <div class="service-item">
            <img src={ser3} alt=""/>
            <h5>Pulni qaytarish kafolati</h5>
        </div>
    </section>
    </main>
        </div>
    );
}

export default Homepage;