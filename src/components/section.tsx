import Cards, {CardsProps} from "./card";
import Carousel, {CarouselProps} from "./carousel";

export type SectionProps = {
    id: number;
    name: string;
    cards: CardsProps[];
};

export default function Section(props: SectionProps){
    return (
        <div>
            <p className="my-4 text-center font-comfortaa text-2xl text-white position:relative">
                {props.name}
            </p>
            <div className="relative flex h-[399px] flex-row flex-nowrap justify-start overflow-hidden rounded-xl bg-tealMenu shadow-inner shadow-teal-900">
                <Carousel cards={props.cards} />
            </div>
        </div>
    );
};

