/* Az űrlapról összegyűjtjük az adatokat a submit gomra kattintva, beletesszük a listába */

import { init } from "./main.js"

export function ujAdat(lista){
    const nevELEM = $("#nev")
    const korELEM = $("#kor")
    const nemELEM = $("input[name='nem']:checked")
    const submitELEM = $("#submit")
    const adatOBJ={
        nev:"",
        kor:0,
        nem:false
    }
    submitELEM.on("click", function(event){
        event.preventDefault(); /* Leszedi az alapértelmezett hozzárendelt eseményt*/

        adatOBJ.nev = nevELEM.val()
        adatOBJ.kor=Number(korELEM.val())
        //adatOBJ.nem=ferfiELEM.isChecked()
        adatOBJ.nem = (nemELEM.val === "true" ? true :false)

        console.log(adatOBJ)
        
        const validELEM = $(".valid-feedback")
        const nevValidE = validELEM.eq(0).css("display")!="none"
        const korValidE = validELEM.eq(1).css("display")!="none"

        if (nevValidE && korValidE){
            lista.push(adatOBJ)
            init(lista)
        }else{
            console.log("hibás adatok")
        }
    })
}