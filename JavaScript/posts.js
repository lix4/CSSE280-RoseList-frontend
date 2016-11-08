var apiUrl;
var posts= {};


function getPosts() {
        $.ajax({
            url: apiUrl,
            //check if there is any more specific url extension
            type: 'GET',
            dataType: 'JSON',
            success: function (data) {
                if (data) {
                    posts = data;
                    displayPosts();
                } else {
                    console.log("Posts not Found");
                }
            },
            error: function (request, status, error) {
                console.log(error, status, request);
            }
        });
    }


function displayPosts() {
        var postContainer = $('#posts'), post;
        postContainer.append($('<h4>').text('Posts'));
        posts.forEach(function (post) {
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