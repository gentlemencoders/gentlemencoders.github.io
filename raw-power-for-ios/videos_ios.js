let ids = ["v1","v2","v3"];
    let ipad_urls = ["Ire9LHdH7wo","IDDezNYz2C0","B7l9-ssE_6k"];
    let iphone_urls = ["cDQMbOElZSc","4MGAkv_Cs0c","KGOXQyYlSH8"];

    let is_ipad = (window.screen.height >= 1024 || window.screen.width >= 1024)

    let sources = is_ipad ? ipad_urls : iphone_urls;
    
    let mwidth = is_ipad? "1024px" : "576px";
    let mheight = is_ipad? "768px" : "1024px"
    
    let width = is_ipad ? "80vw" : "45vw";
    let height = is_ipad ? "60vw" : "80vw";


    for (let id in ids){
        let frame = document.getElementById(ids[id]);
        frame.src = `https://www.youtube.com/embed/${sources[id]}`;
        frame.style.maxWidth = mwidth;
        frame.style.maxHeight = mheight;
        frame.style.width = width;
        frame.style.height = height;
    }

document.currentScript.remove();