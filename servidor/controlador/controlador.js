var conexion = "localhost:8080"

function enviarPedido(req, res){
    var pedido = req.query.items;
    var url = "https://api.mercadolibre.com/sites/MLA/search?q=:"  + pedido;
    console.log(pedido)
    console.log(url)

    var request = new XMLHttpRequest();
    console.log(req)
    request.open("GET", url, false);
    request.send(null);
    if(request.status == 200){
        dump(request)
    }
}



module.exports = {
    enviarPedido,
}