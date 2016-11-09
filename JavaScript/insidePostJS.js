(function () {
    var comment, replyButton;

    function setupLinksForButtons() {
        $('#myAccount').click(function () {
            console.log("aa");
            window.location.href = "accountPage.html";
        });
         $('h1:first').click(function () {
            window.location.href = 'index.html';
        });
        $('#back').click(function () {
            window.location.href = 'specificCategory.html';
        });
        $('#myAccount').click(function () {
            window.location.href = 'accountPage.html';
        });
    }


    function getComment() {
        comment = $('#response').val();
        if (!comment) {
            alert("The comment cannot be blank!");
        } else {
            $('<div class="comments"><img src="" alt=""><p>' + comment + '</p><p class="byUser">By User:</p></div>').insertBefore('#replyForm');
        }
    }

    function getResposnce() {
        $.ajax({
            url: "",
            type: "GET",
            data: inputData,
            success: function (data) {
                if (data.Title) {
                    console.log(data);
                    displayResponses(data);
                } else {
                    console.log("NO MOVIE!");
                }
            },
            fail: function (request, status, error) {
                console.log(error, status, request);
            }
        });
    }

    function displayResponses(comment) {
        $('<div class="comments"><img src="" alt=""><p>' + comment + '</p><p class="byUser">By User:</p></div>').insertBefore('#replyForm');
    }

    $(document).ready(function () {
        // load in initial state
        replyButton = $("[name|=reply]").on('click', getComment);
        setupLinksForButtons();
    });

})();