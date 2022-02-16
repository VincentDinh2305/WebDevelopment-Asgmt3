"use strict";

var photoOrderArray = window.opener.photoOrder;
var photoSelected = photoOrderArray[2];
var figFilename = "images/IMG_0" + photoSelected + ".jpg";

function addFavorites() {
    var imgList = window.opener.document.getElementsByName("favorites");
    if (imgList.length < 5) {
        window.opener.addFavorites(photoSelected);
    }
    else {
        alert("Please remove one image first. Only five are allowed.");
    }
}

function pageSetup() {
    document.getElementsByTagName("img")[0].src = figFilename;
    createEventListener();
}

function closeWin() {
    window.close();
}

function createEventListener() {
    var closeWindowDiv = document.getElementsByTagName("p")[0];
    var addFavoritesDiv = document.getElementsByTagName("p")[1];
    if (closeWindowDiv.addEventListener) {
        closeWindowDiv.addEventListener("click", closeWin, false);
        addFavoritesDiv.addEventListener("click", addFavorites, false);
    } else if (closeWindowDiv.attachEvent) {
        closeWindowDiv.attachEvent("onclick", closeWin);
        addFavoritesDiv.attachEvent("onclick", addFavorites);
    }
}
window.onload = pageSetup;