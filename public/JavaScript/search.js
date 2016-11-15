(function () {
    "use strict";
    var submitButton;
    var searchType;
    var userInput;
    var backend = null;
    var apiUrl = "https://roselist-backend-test.herokuapp.com/posts";

    var getPosts = function () {
        if (userInput === "") {
            alert("The content is empty!");
        } else {
            var inputData = {
                name: userInput.replace(/ /g, "+"),
                category: searchType
            };
            $.ajax({
                url: apiUrl,
                type: "GET",
                data: inputData,
                success: function (data) {
                    data = data.filter(function getMyPost(obj) {
                        return userInput === obj.name;
                    });
                    data = data[0];
                    if (data) {
                        console.log(data.name);
                        displayPosts(data);
                    } else {
                        console.log("Posts not Found");
                        alert("Sorry, we can't find this post......");
                    }
                },
                fail: function (request, status, error) {
                    console.log(error, status, request);
                }
            });
        };
    };


    function displayPosts(post) {
        sessionStorage.setItem("name", post.name);
        sessionStorage.setItem("price", post.price);
        sessionStorage.setItem("description", post.info);
        sessionStorage.setItem('seller', post.userName);
        sessionStorage.setItem("id", JSON.stringify(post._id));
        window.location.href = 'searchPage.html';
    }

    function getFormData() {
        searchType = $("[name=categories] option:selected").val();
        userInput = $("#searchInput").val();
        getPosts();
    }

    $(document).ready(function () {
        submitButton = $("#submit").on('click', getFormData);
    });

})();