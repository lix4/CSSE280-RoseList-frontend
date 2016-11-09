(function () {

    function SetupButtons () {
        $('#myAccount').click(function () {
            window.location.href = 'accountPage.html';
        });
         $('#logo').click(function () {
            window.location.href = 'index.html';
        });
    }

    window.onload = SetupButtons();
})();