function toggleNav(element){
    const parent = element.parentElement;
    if (parent.className.includes("toggled")){
        parent.className = parent.className.replace(/toggled/gm,'')
    }
    else{
       parent.className += " toggled";
    }
}

{
    const root = document.currentScript.src.substring(0,document.currentScript.src.lastIndexOf('/'));
    const menus = {
        "Blog":`${root}/blog/index.html`,
        "Contact Us":`${root}/contact-us/index.html`,
        "Cameras":`${root}/extended-raw/index.html`,
        "Support":`${root}/support/index.html`,
}

    let html = [
        `<header id="masthead" class="site-header stickyHeader" style="background-color:#222222">
        <a href="/"><img src="${root}/images/GC_Logo_White_390x120.png" class="custom-logo"></a>
        <nav id="site-navigation" class="main-navigation" style="text-align:center">
        <div class="menu-toggle navbutton" onclick="toggleNav(this)">	
            <svg width="24px" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 384.97 384.97">
                <path d="M12.03,84.212h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03
                    C5.39,60.152,0,65.541,0,72.182C0,78.823,5.39,84.212,12.03,84.212z"/>
                <path d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03
                    S379.58,180.455,372.939,180.455z"/>
                <path d="M372.939,300.758H12.03c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h360.909
                    c6.641,0,12.03-5.39,12.03-12.03C384.97,306.147,379.58,300.758,372.939,300.758z"/>
            </svg>
</div>
        <div class="menu-primary-navigation-container">
        <ul id="primary-menu">
        `];
    for(let menu in menus){
        html.push(`<li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="${menus[menu]}">${menu}</a></li>`);
    }
    html.push("</ul></div></nav></header>");

    document.currentScript.outerHTML = html.join('');
}

