import useCotizador from "../hooks/useCotizador"
import { MARCAS, PLANES } from '../constants'
import { useCallback, useRef } from "react"

export const Resultado = () => {

    const { resultado, datos } = useCotizador()
    const { marca, plan, year } = datos
    const yearRef = useRef(year)

    // Filtramos por el valor del Id
    const [nombreMarca] = useCallback( 
            MARCAS.filter(m => m.id === Number(marca)),
            [ resultado ]
        )
    const [nombrePlan] = useCallback( 
            PLANES.filter(p => p.id === Number(plan)),
            [ resultado ] 
        )

    if( resultado === 0 ) return null

  return (
    <div className="bg-gray-300 text-center mt-5 p-5 shadow rounded-lg">
        <h2 className="text-emerald-600 font-black text-3xl">Resumen</h2>

        <p className="my-2">
            <span className="text-emerald-700 font-bold text-xl uppercase">Marca: </span>
            {nombreMarca.nombre}
        </p>
        <p className="my-2">
            <span className="text-emerald-700 font-bold text-xl uppercase">Plan: </span>
            {nombrePlan.nombre}
        </p>
        <p className="my-2">
            <span className="text-emerald-700 font-bold text-xl uppercase">Year: </span>
            {yearRef.current}
        </p>
        <p className="my-2 text-2xl">
            <span className="text-emerald-700 font-bold text-xl uppercase">Total </span>
            {resultado}
        </p>
    </div>
  )
}
