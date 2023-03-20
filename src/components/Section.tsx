import Cards, {type CardsProps} from "../components/Cards"

type SectionProps = {
    title: string,
    carditems: CardsProps[],
}

const Section = (props: SectionProps) => {
    return (
        <div>
            <h1 className='text-center text-white font-comfortaa text-2xl my-4'>{props.title}</h1>
            <div className='bg-tealMenu rounded-xl flex flex-row shrink justify-start shadow-inner shadow-teal-900'>
                {props.carditems.map(function(card, i){
                    return <Cards key={card.title} {...card}/>;
                })}
            </div>
        </div>
    )
}

export type {SectionProps}
export default Section