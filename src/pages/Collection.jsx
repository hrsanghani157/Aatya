import luxuriousCollectionBg from '../assets/image/luxuriousProductBg.png'
import luxuriousProductContentBg from '../assets/image/luxiousProductContentBg.png'
import luxuriousProductContentBg1 from '../assets/image/luxiousProductContentBg1.png'
import luxuriousProductContentBg2 from '../assets/image/luxiousProductContentBg2.png'
import luxuriousProductBg from '../assets/image/luxiousProductBg.png'
import luxuriousProduct1 from '../assets/image/luxiousProduct1.png'
import luxuriousProductBg2 from '../assets/image/luxiousProductBg1.png'
import luxuriousProduct2 from '../assets/image/luxiousProduct2.png'
import luxuriousProductBg3 from '../assets/image/luxiousProductBg2.png'
import luxuriousProduct3 from '../assets/image/luxiousProduct1.png'
import productPdfIcon from "../assets/image/product_pdf_icon_yellow.png";
import technicalImageIcon from "../assets/image/technicalImage_yellow.png";
import relatedProductList1 from '../assets/image/related-product-List1.png'
import relatedProductList2 from '../assets/image/related-product-List2.png'
import relatedProductList3 from '../assets/image/related-product-List3.png'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import {Typography } from '@mui/material';
import HomeIcon from "@mui/icons-material/Home";

function Collection() {
  return (
    <>
      <Header />
      <div className='relative'>
        <img src={luxuriousCollectionBg} alt='productBg' className='h-[calc(100vh_-_144px)] w-full object-cover'/>
        <div className='absolute left-0 top-0 bg-[#000000a6] h-[calc(100vh_-_144px)] w-full flex items-center justify-center'>
          <h1 className="font-outline-2 shadow-inner shadow-xl text-center text-[80px] font-extrabold leading-[90px] font-[sans] text-[#000] ">
            The<br/>Luxurious Collection
          </h1>
        </div>
      </div>
      <div className='bg-[#1d1d1d] text-[#fff]'>
        <div className="container mx-auto px-4 py-5 ">
          <Breadcrumbs aria-label="breadcrumb" className='text-[#fff]'>
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="#65666d"
              href="/"
            >
              <HomeIcon fontSize="inherit" className='text-[24px] mr-1' />
              <span>Home</span>
            </Link>
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="#65666d"
              href="/material-ui/getting-started/installation/"
            >
              Luxirious Collection
            </Link>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="#d0ac31"
            >
              Products
            </Typography>
          </Breadcrumbs>
        </div>
      </div>
      <div className='bg-[#000] py-20'>
        <div className='relative mb-5 ml-[-90px] text-[#d0ac31] text-center text-[48px] font-extrabold leading-[40px] font-[sans] tracking-[-1px]'>
          <span className='leftArrow'>Luxurious</span> <br /><span className='pl-[180px] rightArrow'>Collection</span>
        </div>
        <div className='grid grid-cols-2 pt-20'>
          <div className='w-full relative'>
            <img src={luxuriousProductBg} alt="luxuriousProductBg" className='absolute w-full h-full pr-[100px] opacity-[50%]' />
            <div className='relative'>
              <img src={luxuriousProduct1} alt='luxuriousProduct1' className=' w-full h-full p-10 pr-0' />
            </div>
          </div>
          <div className='w-full relative flex  items-center'>
            <div className='flex flex-col items-center h-[220px] w-full relative z-10'>
              <div className='md:w-[80%] mx-auto text-left'>
                <h3 className="text-[30px] uppercase text-[#d0ac31] font-bold leading-[36px] font-[sans] tracking-[-0.5px]">
                  What Type of product are you looking For?
                </h3>
                <p className="text-base uppercase opacity-[0.7] font-base font-light text-[#d0ac31] pt-5 ">
                  Ref: RT5a0C3ACN0
                </p>
                <div className="grid grid-cols-2 pt-10 pb-10">
                  <div className="flex items-center">
                    <div className="rounded-full h-[60px] w-[60px] bg-[#000] border border-[#d0ac31] flex items-center justify-center">
                      <img src={productPdfIcon} alt="productPdfIcon" />
                    </div>
                    <div className="pl-3 uppercase text-[#d0ac31] font-medium">Product PDF</div>
                  </div>
                  <div className="flex items-center">
                    <div className="rounded-full h-[60px] w-[60px] bg-[#000] border border-[#d0ac31] flex items-center justify-center">
                      <img src={technicalImageIcon} alt="technicalImageIcon" />
                    </div>
                    <div className="pl-3 uppercase text-[#d0ac31] font-medium">Techanical Image</div>
                  </div>
                </div>
              </div>
            </div>
            <img src={luxuriousProductContentBg} alt="luxuriousProductContentBg" className='absolute w-full opacity-[70%] object-cover min-height-[350px]' />
          </div>
        </div>
        <div className='grid grid-cols-2 pt-20'>
          <div className='w-full relative flex  items-center'>
            <div className='flex flex-col items-center h-[220px] w-full relative z-10'>
              <div className='md:w-[80%] mx-auto text-left'>
                <h3 className="text-[30px] uppercase text-[#d0ac31] font-bold leading-[36px] font-[sans] tracking-[-0.5px]">
                  What Type of product are you looking For?
                </h3>
                <p className="text-base uppercase opacity-[0.7] font-base font-light text-[#d0ac31] pt-5 ">
                  Ref: RT5a0C3ACN0
                </p>
                <div className="grid grid-cols-2 pt-10 pb-10">
                  <div className="flex items-center">
                    <div className="rounded-full h-[60px] w-[60px] bg-[#000] border border-[#d0ac31] flex items-center justify-center">
                      <img src={productPdfIcon} alt="productPdfIcon" />
                    </div>
                    <div className="pl-3 uppercase text-[#d0ac31] font-medium">Product PDF</div>
                  </div>
                  <div className="flex items-center">
                    <div className="rounded-full h-[60px] w-[60px] bg-[#000] border border-[#d0ac31] flex items-center justify-center">
                      <img src={technicalImageIcon} alt="technicalImageIcon" />
                    </div>
                    <div className="pl-3 uppercase text-[#d0ac31] font-medium">Techanical Image</div>
                  </div>
                </div>
              </div>
            </div>
            <img src={luxuriousProductContentBg1} alt="luxuriousProductContentBg" className='absolute w-full opacity-[70%] object-cover min-height-[350px]' />
          </div>
          <div className='w-full relative'>
            <img src={luxuriousProductBg2} alt="luxuriousProductBg" className='absolute w-full h-full pl-[100px] opacity-[50%]' />
            <div className='relative'>
              <img src={luxuriousProduct2} alt='luxuriousProduct1' className=' w-full h-full p-10 pl-0' />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 pt-20'>
          <div className='w-full relative'>
            <img src={luxuriousProductBg3} alt="luxuriousProductBg" className='absolute w-full h-full pr-[100px] opacity-[50%]' />
            <div className='relative'>
              <img src={luxuriousProduct3} alt='luxuriousProduct1' className=' w-full h-full p-10 pr-0' />
            </div>
          </div>
          <div className='w-full relative flex  items-center'>
            <div className='flex flex-col items-center h-[220px] w-full relative z-10'>
              <div className='md:w-[80%] mx-auto text-left'>
                <h3 className="text-[30px] uppercase text-[#d0ac31] font-bold leading-[36px] font-[sans] tracking-[-0.5px]">
                  What Type of product are you looking For?
                </h3>
                <p className="text-base uppercase opacity-[0.7] font-base font-light text-[#d0ac31] pt-5 ">
                  Ref: RT5a0C3ACN0
                </p>
                <div className="grid grid-cols-2 pt-10 pb-10">
                  <div className="flex items-center">
                    <div className="rounded-full h-[60px] w-[60px] bg-[#000] border border-[#d0ac31] flex items-center justify-center">
                      <img src={productPdfIcon} alt="productPdfIcon" />
                    </div>
                    <div className="pl-3 uppercase text-[#d0ac31] font-medium">Product PDF</div>
                  </div>
                  <div className="flex items-center">
                    <div className="rounded-full h-[60px] w-[60px] bg-[#000] border border-[#d0ac31] flex items-center justify-center">
                      <img src={technicalImageIcon} alt="technicalImageIcon" />
                    </div>
                    <div className="pl-3 uppercase text-[#d0ac31] font-medium">Techanical Image</div>
                  </div>
                </div>
              </div>
            </div>
            <img src={luxuriousProductContentBg2} alt="luxuriousProductContentBg" className='absolute w-full opacity-[70%] object-cover min-height-[350px]' />
          </div>
        </div>
        <div className='relative mt-20 mb-5 ml-[-90px] text-[#d0ac31] text-center text-[48px] font-extrabold leading-[40px] font-[sans] tracking-[-1px]'>
          <span className='leftArrow'>Related</span> <br />
          <span className='pl-[190px] rightArrow'>Product</span>
        </div>
        <div className="container mx-auto px-4">
          <div className='grid grid-cols-3 gap-4 pb-5'>
            <div className='bg-[#000] text-center pt-10'>
              <div className="bg-[url('./assets/image/related-productBg.png')] px-[20px] ">
                <img src={relatedProductList1} alt='showerImageSmall' className='mx-auto w-full relative top-[50px]' />
              </div>
              <div className='pt-[70px] pb-2 text-2xl  text-[#d0ac31] font-medium'>Air Shower</div>
              <div className='text-[16px] text-normal text-[#d0ac31] opacity-[0.6] pb-2'>Single-level basin mixer 1/2“RT5a0C3ACN0 </div>
            </div>
            <div className='bg-[#000] text-center pt-10'>
              <div className="bg-[url('./assets/image/related-productBg.png')] px-[20px] ">
                <img src={relatedProductList2} alt='showerImageSmall' className='mx-auto w-full relative top-[50px]' />
              </div>
              <div className='pt-[70px] pb-2 text-2xl  text-[#d0ac31] font-medium'>Air Shower</div>
              <div className='text-[16px] text-normal text-[#d0ac31] opacity-[0.6] pb-2'>Single-level basin mixer 1/2“RT5a0C3ACN0 </div>
            </div>
            <div className='bg-[#000] text-center pt-10'>
              <div className="bg-[url('./assets/image/related-productBg.png')] px-[20px] ">
                <img src={relatedProductList3} alt='showerImageSmall' className='mx-auto w-full relative top-[50px]' />
              </div>
              <div className='pt-[70px] pb-2 text-2xl  text-[#d0ac31] font-medium'>Air Shower</div>
              <div className='text-[16px] text-normal text-[#d0ac31] opacity-[0.6] pb-2'>Single-level basin mixer 1/2“RT5a0C3ACN0 </div>
            </div>
            <div className='bg-[#000] text-center pt-10'>
              <div className="bg-[url('./assets/image/related-productBg.png')] px-[20px] ">
                <img src={relatedProductList1} alt='showerImageSmall' className='mx-auto w-full relative top-[50px]' />
              </div>
              <div className='pt-[70px] pb-2 text-2xl  text-[#d0ac31] font-medium'>Air Shower</div>
              <div className='text-[16px] text-normal text-[#d0ac31] opacity-[0.6] pb-2'>Single-level basin mixer 1/2“RT5a0C3ACN0 </div>
            </div>
            <div className='bg-[#000] text-center pt-10'>
              <div className="bg-[url('./assets/image/related-productBg.png')] px-[20px] ">
                <img src={relatedProductList2} alt='showerImageSmall' className='mx-auto w-full relative top-[50px]' />
              </div>
              <div className='pt-[70px] pb-2 text-2xl  text-[#d0ac31] font-medium'>Air Shower</div>
              <div className='text-[16px] text-normal text-[#d0ac31] opacity-[0.6] pb-2'>Single-level basin mixer 1/2“RT5a0C3ACN0 </div>
            </div>
            <div className='bg-[#000] text-center pt-10'>
              <div className="bg-[url('./assets/image/related-productBg.png')] px-[20px] ">
                <img src={relatedProductList3} alt='showerImageSmall' className='mx-auto w-full relative top-[50px]' />
              </div>
              <div className='pt-[70px] pb-2 text-2xl  text-[#d0ac31] font-medium'>Air Shower</div>
              <div className='text-[16px] text-normal text-[#d0ac31] opacity-[0.6] pb-2'>Single-level basin mixer 1/2“RT5a0C3ACN0 </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Collection

