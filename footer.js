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
    <footer id="colophon" class="site-footer" style="background-color:#333333;">
            <div class="site-info" style="padding-left:10px;">
                <div class="responsive whiteText" style="text-align:center;text-decoration:none">
                    <h4>© ${new Date().getFullYear()} Gentlemen Coders, LLC</h4>
                    <h4><a href="https://www.iubenda.com/terms-and-conditions/8228479">Terms and Conditions</a></h4>
                    <div>
                        <a href="http://facebook.com/gentlemencoders">
                            <img class="icon" src="${root}/images/social/facebook_color.png"></img>
                        </a>
                        <a href="https://www.instagram.com/gentlemencoders/">
                            <img class="icon" src="${root}/images/social/instagram_color.png"></img>
                        </a>
                        <a href="https://www.pinterest.com/gentscoders/">
                            <img class="icon" src="${root}/images/social/pinterest_color.png"></img>
                        </a>
                        <a href="https://twitter.com/gentcoders">
                            <img class="icon" src="${root}/images/social/twitter_color.png"></img>
                        </a>
                        <a href="https://www.youtube.com/channel/UC7l78rOzFxaHG-e5AT-MGWQ">
                            <img class="icon" src="${root}/images/social/youtube_color.png"></img>
                        </a>

                    </div>
                    <h4><a href="https://www.iubenda.com/privacy-policy/8228479">Privacy Policy</a></h4>
                </div>
            </div>
        </footer>
    `
}