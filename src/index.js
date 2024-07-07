/** Guardamos los valores del formulario */

let matrix = [];
let errores = [];


const btnSubmit = document.querySelector('#registrar');
btnSubmit.addEventListener('click', registrar);

function validacion () {

    let validacion = true;
    if (document.querySelector('#id').value =="") 
        {
            errores.push ("Falta cumplimentar el campo Identificación"); 
            validacion = false;
        }

    if (document.querySelector('#mayores').value == "")
        {
            errores.push ("Falta cumplimentar el Número de Mayores"); 
            validacion = false;
        }

        if (document.querySelector('#menores').value == "")
            {
                errores.push("Falta cumplimentar el Número de Menores"); 
                validacion = false;
            }



    return validacion;
}

function registrar(e)
{

    
    if(validacion()==true)
    {
    const btnId = document.querySelector('#id').value;
    const btnMayores = document.querySelector('#mayores').value;
    const btnMenores = document.querySelector('#menores').value;
    const btnFecha = document.querySelector('#fecha').value;
    const btnHorario = document.querySelector('#horario').value;
    
    matrix.push ([btnId,btnMayores,btnMenores,btnFecha,btnHorario ]);

           let sectionbookings = document.querySelector('#bodyTable');
    
           for (let i=matrix.length-1; i<matrix.length; i++)
            {
                let elementTr = document.createElement("TR");
                for (let j=0; j<matrix[i].length; j++)
                    {
                        
                        elementTr.innerHTML+="<td>"+matrix[i][j]+"</td>";
                        
                    }
                    elementTr.innerHTML+="<button id='"+i+"' onclick='borrar();'>Borrar</button>";
                    elementTr.innerHTML+="<button id='"+i+"' onclick='actualizar();'>Actualizar</button>";
                    sectionbookings.appendChild(elementTr);
                    e.preventDefault();
                    
            }
        }
            
    else {

        let dialogModal = document.querySelector('#modal');
        let dialogInfo = document.querySelector('#modal-info');

        //Insertar los Errores 
        dialogModal.classList.add('modal-active');
        dialogModal.classList.remove('modal');
        let elementError = "";
         for(let y=0; y<errores.length; y++)
            {
                elementError += "<h4>"+errores[y]+"</h5></h4>";
                console.log(elementError);
             }
            
             dialogInfo.innerHTML = elementError;

             const btnCerrar = document.querySelector('#cerrar-modal');

             btnCerrar.addEventListener('click', ()=>{
                dialogModal.classList.add('modal');
                dialogModal.classList.remove('modal-active');
                errores.splice(0, errores.length);
             });



        //Crear evento para cuando pulse fuera 
        e.preventDefault();
    }
        
}

function borrar(e) {
    const element = event.target.id;
    
    matrix.splice(element, 1);

    console.table(matrix);

     let sectionbookings = document.querySelector('#bodyTable');
     sectionbookings.innerHTML="";
     
     for (let k=0; k<matrix.length; k++)
        {
            let elementTr = document.createElement("TR");
            for (let j=0; j<matrix[k].length; j++)
                {
                    
                    elementTr.innerHTML+="<td>"+matrix[k][j]+"</td>";
                    
                }
                elementTr.innerHTML+="<button id='"+k+"' onclick='borrar();'>Borrar</button>";
                elementTr.innerHTML+="<button id='"+k+"' onclick='actualizar();'>Actualizar</button>";
                sectionbookings.appendChild(elementTr);
                
        }
}

function actualizar(e) {

    const element = event.target.id;

     const dialogUpdate = document.getElementById("dialogUpdate");
     dialogUpdate.showModal();

     const submitUpdate = document.querySelector('#btn-submitUpdate');
     submitUpdate.addEventListener('click', ()=>{
        
             if(validacion()==true)
             {
             const btnIdUpdate = document.querySelector('#idUpdate').value;
             const btnMayoresUpdate = document.querySelector('#mayoresUpdate').value;
             const btnMenoresUpdate = document.querySelector('#menoresUpdate').value;
             const btnFechaUpdate = document.querySelector('#fechaUpdate').value;
             const btnHorarioUpdate = document.querySelector('#horarioUpdate').value;

             matrix[element] = ([btnIdUpdate,btnMayoresUpdate,btnMenoresUpdate,btnFechaUpdate,btnHorarioUpdate ]);

             let sectionbookings = document.querySelector('#bodyTable');
            sectionbookings.innerHTML="";
     
     for (let k=0; k<matrix.length; k++)
        {
            let elementTr = document.createElement("TR");
            for (let j=0; j<matrix[k].length; j++)
                {
                    
                    elementTr.innerHTML+="<td>"+matrix[k][j]+"</td>";
                    
                }
                elementTr.innerHTML+="<button id='"+k+"' onclick='borrar();'>Borrar</button>";
                elementTr.innerHTML+="<button id='"+k+"' onclick='actualizar();'>Actualizar</button>";
                sectionbookings.appendChild(elementTr);
                
        }
     }
    
     });

}