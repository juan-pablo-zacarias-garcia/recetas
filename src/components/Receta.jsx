
const Receta = ({ receta }) => {

    return (
        <div className="flex gap-x-4" key={receta.nombre}>
            <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src={receta.img} alt="" />
            <div class="min-w-0 flex-auto">
                <p class="text-sm font-semibold leading-6 text-gray-900">{receta.nombre}</p>
                <p class="text-sm font-semibold leading-6 text-gray-900">Tiempo de preparación: {receta.time}</p>
                <p class="text-sm font-semibold leading-6 text-gray-900">Ingredientes</p>
                {receta.ingredientes.map((ingrediente) => {
                    return <div>{ingrediente}</div>
                })
                }
            </div>
        </div>
    );
}
export default Receta;