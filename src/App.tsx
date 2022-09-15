import { useState } from 'react'

import Grid from './components/Grid'
import Info from './components/Info'

const App = (): JSX.Element => {
    const [ player, setPlayer ] = useState< boolean >( false )

    return(
        <>
            <div className = 'flex items-center justify-center h-screen w-screen flex-col'>
                <div className = 'mb-12'>
                    <Info player = { player } />
                </div>
                <div className = 'bg-slate-900 w-1/2 h-2/3 p-8 flex justify-center items-center flex-wrap'>
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
