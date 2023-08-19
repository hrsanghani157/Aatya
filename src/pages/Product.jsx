import productBg from '../assets/image/product_bg.png'
import productImg1 from '../assets/image/product1.png'
import arrowForward from '../assets/image/icon/rightArrow.svg'
import productCatagories from '../assets/image/showerImageSmall.png'
import '../App.css';
import "swiper/swiper.css";
import { Accordion, AccordionDetails, AccordionSummary, Slider, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

function valuetext(value) {
  return `${value}°C`;
}

function Product() {
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const navigate = useNavigate();
  return (
    <>
    <Header />
      <div className='relative'>
        <img src={productBg} alt='productBg' />
        <div className='absolute left-0 top-0 bg-[#000000a6] h-full w-full'></div>
      </div>
      <div className='bg-[#f4f4f4]'>
        <div className="container mx-auto px-4 py-6 ">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/"
            >
              <HomeIcon fontSize="inherit" className='text-[24px] mr-1' />
              <span>Home</span>
            </Link>
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Product Catagories
            </Link>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
            >
              Products
            </Typography>
          </Breadcrumbs>
        </div>
      </div>
      <div className="container mx-auto px-4 py-[70px]">
        <div className='pb-10'>
          <h1 className="text-[30px] font-bold leading-[50px] font-[sans] tracking-[-1px]">
            WHAT TYPE OF PRODUCT ARE YOU LOOKING FOR?
          </h1>
        </div>
        <div className='grid grid-cols-6 gap-4'>
          <div className='shadow-md p-2 text-center hover:scale-105 ease-in-out duration-300 hover:shadow-xl'>
            <div className='h-[120px] flex items-center'>
              <img src={productCatagories} alt='showerImageSmall' className='mx-auto min-h-[110px] max-h-[110px]' />
            </div>
            <div className='pt-5 pb-2'>Air Shower</div>
          </div>
          <div className='shadow-md p-2 text-center hover:scale-105 ease-in-out duration-300 hover:shadow-xl'>
            <div className='h-[120px] flex items-center'>
              <img src={productCatagories} alt='showerImageSmall' className='mx-auto min-h-[110px] max-h-[110px]' />
            </div>
            <div className='pt-5 pb-2'>Air Shower</div>
          </div>
          <div className='shadow-md p-2 text-center hover:scale-105 ease-in-out duration-300 hover:shadow-xl'>
            <div className='h-[120px] flex items-center'>
              <img src={productCatagories} alt='showerImageSmall' className='mx-auto min-h-[110px] max-h-[110px]' />
            </div>
            <div className='pt-5 pb-2'>Air Shower</div>
          </div>
          <div className='shadow-md p-2 text-center hover:scale-105 ease-in-out duration-300 hover:shadow-xl'>
            <div className='h-[120px] flex items-center'>
              <img src={productCatagories} alt='showerImageSmall' className='mx-auto min-h-[110px] max-h-[110px]' />
            </div>
            <div className='pt-5 pb-2'>Air Shower</div>
          </div>
          <div className='shadow-md p-2 text-center hover:scale-105 ease-in-out duration-300 hover:shadow-xl'>
            <div className='h-[120px] flex items-center'>
              <img src={productCatagories} alt='showerImageSmall' className='mx-auto min-h-[110px] max-h-[110px]' />
            </div>
            <div className='pt-5 pb-2'>Air Shower</div>
          </div>
          <div className='shadow-md p-2 text-center hover:scale-105 ease-in-out duration-300 hover:shadow-xl'>
            <div className='h-[120px] flex items-center'>
              <img src={productCatagories} alt='showerImageSmall' className='mx-auto min-h-[110px] max-h-[110px]' />
            </div>
            <div className='pt-5 pb-2'>Air Shower</div>
          </div>
        </div>
      </div>
      <div className='pb-20'>
        <div className='px-4 mx-auto '>
          <div className='grid grid-cols-12 gap-5'>
            <div className="col-span-3">
              <h3 className="text-[30px] font-bold  font-[sans] tracking-[-1.5px] pb-[20px]">
                Filter Product
              </h3>
              <div className='accordian-wrapper'>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{ background: '#f1f1f1' }}
                  >
                    <Typography>Price</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Slider
                      getAriaLabel={() => 'Temperature range'}
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                    />
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{ background: '#f1f1f1' }}
                  >
                    <Typography>Color Finishes</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className='flex gap-2'>
                      <div className='bg-[#646464] h-[30px] w-[30px] rounded-full outline outline-2 outline-[#000] outline-offset-2'></div>
                      <div className='bg-[#000000] h-[30px] w-[30px] rounded-full'></div>
                      <div className='bg-[#bf830f] h-[30px] w-[30px] rounded-full'></div>
                      <div className='bg-[#d2d2d2] h-[30px] w-[30px] rounded-full'></div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{ background: '#f1f1f1' }}
                  >
                    <Typography>Area</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className='flex gap-2'>
                      <div className='bg-[#646464] h-[30px] w-[30px] rounded-full outline outline-2 outline-[#000] outline-offset-2'></div>
                      <div className='bg-[#000000] h-[30px] w-[30px] rounded-full'></div>
                      <div className='bg-[#bf830f] h-[30px] w-[30px] rounded-full'></div>
                      <div className='bg-[#d2d2d2] h-[30px] w-[30px] rounded-full'></div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{ background: '#f1f1f1' }}
                  >
                    <Typography>Mounting</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className='flex gap-2'>
                      <div className='bg-[#646464] h-[30px] w-[30px] rounded-full outline outline-2 outline-[#000] outline-offset-2'></div>
                      <div className='bg-[#000000] h-[30px] w-[30px] rounded-full'></div>
                      <div className='bg-[#bf830f] h-[30px] w-[30px] rounded-full'></div>
                      <div className='bg-[#d2d2d2] h-[30px] w-[30px] rounded-full'></div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{ background: '#f1f1f1' }}
                  >
                    <Typography>Type</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className='flex gap-2'>
                      <div className='bg-[#646464] h-[30px] w-[30px] rounded-full outline outline-2 outline-[#000] outline-offset-2'></div>
                      <div className='bg-[#000000] h-[30px] w-[30px] rounded-full'></div>
                      <div className='bg-[#bf830f] h-[30px] w-[30px] rounded-full'></div>
                      <div className='bg-[#d2d2d2] h-[30px] w-[30px] rounded-full'></div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{ background: '#f1f1f1' }}
                  >
                    <Typography>Installation Type</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className='flex gap-2'>
                      <div className='bg-[#646464] h-[30px] w-[30px] rounded-full outline outline-2 outline-[#000] outline-offset-2'></div>
                      <div className='bg-[#000000] h-[30px] w-[30px] rounded-full'></div>
                      <div className='bg-[#bf830f] h-[30px] w-[30px] rounded-full'></div>
                      <div className='bg-[#d2d2d2] h-[30px] w-[30px] rounded-full'></div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
            <div className="col-span-9">
              <div className='flex justify-between items-center w-full pb-[20px]'>
                <h3 className="text-[30px] font-bold  font-[sans] tracking-[-1.5px]">
                  Air Shower
                </h3>
                <div>(366 Products)</div>
              </div>
              <div className='grid grid-cols-3 gap-y-5'>
                <div 
                onClick={()=>navigate("/productDetail")}
                className='hover:scale-105 ease-in-out duration-300 hover:shadow-lg bg-[#f1f1f1] p-1 productCard cursor-pointer'>
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
                <div className='hover:scale-105 ease-in-out duration-300 hover:shadow-lg bg-[#f1f1f1] p-1 productCard cursor-pointer'>
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
                <div className='hover:scale-105 ease-in-out duration-300 hover:shadow-lg bg-[#f1f1f1] p-1 productCard cursor-pointer'>
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
                <div className='hover:scale-105 ease-in-out duration-300 hover:shadow-lg bg-[#f1f1f1] p-1 productCard cursor-pointer'>
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
                <div className='hover:scale-105 ease-in-out duration-300 hover:shadow-lg bg-[#f1f1f1] p-1 productCard cursor-pointer'>
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
                <div className='hover:scale-105 ease-in-out duration-300 hover:shadow-lg bg-[#f1f1f1] p-1 productCard cursor-pointer'>
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
                <div className='hover:scale-105 ease-in-out duration-300 hover:shadow-lg bg-[#f1f1f1] p-1 productCard cursor-pointer'>
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
                <div className='hover:scale-105 ease-in-out duration-300 hover:shadow-lg bg-[#f1f1f1] p-1 productCard cursor-pointer'>
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
                <div className='hover:scale-105 ease-in-out duration-300 hover:shadow-lg bg-[#f1f1f1] p-1 productCard cursor-pointer'>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Product

