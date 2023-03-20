import React, {useState} from 'react'

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

export default Banner;