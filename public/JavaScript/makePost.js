(function () {
    "use strict";

    var submit, reset;
    var titl, descriptio, pric, categor, typ, phon, emai;

    var apiURL = "https://roselist-backend-test.herokuapp.com/posts"
    var postData = function () {
        var inputData = {
            type: typ,
            category: categor,
            info: descriptio,
            name: titl,
            price: pric,
            phone: phon,
            email: emai
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
        emai = $('#e').val();
        phon = $('#ph').val();
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
        $('#logo').on('click', function () {
            window.location.href = "index.html";
            return;
        });
    });
})();