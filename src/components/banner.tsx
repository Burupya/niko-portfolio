import React, {useState} from 'react';

export type BannerButtonProps = {
    buttonContent: string;
};

const BannerButtons = (props: BannerButtonProps) => {
    return (
        <button className="mx-4 font-comfortaa text-lg text-teal-600 transition-colors hover:text-niko-orange">
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
export default Banner;