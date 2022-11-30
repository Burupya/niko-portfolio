
export type CardsProps = {
    title: string;
    description: string;
    image: string;
    offset?: string;
};

export default function Cards(props: CardsProps){
    return (
        <div className={props.offset + " group relative transition-all h-[96.4%] flex-shrink-0 flex-grow-0 rounded-lg " +
            "bg-teal-700 hover:shadow-lg hover:shadow-niko-orange hover:bg-niko-orange" + 
            " hover:-translate-y-3"}>
            <img
                className="h-2/3 w-full rounded-t-lg bg-niko-shade object-cover"
                src={props.image}
            ></img>
            <p className="m-2 font-comfortaa text-lg text-white group-hover:text-niko-shade transition-colors">{props.title}</p>
            <p className="mx-2 font-comfortaa text-sm text-white group-hover:text-niko-shade transition-colors">
                {props.description}
            </p>
        </div>
    );
};