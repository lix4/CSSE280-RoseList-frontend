(function () {
    var mRecentPostsDiv;


    function setup() {
        mRecentPostsDiv = document.getElementById("recent");
        setupLinksForCategories();
    }

    function setupLinksForCategories() {
         $('h2').each($('h2').click(function () {
            window.location.href = "specificCategory.html";
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