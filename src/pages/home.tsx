/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Link from "next/link";
import { trpc } from "../utils/trpc";
import React, { useEffect, useState } from 'react'

import {type CardsProps} from "../components/Cards"
import Banner from "../components/Banner"
import Section, {type SectionProps} from "../components/Section"

export default function HomePage() {
    const newItem: CardsProps = {title:"Orma", description:"Snake boy", image:"/images/Orma.jpg"}
    const newItem2: CardsProps = {title:"Tteok Bokki Bathhouse", description:"Yummers", image:"/images/TBBathhouse.png"}
    const newItem3: CardsProps = {title:"Mogu Globe", description:"Mushroom girl", image:"/images/MomoGlobe.png"}
    const newItem4: CardsProps = {title:"Niko Floating", description:"Water boy", image:"/images/NikoGif.gif"}
    const cardlist: CardsProps[] = [];
    cardlist.push(newItem);
    cardlist.push(newItem2);
    cardlist.push(newItem3);
    cardlist.push(newItem4);
    cardlist.push(newItem);
    cardlist.push(newItem2);
    cardlist.push(newItem3);
    cardlist.push(newItem4);
    const newSectionProps: SectionProps = {title:"Digital Art", carditems:cardlist};
    const newSectionProps2: SectionProps = {title:"Animation", carditems:cardlist};

    return (
        <>
            <Head>
                <title>Niko&apos;s Portfolio</title>
                <meta name="description" content="Very cool!" />
                <link rel="icon" href="/signature.ico" />
                <link href="https://fonts.googleapis.com/css?family=Comfortaa&display=swap" rel="stylesheet"></link>

            </Head>
            <div className='bg-niko-shade h-screen scrollbar-hide overflow-auto'>
                <div className='h-[3000px] flex-col justify-center items-center'>
                    <Banner />
                    <div className='px-10 mt-4'>
                        <Section {...newSectionProps}/>
                        <Section {...newSectionProps2}/>
                    </div>
                </div>
            </div>
        </>
    )
}