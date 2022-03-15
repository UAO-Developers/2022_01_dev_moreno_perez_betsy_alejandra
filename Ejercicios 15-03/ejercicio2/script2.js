console.log('funcionando');

document.querySelector('button').addEventListener('click', traerDatos);
function traerDatos(){

    console.log('dentro de la funcion');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'colombia-municipios.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);

            let tab = document.querySelector('tab');
            tab.innerHTML = '';

            for(let item of datos){

                tab.innerHTML += `
                <tr>
                    <th>$(item.dpt)</th>
                    <th>$(item.name)</th>
                </tr>
                `
            }
        }
    }
}