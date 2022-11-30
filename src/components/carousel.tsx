import Cards, {CardsProps} from "./card";

export type CarouselProps = {
    cards: CardsProps[];
};

export default function Carousel(props: CarouselProps){
    return (
        <div>
            <div className="w-inherit m-6 mt-3 flex h-[82.9%] items-end flex-row flex-nowrap overflow-hidden rounded-lg">
                {props.cards.map((cardProp, i) => {
                    console.log(i);
                    return (
                        <>
                            <Cards {...cardProp} key={i} offset={i == 0 ? '' : 'ml-6'} />
                        </>
                    );
                })}
            </div>
            <div className="pointer-events-none absolute top-6 ml-6 h-[80%] w-[200px] rounded-l-lg bg-gradient-to-r from-teal-500 to-transparent mix-blend-color"></div>
            <div className="pointer-events-none absolute right-6 top-6 h-[80%] w-[200px] rounded-r-lg bg-gradient-to-r from-transparent to-teal-500 mix-blend-color"></div>
            <div className="w-full h-full bg-tealMenu"></div>
        </div>
    );
};