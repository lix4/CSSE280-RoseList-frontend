(function() {
    var comment, replyButton, commentData, post = {};
    var apiURL = "https://roselist-backend-test.herokuapp.com/posts/"


    function setupLinksForButtons() {
        $('#myAccount').click(function() {
            console.log("aa");
            window.location.href = "accountPage.html";
        });
        $('#reply').click(function(e){
            e.preventDefault();
            getComment();
        });
    }


    function getComment() {
        comment = $('#response').val();
        if (!comment) {
            alert("The comment cannot be blank!");
        } else {
            $.ajax({
                url: apiURL + JSON.parse(sessionStorage.getItem("postToStore")),
                type: "GET",
                success: function(data) {
                    post = data;
                    addComment(post);
                },
                fail: function(request, status, error) {
                    console.log(error, status, request);
                }
            });
        }
    }

    function addComment(post) {
        post.responses.push($('#response').val());
        var inputData = {
            responses: post.responses
        };
        $.ajax({
            url: apiURL + JSON.parse(sessionStorage.getItem("postToStore")),
            type: "PUT",
            dataType: 'JSON',
            data: inputData,
            success: function(data) {
                if (data._id) {
                    window.location.href = "insidePost.html"
                    return;
                } else {
                    console.log("NO POST!");
                }
            },
            fail: function(request, status, error) {
                console.log(error, status, request);
            }
        });

    }


    function loadPost() {
        var descDiv = $('#descriptionDiv');
        $.ajax({
            url: apiURL + JSON.parse(sessionStorage.getItem('postToStore')),
            type: "GET",
            success: function(data) {
                if (data._id) {
                    post = data;
                    displayPost();
                } else {
                    console.log("NO MOVIE!");
                }
            },
            fail: function(request, status, error) {
                console.log(error, status, request);
            }
        })

    }


    function displayPost() {
        $('#info').append('<p> <span>Description:</span> ' + post.info + '</p>');
        // $('<div class="comments"><img src="" alt=""><p>' + comment + '</p><p class="byUser">By User:</p></div>').insertBefore('#replyForm');
    }


    $(document).ready(function() {
        // load in initial state
        $('#logo').on('click', function() {
            window.location.href = "index.html";
            return;
        });
        $('[name="home"]').click(function() {
            window.location.href = "index.html";
        })
        setupLinksForButtons();
        loadPost();
    });

})();