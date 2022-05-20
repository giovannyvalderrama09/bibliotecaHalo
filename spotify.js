
let videoPrin= {
gif:"video/video.mp4",
otro:"video/video2.mp4"
}


const uri="https://api.spotify.com/v1/albums/1k8JDdearbBEc2DJ48CRvg/tracks?market=US&limit=12&offset=5";

const token="Bearer BQBxNhJEKZ7E2XDiPp6jXM47QBQG2g__D-HO6qD_y4yZWaEFKiaMn0QvoJSnLyguOPDIFTBtMfd4YSjjl2CaW2QTq6y-kN_ALwZ2MAs90UuqljD7SSjwbpmHLBtqHVBzsXSYlVnpPa_25GBLqBzxFlph8YNa_n8mazI";

const peticion={
  method:"GET",
  headers:{Authorization:token}
}

fetch(uri,peticion)

.then(function(resultado) {
    return(resultado.json());
})

.then (function(resultado) {
  console.log(resultado.items);
escucharMusica(resultado.items)

})

.catch(function(resultado) {
    console.log(resultado);  
})

//Funcion que recorre un arreglo
let fila=document.getElementById("fila")

function escucharMusica(albums) {
  
    albums.forEach(function(cancion) {
  
    //Rutina llenado 
  let columna=document.createElement("div");
  columna.classList.add("col");

  let tarjeta=document.createElement("div");
  tarjeta.classList.add("shadow","card")
  tarjeta.classList.add("h-100","w-100")

  let audio=document.createElement("audio")
  audio.classList.add("w-100");
  audio.setAttribute("controls","controls")
  audio.src=cancion.preview_url;

  let nombreCancion=document.createElement("h5");
  nombreCancion.classList.add("text-center","my-2");
  nombreCancion.textContent=cancion.name

  let video=document.createElement("video")
  video.setAttribute("autoplay","muted")
  video.setAttribute("loop","preloa")
  video.classList.add("w-100")
  video.src=videoPrin.gif

 

        


  tarjeta.appendChild(video);
  tarjeta.appendChild(audio);
  tarjeta.appendChild(nombreCancion);
  columna.appendChild(tarjeta);
  fila.appendChild(columna);
  })

}