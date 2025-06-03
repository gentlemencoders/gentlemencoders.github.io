{
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString); // Creates a URLSearchParams object
    
    const myrefValue = params.get('myref'); // Returns "en"
    var ref_url = "";

    if (myrefValue != null) {
        ref_url = "https://bit.ly/" + myrefValue;
        //console.log("url = " + ref_url);
    }
    else {
    }
    
    document.currentScript.outerHTML = `
    <iframe id=ref_iframe width=0 height=0 src="${ref_url}"></iframe>
    `
}
