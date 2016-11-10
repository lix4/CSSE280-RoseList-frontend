(function () {
    var mRecentPostsDiv;

    function setup() {
        mRecentPostsDiv = document.getElementById("recent");
        // displayCategoryNameFromForm();
        setupLinksForSpecificCategories();

    }

    function setupLinksForSpecificCategories() {
        $('img').each($('img').click(function () {
            console.log("ahdfds");
            window.location.href = "insidePost.html";
        }));
        $('h1:first').click(function () {
            window.location.href = 'index.html';
        });
        $('#myAccount').click(function () {
            window.location.href = 'accountPage.html';
        });
    }



    window.onload = setup;
})();