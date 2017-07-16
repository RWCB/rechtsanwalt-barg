// highlight current page
$(document).ready(function() {
    var currentUrl = window.location.href;
    if(currentUrl.endsWith('/')) {
        $("a[href$='/']").addClass("activeLink");
    } else {
        var currentPage = currentUrl.substr(currentUrl.lastIndexOf('/') + 1);
        $("a[href$='" + currentPage + "']").addClass("activeLink");
    }
});
