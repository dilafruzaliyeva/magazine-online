import './sign-up.css';
import dl from '../../img/dl.beatsnoop 1.png';
import icongoogle from '../../img/Icon-Google.png';

function Signup() {
    return(
        <div>
          <main>
        <section class="acount-item">
            <img class="acount-img" src={dl} alt=""/>
            <div class="creat-account">
                <h4>Ro'yhatdan o'tish</h4>
                <p class="p-text">Malumot kiriting</p>
                <form action="">
                    <div class="user-box">
                    <input type="text" placeholder="Ismingiz" id="name" required/>
                    <span id="error1"></span>
                </div>
                <div class="user-box">
                    <input type="email" placeholder="Email yoki telefon nomer" id="email" required/>
                    <span id="error2"></span>
                </div>
                <div class="user-box">
                    <input type="password" placeholder="Parol" id="password"  required/>
                    <span id="error3"></span>
                </div>
                    <div>
                    <button type="submit" id="signup-btn" class="signup-btn">Ro'yhatdan o'tish</button>
                </div>
                <div class="btn2">
                    <button type="submit" class="signup-btn2">Google bilan ro'yxatdan o'ting</button>
                    <img src={icongoogle} alt=""/>
                </div>
                </form>
                <div class="already-account">
                    <p>Ro'yhatdan o'tganmisiz?</p>
                    <a href="">Parol</a>
                </div>
            </div>
        </section>
    </main>
        </div>
    )
    
}

export default Signup;
