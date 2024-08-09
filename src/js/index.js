
const listaOrig = document.querySelectorAll("div")

const texto = document.getElementById("texto")

const puntos1 = document.getElementById("puntos1")

const puntos2 = document.getElementById("puntos2")

const btnReiniciar = document.getElementById("btnReiniciar")

const btnNewPart = document.getElementById("btnNewPart")



let datosTulipan = (localStorage.getItem("datosTulipan"))||[]

let datosGirasol = (localStorage.getItem("datosGirasol"))||[]


let sumapunts = datosTulipan

let sumapoinst = datosGirasol 



puntos1.innerHTML = sumapunts 

puntos2.innerHTML = sumapoinst 

const salida = document.getElementById("salida")

salida.addEventListener("click", function () {

   texto.innerText = "ESPERE UN MOMENTO, SE ESTA CERRANDO ESTA PARTIDA"

   setTimeout(() => {
      location.href = "inicio.html"
   }, 2000);
   
})



for (let index = 0; index < listaOrig.length; index++) {

            listaOrig[index].addEventListener("click", function () {

        
            listaOrig[index].innerText = "🌷"

             listaOrig[index].style.pointerEvents = "none";

            listaOrig[index].style.backgroundColor = "greenyellow"

            let listVacios = []
 
               for (let index = 0; index < listaOrig.length; index++) {

                  if (listaOrig[index].textContent === "") {
                
                   listVacios.push(index)

                   }

 
                }

                let aleatory = Math.floor(Math.random() * listVacios.length);

                let celdaVac = listVacios[aleatory]
            
                setTimeout(() => {
                     listaOrig[celdaVac].innerText= "🌻"
                     listaOrig[celdaVac].style.backgroundColor = "#baff75"
                }, 1000);
            
                listaOrig[celdaVac].style.pointerEvents = "none";

        

             let gano = { }
           
         if (listaOrig[0].textContent === "🌷" && listaOrig[1].textContent === "🌷" && listaOrig[2].textContent === "🌷" ) {
            texto.innerText = "JUGADOR TULIPAN, HA GANADO EN FILA 1... FELICIDADES"
            sumapunts ++
             gano.innerHTML = "1"
             } else {
             if (listaOrig[3].textContent === "🌷" && listaOrig[4].textContent === "🌷" && listaOrig[5].textContent === "🌷") {
                 texto.innerText = "JUGADOR TULIPAN, HA GANADO EN FILA 2... FELICIDADES"
                 sumapunts ++
                 gano.innerHTML = "1"
             } else {
                if (listaOrig[6].textContent === "🌷" && listaOrig[7].textContent === "🌷" && listaOrig[8].textContent === "🌷") {
                    texto.innerText = "JUGADOR TULIPAN, HA GANADO EN FILA 3... FELICIDADES"
                     sumapunts ++
                     gano.innerHTML = "1"
                 } else {
                    if (listaOrig[0].textContent === "🌷" && listaOrig[3].textContent === "🌷" && listaOrig[6].textContent === "🌷") {
                       texto.innerText = "JUGADOR TULIPAN, HA GANADO EN COLUMNA 1... FELICIDADES"
                         sumapunts ++
                           gano = "1"
                     } else {
                        if (listaOrig[1].textContent === "🌷" && listaOrig[4].textContent === "🌷" && listaOrig[7].textContent === "🌷") {
                          texto.innerText = "JUGADOR TULIPAN, HA GANADO EN COLUMNA 2... FELICIDADES"
                            sumapunts ++
                              gano = "1"
                         } else {
                            if (listaOrig[2].textContent === "🌷" && listaOrig[5].textContent === "🌷" && listaOrig[8].textContent === "🌷") {
                               texto.innerText = "JUGADOR TULIPAN, HA GANADO EN COLUMNA 3... FELICIDADES"
                                 sumapunts ++
                                   gano = "1"
                             } else {
                                if (listaOrig[0].textContent === "🌷" && listaOrig[4].textContent === "🌷" && listaOrig[8].textContent === "🌷") {
                                  texto.innerText = "JUGADOR TULIPAN, HA GANADO EN DIAGONAL... FELICIDADES"
                                    sumapunts ++
                                      gano = "1"
                                 } else {
                                    if (listaOrig[2].textContent === "🌷" && listaOrig[4].textContent === "🌷" && listaOrig[6].textContent === "🌷") {
                                      texto.innerText = "JUGADOR TULIPAN HA GANADO EN DIAGONAL... FELICIDADES"
                                        sumapunts ++ 
                                          gano = "1"
                                       } 
                                    
                                }

                            }

                        }

                    }

                }

            }

        }

    

             localStorage.setItem("datosTulipan",sumapunts)


         
        setTimeout(() => {
               
                
            if (listaOrig[0].textContent === "🌻" && listaOrig[1].textContent === "🌻" && listaOrig[2].textContent === "🌻") {
                texto.innerText = "JUGADOR GIRASOL HA GANADO EN FILA 1... FELICIDADES"
                  sumapoinst ++  
                  gano.innerHTML = "1"
               } else {
                  if (listaOrig[3].textContent === "🌻" && listaOrig[4].textContent === "🌻" && listaOrig[5].textContent === "🌻") {
                    texto.innerText = "JUGADOR GIRASOL HA GANADO EN FILA 2... FELICIDADES"
                      sumapoinst ++
                      gano.innerHTML = "1"
                   } else {
                      if (listaOrig[6].textContent === "🌻" && listaOrig[7].textContent === "🌻" && listaOrig[8].textContent === "🌻") {
                         texto.innerText = "JUGADOR GIRASOL HA GANADO EN FILA 3... FELICIDADES"
                          sumapoinst ++
                          gano.innerHTML = "1"
                       } else {
                          if (listaOrig[0].textContent === "🌻" && listaOrig[3].textContent === "🌻" && listaOrig[6].textContent === "🌻") {
                            texto.innerText = "JUGADOR GIRASOL HA GANADO EN COLUMNA 1... FELICIDADES"
                             sumapoinst ++
                             gano.innerHTML = "1"
                           } else {
                              if (listaOrig[1].textContent === "🌻" && listaOrig[4].textContent === "🌻" && listaOrig[7].textContent === "🌻") {
                                 texto.innerText = "JUGADOR GIRASOL HA GANADO EN COLUMNA 2... FELICIDADES"
                                   sumapoinst ++ 
                                   gano.innerHTML = "1"
                               } else {
                                  if (listaOrig[2].textContent === "🌻" && listaOrig[5].textContent === "🌻" && listaOrig[8].textContent === "🌻") {
                                     texto.innerText = "JUGADOR GIRASOL HA GANADO EN COLUMNA 3... FELICIDADES"
                                      sumapoinst ++
                                      gano.innerHTML = "1"
                                   } else {
                                      if (listaOrig[0].textContent === "🌻" && listaOrig[4].textContent === "🌻" && listaOrig[8].textContent === "🌻") {
                                         texto.innerText = "JUGADOR GIRASOL HA GANADO EN DIAGONAL ... FELICIDADES"
                                          sumapoinst ++
                                          gano.innerHTML = "1"
                                       } else {
                                          if (listaOrig[2].textContent === "🌻" && listaOrig[4].textContent === "🌻" && listaOrig[6].textContent === "🌻") {
                                            texto.innerText = "JUGADOR GIRASOL HA GANADO EN DIAGONAL ... FELICIDADES"
                                             sumapoinst ++ 
                                             gano.innerHTML = "1"
                                      
                                        }
                                     
                                    }
            
                                }
                                 
                            }
                             
                        }

                    }
                    
                }

            }

        
            

            localStorage.setItem("datosGirasol",sumapoinst)            

        }, 1000);   

  
        let repit = ["🌷", "🌷", "🌷","🌷","🌷" ]

        let repid = ["🌻", "🌻", "🌻", "🌻"]

        //if (listaOrig.textContent === repit.textContent && listaOrig.textContent === repid.textContent ) {
            
            
            //if (gano.textContent === "1") {
            
                

          //  } else {
               // texto.innerText = "ESTA PARTIDA SE DECLARA EMPATE"
                
           // }
      //  }
         

      



        btnReiniciar.addEventListener("click", function () {

            setTimeout(() => {
                location.reload()
            }, 1000);
            
         })


                       

    })

    btnNewPart.addEventListener("click", function () {

        texto.innerText= "PREPARANDO NUEVA PARTIDA"

        setTimeout(() => {
        
            localStorage.clear(datosGirasol)
            localStorage.clear(datosTulipan)

            location.reload()

        }, 2500);
     })
                     
    
}






   
   


           

 
           
    
