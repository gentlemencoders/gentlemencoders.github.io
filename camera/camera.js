{
    const macCameras = {
        "10.14" : "https://support.apple.com/en-us/HT208967",
        "10.15" : "https://support.apple.com/en-jo/HT210191",
        "11"    : "https://support.apple.com/en-us/HT211241",
        "latest" : "https://support.apple.com/en-us/HT211241"
    };

    const iosCameras = {
        "12" : "https://support.apple.com/en-us/HT208967",
        "13" : "https://support.apple.com/en-jo/HT210191",
        "14" : "https://support.apple.com/en-us/HT211241",
        "latest" : "https://support.apple.com/en-us/HT211241"
    };
    
    let urlParams = new URLSearchParams(window.location.search);
    
    let targetOS = urlParams.get('ios');
    if (targetOS != null && iosCameras[targetOS] != undefined){
        //redirect
        window.location = iosCameras[targetOS];
    }
    else{
        targetOS = urlParams.get('mac');
        if (targetOS != null && macCameras[targetOS] != undefined){
            //redirect
            window.location = macCameras[targetOS];
        }
        else{
            //fail - ios or mac not found, default to latest
            window.location = macCameras["latest"];
        }
    }
}
