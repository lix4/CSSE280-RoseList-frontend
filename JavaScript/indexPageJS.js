(function () {
    var mRecentPostsDiv;


    function setup() {
        mRecentPostsDiv = document.getElementById("recent");
        getOneRecentPostOrAnnouncements("Laptop", "12", "Phillee", "../Project_Mockups_and_Images/Buying.png");
        setupLinksForButtons();
    }

    function getOneRecentPostOrAnnouncements(itemName, itemPrice, itemSeller, imgUrl) {
        var mOneRecentPostDiv = document.createElement("div");
        mOneRecentPostDiv.style.border = "2px solid black";
        mOneRecentPostDiv.style.textAlign = "center";
        mOneRecentPostDiv.style.overflow = "auto";
        var mImage = document.createElement("img");
        mImage.src = imgUrl;
        mImage.style.maxWidth = "60%";
        mImage.style.height = "auto";
        mImage.style.width = "auto";
        mImage.style.cssFloat = "left";
        var rightDiv = document.createElement("div");
        rightDiv.style.height = "40px";
        var itemPara = document.createElement("p");
        itemPara.innerHTML = '<span>Item:</span>' + itemName + "<br>";
        var pricePara = document.createElement("p");
        pricePara.innerHTML = '<span>Price:</span>' + itemPrice + '<br />';
        var sellerPara = document.createElement("p");
        sellerPara.innerHTML = '<span>Seller:</span>' + itemSeller;
        rightDiv.appendChild(itemPara);
        rightDiv.appendChild(pricePara);
        rightDiv.appendChild(sellerPara);
        mOneRecentPostDiv.appendChild(mImage);
        mOneRecentPostDiv.appendChild(rightDiv);
        mRecentPostsDiv.appendChild(mOneRecentPostDiv);
    }

    function setupLinksForButtons() {
        $('button[name="CategoryButton”]').each($('button[name="CategoryButton"]').click(function () {
            window.location.href = "specificCategory.html";
        }));
        $('h1:first').click(function () {
            window.location.href = 'index.html';
        });
        $('#myAccount').click(function () {
            window.location.href = 'accountPage.html';
        }

        $('#makePost').click(function () {
            window.location.href = "makePost.html";
        });
    }


    window.onload = setup;
})();