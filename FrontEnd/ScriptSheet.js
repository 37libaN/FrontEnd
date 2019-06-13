function showHide() {
    var x = document.getElementById("vision");
    if (x.style.display !== "none") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}

function mySizeChange() {
    document.getElementById("myPicture").width = "300%";
}