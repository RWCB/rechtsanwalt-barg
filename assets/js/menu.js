// highlight current page
// $('a').click
(function() {
    var currentUrl = window.location.href;
    if(currentUrl.endsWith('/')) {
        $("a").removeClass("activeLink");
        $("a[href$='index.html']").addClass("activeLink");
    } else {
        var currentPage = currentUrl.substr(currentUrl.lastIndexOf('/') + 1);
        $("a").removeClass("activeLink");
        $("a[href$='" + currentPage + "']").addClass("activeLink");
    }
})();
    //.triggerHandler('click');
