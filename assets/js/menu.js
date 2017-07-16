// highlight current page
(var currentPage = $("body").data("current-page");
if (currentPage) {
    $("a[data-page-id='" + currentPage + "']").addClass("active");
})();
