import {
    useState,
    useEffect
} from 'react'

import Grid from './components/Grid'
import Info from './components/Info'

const App = (): JSX.Element => {
    const [ player, setPlayer       ] = useState< boolean >( false             )
    const [ gridWidth, setGridWidth ] = useState< number  >( window.innerWidth )
    const [ win, setWin             ] = useState< string  >( ''                )

    const setGridSize = () => {
        const width = window.innerWidth

        if( width > 1550                      ) {
            setGridWidth( width / 1.6 )
        }
        else if( width < 1550 && width > 1050 ) {
            setGridWidth( width / 1.5 )
        }
        else if( width < 1050 && width > 900  ) {
            setGridWidth( width / 1.3 )
        }
        else {
            setGridWidth( width       )
        }
    }

    useEffect( () => {
        window.addEventListener( 'resize', () => {
            setGridSize()
        } )
        setGridSize()
    }, [] )

    return(
        <>
            <div className = 'flex items-center justify-center h-screen w-screen flex-col'>
                <div className = 'mb-12'>
                    <Info
                        player = { player }
                        win    = { win    }
                    />
                </div>
                <div
                    className = 'bg-slate-900 h-full p-8 flex justify-center items-center flex-wrap'
                    style     = { { width: gridWidth } }
                >
                    <Grid
                        player    = { player                                 }
                        win       = { win                                    }
                        setPlayer = { ()             => setPlayer( !player ) }
                        setWin    = { ( el: string ) => setWin   ( el      ) }
                    />
                </div>
            </div>
        </>
    )
}

export default App
