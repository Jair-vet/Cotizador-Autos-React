import useCotizador from "../hooks/useCotizador"

export const Error = ({mensaje}) => {

    const {error} = useCotizador()

  return (
    <>
        <div className="bg-red-200 text-red-800 text-center p-2 mb-2 rounded-md">
            <p className="uppercase">{ mensaje }</p>
        </div>
        {/* <p className="text-center my-4 bg-red-200 text-red-700 font-bold p-3 uppercase rounded-md">{error}</p> */}
    </>
  )
}
