import Cards, { type CardsProps } from "../components/Cards";

type SectionProps = {
  title: string;
  carditems: CardsProps[];
};

const Section = (props: SectionProps) => {
  return (
    <div>
      <h1 className="my-2 text-center font-comfortaa text-2xl text-white">
        {props.title}
      </h1>
      <div className="rounded-xl bg-tealMenu px-4 pb-2 shadow-inner shadow-teal-900">
        <div className="flex flex-row justify-start gap-4  overflow-x-scroll rounded-xl scrollbar-thin scrollbar-track-tealMenu scrollbar-thumb-teal-600 scrollbar-track-rounded-full scrollbar-thumb-rounded-full">
          {props.carditems.map(function (card, i) {
            return <Cards key={card.title} {...card} />;
          })}
        </div>
      </div>
    </div>
  );
};

export type { SectionProps };
export default Section;
