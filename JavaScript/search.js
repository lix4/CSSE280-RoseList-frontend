var searchType;
var userInput;
var backend = null;
var apiUrl;

//A lot of the details of this code will have to be filled in or changed depending 
//on the details of the database, and several tags will need to be added to the search page.
function setup(){
    $("#search").on('submit', function(){
        searchType = $("#categories").getFormData();
        userInput = $("#search").val();
        getPosts();
    });
}



function getPosts() {
        $.ajax({
            url: apiUrl,
            type: 'GET',
            dataType: 'JSON',
            success: function (data) {
                if (data) {
                    posts = data;
                    displayPosts(posts);
                } else {
                    console.log("Posts not Found");
                }
            },
            error: function (request, status, error) {
                console.log(error, status, request);
            }
        });
    }


function displayPosts(posts) {
        postsDisplayLocation = $("table.table-bordered>tbody").empty();
        posts.forEach(function (post) {
            var $postRow = $('<tr>').attr('data-contactid', contact._id);
            $postRow.append(
               //Data will go here.
            );
            // append row with the post to DOM tree
            postsDisplayLocation.append($postRow);
        });
    }