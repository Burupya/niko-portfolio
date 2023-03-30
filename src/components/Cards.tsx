import { type } from "os";

type CardsProps = {
  title: string;
  description: string;
  image: string;
};

const Cards = (props: CardsProps) => {
  return (
    <div className="mt-4 mb-2 h-[400px] shrink-0 rounded-lg bg-teal-700 text-white shadow-lg transition-colors hover:bg-niko-orange hover:text-niko-shade">
      <img
        className="h-2/3 w-full rounded-t-lg bg-niko-shade object-contain"
        src={props.image}
        alt="Card Image"
      ></img>
      <p className="m-2 font-comfortaa text-lg">{props.title}</p>
      <p className="mx-2 font-comfortaa text-sm">{props.description}</p>
    </div>
  );
};

export type { CardsProps };
export default Cards;
