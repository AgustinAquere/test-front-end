var servidor = "http://localhost:8080"
$(document).ready(function () {
    var params = location.search;
    var id = (params.split("="))[1];
    $.getJSON(servidor + "/api/items/" + id,
        function (data) {
            var img = $("<img>").attr("src", data.thumbnail).addClass("img-description");
            var div = $("<div>").addClass("content-description")
            var price = $("<span>").text("$ " + data.price).addClass("price-description");
            var title = $("<span>").text(data.title).addClass("title-description")
            var uso = $("<span>").text(data.condition + " -").addClass("condition-description")
            var vendidos = $("<span>").text(data.sold_quantity + " vendidos").addClass("sold-description")
            var comprar = $("<input>").attr("type", "submit").val("Comprar").addClass("comprar");
            var divInput = $("<div>").addClass("div-input").append(comprar)
            div.append(uso, vendidos, title, price)
            $(".item-description").append(img, div, divInput)
            $.getJSON(servidor + "/api/items/" + id + "/description",
                function (data) {
                    var div = $("<div>").addClass("content-text")
                    var titleText = $("<h2>").text("Descripción del producto")
                    var text = $("<p>").text(data.plain_text).addClass("text-item")
                    div.append(titleText, text)
                    $(".item-description").append(div);
                    console.log(data.plain_text)
                })
        })
})