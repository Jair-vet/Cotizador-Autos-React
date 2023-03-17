import { MARCAS, YEARS } from '../constants'

export const Formulario = () => {
  return (
    <>
        <form>
            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-400 uppercase">
                    Marca
                </label>
                <select 
                    name="marca"
                    className="w-full p-3 bg-white border border-gray-300 rounded-lg"
                >
                    <option value="">-- Selecciona Marca --</option>

                    {MARCAS.map(marca => (
                        <option
                            key={marca.id}
                            value={marca.id}
                        >
                            {marca.nombre}
                        </option>
                    ))}
                </select>
            </div>

            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-400 uppercase">
                    Año
                </label>
                <select 
                    name="marca"
                    className="w-full p-3 bg-white border border-gray-300 rounded-lg"
                >
                    <option value="">-- Selecciona Año --</option>

                    {YEARS.map(year => (
                        <option
                            key={year}
                            value={year}
                        >
                            {year}
                        </option>
                    ))}
                </select>
            </div>
        </form>

    </>
  )
}
