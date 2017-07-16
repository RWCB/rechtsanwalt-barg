// apply unique style for personal data view
$(document).ready(function() {
    var personalViewPage = "personal-data.html";
    var currentUrl = window.location.href;
    if(currentUrl.endsWith(personalViewPage)) {
        $("section").css("background", "#555");
        $("section").css("color", "white");
        //$("section").append("<img class='portrait' src='assets/images/portrait.png' />");
        $("img[class='portrait']").css("position", "absolute");
        $("img[class='portrait']").css("display", "block");
    }
});
