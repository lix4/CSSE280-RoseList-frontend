(function () {
    "use strict";

    var submit, reset;
    var titl, descriptio, pric, categor, typ;

    var apiURL = "http://localhost:3000/posts"
    var postData = function () {
        var inputData = {
            type: typ,
            category: categor,
            info: descriptio,
            name: titl,
            price: pric
        };
        $.ajax({
            url: apiURL,
            type: "POST",
            data: inputData,
            success: function (data) {
                window.location.href = "index.html";
                return;
            },
            error: function (request, status, error) {
                console.log(error, status, request);
            }
        })
    };



    function getFormData() {
        titl = $('#t').val();
        descriptio = $('#d').val();
        pric = $('#p').val();
        categor = $('[name="categories"] option:selected').val();
        typ = $('[name="type"] option:selected').val();
        postData();
    }




    // function resetForm() {

    // }

    function resetData() {
        $('span').remove();
    }

    $(document).ready(function () {
        //load in initial state
        submit = $("#submit-button").on('click', getFormData);
        reset = $("#reset").on('click', resetData);
        $('h1').on('click', function () {
            window.location.href = "index.html";
            return;
        })
        $('#cancel').on('click', function () {
            window.location.href = "index.html";
            return;
        })
    });
})();