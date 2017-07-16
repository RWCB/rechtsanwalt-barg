// highlight current page
(function() {
    var currentUrl = window.location.href;
    if(currentUrl.endsWith('/')) {
        $("a[href$='index.html']").addClass("active");
        $("a:not([href$='index.html'])").removeClass("active");
    } else {
        var currentPage = currentUrl.substr(currentUrl.lastIndexOf('/') + 1);
        $("a[href$='" + currentPage + "']").addClass("active");
        $("a:not([href$='" + currentPage + "'])").removeClass("active");
    }
})();
