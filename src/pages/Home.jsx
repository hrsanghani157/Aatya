import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import productCatagoriesImg1 from '../assets/image/product-catagories1.png'
import productCatagoriesImg2 from '../assets/image/product-catagories2.png'
import productCatagoriesImg3 from '../assets/image/product-catagories3.png'
import productImg1 from '../assets/image/product1.png'
import arrowForward from '../assets/image/icon/rightArrow.svg'
import luxuriousProductBg from '../assets/image/luxiousProductBg.png'
import luxuriousProduct1 from '../assets/image/luxiousProduct1.png'
import generalContactIcon from '../assets/image/Contact-request.png'
import customerServiceIcon from '../assets/image/customer-service.png'
import showroomNearIcon from '../assets/image/showroom-near-you.png'
import chooseAatya1 from '../assets/image/choose-aatya1.png'
import chooseAatya2 from '../assets/image/choose-aatya2.png'
import chooseAatya3 from '../assets/image/choose-aatya3.png'
import broucher1 from '../assets/image/broucher-1.png'
import broucher2 from '../assets/image/broucher-2.png'
import luxuriousProductContentBg from '../assets/image/luxiousProductContentBg.png'
import '../App.css';
import "swiper/swiper.css";
import img1 from "../assets/image/heroImage1.png";
import img2 from "../assets/image/heroImage1.png";
import img3 from "../assets/image/heroImage1.png";
import { gsap, Power4 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import SocialMediaGallery from '../components/SocialMediaGallery';

function Home() {
  // heroSection animation start
  gsap.registerPlugin(ScrollTrigger);
  let images = [img1, img2, img3];
  let parts = [];
  let current = 0;

  let animOptions = {
    duration: 2,
    ease: Power4.easeInOut,
  };

  let playing = false;
  useEffect(() => {
    const cols = 4;
    const main = document.getElementById("main");
    for (let col = 0; col < cols; col++) {
      let part = document.createElement("div");
      part.className = "part";
      let el = document.createElement("div");
      el.className = "section";
      let img = document.createElement("img");
      img.src = images[current];
      el.appendChild(img);
      part.style.setProperty("--x", (-100 / cols) * col + "vw");
      part.appendChild(el);
      main.appendChild(part);
      parts.push(part);
    }
    window.addEventListener("keydown", function (e) {
      if (["ArrowDown", "Arrowright"].includes(e.key)) {
        go(1);
      } else if (["ArrowUP", "ArrowLeft"].includes(e.key)) {
        go(-1);
      }
    });
  }, []);

  const go = (dir) => {
    if (!playing) {
      playing = true;
      if (current + dir < 0) current = images.length - 1;
      else if (current + dir >= images.length) current = 0;
      else current += dir;
      const up = (part, next) => {
        part.appendChild(next);
        gsap
          .to(part, { ...animOptions, y: -window.innerHeight })
          .then(function () {
            part.children[0].remove();
            gsap.to(part, { duration: 0, y: 0 });
          });
      }
      const down = (part, next) => {
        part.prepend(next);
        gsap.to(part, { duration: 0, y: -window.innerHeight });
        gsap.to(part, { ...animOptions, y: 0 }).then(function () {
          part.children[1].remove();
          playing = false;
        });
      }
      for (let p in parts) {
        let part = parts[p];
        let next = document.createElement("div");
        next.className = "section";
        let img = document.createElement("img");
        img.src = images[current];
        next.appendChild(img);
        if ((p - Math.max(0, dir)) % 2) {
          down(part, next);
        } else {
          up(part, next);
        }
      }
    }
  }
  let scrollTimeout;
  const wheel = (e) => {
    clearTimeout(scrollTimeout);
    setTimeout(function () {
      if (e.deltaY < -40) {
        go(-1);
      }
      else if (e.deltaY >= 40) {
        go(1);
      }
    })
  }
  let endY;
  let clicked = false;
  window.addEventListener('touchmove', function (e) {
    if (clicked) {
      endY = e.touches[0].clientY || e.targetTouches[0].clientY;
    }
  }, false);
  window.addEventListener('mousewheel', wheel, false);
  window.addEventListener('wheel', wheel, false);

  // heroSection animation end

  const navigate = useNavigate();

  return (
    <>
      <div className='bg-white'>
        <Header />
        {/* heroSection start*/}
        <div id="main">
          <div className='main-heading'>
            <h1 className='text-[48px] font-bold leading-[50px] font-[sans]'>Complete Bath Solution</h1>
            <p className="text-lg md:leading-normal font-normal text-white pt-5 ">Aesthetically designed Complete bathroom solutions to make your bath space
              more relaxing & refresing
            </p>
            <div className="mt-10">
              <button className="animation-button button--aatya button--aatya--white mx-auto" data-text="More Product">
                <span>M</span><span>o</span><span>r</span><span>e</span> <span>P</span><span>r</span><span>o</span><span>d</span><span>u</span><span>c</span><span>t</span>
              </button>
            </div>
          </div>
          <div className="buttons-group absolute right-[25px] top-[50%] z-[9999999] translate-y-[-50%]">
            <div className="next text-[#fff] cursor-pointer -rotate-90" onClick={() => go(-1)}>
              Next
            </div>
            <div className="prev text-[#fff] cursor-pointer -rotate-90" onClick={() => go(1)}>
              Previous
            </div>
          </div>
          <div className='absolute left-0 top-0 bg-[#000000a6] h-full w-full flex items-center justify-center z-10'></div>
        </div>
        {/* heroSection end*/}
        <div className="container mx-auto px-4 py-[150px] relative flex justify-center items-center">
          <div className='md:w-[70%] mx-auto text-center z-20'>
            <h1 className="z-10 text-[48px] font-bold leading-[50px] font-[sans] tracking-[-1.5px]">
              The Destination For Your<br /> Next Generation Luxurious Products...
            </h1>
            <p className="z-10 text-lg md:leading-normal font-medium text-black pt-5 ">Aatya is a discover for the luxurious premium base product collection.</p>
            <div className="z-10 mt-10">
              <button
                onClick={() => navigate("/collection")}
                className="animation-button button--aatya mx-auto " data-text="See our Collection">
                <span>S</span><span>e</span><span>e</span> <span>O</span><span>u</span><span>r</span> <span>C</span><span>o</span><span>l</span><span>l</span><span>c</span><span>t</span><span>i</span><span>o</span><span>n</span>
              </button>
            </div>
          </div>
          {/* <div className="bolitano degradada"></div> */}
        </div>
        <div className='grid grid-cols-3 gap-[1px]'>
          <div className='bg-[#ddd] relative overflow-hidden pCBox max-h-[600px]'>
            <div>
              <img src={productCatagoriesImg1} alt="pCImage-1" className='pCBoxImage' />
              <div className='absolute bottom-[-345px] pCBoxContent left-0 w-full h-full z-10 p-10 '>
                <div className='flex flex-col justify-between h-full'>
                  <div>
                    <h3 className="text-[36px] text-uppercase text-[#fff] font-bold leading-[50px] font-[sans] tracking-[-0.5px]">
                      Complete Shower Solution
                    </h3>
                    <p className="text-lg font-base font-light text-[#fff] pt-5 ">Aatya is a discover for the luxurious premium base product collection.</p>
                  </div>
                  <div className="mt-10">
                    <button
                      onClick={() => navigate("/productCatagories")}
                      className="animation-button button--aatya button--aatya--white" data-text="See our Collection">
                      <span>S</span><span>e</span><span>e</span> <span>O</span><span>u</span><span>r</span> <span>C</span><span>o</span><span>l</span><span>l</span><span>c</span><span>t</span><span>i</span><span>o</span><span>n</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='absolute top-[100px] left-0 w-full h-full pCGradient'></div>
          </div>
          <div className='bg-[#ddd] relative overflow-hidden pCBox max-h-[600px]'>
            <div >
              <img src={productCatagoriesImg2} alt="pCImage-1" className='pCBoxImage' />
              <div className='absolute bottom-[-345px] pCBoxContent left-0 w-full h-full z-10 p-10 '>
                <div className='flex flex-col justify-between h-full'>
                  <div>
                    <h3 className="text-[36px] text-uppercase text-[#fff] font-bold leading-[50px] font-[sans] tracking-[-0.5px]">
                      Complete Bathroom Solution
                    </h3>
                    <p className="text-lg font-base font-light text-[#fff] pt-5 ">Aatya is a discover for the luxurious premium base product collection.</p>
                  </div>
                  <div className="mt-10">
                    <button
                      onClick={() => navigate("/productCatagories")}
                      className="animation-button button--aatya button--aatya--white" data-text="See our Collection">
                      <span>S</span><span>e</span><span>e</span> <span>O</span><span>u</span><span>r</span> <span>C</span><span>o</span><span>l</span><span>l</span><span>c</span><span>t</span><span>i</span><span>o</span><span>n</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='absolute top-[100px] left-0 w-full h-full pCGradient'></div>
          </div>
          <div className='bg-[#ddd] relative overflow-hidden pCBox max-h-[600px]'>
            <div>
              <img src={productCatagoriesImg3} alt="pCImage-1" className='pCBoxImage' />
              <div className='absolute bottom-[-345px] pCBoxContent left-0 w-full h-full z-10 p-10 '>
                <div className='flex flex-col justify-between h-full'>
                  <div>
                    <h3 className="text-[36px] text-uppercase text-[#fff] font-bold leading-[50px] font-[sans] tracking-[-0.5px]">
                      Complete Sanitaryware Solution
                    </h3>
                    <p className="text-lg font-base font-light text-[#fff] pt-5 ">Aatya is a discover for the luxurious premium base product collection.</p>
                  </div>
                  <div className="mt-10">
                    <button
                      onClick={() => navigate("/productCatagories")}
                      className="animation-button button--aatya button--aatya--white" data-text="See our Collection">
                      <span>S</span><span>e</span><span>e</span> <span>O</span><span>u</span><span>r</span> <span>C</span><span>o</span><span>l</span><span>l</span><span>c</span><span>t</span><span>i</span><span>o</span><span>n</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='absolute top-[100px] left-0 w-full h-full pCGradient'></div>
          </div>
        </div>
        <div className="container mx-auto px-4 pt-20">
          <div className='md:w-[60%] mx-auto text-center'>
            <h1 className="text-[48px] font-bold leading-[50px] font-[sans] tracking-[-1.5px]">
              Why Choose Aatya?
            </h1>
            <p className="text-lg md:leading-normal font-medium text-black pt-5 pb-5">
              our products are developed post extensive expert research and testing to ensure functionality and effectiveness.
            </p>
          </div>
          <div className='grid grid-cols-3 gap-[24px]'>
            <div className='text-center pt-5 relative'>
              <div className=' bg-shape-animation mx-auto h-[200px] mb-5 flex justify-center items-center'>
                <img src={chooseAatya1} alt='choose-aatya1' className='mx-auto h-[100px] z-10' />
              </div>
              <h3 className="text-[36px] text-uppercase text-[#000] font-bold leading-[50px] font-[sans] tracking-[-0.5px]">
                Science Backed
              </h3>
              <p className="text-lg font-base font-light text-[#000] pt-5 ">
                our products are developed post extensive expert research and testing to ensure functionality and effectiveness.
              </p>
            </div>
            <div className='text-center pt-5 relative'>
              <div className=' bg-shape-animation mx-auto h-[200px] mb-5 flex justify-center items-center'>
                <img src={chooseAatya1} alt='choose-aatya1' className='mx-auto h-[100px] z-10' />
              </div>
              <h3 className="text-[36px] text-uppercase text-[#000] font-bold leading-[50px] font-[sans] tracking-[-0.5px]">
                Science Backed
              </h3>
              <p className="text-lg font-base font-light text-[#000] pt-5 ">
                our products are developed post extensive expert research and testing to ensure functionality and effectiveness.
              </p>
            </div>
            <div className='text-center pt-5 relative'>
              <div className=' bg-shape-animation mx-auto h-[200px] mb-5 flex justify-center items-center'>
                <img src={chooseAatya1} alt='choose-aatya1' className='mx-auto h-[100px] z-10' />
              </div>
              <h3 className="text-[36px] text-uppercase text-[#000] font-bold leading-[50px] font-[sans] tracking-[-0.5px]">
                Science Backed
              </h3>
              <p className="text-lg font-base font-light text-[#000] pt-5 ">
                our products are developed post extensive expert research and testing to ensure functionality and effectiveness.
              </p>
            </div>
          </div>
        </div>
        <div className='py-20 featured-product'>
          <div className='container px-4 mx-auto '>
            <div className='flex justify-between items-center w-full pb-[40px]'>
              <h3 className="text-[48px] font-bold leading-[50px] font-[sans] tracking-[-1.5px]">
                Featured Products
              </h3>
              <button
                onClick={() => navigate("/product")}
                className="animation-button button--aatya" data-text="See our Collection">
                <span>S</span><span>e</span><span>e</span> <span>O</span><span>u</span><span>r</span> <span>C</span><span>o</span><span>l</span><span>l</span><span>c</span><span>t</span><span>i</span><span>o</span><span>n</span>
              </button>
            </div>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              // spaceBetween={20}
              slidesPerView={4}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              <SwiperSlide>
                <div className='bg-[#f1f1f1] p-1 productCard cursor-pointer'>
                  <div className='bg-[#fff] flex items-center justify-center p-5 mb-3 overflow-hidden'>
                    <img src={productImg1} alt="productImg1" className='productImage' />
                  </div>
                  <div className='p-3'>
                    <div className='uppercase text-xs font-medium text-[#555] pb-2'>Insignia</div>
                    <h3 className='text-[#000] font-bold text-[18px]'>Build-in thermoStatic bath-shower mixer with diverted-flow regulator. To Complete with Aatya.</h3>
                    <div className='uppercase text-[14px] font-medium text-[#555] pt-2'>REF: RT5A0C3ACN0</div>
                    <div className='flex gap-3 mt-10 mb-5'>
                      <div className='bg-[#646464] h-[30px] w-[30px] rounded-full outline outline-2 outline-[#000] outline-offset-2'></div>
                      <div className='bg-[#000000] h-[30px] w-[30px] rounded-full'></div>
                      <div className='bg-[#bf830f] h-[30px] w-[30px] rounded-full'></div>
                      <div className='bg-[#d2d2d2] h-[30px] w-[30px] rounded-full'></div>
                    </div>
                    <div className='flex justify-between items-center h-[30px]'>
                      <div>Discover More</div>
                      <div className='border border-[#999] rounded-[30px]  px-2 py-1 productCardArrow'>
                        <img src={arrowForward} className='invert-[50%]' />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='bg-[#f1f1f1] p-1 productCard cursor-pointer'>
                  <div className='bg-[#fff] flex items-center justify-center p-5 mb-3 overflow-hidden'>
                    <img src={productImg1} alt="productImg1" className='productImage' />
                  </div>
                  <div className='p-3'>
                    <div className='uppercase text-xs font-medium text-[#555] pb-2'>Insignia</div>
                    <h3 className='text-[#000] font-bold text-[18px]'>Build-in thermoStatic bath-shower mixer with diverted-flow regulator. To Complete with Aatya.</h3>
                    <div className='uppercase text-[14px] font-medium text-[#555] pt-2'>REF: RT5A0C3ACN0</div>
                    <div className='flex gap-3 mt-10 mb-5'>
                      <div className='bg-[#646464] h-[30px] w-[30px] rounded-full outline outline-2 outline-[#000] outline-offset-2'></div>
                      <div className='bg-[#000000] h-[30px] w-[30px] rounded-full'></div>
                      <div className='bg-[#bf830f] h-[30px] w-[30px] rounded-full'></div>
                      <div className='bg-[#d2d2d2] h-[30px] w-[30px] rounded-full'></div>
                    </div>
                    <div className='flex justify-between items-center h-[30px]'>
                      <div>Discover More</div>
                      <div className='border border-[#999] rounded-[30px]  px-2 py-1 productCardArrow'>
                        <img src={arrowForward} className='invert-[50%]' />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='bg-[#f1f1f1] p-1 productCard cursor-pointer'>
                  <div className='bg-[#fff] flex items-center justify-center p-5 mb-3 overflow-hidden'>
                    <img src={productImg1} alt="productImg1" className='productImage' />
                  </div>
                  <div className='p-3'>
                    <div className='uppercase text-xs font-medium text-[#555] pb-2'>Insignia</div>
                    <h3 className='text-[#000] font-bold text-[18px]'>Build-in thermoStatic bath-shower mixer with diverted-flow regulator. To Complete with Aatya.</h3>
                    <div className='uppercase text-[14px] font-medium text-[#555] pt-2'>REF: RT5A0C3ACN0</div>
                    <div className='flex gap-3 mt-10 mb-5'>
                      <div className='bg-[#646464] h-[30px] w-[30px] rounded-full outline outline-2 outline-[#000] outline-offset-2'></div>
                      <div className='bg-[#000000] h-[30px] w-[30px] rounded-full'></div>
                      <div className='bg-[#bf830f] h-[30px] w-[30px] rounded-full'></div>
                      <div className='bg-[#d2d2d2] h-[30px] w-[30px] rounded-full'></div>
                    </div>
                    <div className='flex justify-between items-center h-[30px]'>
                      <div>Discover More</div>
                      <div className='border border-[#999] rounded-[30px]  px-2 py-1 productCardArrow'>
                        <img src={arrowForward} className='invert-[50%]' />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='bg-[#f1f1f1] p-1 productCard cursor-pointer'>
                  <div className='bg-[#fff] flex items-center justify-center p-5 mb-3 overflow-hidden'>
                    <img src={productImg1} alt="productImg1" className='productImage' />
                  </div>
                  <div className='p-3'>
                    <div className='uppercase text-xs font-medium text-[#555] pb-2'>Insignia</div>
                    <h3 className='text-[#000] font-bold text-[18px]'>Build-in thermoStatic bath-shower mixer with diverted-flow regulator. To Complete with Aatya.</h3>
                    <div className='uppercase text-[14px] font-medium text-[#555] pt-2'>REF: RT5A0C3ACN0</div>
                    <div className='flex gap-3 mt-10 mb-5'>
                      <div className='bg-[#646464] h-[30px] w-[30px] rounded-full outline outline-2 outline-[#000] outline-offset-2'></div>
                      <div className='bg-[#000000] h-[30px] w-[30px] rounded-full'></div>
                      <div className='bg-[#bf830f] h-[30px] w-[30px] rounded-full'></div>
                      <div className='bg-[#d2d2d2] h-[30px] w-[30px] rounded-full'></div>
                    </div>
                    <div className='flex justify-between items-center h-[30px]'>
                      <div>Discover More</div>
                      <div className='border border-[#999] rounded-[30px]  px-2 py-1 productCardArrow'>
                        <img src={arrowForward} className='invert-[50%]' />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='bg-[#f1f1f1] p-1 productCard cursor-pointer'>
                  <div className='bg-[#fff] flex items-center justify-center p-5 mb-3 overflow-hidden'>
                    <img src={productImg1} alt="productImg1" className='productImage' />
                  </div>
                  <div className='p-3'>
                    <div className='uppercase text-xs font-medium text-[#555] pb-2'>Insignia</div>
                    <h3 className='text-[#000] font-bold text-[18px]'>Build-in thermoStatic bath-shower mixer with diverted-flow regulator. To Complete with Aatya.</h3>
                    <div className='uppercase text-[14px] font-medium text-[#555] pt-2'>REF: RT5A0C3ACN0</div>
                    <div className='flex gap-3 mt-10 mb-5'>
                      <div className='bg-[#646464] h-[30px] w-[30px] rounded-full outline outline-2 outline-[#000] outline-offset-2'></div>
                      <div className='bg-[#000000] h-[30px] w-[30px] rounded-full'></div>
                      <div className='bg-[#bf830f] h-[30px] w-[30px] rounded-full'></div>
                      <div className='bg-[#d2d2d2] h-[30px] w-[30px] rounded-full'></div>
                    </div>
                    <div className='flex justify-between items-center h-[30px]'>
                      <div>Discover More</div>
                      <div className='border border-[#999] rounded-[30px]  px-2 py-1 productCardArrow'>
                        <img src={arrowForward} className='invert-[50%]' />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className='bg-[#000] py-20'>
          <div className='grid grid-cols-2'>
            <div className='w-full relative'>
              <img src={luxuriousProductBg} alt="luxuriousProductBg" className='absolute w-full h-full pr-[100px] opacity-[50%]' />
              <div className='relative'>
                <img src={luxuriousProduct1} alt='luxuriousProduct1' className=' w-full h-full p-10 pr-0' />
              </div>
            </div>
            <div className='w-full relative flex  items-center'>
              <div className='flex flex-col items-center h-[270px] w-full relative z-10'>
                <div className='md:w-[80%] mx-auto text-center'>
                  <h3 className="text-[48px] text-uppercase text-[#d0ac31] font-bold leading-[50px] font-[sans] tracking-[-0.5px]">
                    Our Luxurious Collection
                  </h3>
                  <p className="text-base font-base font-light text-[#d0ac31] pt-5 ">
                    Today, our product for bathroom space are present in more than 170 countries across the five continents. Our proximity to our
                    capacity for innovation and responsiveness, allow us to always offers to suitable solutions for
                    the hygiene and wellbeing of users all around the world
                  </p>
                </div>
                <div className="mt-10">
                  <button
                    onClick={() => navigate("/collection")}
                    className="animation-button button--aatya button--aatya--gold" data-text="See our Collection">
                    <span>S</span><span>e</span><span>e</span> <span>O</span><span>u</span><span>r</span> <span>C</span><span>o</span><span>l</span><span>l</span><span>c</span><span>t</span><span>i</span><span>o</span><span>n</span>
                  </button>
                </div>
              </div>
              <img src={luxuriousProductContentBg} alt="luxuriousProductContentBg" className='h-[500px] absolute w-full opacity-[70%] object-cover min-height-[350px]' />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-20">
          <div className='grid grid-cols-12 gap-[24px]'>
            <div className='text-left pr-20 col-span-7'>
              <h3 className="text-[48px] text-uppercase text-[#000] font-bold leading-[50px] font-[sans] tracking-[-0.5px]">
                Download Our Brouchures
              </h3>
              <p className="text-lg font-base font-light text-[#000] pt-5 ">
                Always have our latest brouchures and pricelists to hand. Download, print or view them online.
              </p>
              <div className="mt-10">
                <button className="animation-button button--aatya" data-text="Go To Brochures">
                  <span>G</span><span>o</span> <span>T</span> <span>O</span> <span>B</span><span>r</span><span>o</span><span>c</span><span>h</span><span>u</span><span>r</span><span>e</span><span>s</span>
                </button>
              </div>
            </div>
            <div className='col-span-5'>
              <div className='grid grid-cols-2 gap-4'>
                <div className='shadow-lg'>
                  <img alt='image here' src={broucher1} className='w-full' />
                </div>
                <div className='shadow-lg'>
                  <img alt='image here' src={broucher2} className='w-full' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 pb-20">
          <div className='grid grid-cols-3 gap-[20px]'>
            <div className='cursor-pointer text-center border border-[#000] p-10'>
              <img src={generalContactIcon} alt='image here' className='mx-auto' />
              <p className="text-lg font-base font-light text-[#000] pt-5">
                General Contact request
              </p>
            </div>
            <div className='cursor-pointer text-center border border-[#000] p-10'>
              <img src={customerServiceIcon} alt='image here' className='mx-auto' />
              <p className="text-lg font-base font-light text-[#000] pt-5">
                General Contact request
              </p>
            </div>
            <div
              onClick={() => navigate("/locationStore")}
              className='cursor-pointer text-center border border-[#000] p-10'>
              <img src={showroomNearIcon} alt='image here' className='mx-auto' />
              <p className="text-lg font-base font-light text-[#000] pt-5">
                Location Store
              </p>
            </div>
          </div>
        </div>
      </div>
      <SocialMediaGallery />
      <Footer />
    </>
  )
}

export default Home

