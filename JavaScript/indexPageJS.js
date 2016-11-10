(function () {
    var mRecentPostsDiv;
    var AllPosts;
    var apiUrl = "http://localhost:3000/posts"
    var postNum = 0;
    var announcements = 0;



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
    function displayPosts(posts) {
        var postsDisplayLocation = $("#recentPosts").empty();
        var jsId, currentPostDiv;
        //console.log(posts);
        for (let i = 0; i < posts.length; i++) {
            if (postNum === 5 || posts[i] == undefined)
                break;
            jsId = "post-" + posts[i]._id;
            if (!(posts[i].category === "announcements")) {
                currentPostDiv = $("<div>").addClass("post").attr("id", jsId);
                currentPostDiv.append(
                    '<div class="post">' + '<h3>' + posts[i].name + '</h3>' +
                    '<p> <span class="first">Price:</span> ' + (posts[i].price || 0) + '</p> <br />' +
                    '<p> <span class="first">Seller:</span> ' + posts[i].email + '</p> <br />' +
                    '<p> <span class="first">Description:</span> ' + posts[i].info + '</p> ' +
                    '</div>' +
                    '<div class="clear"></div>'
                );
                postsDisplayLocation.append(currentPostDiv);
                currentPostDiv.click(function () {
                    postClickHandler(posts[i]);
                });
                postNum++;
            }

        }
        postsDisplayLocation = $("#recentAnnouncements").empty();
        for (let i = 0; i < posts.length; i++) {
            if (announcements === 5 || posts[i] == undefined)
                break;
            jsId = "post-" + posts[i]._id;
            if (posts[i].category === "announcements") {
                currentPostDiv = $("<div>").addClass("post").attr("id", jsId);
                currentPostDiv.append(
                    '<div class="post">' + '<h3>' + posts[i].name + '</h3>' +
                    '<p> <span class="first">Announcer:</span> ' + posts[i].userName + '</p> <br />' +
                    '<p> <span class="first">Description:</span> ' + posts[i].info + '</p> ' +
                    '</div>' +
                    '<div class="clear"></div>'
                );
                postsDisplayLocation.append(currentPostDiv);
                currentPostDiv.click(function () {
                    postClickHandler(posts[i]);
                });
                announcements++;
            }

        }
    }


    function setup() {
        $('#makePost').on('click', function () {
            window.location.href = "makePost.html";
            return;
        });
        $('#buying').on('click', function (e) {
            e.preventDefault();
            window.location.href = "specificCategory.html";

        });
        $('#selling').on('click', function (e) {

            e.preventDefault(); window.location.href = "specificCategory.html";

        });
        $('#rides').on('click', function (e) {
            e.preventDefault();
            window.location.href = "specificCategory.html";

        });
        $('#announcement').on('click', function (e) {
            e.preventDefault();
            window.location.href = "specificCategory.html";

        });
        $('#other').on('click', function (e) {
            e.preventDefault();
            window.location.href = "specificCategory.html";

        });

        $('#logo').on('click', function (e) {
            e.preventDefault();
            window.location.href = "index.html";

        });
        $.ajax({
            url: apiUrl,
            type: 'GET',
            dataType: 'JSON',
            success: function (data) {
                if (data) {
                    AllPosts = data;
                    displayPosts(AllPosts);
                } else {
                    console.log("Posts not Found");
                }
            },
            error: function (request, status, error) {
                console.log(error, status, request);
            }
        });


    }


    // $(document).ready(function () {
    //    getAllPosts();
    //})
    window.onload = setup;
})();