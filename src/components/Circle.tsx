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

    return (
        <div
            className = { `${ color } h-20 w-20 mx-4 rounded-full` }
            onClick   = { () => pressCircle( id )                  }
        />
    )
}

export default Circle
