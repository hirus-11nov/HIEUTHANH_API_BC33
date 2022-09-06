class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <header class="header">
                <div class="container">
                    <div class="header-left">
                        <a href="/">
                            <img src="../img/image 3.png" alt="logo" />
                        </a>
                    </div>
                    <div class="header-right">
                        <a href="#">
                            <img src="../img/image 7.png" alt="Cart" />
                        </a>
                        <span>(1)</span>
                        <a href="#">Login</a>
                        <a href="/views/register.html">Register</a>
                    </div>
                </div>
                <nav class="menu">
                    <div class="container">
                        <a href="/" class="active">Home</a>
                        <a href="#">Men</a>
                        <a href="#">Woman</a>
                        <a href="#">Kid</a>
                        <a href="#">Sport</a>
                    </div>
                </nav>
            </header>
        `;
    }
}
customElements.define('header-component', Header);

class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
                <div class="footer-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-6 col-lg-4 col-md-4 footer-1">
                                <h3>GET HELP</h3>
                                <a href="#">Contact Us</a>
                                <a href="#">Shopping</a>
                                <a href="#">NIKEiD</a>
                                <a href="#">Nike+</a>
                            </div>
                            <div class="col-6 col-lg-4 col-md-4 footer-2">
                                <h3>ORDERS</h3>
                                <a href="#">Payment options</a>
                                <a href="#">Shipping and delivery</a>
                                <a href="#">Returns</a>
                            </div>
                            <div class="col-12 col-lg-4 col-md-4 footer-3 pt-4 pt-lg-0">
                                <h3>REGISTER</h3>
                                <p>
                                    Create one account to manage everything you do with Nike, from
                                    your shopping preferences to your Nike+ activity.
                                </p>
                                <a href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col-6 col-lg-4 col-md-4 footer-1">
                                <h3>EMAIL SIGN UP</h3>
                                <p>Be the first to know about new products and special offers.</p>
                                <a href="#">Sign up now</a>
                            </div>
                            <div class="col-6 col-lg-4 col-md-4 footer-2">
                                <h3>GIFT CARDS</h3>
                                <p>Give the gift that alway fits</p>
                                <a href="#">Views card</a>
                            </div>
                            <div class="col-12 col-lg-4 col-md-4 footer-3 pt-4 pt-lg-0">
                                <h3>STORES NEAR YOU</h3>
                                <p>Location a Nike retail store of authorized retailer</p>
                                <a href="#">Search</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}
customElements.define('footer-component', Footer);