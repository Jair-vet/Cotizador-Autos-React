import { createContext, useState } from 'react'

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: '',
    })

    const [error, setError] = useState(false)

    const handleChangeDatos = e => {
        setDatos({
            ...datos,  // Tomar una copia
            [e.target.name] : e.target.value
        })
    }

    return(
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext