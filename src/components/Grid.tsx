import {
    Fragment,
    useState,
    useEffect
} from 'react'

import Circle from './Circle'

import { wins } from '../assets/ts/wins'

interface GProps {
    player   : boolean,
    win      : string,
    setPlayer: ()            => void,
    setWin   : ( el:string ) => void
}

interface select {
    id   : string,
    color: string
}

const Grid = ( {
    player,
    setPlayer,
    win,
    setWin
}:GProps ): JSX.Element => {

    const [ selected, setSelected ] = useState< Array< select > >( [] )

    const colorOne: string = 'bg-yellow-700'
    const colorTwo: string = 'bg-teal-700'

    const rows: Array< number > = [ 1, 2, 3, 4, 5, 6    ]
    const cols: Array< number > = [ 1, 2, 3, 4, 5, 6, 7 ]

    const fillSelect = ( a: string ):void => {
        setSelected( [ ...selected, {
            id: a,
            color: player
                ? colorOne
                : colorTwo
        } ] )
    }

    const checkRows = (
        a : string,
        b : string,
        c : string,
        d : string,
        e : string,
        id: string
    ): void => {
        if     ( !selected.find( el => el.id === a ) ) fillSelect( a  )
        else if( !selected.find( el => el.id === b ) ) fillSelect( b  )
        else if( !selected.find( el => el.id === c ) ) fillSelect( c  )
        else if( !selected.find( el => el.id === d ) ) fillSelect( d  )
        else if( !selected.find( el => el.id === e ) ) fillSelect( e  )
        else                                           fillSelect( id )
    }

    const findCircle = ( element: string ): select => {
        const index = selected.findIndex( el => el.id === element )
        return selected[ index ]
    }

    const findWin = (
        winArray      : number[][],
        playerOneArray: number  [],
        playerTwoArray: number  []
    ) =>
        winArray.forEach( ( el, index: number ) => {
            if( winArray[ index ].every( element => playerOneArray.includes( element ) ) ) {
                setWin( 'Player one' )
            }
            else if( winArray[ index ].every( element => playerTwoArray.includes( element ) ) ) {
                setWin( 'Player two' )
            }
        })

    const pressCircle = ( id: string ): void => {
        if( win ) return

        let selectedCol = +id > 10 ? id[ 1 ] : id[ 0 ] ?? undefined

        if( selected.find( el => el.id === id ) ) return

        switch( selectedCol ) {
            case '1':
                checkRows( '51', '41', '31', '21', '11', id )
            break
            case '2':
                checkRows( '52', '42', '32', '22', '12', id )
            break
            case '3':
                checkRows( '53', '43', '33', '23', '13', id )
            break
            case '4':
                checkRows( '54', '44', '34', '24', '14', id )
            break
            case '5':
                checkRows( '55', '45', '35', '25', '15', id )
            break
            case '6':
                checkRows( '56', '46', '36', '26', '16', id )
            break
            case '7':
                checkRows( '57', '47', '37', '27', '17', id )
            break
            default:
                console.error( 'error' )
        }

        setPlayer()
    }

    useEffect( () => {
        const playerOne = selected
            .filter( el => el.color === 'bg-teal-700'   )
            .map   ( el => +el.id                       )
            .sort  ( ( a, b ) => a - b                  )

        const playerTwo = selected
            .filter( el => el.color === 'bg-yellow-700' )
            .map   ( el => +el.id                       )
            .sort  ( ( a, b ) => a - b                  )
        findWin( wins, playerOne, playerTwo )
    }, [ selected ] )

    return(
        <>
            { rows.map( ( row: number, indexRow: number ) =>
                cols.map( ( col: number, indexCol: number ) =>
                    <Fragment key = { indexRow + indexCol }>
                        <Circle
                            id          = { ( +( indexRow.toString() + indexCol.toString() ) + 1 ).toString()                      }
                            pressCircle = { ( id ) => pressCircle( id )                                                            }
                            color       = { findCircle( ( +( indexRow.toString() + indexCol.toString() ) + 1 ).toString() )?.color }
                        />
                    </Fragment>
                )
            ) }
        </>
    )
}

export default Grid
