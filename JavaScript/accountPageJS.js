(function () {

    function SetupButtons () {
        $('#myAccount').click(function () {
            window.location.href = 'accountPage.html';
        });
         $('h1:first').click(function () {
            window.location.href = 'index.html';
        });
    }

    window.onload = SetupButtons();
})();