import {
    useState,
    useEffect
} from 'react'

import Grid from './components/Grid'
import Info from './components/Info'

const App = (): JSX.Element => {
    const [ player, setPlayer ]           = useState< boolean >( false             )
    const [ windowWidth, setWindowWidth ] = useState< number  >( window.innerWidth )

    useEffect( () => {
        window.addEventListener( 'resize', () => {
            setWindowWidth( window.innerWidth )
        } )
    } )

    return(
        <>
            <div className = 'flex items-center justify-center h-screen w-screen flex-col'>
                <div className = 'mb-12'>
                    <Info player = { player } />
                </div>
                <div
                    className = 'bg-slate-900 h-full p-8 flex justify-center items-center flex-wrap'
                    style={ { width: windowWidth / 1.6 } }
                >
                    <Grid
                        player       = { player                      }
                        setPlayer    = {  () => setPlayer( !player ) }
                    />
                </div>
            </div>
        </>
    )
}

export default App
