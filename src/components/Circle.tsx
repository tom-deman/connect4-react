import {
    useEffect,
    useState
} from 'react'

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
    const [ circlewidth, setCircleWidth ] = useState< number >( window.innerWidth )

    const setGridSize = () => {
        const width = window.innerWidth

        if     ( width > 1400                 ) {
            setCircleWidth( width / 16 )
        }
        else if( width < 1400 && width > 1050 ) {
            setCircleWidth( width / 18 )
        }
        else if( width < 1050 && width > 900  ) {
            setCircleWidth( width / 16 )
        }
        else if( width < 900 && width > 650   ) {
            setCircleWidth( width / 12 )
        }
        else if( width < 650 && width > 450   ) {
            setCircleWidth( width / 14 )
        }
        else if( width < 450 && width > 380 ) {
            setCircleWidth( width / 28 )
        }
        else{
            setCircleWidth( width / 32 )
        }
    }

    useEffect( () => {
        window.addEventListener( 'resize', () => {
            setGridSize()
        } )
        setGridSize()
    }, [] )

    return (
        <div
            className = { `${ color } mx-4 rounded-full` }
            onClick   = { () => pressCircle( id )        }
            style     = { {
                width : circlewidth,
                height: circlewidth
            } }
        />
    )
}

export default Circle
