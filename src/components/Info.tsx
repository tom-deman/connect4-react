import {
    useEffect,
    useState
} from 'react'

interface IProps {
    player: boolean,
    win   : string
}

const Info = ( { player, win }: IProps ): JSX.Element => {
    const [ color, setColor ] = useState< string >( 'text-teal-700' )

    useEffect( () => {
        setColor( player ? 'text-yellow-700' : 'text-teal-700' )
    }, [ player ] )

    useEffect( () => {
        win !== '' && setColor( win === 'Player one' ? 'text-teal-700' : 'text-yellow-700' )
    }, [ win ] )

    return(
        <>
            {
                win === ''
                    ? <div className = { `${ color } text-lg mt-6` }>
                        { player ? 'Player 2' : 'Player 1' }
                    </div>
                    : <div className = { `${ color } text-lg mt-6` }>
                        { win === 'Player one' ? 'Player 1 won !' : 'Player 2 won !' }
                    </div>
            }
        </>
    )
}

export default Info
