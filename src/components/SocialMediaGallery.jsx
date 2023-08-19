import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis'
import galleryImg1 from '../assets/image/gallery-images/galleryImg1.png'
import galleryImg2 from '../assets/image/gallery-images/galleryImg2.png'
import galleryImg3 from '../assets/image/gallery-images/galleryImg3.png'
import galleryImg4 from '../assets/image/gallery-images/galleryImg4.png'
import galleryImg5 from '../assets/image/gallery-images/galleryImg5.png'
import galleryImg6 from '../assets/image/gallery-images/galleryImg6.png'

function SocialMediaGallery() {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    let time = 0, isActive = true

    useEffect(() => {
        const lenis = new Lenis({
            duration: 3,
            easing: (t) => (t === 1 ? 1 : 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            smoothTouch: true,
            touchMultiplier: 2,
            wheelMultiplier: 1,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        const init = () => {
            config();
        }

        const config = () => {
            const overscroll = [
                ...document.querySelectorAll('[data-scroll="overscroll"]')
            ];

            if (overscroll.length > 0) {
                overscroll.forEach((item) =>
                    item.setAttribute("onwheel", "event.stopPropagation()")
                );
            }
        }
        raf(time += 10);
        requestAnimationFrame(raf);
        init()
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        window.addEventListener('resize', () => {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        })
        window.onpageshow = function (event) { if (event.persisted) { window.location.reload() } };
    });

    useEffect(() => {
        const DOM = {
            sections: {
                columns: document.querySelector(".section.is--grid"),
                trigger: document.querySelector(".section.is--people"),
            },
            columns: document.querySelectorAll(".section.is--grid > .grid-columns"),
            columnWraps: document.querySelectorAll(
                ".section.is--grid .grid-column-w"
            ),
            itemsWrappers: document.querySelectorAll(
                ".section.is--grid .grid-column-w .grid-column"
            ),
            items: document.querySelectorAll(".section.is--grid .grid-column-item"),
            images: document.querySelectorAll(
                ".section.is--grid .grid-column-item__img"
            ),
        };

        const scroll = () => {
            gsap
                .timeline({
                    scrollTrigger: {
                        start: 0,
                        end: "max",
                        scrub: true,
                    },
                })
                .addLabel("start", 0)
                .to(
                    DOM.sections.columns,
                    {
                        ease: "none",
                        startAt: { scale: 1.3 },
                        scale: 1,
                    },
                    "start"
                )
                .to(
                    DOM.sections.columns,
                    {
                        scrollTrigger: {
                            trigger: DOM.sections.trigger,
                            start: 0,
                            end: "bottom bottom",
                            scrub: true,
                        },
                        ease: "none",
                        yoyo: true,
                        repeat: 1,
                    },
                    "start"
                )
                .to(
                    DOM.columnWraps,
                    {
                        ease: "none",
                        yPercent: (pos) => (pos % 2 ? 5 : -5),
                    },
                    "start"
                )
                .to(
                    DOM.images,
                    {
                        ease: "none",
                        startAt: {
                            scale: 1.2,
                            opacity: 0.6,
                        },
                        scale: 1,
                        opacity: 1,
                    },
                    "start"
                );
        };
        scroll();
    });

    useEffect(() => {
        window.onload = function () {
            document.getElementsByClassName('.scroll--toggle');
            gsap.to(".load-wrapper", {
                duration: 2,
                ease: "cubic-bezier(.99, 1, .300, 3)",
                scaleY: 1,
                onComplete: function () {
                    gsap.delayedCall(0, function () {
                        gsap.to(".load-wrapper", {
                            delay: 0.25,
                            duration: 0.6,
                            scaleY: 0,
                            ease: "cubic-bezier(.22,.86,.47,.94)",
                            onComplete: function () {
                                document.getElementsByClassName('.scroll--toggle');
                                gsap.set(".load-wrapper", { display: "none" });

                            }
                        });
                    });
                }
            });
        };
    })

    return (
        <>
            <div className="mt-[-30px] relative">
                <div className="absolute flex justify-center bottom-0 z-10 w-full mb-20">
                <div className="">
                  <button
                    onClick={() => navigate("/productCatagories")}
                    className="animation-button button--aatya button--aatya--white" data-text="See Our Social Media">
                    <span>S</span><span>e</span><span>e</span> <span>O</span><span>u</span><span>r</span> <span>S</span><span>o</span><span>c</span><span>i</span><span>a</span><span>l</span> <span>M</span><span>e</span><span>d</span><span>i</span><span>a</span>
                  </button>
                </div>
                </div>
                <section className="section is--black is--people pb-10">
                    <div className="page-padding">
                        <div className="container">
                            <div className="container-padding">
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section is--grid z-[-1] w-full h-screen max-w-full"
                    style={{ position: "fixed" }}>
                    <div className="grid-columns">
                        <div className="grid-column-w">
                            <div className="grid-column">
                                <div className="grid-column-item">
                                    <img
                                        src={galleryImg3}
                                        loading="lazy"
                                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 84vw, (max-width: 991px) 54vw, 40vw"
                                        alt="true"
                                        className="grid-column-item__img"
                                    />
                                </div>
                                <div className="grid-column-item">
                                    <img
                                        src={galleryImg1}
                                        loading="lazy"
                                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 84vw, (max-width: 991px) 54vw, 40vw"
                                        alt="true"
                                        className="grid-column-item__img"
                                    />
                                </div>
                                <div className="grid-column-item show-mobile">
                                    <img
                                        src={galleryImg3}
                                        loading="lazy"
                                        sizes="100vw"
                                        alt="true"
                                        className="grid-column-item__img"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="grid-column-w">
                            <div className="grid-column">
                                <div className="grid-column-item">
                                    <img
                                        src={galleryImg4}
                                        loading="lazy"
                                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 84vw, (max-width: 991px) 54vw, 40vw"
                                        alt="true"
                                        className="grid-column-item__img"
                                    />
                                </div>
                                <div className="grid-column-item">
                                    <img
                                        src={galleryImg5}
                                        loading="lazy"
                                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 84vw, (max-width: 991px) 54vw, 40vw"
                                        alt="true"
                                        className="grid-column-item__img"
                                    />
                                </div>
                                <div className="grid-column-item show-mobile">
                                    <img
                                        src={galleryImg6}
                                        loading="lazy"
                                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 84vw, (max-width: 991px) 54vw, 40vw"
                                        alt="true"
                                        className="grid-column-item__img"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="grid-column-w">
                            <div className="grid-column">
                                <div className="grid-column-item">
                                    <img
                                       src={galleryImg2}
                                        loading="lazy"
                                        sizes="(max-width: 479px) 268.800048828125px, (max-width: 767px) 84vw, (max-width: 991px) 54vw, 40vw"
                                        alt="true"
                                        className="grid-column-item__img"
                                    />
                                </div>
                                <div className="grid-column-item">
                                    <img
                                        src={galleryImg4}
                                        loading="lazy"
                                        sizes="(max-width: 479px) 268.800048828125px, (max-width: 767px) 84vw, (max-width: 991px) 54vw, 40vw"
                                        alt="true"
                                        className="grid-column-item__img"
                                    />
                                </div>
                                <div className="grid-column-item show-mobile">
                                    <img
                                        src={galleryImg6}
                                        loading="lazy"
                                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 84vw, (max-width: 991px) 54vw, 40vw"
                                        alt="true"
                                        className="grid-column-item__img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <footer className="section is--footer bg-gradient-bottom-shape">
                    <div className="page-padding">

                        <div className="footer-wrap">

                        </div>

                    </div>
                </footer>
            </div>
        </>
    )
}
export default SocialMediaGallery;