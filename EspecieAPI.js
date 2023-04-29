//1. obtener los datos del formulario
//2. Conectarnos a la reuta de la API
//3. Mostrar los mensajes correspondientes

class EspecieAPI{

    //Método guardarEspecie()

    async guardarEspecie(){

        //Paso 1
        //TO DO: validar datos
        const nombre= document.getElementById("nombre").value;
        const clasificacion=document.getElementById("clasificacion").value;
        const esperanza_vida=parseInt(document.getElementById("esperanza_vida").value);
        const peso_promedio=parseFloat(document.getElementById("peso_promedio").value);

        //Crear un json con esos datos

        const datos={
            nombre:nombre,
            clasificacion:clasificacion,
            esperanza_vida:esperanza_vida,
            peso_promedio:peso_promedio
        };

        //TO DO: Falta gestionar errores

        await fetch(
            "http://localhost:3000/crear_especie",
            {
                method:"POST",
                body:JSON.stringify(datos),
                headers:{
                    "Content-Type":"application/json"
                }
            }
        );

        console.log("El registro se insertó correctamente");
    }

    async listarEspecies(){
        //Paso 1. Conectarnos  a la api

        let especies= await fetch("http://localhost:3000/listar_especie");
        especies = await especies.json();

        const miTabla= document.getElementById("tabla_especies")

        //Paso 2. Recorrer el JSON
        especies.forEach(
            (especie)=>{
                const fila= miTabla.insertRow();
                fila.insertCell().innerText=especie.id_especie;
                fila.insertCell().innerText=especie.nombre;
                fila.insertCell().innerText=especie.clasificacion;
                fila.insertCell().innerText=especie.esperanza_vida;
                fila.insertCell().innerText=especie.peso_promedio;

                console.log(especie);
            }
        );
    }

}
// Convertir esta clase en modulo para importarlo en otro lado del proyecto
export default EspecieAPI;
