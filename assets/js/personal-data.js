// apply unique style for personal data view
$(document).ready(function() {
    var personalViewPage = "personal-data.html";
    var currentUrl = window.location.href;
    if(currentUrl.endsWith(personalViewPage)) {
        $("section:after").css("background", "#555");
        $("section:after").css("color", "white");
        $("section:after").css("background-image", "url('assets/images/portrait.jpg')");
        $("section:after").css("background-position", "center right");
        $("section:after").css("background", "no-repeat");
    }
});
