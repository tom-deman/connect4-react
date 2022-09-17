import { useEffect, useState } from 'react'

interface CProps {
    id         : string,
    pressCircle: ( id: string ) => void,
    color      : string
}

const Circle = ( {
    id,
    pressCircle,
    color = 'bg-slate-600'
}: CProps ): JSX.Element => {
    const [ windowWidth, setWindowWidth ] = useState< number >( window.innerWidth )

    useEffect( () => {
        window.addEventListener( 'resize', () => {
            setWindowWidth( window.innerWidth )
        } )
    } )

    return (
        <div
            className = { `${ color } mx-4 rounded-full` }
            onClick   = { () => pressCircle( id )        }
            style     = { {
                width : windowWidth / 16,
                height: windowWidth / 16
            } }
        />
    )
}

export default Circle
