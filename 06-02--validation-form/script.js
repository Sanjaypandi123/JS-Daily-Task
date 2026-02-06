let arrays = []

let productform = () => {
    let isimage, isproduct, iscategory, isprice, isstock, isoffer = false
    // image------start
    let imgurl = document.getElementById("imgurl")
    let imgurlErr = document.getElementById("imgurlErr")

    if (imgurl.value === "") {
        imgurlErr.innerText = "Please enter ur image URL"
        imgurlErr.style.color = "red"
        isimage = false
    } else {
        imgurlErr.innerText = ""
        isimage = true
    }
    // image------end

    // ===================================================================

    // product------start
    let prodname = document.getElementById("prodname")
    let prodnameErr = document.getElementById("prodnameErr")

    if (prodname.value === "") {
        prodnameErr.innerText = "Please enter ur product name"
        prodnameErr.style.color = "red"
        isproduct = false
    } else {
        prodnameErr.innerText = ""
        isproduct = true
    }
    // product------end

    // ===================================================================

    // category-----start
    let category = document.getElementById("category")
    let categoryErr = document.getElementById("categoryErr")

    if (category.value === "") {
        categoryErr.innerText = "Please enter ur product name"
        categoryErr.style.color = "red"
        iscategory = false
    } else {
        categoryErr.innerText = ""
        iscategory = true
    }
    // category-----end

    // ===================================================================

    // price-------start
    let price = document.getElementById("price")
    let priceErr = document.getElementById("priceErr")

    if (price.value === "") {
        priceErr.innerText = "Please enter ur price"
        priceErr.style.color = "red"
        isprice = false
    } else {
        priceErr.innerText = ""
        isprice = true
    }
    // price-------end

    // ===================================================================

    // stock-------start
    let stock = document.getElementById("stock")
    let stockErr = document.getElementById("stockErr")

    if (stock.value === "") {
        stockErr.innerText = "Please enter ur stock"
        stockErr.style.color = "red"
        isstock = false
    } else {
        stockErr.innerText = ""
        isstock = true
    }
    // stock-------end

    // ===================================================================

    // offer-------start
    let Offer = document.getElementById("offer")
    let offerErr = document.getElementById("offerErr")

    if (Offer.value === "") {
        offerErr.innerText = "Please enter ur Offer"
        offerErr.style.color = "red"
        isoffer = false
    } else {
        offerErr.innerText = ""
        isoffer = true
    }
    // offer-------end

    // ===================================================================
    if (isimage && isproduct && iscategory && isprice && isstock && isoffer) {
        let objects = {
            imgurl: imgurl.value,
            productname: prodname.value,
            categoryname: category.value,
            prices: price.value,
            stocks: stock.value,
            Offers: offerErr.value
        }

        imgurl.value = ""
        prodname.value = ""
        category.value = ""
        price.value = ""
        stock.value = ""
        Offer.value = ""

        arrays.push(objects)
        alert("Your Product Details is Successfully Submited....!!!!")
    } else {

    }



    console.log(arrays)

}