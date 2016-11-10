(function () {
    var comment, replyButton;
    var typ, categor, descripio, titl, pric, respons;
    var inputData = {
        type: typ,
        category: categor,
        info: descripio,
        name: titl,
        price: pric,
    };

    function setupLinksForButtons() {
        $('#myAccount').click(function () {
            console.log("aa");
            window.location.href = "accountPage.html";
        });
        $('#logo').click(function () {
            window.location.href = 'index.html';
        });
        $('#back').click(function () {
            window.location.href = 'specificCategory.html';
        });
        $('#myAccount').click(function () {
            window.location.href = 'accountPage.html';
        });
    }

    function displayOnePost(post) {
        var info = post.description;
        console.log(info);
        var name = post.description;
        $('#h2').text(name);
        $('#descriptionPara').text(info);
    }

    //This function gets comment entered by the user from the input.
    function getComment() {
        comment = $('#response').val();
        if (!comment) {
            alert("The comment cannot be blank!");
        } else {
            $('<div class="comments"><img src="" alt=""><p>' + comment + '</p><p class="byUser">By User:</p></div>').insertBefore('#replyForm');
            $.ajax({
                url: "http://localhost:3000/posts",
                type: "POST",
                data: inputData,
                success: function (data) {
                    data.responses.push(comment);
                },
                fail: function (request, status, error) {
                    console.log(error, status, request);
                }
            });
        }
    }

    // function loadPostData(postID) {
    //     $.ajax({
    //         url: "http://localhost:3000/posts/" + postID,
    //         type: "GET",
    //         data: inputData,
    //         success: function (data) {
    //             console.log("data" + data);
    //             displayOnePost(data);
    //             var responsesArray = data.responses;
    //             console.log(responsesArray);
    //             displayResponses(responsesArray);
    //         },
    //         fail: function (request, status, error) {
    //             console.log(error, status, request);
    //         }
    //     });
    // }

    // function displayResponses(responses) {
    //     for (var i = 0; i < responses.length; i++) {
    //         displayResponse(responses[i]);
    //     }
    // }

    // function displayResponse(response) {
        // $('<div class="comments"><img src="" alt=""><p>' + response + '</p><p class="byUser">By User:</p></div>').insertBefore('#replyForm');
    // }

    $(document).ready(function () {
        // load in initial state
        replyButton = $("[name|=reply]").on('click', getComment);
        setupLinksForButtons();
        loadPostData();
    });

})();