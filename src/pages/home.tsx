import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { trpc } from "../utils/trpc";
import React, { useEffect, useState } from "react";
import Cards, {CardsProps} from "../components/card";
import Carousel, {CarouselProps} from "../components/carousel";
import Section, {SectionProps} from "../components/section";
import Banner from "../components/banner";

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

    const cardProp1 = {
        title: "Orma",
        description: "The sir neknok himself",
        image: "/images/Orma.jpg",
    };

    const cardProp2 = {
        title: "Tteok Bokki Bathhouse",
        description: "Yummers",
        image: "/images/TBBathhouse.png",
    };

    const cardProp3 = {
        title: "Mogu Glober",
        description: "It's transparent!",
        image: "/images/MomoGlobe.png",
    };

    const cardProp4 = {
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