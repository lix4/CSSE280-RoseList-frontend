(function () {
    var mRecentPostsDiv;


    function setup() {
        mRecentPostsDiv = document.getElementById("recent");
        getOneRecentPostOrAnnouncements("Laptop", "12", "Phillee", "../Project_Mockups_and_Images/Buying.png");
        setupLinksForCategories();
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

    function setupLinksForCategories() {
        $('h2').each($('h2').click(function () {
            window.location.href = "specificCategory.html";
        }));
        $('#logo').on('click', function () {
            window.location.href = "index.html";
        });
    }


    window.onload = setup;
})();