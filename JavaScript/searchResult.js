(function() {


    function displayPosts() {
        // console.log(sessionStorage.getItem("posts"));
        var name = sessionStorage.getItem("name");
        var price = sessionStorage.getItem("price");
        var description = sessionStorage.getItem("description");
        $('#resultTable').append('<tr><td>' + name + '</td><td>' + price + '</td><td>' + description + '</td></tr>');
    }


    $(document).ready(function() {
        displayPosts();
    });

})();