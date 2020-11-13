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
    const root = document.currentScript.getAttribute('root');
    const menus = {
        "About":`${root}/about/`,
        "Videos":"https://www.youtube.com/channel/UC7l78rOzFxaHG-e5AT-MGWQ/videos",
        "Cameras":"",
        "Support":`${root}/support`,
        "Blog":"",
        "Contact Us":"",
        "Mailing List":"https://gentlemencoders.us15.list-manage.com/subscribe?u=03bf04c551d8bddf44492e889&id=3f1d84feef",
        "Downloads":`${root}/downloads/`
    }

    let html = [
        `<header id="masthead" class="site-header stickyHeader" style="background-color:#333333"
        <a href="/" class="custom-logo-link" rel="home">
        <img src="${root}/images/GC-Logo-White-Horizontal.png" class="custom-logo"</a>
        <nav id="site-navigation" class="main-navigation" style="text-align:center">
        <button class="menu-toggle pillbutton" onclick="toggleNav(this)">Menu</button>
        <div class="menu-primary-navigation-container">
        <ul id="primary-menu">
        `];
    for(let menu in menus){
        html.push(`<li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="${menus[menu]}">${menu}</a></li>`);
    }
    html.push("</ul></div></nav></header>");

    document.currentScript.outerHTML = html.join('');
}

