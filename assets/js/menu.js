// highlight current page
// $('a').click
(function() {
    console.log("Test");
    var currentUrl = window.location.href;
    console.log(currentUrl);
    if(currentUrl.endsWith('/')) {
        $("a[href$='index.html']").addClass("active");
        $("a:not([href$='index.html'])").removeClass("active");
    } else {
        var currentPage = currentUrl.substr(currentUrl.lastIndexOf('/') + 1);
        console.log(currentPage);
        $("a[href$='" + currentPage + "']").addClass("active");
        $("a:not([href$='" + currentPage + "'])").removeClass("active");
    }
})();
    //.triggerHandler('click');
