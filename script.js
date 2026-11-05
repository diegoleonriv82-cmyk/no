let pokemon1=document.getElementById("pasto")
let pokemon2=document.getElementById("purple")
let pantalla=document.getElementById("pantalla")
let salud2=document.getElementById("salud2")
let salud3=document.getElementById("salud3")
let ayuwoki={
    nombre:"ayuwoki",
    vida:65
}
let cj={
    nombre:"carlos julio",
    vida:65
}
let deataque=document.getElementById("deataque")
salud3.textContent=cj.vida
salud2.textContent=ayuwoki.vida

function contraataque(n){
    if(n==1){
        pokemon2.classList.add("a2")
        pokemon1.classList.add("y21")
        cj.vida=cj.vida-2      
        deataque.textContent="el ayuwoki ha utilizado ataque rapido"
     setTimeout(
       function(){
        pokemon2.classList.remove("a2")
        pokemon1.classList.remove("y21")
       },2000
    )
    }   
    else if(n==2){
        pokemon2.classList.add("a1")
        pokemon1.classList.add("y21")
        cj.vida=cj.vida-7
        salud3.textContent=cj.vida
        deataque.textContent="el ayuwoki ha utilizado laser"
        setTimeout(
            function(){
        pokemon2.classList.remove("a1")
        pokemon1.classList.remove("y21")
            },2000
        )
    }
    else if(n==3){
        pokemon2.classList.add("a3")
        pokemon1.classList.add("y21")
        cj.vida=cj.vida-4
        salud3.textContent=cj.vida
        deataque.textContent="el ayuwoki ha utilizado volar en ciruculos"
        setTimeout(
            function(){
                pokemon2.classList.remove("a3")
                pokemon1.classList.remove("y21")
            },2000
        )
    }
    else{
                pokemon2.classList.add("a4")
        pokemon1.classList.add("y21")
        cj.vida=cj.vida-6
        salud3.textContent=cj.vida
        deataque.textContent="el ayuwoki ha utilizado me vuelvo gigante"
        setTimeout(
            function(){
                pokemon2.classList.remove("a4")
                pokemon1.classList.remove("y21")
            },2000
        )
    }
    
            if(cj.vida<1){
            salud3.textContent=0
        }
        else{
            salud3.textContent=cj.vida
        }
}
function at(n){
    if(n==1){
        pokemon1.classList.add("y20")
        pokemon2.classList.add("y21")
        ayuwoki.vida=ayuwoki.vida-2
        deataque.textContent="has utilizado ataque sencillo te doy un consejo espicha los demas botones"
        setTimeout(
            function(){
                pokemon1.classList.remove("y20")
                pokemon2.classList.remove("y21")
            },1000
        )
        setTimeout(
            function(){
            contraataque(1)
            },1500
        )
    }
    else if(n==2){
        pokemon1.classList.add("y22")
        pokemon2.classList.add("y21")
        pantalla.style.background="cyan"
        ayuwoki.vida=ayuwoki.vida-5
        deataque.textContent="has utilizado electricidad este ataque para nada es copiado del mk9 exactamnete de raiden"
        setTimeout(
            function(){
                    pokemon1.classList.remove("y22")
                    pokemon2.classList.remove("y21")
                    pantalla.style.background="white"
            },1000
        )
        setTimeout(
            function(){
            contraataque(2)
            },1500
        )
    }
    else if(n==3){
        pokemon1.classList.add("y23")
        pokemon2.classList.add("y21")
        ayuwoki.vida=ayuwoki.vida-4
        deataque.textContent="has utilizado romper huesos(le rompiste un hueso ese es el ataque)"
    setTimeout(
        function(){
            pokemon1.classList.remove("y23")
            pokemon2.classList.remove("y21")
        },1000
    )
    setTimeout(
            function(){
            contraataque(3)
            },1500
        )
    }
    else{
        let linea=document.getElementById("linea")
        linea.classList.add("linea2")
        pantalla.style.background="black"
        pokemon2.classList.add("y24")
        ayuwoki.vida=ayuwoki.vida-7
        deataque.textContent="has utilizado rayo y no me refiero al de la peli mira ya paso el rayo lo viste?"
        setTimeout(
        function(){
        linea.classList.remove("linea2")
        pantalla.style.background="none"
        pokemon2.classList.remove("y24")
    },1000
    )
    setTimeout(
            function(){
            contraataque(4)
            },1500
        )
    }
    if(ayuwoki.vida<1){
        ayuwoki.vida=0
        salud2.textContent=ayuwoki.vida
        deataque.textContent="el ayuwoki se ha debilitado"
    }
    else{
        salud2.textContent=ayuwoki.vida
    }
}
