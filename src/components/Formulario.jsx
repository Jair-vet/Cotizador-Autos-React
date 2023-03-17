import { Fragment } from 'react'
import { MARCAS, YEARS, PLANES } from '../constants'
import useCotizador from '../hooks/useCotizador';
import { Error } from './Error';


export const Formulario = () => {

    const { datos, handleChangeDatos, error, setError, } = useCotizador()

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(datos).includes('')){
            setError(true)
            setTimeout(() => {
                setError(false)
            }, "2000")
            return
        }
        // Limpiar Alerta
        setError('')

        // TODO: Cotizar
    }


  return (
    <>
         { error && <Error mensaje='Todos los Campos son Obligatorios' /> }
        <form
            onSubmit={handleSubmit}
        >
            {/* MARCA */}
            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-400 uppercase">
                    Marca
                </label>
                <select 
                    name="marca"
                    className="w-full p-3 bg-white border border-gray-300 rounded-lg"
                    onChange={ e => handleChangeDatos(e)}
                    value={datos.marca}
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
                    name="year"
                    className="w-full p-3 bg-white border border-gray-300 rounded-lg"
                    onChange={ e => handleChangeDatos(e)}
                    value={datos.year}
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
                    Planes
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
                                onChange={ e => handleChangeDatos(e)}
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
