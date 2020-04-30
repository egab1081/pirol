Vue.component('section-header', {
    template:`
      <header>
        <div class="logo"><img src="assets/images/logo.png" alt=""></div>
        <nav>
            <a class="active" href="index.html">HOME</a>
            <a href="about.html">ABOUT</a>
            <a href="">CONTACT</a>
        </nav>
    </header>`,
});
Vue.component('section-main', {
    template:`
        <main>
            <section class="info">
                <article>
                    <h1>UI/UX & Graphic Designer</h1>
                    <p>I am a Graphic & Web Designer based in New York, specializing</br> in User Interface Design and Development.</p>
                </article>
            </section>
            <section class="chess">
                <table>
                    <tbody>
                        <tr>
                            <td class="piece piece-grey"></td>
                            <td class="piece piece-light-grey"></td>
                            <td class="piece piece-grey"></td>
                            <td class="piece piece-light-grey"></td>
                        </tr>
                        <tr>
                            <td class="piece piece-light-grey"></td>
                            <td class="piece piece-blue"><img src="assets/images/pe-7s-look.png" alt=""></td>
                            <td class="piece piece-light-grey"></td>
                            <td class="piece piece-grey"></td>
                        </tr>
                        <tr>
                            <td class="piece piece-grey"></td>
                            <td class="piece piece-light-grey"></td>
                            <td class="piece piece-grey"></td>
                            <td class="piece piece-light-grey"></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>`,
});
Vue.component('section-footer', {
    template:`
        <footer>
            <section>
                <div class="company">
                    <h2>Piroll Design, Inc.</h2>
                    <p>© 2017 Piroll. All rights reserved.</br>Designed by robirurk.</p>
                </div>
                <div class="contact-info">
                    <p>hello@pirolltheme.com</p>
                    <p class="contact-number">+44 987 065 908</p>
                </div>
                <div class="column">
                    <a href="">Projects</a>
                    <a href="">About</a>
                    <a href="">Services</a>
                    <a href="">Carreer</a>
                </div>
                <div class="column">
                    <a href="">News</a>
                    <a href="">Events</a>
                    <a href="">Contact</a>
                    <a href="">Legals</a>
                </div>
                <div class="social">
                    <a href="">Facebook</a>
                    <a href="">Twitter</a>
                    <a href="">Instagram</a>
                    <a href="">Dribble</a>
                </div>
            </section>
        </footer>`,
    });
Vue.component('section-about', {
    template:`
    <main>
        <section class="self-presentation">
            <article>
                <h1>Amelia Woods</h1>
                 <p>I am a Graphic Web Designer based in New York, specializing in User Interface Design and Development.</p>
            </article>
        </section>
        <section class="self-career">
            <div class="self-career-experience">
                <div class="self-career-experience_icon">
                    <img src="assets/images/pe-7s-portfolio.png" alt="">
                </div>
                <div class="self-career-experience_info">
                    <h1>548</h1>
                    <p>PROJECTS COMPLITED</p>
                </div>
            </div>
            <div class="self-career-experience">
                <div class="self-career-experience_icon">
                    <img src="assets/images/pe-7s-clock.png" alt="">
                </div>
                <div class="self-career-experience_info">
                    <h1>1465</h1>
                    <p>WORKING HOURS</p>
                </div>
            </div>
            <div class="self-career-experience">
                <div class="self-career-experience_icon">
                    <img src="assets/images/pe-7s-star.png" alt="">
                </div>
                <div class="self-career-experience_info">
                    <h1>612</h1>
                    <p>POSITIVE FEEDBACKS</p>
                </div>
            </div>
            <div class="self-career-experience">
                <div class="self-career-experience_icon">
                    <img src="assets/images/pe-7s-like.png" alt="">
                </div>
                <div class="self-career-experience_info">
                    <h1 class="number">713</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </section>
        <section class="self-letter">
            <div class="self-letter_lightGrey"></div>
            <div class="self-letter_info">
                <article>
                    <div class="self-letter_info-inner">
                        <h1>About me</h1>
                        <p>Given let waters air sea had you'll, may seed abundantly fish.Were, you'll earth forth winged above brought. Own darknessthey're him can't fourth sea place have.So the above May stars cattle fruitful face shall. Tree it, winged.Every signs male firmament us. Morning him.</p>
                        <img src="assets/images/signature.png" alt="">
                    </div>
                </article>
            </div>
        </section>
        <section class="self-offer">
            <article>
                <h1>Need a Project?</h1>
                <p>Let us know what you're looking for in an agency. We'll take a look and see<br>if this could be the start of something beautiful.</p>
                <a href="">LET'S TALK</a>
            </article>
        </section>
    </main>`,
    });
new Vue({
    el: "#app"
});