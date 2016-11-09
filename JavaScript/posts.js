var apiUrl;
var posts = {};
var finalPosts = {};
var category;



function getPosts() {
        $.ajax({
            url: apiUrl,
            //check if there is any more specific url extension
            type: 'GET',
            dataType: 'JSON',
            success: function (data) {
                if (data) {
                    posts = data;
                    sortPosts();
                } else {
                    console.log("Posts not Found");
                }
            },
            error: function (request, status, error) {
                console.log(error, status, request);
            }
        });
    }


function displayPosts(postList) {
        var postContainer = $('#posts'), post;
        postContainer.append($('<h4>').text('Posts'));
        postList.forEach(function (post) {
            post = $('<blockquote>').append(
                '<p>' +
                post.description.name + '<br>' +
                'Price:' + post.price + '<br>' +
                'Posted by:' + post.userName

            );
            postContainer.append(post);
            post.click(function () {
                //Add link to the post's own page.'
            });
        });
    }

function sortPosts() {
    var post;
    if(category == "All"){
        displayPosts(posts);
        return;
    }
    posts.forEach(function (post){
        if(post.category == category){
            finalPosts.append(post);

        }

    });
    displayPosts(finalPosts);
}

$(document).ready(function () {
    if(window.location.href.indexOf("buying") > -1) {
       category = "Buying";
    }
    if(window.location.href.indexOf("selling") > -1) {
       category = "Selling";
    }
    if(window.location.href.indexOf("announcement") > -1) {
       category = "Announcement";
    }
    if(window.location.href.indexOf("other") > -1) {
       category = "Other";
    }
    if(window.location.href.indexOf("personal") > -1) {
       category = "Personal";
    }
    if(window.location.href.indexOf("all") > -1) {
       category = "All";
    }
});