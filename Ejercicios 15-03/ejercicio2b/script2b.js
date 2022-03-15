$(document).ready(function(){
    

});

function mostrar(){
    let url = "http://gateway.marvel.com/v1/public/characters?apikey=8fda88d71f9d4a0d875fdf238410b30c&ts=99999&hash=792a2cc01e2d52af596aa66cd3d38497";
    $.get(url, function(data, status){
        let personajes = data.data.results;
        let html = "";
        personajes.forEach(element => {
            console.log(element);
            html += '<div><img width="200" height="200" src="' + element.thumbnail.path +"."+ element.thumbnail.extension + '"/>' + element.name + "</div>";
        });
        $("#contenido").html(html);
    });
}