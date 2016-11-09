(function () {
    var mRecentPostsDiv;


    function setup() {
        mRecentPostsDiv = document.getElementById("recent");
        setupLinksForCategories();
    }

    function setupLinksForCategories() {
        $('button').each($('button').click(function () {
            window.location.href = "specificCategory.html";
        }));
    }


    window.onload = setup;
})();