import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { trpc } from "../utils/trpc";
import React, { useEffect, useState } from "react";

type BannerButtonProps = {
  buttonContent: string;
};

const BannerButtons = (props: BannerButtonProps) => {
  return (
    <button className="mx-4 font-comfortaa text-lg text-teal-600 transition-colors hover:text-white">
      {props.buttonContent}
    </button>
  );
};

const BannerSeparators = () => {
  return (
    <div
      className="h-12 w-[2px] rounded-lg"
      style={{
        background:
          "linear-gradient(rgba(13,148,136,0) 0%, rgba(13,148,136,1) 30%, rgba(13,148,136,1) 70%, rgba(13,148,136,0) 100%)",
      }}
    ></div>
  );
};

const BannerTabs = () => {
  return (
    <div className="absolute right-6 top-6 flex h-1/2 w-1/3 flex-row justify-end">
      <BannerButtons buttonContent="Art" />
      <BannerSeparators />
      <BannerButtons buttonContent="Music" />
      <BannerSeparators />
      <BannerButtons buttonContent="Animation" />
      <BannerSeparators />
      <BannerButtons buttonContent="Games" />
    </div>
  );
};

const Banner = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const bannerWidth = isScrolled ? "w-full" : "w-full";

  function handleScroll() {
    setIsScrolled(!isScrolled);
    console.log(isScrolled);
  }

  return (
    <div className="sticky top-0 z-10">
      <div className="relative h-24">
        {" "}
        {/*Parent Banner Body*/}
        <div className={`relative z-20 h-full items-center p-6 ${bannerWidth}`}>
          <div className="flex h-full flex-row">
            <img
              className="h-full object-contain"
              src="/images/niko-signature.png"
            ></img>
            {isScrolled && (
              <p className="mt-2 font-comfortaa text-3xl text-white">
                icholas Subianto
              </p>
            )}
          </div>
          <BannerTabs />
        </div>
        <div className="-mt-24 h-full w-full bg-cyan-600 opacity-20"></div>
        <div
          className="-mt-10 h-10 opacity-50"
          style={{
            background:
              "linear-gradient(rgba(13,148,136,0) 0%, rgba(13,148,136,0.5377859762068891) 79%, rgba(13,148,136,1) 100%)",
          }}
        ></div>{" "}
        {/*Parent Banner Gradient Up*/}
      </div>
      <div className="h-2 bg-gradient-to-t from-transparent to-teal-600 opacity-50"></div>{" "}
      {/*Parent Banner Gradient Down*/}
      {/* <button className='bg-white' onClick={handleScroll}>Simulate Scroll</button> */}
    </div>
  );
};

type CardsProps = {
  title: string;
  description: string;
  image: string;
  offset: string | null;
};

const Cards = (props: CardsProps) => {
  return (
    <div className={props.offset + " h-full flex-shrink-0 flex-shrink-0 rounded-lg bg-teal-700 hover:shadow-lg hover:shadow-teal-500"}>
      <img
        className="h-2/3 w-full rounded-t-lg bg-niko-shade object-cover"
        src={props.image}
      ></img>
      <p className="m-2 font-comfortaa text-lg text-white">{props.title}</p>
      <p className="mx-2 font-comfortaa text-sm text-white">
        {props.description}
      </p>
    </div>
  );
};

type SectionProps = {
  id: number;
  name: string;
  cards: CardsProps[];
};

const Section = (props: SectionProps) => {
  return (
    <div>
      <h1 className="my-4 text-center font-comfortaa text-2xl text-white">
        {props.name}
      </h1>
      <div className="relative flex h-[400px] flex-row flex-nowrap justify-start overflow-hidden rounded-xl bg-tealMenu shadow-inner shadow-teal-900">
        <Carousel cards={props.cards} />
      </div>
    </div>
  );
};

type CarouselProps = {
  cards: CardsProps[];
};

const Carousel = (props: CarouselProps) => {
  return (
    <div>
      <div className="w-inherit m-6 flex h-[80%] flex-row flex-nowrap overflow-x-scroll rounded-lg">
        {props.cards.map((cardProp, i) => {
          console.log(i);
          return (
            <>
              <Cards {...cardProp} key={i} offset={i == 0 ? null : 'ml-6'}/>
            </>
          );
        })}
      </div>
      <div className="absolute top-6 ml-6 h-[80%] w-[200px] rounded-l-lg bg-gradient-to-r from-teal-500 to-transparent mix-blend-color"></div>
      <div className="absolute right-6 top-6 h-[80%] w-[200px] rounded-r-lg bg-gradient-to-r from-transparent to-teal-500 mix-blend-color"></div>
    </div>
  );
};

export default function HomePage() {
  const sectionArray: SectionProps[] = [];

  const exampleProps: SectionProps = {
    id: 1,
    name: "Digital Art",
    cards: [],
  };

  const exampleProps2: SectionProps = {
    id: 1,
    name: "Music",
    cards: [],
  };

  const exampleProps3: SectionProps = {
    id: 1,
    name: "Animation",
    cards: [],
  };

  const cardProp1: CardsProps = {
    title: "Orma",
    description: "The sir neknok himself",
    image: "/images/Orma.jpg",
  };

  const cardProp2: CardsProps = {
    title: "Tteok Bokki Bathhouse",
    description: "Yummers",
    image: "/images/TBBathhouse.png",
  };

  const cardProp3: CardsProps = {
    title: "Mogu Glober",
    description: "It's transparent!",
    image: "/images/MomoGlobe.png",
  };

  const cardProp4: CardsProps = {
    title: "Niko Floating",
    description: "Water boy",
    image: "/images/NikoGif.gif",
  };

  exampleProps.cards.push(cardProp4);
  exampleProps.cards.push(cardProp2);
  exampleProps.cards.push(cardProp3);
  exampleProps.cards.push(cardProp1);
  exampleProps.cards.push(cardProp4);
  exampleProps.cards.push(cardProp2);
  exampleProps.cards.push(cardProp3);
  exampleProps.cards.push(cardProp1);
  exampleProps2.cards.push(cardProp1);
  exampleProps2.cards.push(cardProp2);
  exampleProps3.cards.push(cardProp3);

  sectionArray.push(exampleProps);
  sectionArray.push(exampleProps2);
  sectionArray.push(exampleProps3);

  return (
    <>
      <Head>
        <title>Niko&apos;s Portfolio</title>
        <meta name="description" content="Very cool!" />
        <link rel="icon" href="/signature.ico" />
        <link href={addComfortaa()} rel="stylesheet"></link>
      </Head>
      <div className="h-screen overflow-auto bg-niko-shade scrollbar-hide">
        <div className="h-[3000px] flex-col items-center justify-center">
          <Banner />
          <div className="mt-4 px-10">
            {sectionArray.map((section, i) => (
              <Section {...section} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );

  function addComfortaa(): string | undefined {
    return "https://fonts.googleapis.com/css?family=Comfortaa&display=swap";
  }
}

{
  /* <Cards title="Orma" description="Snake boy" image="/images/Orma.jpg" />
            <Cards title="Tteok Bokki Bathhouse" description="Yummers" image="/images/TBBathhouse.png" />
            <Cards title="Mogu Globe" description="Mushroom girl" image="/images/MomoGlobe.png" />
            <Cards title="Niko Floating" description="Water boy" image="/images/NikoGif.gif" /> */
}
