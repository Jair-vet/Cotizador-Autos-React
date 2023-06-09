import useCotizador from "../hooks/useCotizador"
import { Formulario } from "./Formulario"
import { Resultado } from "./Resultado"
import { Spinner } from "./Spinner"

export const AppSeguro = () => {

  const { resultado, cargando } = useCotizador()

  return (
    <>
        <header className="my-10">
            <h1 className="text-white text-center text-4xl font-black uppercase">Cotizador de Seguros de Autos</h1>
        </header>

        <main className="bg-white md:w-2/3 lg:w-2/4 md:mx-auto mx-8 shadow rounded-lg p-10">
            <Formulario />

            { cargando ?  <Spinner /> : <Resultado /> }
        </main>
    </>
  )
}
