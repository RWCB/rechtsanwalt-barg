// highlight current page
// $('a').click
(function() {
    console.log("Test");
    var currentUrl = window.location.href;
    console.log(currentUrl);
    if(currentUrl.endsWith('/')) {
        $("a[href$='index.html']").addClass("activeLink");
        $("a:not([href$='index.html'])").removeClass("activeLink");
    } else {
        var currentPage = currentUrl.substr(currentUrl.lastIndexOf('/') + 1);
        console.log(currentPage);
        $("a[href$='" + currentPage + "']").addClass("activeLink");
        $("a:not([href$='" + currentPage + "'])").removeClass("activeLink");
    }
})();
    //.triggerHandler('click');
