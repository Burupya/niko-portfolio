import { type } from "os"

type CardsProps = {
    title: string,
    description: string,
    image: string
}

const Cards = (props: CardsProps) => {
    return (
        <div className='h-[400px] bg-teal-700 rounded-lg m-4 shadow-lg'>
            <img className='object-contain w-full h-2/3 bg-niko-shade rounded-t-lg' src={props.image}></img>
            <p className='m-2 font-comfortaa text-lg text-white'>{props.title}</p>
            <p className='mx-2 font-comfortaa text-sm text-white'>{props.description}</p>
        </div>
    )
}

export type {CardsProps}
export default Cards;