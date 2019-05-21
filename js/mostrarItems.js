var servidor = "http://localhost:8080"
$(document).ready(function () {

    var query = window.location.search;
    $.getJSON(servidor + "/api/items" + query,
        function (data) {
            for (i = 0; i < data.results.length; i++) {
                var opcion = $("<li>")
                opcion.attr("id", (data.results)[i].id);
                $(".content-items").append(opcion);
                var div = $("<div>").addClass("data-item");
                var img = $("<img>").attr("src", (data.results)[i].thumbnail).addClass("item-logo");
                var price = $("<span>").text("$ " + (data.results)[i].price).addClass("price");
                var title = $("<span>").text((data.results)[i].title).addClass("title");
                var address = $("<span>").text((data.results)[i].address.state_name).addClass("address");
                div.append(address);
                div.append(price);
                div.append(title)
                opcion.append(img, div);
                opcion.click(function () {
                    var url = "../html/description.html"
                    var id = this.id;
                    window.location = url + "?id=" + id;
                })
            }
        });
})
