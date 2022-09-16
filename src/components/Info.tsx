import { useEffect, useState } from 'react'

interface IProps {
    player: boolean
}

const Info = ( { player }: IProps ): JSX.Element => {
    const [ color, setColor ] = useState< string >( 'text-teal-700' )

    useEffect( () => {
        setColor( player ? 'text-yellow-700' : 'text-teal-700' )
    }, [ player ] )

    return(
        <div className = { `${ color } text-lg mt-6` }>
            { player ? 'Joueur 2' : 'Joueur 1' }
        </div>
    )
}

export default Info
