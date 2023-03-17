import { Fragment } from 'react'
import { MARCAS, YEARS, PLANES } from '../constants'

export const Formulario = () => {
  return (
    <>
        <form>
            {/* MARCA */}
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
            
            {/* AÑO */}
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

            {/* PLANES */}
            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-400 uppercase">
                    Marca
                </label>
                <div className="flex gap-3 items-center">
                    {PLANES.map(plan => (
                        <Fragment key={plan.id}>
                            <label>
                                {plan.nombre}
                            </label>
                            <input 
                                type="radio"
                                name='plan'
                                value={plan.id}
                            />
                        </Fragment>
                    ))}
                </div>
            </div>

            <input 
                type="submit" 
                className='w-full bg-emerald-500 hover:bg-emerald-600 p-2 rounded-lg text-white cursor-pointer uppercase font-bold'
                value="Cotizar"
            />
        </form>

    </>
  )
}
