(function () {
    var mRecentPostsDiv;


    function setup() {
        mRecentPostsDiv = document.getElementById("recent");
        setupLinksForSpecificCategories();
    }

    function setupLinksForSpecificCategories() {
        $('img').each($('img').click(function () {
            console.log ("ahdfds");
            window.location.href = "insidePost.html";
        }));
    }


    window.onload = setup;
})();