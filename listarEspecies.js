// 1. Conectanos a la ruta/listar_especies
// 2. Recorrer el Json
//2.1 Agregar una fila en la tabla por cada objeto 

import EspecieAPI from "./EspecieAPI.js";

const miEspecie=new EspecieAPI();

miEspecie.listarEspecies();