{
    const root = document.currentScript.src.substring(0,document.currentScript.src.lastIndexOf('/'));
    document.currentScript.outerHTML = `
    <style>
        .icon{
            width:40px;
            padding-left: 5px;
            padding-right: 5px;
        }
    </style>
    <footer id="colophon" class="site-footer" style="background-color:#222222;">
    <div class="site-info" style="padding-left:10px;padding-top: 16px;">
        <div class="responsive" style="text-align:center;text-decoration:none">
            <div>
                <a href="http://facebook.com/gentlemencoders">
                    <img class="icon" src="${root}/images/social/facebook_color.png"></img>
                </a>
                <a href="https://www.instagram.com/gentlemencoders/">
                    <img class="icon" src="${root}/images/social/instagram_color.png"></img>
                </a>
                <a href="https://twitter.com/gentcoders">
                    <img class="icon" src="${root}/images/social/twitter_color.png"></img>
                </a>
                <a href="https://www.youtube.com/channel/UC7l78rOzFxaHG-e5AT-MGWQ">
                    <img class="icon" src="${root}/images/social/youtube_color.png"></img>
                </a>
            </div>
        </div>
        <br>
        <center><span class="footer-text">© ${new Date().getFullYear()} Gentlemen Coders, LLC.<br>Nitro and RAW Power are registered US Trademarks of Gentlemen Coders, LLC.</span></center>
       <div class="footer-grid">
            <span><a href="https://www.gentlemencoders.com/contact-us/index.html">Contact Us</a></span>
            <span><a href="https://support.gentlemencoders.com/blog/">Blog</a></span>
            <span><a href="https://www.gentlemencoders.com/about/index.html">About</a></span>
            <span><a href="https://www.gentlemencoders.com/support/index.html">Support</a></span>
            <span><a href="https://www.gentlemencoders.com/extended-raw/index.html">Cameras</a></span>
            <span><a href="https://www.iubenda.com/privacy-policy/8228479">Privacy Policy</a></span>
            <span><a href="https://www.iubenda.com/terms-and-conditions/8228479">Terms and Conditions</a></span>
        </div>
        <h5>&nbsp;</h5>
</div>
</footer>
    `
}
