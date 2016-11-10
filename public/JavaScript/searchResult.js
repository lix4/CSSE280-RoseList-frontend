(function () {

    function displayPosts() {
        // console.log(sessionStorage.getItem("posts"));
        var name = sessionStorage.getItem("name");
        var price = sessionStorage.getItem("price");
        var description = sessionStorage.getItem("description");
        var seller = sessionStorage.getItem('seller');
        var currentPostDiv = $("<div>").addClass("post").attr("id", jsId);
        currentPostDiv.on('click', function () {

        });
        currentPostDiv.append(
            '<div class="post">' + '<h3>' + name + '</h3>' +
            '<p> <span class="first">Price:</span> ' + (price || 0) + '</p> <br />' +
            '<p> <span class="first">Seller:</span> ' + seller + '</p> <br />' +
            '<p> <span class="first">Description:</span> ' + description + '</p> ' +
            '</div>' + '<div class="clear"></div>'
        );
        function postClickHandler(post) {
            var error = false;
            function postWithId(thispost) {
                return thispost._id === post._id;
            }
            var postToStore = AllPosts.filter(postWithId)[0];
            try {
                var postToStoreString = JSON.stringify(postToStore._id);
                sessionStorage.removeItem('postToStore');
                sessionStorage.setItem("postToStore", postToStoreString);
            } catch (e) {
                alert("Error when writing to Session Storage " + e);
                error = true;
            }
            if (!error) {
                window.location = "insidePost.html";
            }
        }
        $('#resultTable').append(currentPostDiv);
    }

    $(document).ready(function () {
        displayPosts();
    });

})();