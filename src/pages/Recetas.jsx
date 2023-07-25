import { useState } from "react";
import Receta from "../components/Receta";

const Recetas = () => {
    var array = localStorage.getItem('recetas');
    // Se parsea para poder ser usado en js con JSON.parse :)
    array = JSON.parse(array);
    const [recetas, actualizaListaRecetas] = useState(array??[]);

    const agregarReceta = (event) => {
        event.preventDefault();
        let nombreReceta = document.getElementById('nombre').value;
        let timeReceta = document.getElementById('time').value;
        let imgReceta = document.getElementById('img').value;
        let receta = {};
        receta.nombre = nombreReceta;
        receta.time = timeReceta;
        receta.img = imgReceta;
        receta.ingredientes = ingredientes;

        actualizaListaRecetas([...recetas, receta]);
        actualizaListaIngredientes([]);
        document.getElementById('nombre').value = '';
        document.getElementById('time').value = '';
        document.getElementById('img').value = '';
        localStorage.setItem("recetas", JSON.stringify([...recetas, receta]));
    }
    const [ingredientes, actualizaListaIngredientes] = useState([]);
    let i;

    const agregaIngrediente = () => {
        i = document.getElementById('ingrediente').value;
        actualizaListaIngredientes([...ingredientes, i]);
        document.getElementById('ingrediente').value = "";
    }

    const quitaIngrediente = () => {
        ingredientes.pop();
        actualizaListaIngredientes([...ingredientes]);
    }

    return (
        <div className="p-8">
            <div className="bg-orange-400 m-4 p-8 rounded">
                <h3 className="text-xl  hover:text-2xl">Nueva receta</h3>
                <form onSubmit={agregarReceta} name="formReceta">
                    <div >Nombre de la receta:</div>
                    <div><input type="text" id="nombre" name="nombre" required /></div>
                    <div >Tiempo de preparación:</div>
                    <div><input type="text" id="time" name="time" required /></div>
                    <div >Url imagen:</div>
                    <div><input type="text" id="img" name="img" required /></div>
                    <div>Ingrediente: </div>
                    <div><input type="text" id="ingrediente" /></div>
                    <div><button onClick={agregaIngrediente} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 mr-2" type="button">Agregar ingrediente</button><button onClick={quitaIngrediente} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2" type="button">Quita ingrediente</button></div>
                    <div>
                        <ol>
                            {ingredientes.map((x, index) => {
                                return <li className="m-2" key={index} >*{x}</li>
                            })}
                        </ol>
                    </div>
                    <div><button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2">Guardar</button></div>
                </form>
            </div>
            <div className="bg-orange-400 m-4 p-8 rounded">
                <h2>Lista de recetas:</h2>

                {recetas.map((receta, index) => {
                    return (
                        <div className="bg-white m-4 p-4 rounded">
                            <ul role="list" class="divide-y divide-gray-100">
                                <li class="flex justify-between gap-x-6 py-5"><Receta receta={receta} /></li>
                            </ul>
                        </div>
                    );
                })}

            </div>
        </div>
    );
}

export default Recetas;