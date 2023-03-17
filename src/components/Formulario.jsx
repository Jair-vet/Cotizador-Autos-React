
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
                    <option value="">-- Selecciona --</option>
                </select>
            </div>
        </form>

    </>
  )
}