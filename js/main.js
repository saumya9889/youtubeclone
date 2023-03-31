function humburgeFun() {
    const x = document.getElementById("humburge-menu");
    const y = document.getElementById("miniAside");
    const secFlexData = document.getElementById("secFlex");
    if (x.style.display === "block" || y.style.display === "none") {
        x.style.display = "none";
        y.style.display = "block";

        if (y.style.display = "block") {
            secFlexData.classList += ' main-grid-wrapper';
        }
        console.log(x)
    }  
    else {
        x.style.display = "block";
        y.style.display = "none";
        secFlexData?.classList?.remove(" main-grid-wrapper")
        // console.log(," secFlexData.classList.remove");
        // secFlexData.classList.remove(" main-grid-wrapper")
        secFlexData.classList.replace(' main-grid-wrapper', 'sfs')

    }
    if(y.style.display ===  "none"){
        secFlexData.classList.toggle("main-grid-wrapper");
    }
}

// let button =  document.getElementById("miniAside");
// button[0].addEventListener('click', () => {
// 	document.getElementById('rose').classList.toggle('thorn');
// });