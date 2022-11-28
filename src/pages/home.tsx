import Head from "next/head";
import Link from "next/link";
import { trpc } from "../utils/trpc";
import React, { useEffect, useState } from 'react'

type BannerButtonProps = {
    buttonContent: string
}

const BannerButtons = (props: BannerButtonProps) => {
    return (
        <button className='text-teal-600 font-comfortaa text-lg mx-4 hover:text-white transition-colors'>{props.buttonContent}</button>
    )
}

const BannerSeparators = () => {
    return (
        <div className='w-[2px] h-12 rounded-lg'
            style={{ background: 'linear-gradient(rgba(13,148,136,0) 0%, rgba(13,148,136,1) 30%, rgba(13,148,136,1) 70%, rgba(13,148,136,0) 100%)' }}></div>
    )
}

const BannerTabs = () => {
    return (
        <div className="h-1/2 w-1/3 right-6 top-6 absolute flex flex-row justify-end">
            <BannerButtons buttonContent='Art' />
            <BannerSeparators />
            <BannerButtons buttonContent='Music' />
            <BannerSeparators />
            <BannerButtons buttonContent='Animation' />
            <BannerSeparators />
            <BannerButtons buttonContent='Games' />
        </div>
    )
}

const Banner = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const bannerWidth = isScrolled ? 'w-full' : 'w-full';

    function handleScroll() {
        setIsScrolled(!isScrolled)
        console.log(isScrolled)
    }

    return (
        <div className='sticky top-0 z-10'>
            <div className='relative h-24'> {/*Parent Banner Body*/}
                <div className={`relative h-full p-6 z-20 items-center ${bannerWidth}`}>
                    <div className='flex flex-row h-full'>
                        <img className='object-contain h-full' src="/images/niko-signature.png"></img>
                        {isScrolled && <p className='text-white font-comfortaa text-3xl mt-2'>icholas Subianto</p>}
                    </div>
                    <BannerTabs />
                </div>
                <div className='bg-cyan-600 opacity-20 h-full w-full -mt-24'></div>
                <div className='h-10 opacity-50 -mt-10' style={{ background: 'linear-gradient(rgba(13,148,136,0) 0%, rgba(13,148,136,0.5377859762068891) 79%, rgba(13,148,136,1) 100%)' }}></div> {/*Parent Banner Gradient Up*/}
            </div>
            <div className='h-2 bg-gradient-to-t to-teal-600 from-transparent opacity-50'></div> {/*Parent Banner Gradient Down*/}
            {/* <button className='bg-white' onClick={handleScroll}>Simulate Scroll</button> */}
        </div>
    )
}

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

const ArtSection = () => {
    return (
        <div>
            <h1 className='text-center text-white font-comfortaa text-2xl my-4'>Digital Art</h1>
            <div className='bg-tealMenu rounded-xl flex flex-row flex-wrap justify-start shadow-inner shadow-teal-900'>
                <Cards title="Orma" description="Snake boy" image="/images/Orma.jpg" />
                <Cards title="Tteok Bokki Bathhouse" description="Yummers" image="/images/TBBathhouse.png" />
                <Cards title="Mogu Globe" description="Mushroom girl" image="/images/MomoGlobe.png" />
                <Cards title="Niko Floating" description="Water boy" image="/images/NikoGif.gif" />
            </div>
        </div>
    )
}

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Niko's Portfolio</title>
                <meta name="description" content="Very cool!" />
                <link rel="icon" href="/signature.ico" />
                <link href="https://fonts.googleapis.com/css?family=Comfortaa&display=swap" rel="stylesheet"></link>

            </Head>
            <div className='bg-niko-shade h-screen scrollbar-hide overflow-auto'>
                <div className='h-[3000px] flex-col justify-center items-center'>
                    <Banner />
                    <div className='px-10 mt-4'>
                        <ArtSection />
                    </div>
                </div>
            </div>
        </>
    )
}