import '../App.css';
import Footer from '../components/Footer';
import Header from "../components/Header";
import * as React from 'react';
import productPdfIcon from "../assets/image/product_pdf_icon.png";
import technicalImageIcon from "../assets/image/technicalImage.png";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import productCatagories from '../assets/image/showerImageBig.png'
import relatedProduct1 from '../assets/image/related-product1.png'
import relatedProduct2 from '../assets/image/related-product2.png'
import relatedProduct3 from '../assets/image/related-product3.png'
import relatedProduct4 from '../assets/image/related-product4.png'
import relatedProduct5 from '../assets/image/related-product5.png'
import PropTypes from 'prop-types';
import MyGallery from '../components/MyGallery';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function ProductDetail() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Header />
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
            >
              Products
            </Typography>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
            >
              Products Details
            </Typography>
          </Breadcrumbs>
        </div>
      </div>
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <MyGallery />
          </div>
          <div className=''>
            <h1 className="text-[#09565f] text-[30px] font-bold leading-[36px]">
              What type of product are you looking for?
            </h1>
            <p className="text-sm pt-3 text-[#65666d]">REF. RT5A03CACN0</p>
            <p className="text-lg pt-10 uppercase text-[#09565f] font-medium">Product Description</p>
            <p className="text-base text-[#65666d] pt-3">
              Sensor Faucet for Wash Basin with 175mm Extension Body
              (Battery Operated)</p>
            <p className="text-lg pt-10 uppercase text-[#09565f] font-medium">Diamension</p>
            <p className="text-base text-[#65666d] pt-3 ">600 L x 600 W x 300 H (mm)</p>
            <div className="grid grid-cols-2 pt-10 pb-10">
              <div className="flex items-center">
                <div className="rounded-full h-[60px] w-[60px] border border-[#65666d] flex items-center justify-center">
                  <img src={productPdfIcon} alt="productPdfIcon" />
                </div>
                <div className="pl-3 uppercase text-[#09565f] font-medium">Product PDF</div>
              </div>
              <div className="flex items-center">
                <div className="rounded-full h-[60px] w-[60px] border border-[#65666d] flex items-center justify-center">
                  <img src={technicalImageIcon} alt="technicalImageIcon" />
                </div>
                <div className="pl-3 uppercase text-[#09565f] font-medium">Techanical Image</div>
              </div>
            </div>
            <div className="flex gap-3 mt-5 mb-10">
              <div className="rounded-full h-[40px] w-[40px] bg-[#646464] outline outline-offset-4"></div>
              <div className="rounded-full h-[40px] w-[40px] bg-[#000000]"></div>
              <div className="rounded-full h-[40px] w-[40px] bg-[#bf830f]"></div>
              <div className="rounded-full h-[40px] w-[40px] bg-[#d2d2d2]"></div>
            </div>
            <div className="text-2xl uppercase text-[#09565f] font-medium">MRP: $30</div>
            <div className="pt-4">
              <button className="bg-[#09565f] font-medium px-8 py-3 font-[sans] text-[20px] text-[#fff]">Available in Store</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f4f4f4] py-5 pb-10">
        <h1 className="text-center  py-7 text-[#09565f] text-[36px] font-bold leading-[36px] font-[sans] tracking-[-1px]">
          Product Range
        </h1>
        <div className="container mx-auto px-4">
          <Box sx={{ width: '100%' }} className="tabContentWrapper">
            <Box sx={{ borderBottom: 2, borderColor: '#fff' }}>
              <Tabs value={value} variant="scrollable" onChange={handleChange} aria-label="basic tabs example">
                <Tab label="All" {...a11yProps(0)} className='tablabel-big' />
                <Tab label="Wash Basin" {...a11yProps(1)} className='tablabel-big' />
                <Tab label="Shower" {...a11yProps(2)} className='tablabel-big' />
                <Tab label="Accessories" {...a11yProps(3)} className='tablabel-big' />
                <Tab label="Bath Tub" {...a11yProps(4)} className='tablabel-big' />
                <Tab label="Sanitary Ware" {...a11yProps(5)} className='tablabel-big' />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <div className='grid grid-cols-4 gap-4'>
                <div className='bg-[#fff] shadow-md p-2 text-center hover:scale-105 ease-in-out duration-300 hover:shadow-xl'>
                  <div className=' flex items-center py-5'>
                    <img src={productCatagories} alt='showerImageSmall' className='mx-auto ' />
                  </div>
                  <div className='pt-5 pb-2 text-2xl  text-[#09565f] font-medium'>Air Shower</div>
                  <div className='text-[16px] text-normal text-[#65666d] pb-2'>Single-level basin mixer 1/2“RT5a0C3ACN0 </div>
                </div>
                <div className='bg-[#fff] shadow-md p-2 text-center hover:scale-105 ease-in-out duration-300 hover:shadow-xl'>
                  <div className=' flex items-center py-5'>
                    <img src={productCatagories} alt='showerImageSmall' className='mx-auto ' />
                  </div>
                  <div className='pt-5 pb-2 text-2xl  text-[#09565f] font-medium'>Air Shower</div>
                  <div className='text-[16px] text-normal text-[#65666d] pb-2'>Single-level basin mixer 1/2“RT5a0C3ACN0 </div>
                </div>
                <div className='bg-[#fff] shadow-md p-2 text-center hover:scale-105 ease-in-out duration-300 hover:shadow-xl'>
                  <div className=' flex items-center py-5'>
                    <img src={productCatagories} alt='showerImageSmall' className='mx-auto ' />
                  </div>
                  <div className='pt-5 pb-2 text-2xl  text-[#09565f] font-medium'>Air Shower</div>
                  <div className='text-[16px] text-normal text-[#65666d] pb-2'>Single-level basin mixer 1/2“RT5a0C3ACN0 </div>
                </div>
                <div className='bg-[#fff] shadow-md p-2 text-center hover:scale-105 ease-in-out duration-300 hover:shadow-xl'>
                  <div className=' flex items-center py-5'>
                    <img src={productCatagories} alt='showerImageSmall' className='mx-auto ' />
                  </div>
                  <div className='pt-5 pb-2 text-2xl  text-[#09565f] font-medium'>Air Shower</div>
                  <div className='text-[16px] text-normal text-[#65666d] pb-2'>Single-level basin mixer 1/2“RT5a0C3ACN0 </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className='grid grid-cols-4 gap-4'>
                <div className='bg-[#fff] shadow-md p-2 text-center hover:scale-105 ease-in-out duration-300 hover:shadow-xl'>
                  <div className=' flex items-center py-5'>
                    <img src={productCatagories} alt='showerImageSmall' className='mx-auto ' />
                  </div>
                  <div className='pt-5 pb-2 text-2xl  text-[#09565f] font-medium'>Air Shower</div>
                  <div className='text-[16px] text-normal text-[#65666d] pb-2'>Single-level basin mixer 1/2“RT5a0C3ACN0 </div>
                </div>
                <div className='bg-[#fff] shadow-md p-2 text-center hover:scale-105 ease-in-out duration-300 hover:shadow-xl'>
                  <div className=' flex items-center py-5'>
                    <img src={productCatagories} alt='showerImageSmall' className='mx-auto ' />
                  </div>
                  <div className='pt-5 pb-2 text-2xl  text-[#09565f] font-medium'>Air Shower</div>
                  <div className='text-[16px] text-normal text-[#65666d] pb-2'>Single-level basin mixer 1/2“RT5a0C3ACN0 </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div className='grid grid-cols-4 gap-4'>
                <div className='bg-[#fff] shadow-md p-2 text-center hover:scale-105 ease-in-out duration-300 hover:shadow-xl'>
                  <div className=' flex items-center py-5'>
                    <img src={productCatagories} alt='showerImageSmall' className='mx-auto ' />
                  </div>
                  <div className='pt-5 pb-2 text-2xl  text-[#09565f] font-medium'>Air Shower</div>
                  <div className='text-[16px] text-normal text-[#65666d] pb-2'>Single-level basin mixer 1/2“RT5a0C3ACN0 </div>
                </div>
                <div className='bg-[#fff] shadow-md p-2 text-center hover:scale-105 ease-in-out duration-300 hover:shadow-xl'>
                  <div className=' flex items-center py-5'>
                    <img src={productCatagories} alt='showerImageSmall' className='mx-auto ' />
                  </div>
                  <div className='pt-5 pb-2 text-2xl  text-[#09565f] font-medium'>Air Shower</div>
                  <div className='text-[16px] text-normal text-[#65666d] pb-2'>Single-level basin mixer 1/2“RT5a0C3ACN0 </div>
                </div>
                <div className='bg-[#fff] shadow-md p-2 text-center hover:scale-105 ease-in-out duration-300 hover:shadow-xl'>
                  <div className=' flex items-center py-5'>
                    <img src={productCatagories} alt='showerImageSmall' className='mx-auto ' />
                  </div>
                  <div className='pt-5 pb-2 text-2xl  text-[#09565f] font-medium'>Air Shower</div>
                  <div className='text-[16px] text-normal text-[#65666d] pb-2'>Single-level basin mixer 1/2“RT5a0C3ACN0 </div>
                </div>
                <div className='bg-[#fff] shadow-md p-2 text-center hover:scale-105 ease-in-out duration-300 hover:shadow-xl'>
                  <div className=' flex items-center py-5'>
                    <img src={productCatagories} alt='showerImageSmall' className='mx-auto ' />
                  </div>
                  <div className='pt-5 pb-2 text-2xl  text-[#09565f] font-medium'>Air Shower</div>
                  <div className='text-[16px] text-normal text-[#65666d] pb-2'>Single-level basin mixer 1/2“RT5a0C3ACN0 </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <div className='grid grid-cols-4 gap-4'>
                <div className='bg-[#fff] shadow-md p-2 text-center hover:scale-105 ease-in-out duration-300 hover:shadow-xl'>
                  <div className=' flex items-center py-5'>
                    <img src={productCatagories} alt='showerImageSmall' className='mx-auto ' />
                  </div>
                  <div className='pt-5 pb-2 text-2xl  text-[#09565f] font-medium'>Air Shower</div>
                  <div className='text-[16px] text-normal text-[#65666d] pb-2'>Single-level basin mixer 1/2“RT5a0C3ACN0 </div>
                </div>
                <div className='bg-[#fff] shadow-md p-2 text-center hover:scale-105 ease-in-out duration-300 hover:shadow-xl'>
                  <div className=' flex items-center py-5'>
                    <img src={productCatagories} alt='showerImageSmall' className='mx-auto ' />
                  </div>
                  <div className='pt-5 pb-2 text-2xl  text-[#09565f] font-medium'>Air Shower</div>
                  <div className='text-[16px] text-normal text-[#65666d] pb-2'>Single-level basin mixer 1/2“RT5a0C3ACN0 </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={4}>
              <div className='grid grid-cols-4 gap-4'>
                <div className='bg-[#fff] shadow-md p-2 text-center hover:scale-105 ease-in-out duration-300 hover:shadow-xl'>
                  <div className=' flex items-center py-5'>
                    <img src={productCatagories} alt='showerImageSmall' className='mx-auto ' />
                  </div>
                  <div className='pt-5 pb-2 text-2xl  text-[#09565f] font-medium'>Air Shower</div>
                  <div className='text-[16px] text-normal text-[#65666d] pb-2'>Single-level basin mixer 1/2“RT5a0C3ACN0 </div>
                </div>
                <div className='bg-[#fff] shadow-md p-2 text-center hover:scale-105 ease-in-out duration-300 hover:shadow-xl'>
                  <div className=' flex items-center py-5'>
                    <img src={productCatagories} alt='showerImageSmall' className='mx-auto ' />
                  </div>
                  <div className='pt-5 pb-2 text-2xl  text-[#09565f] font-medium'>Air Shower</div>
                  <div className='text-[16px] text-normal text-[#65666d] pb-2'>Single-level basin mixer 1/2“RT5a0C3ACN0 </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={5}>
              <div className='grid grid-cols-4 gap-4'>
                <div className='bg-[#fff] shadow-md p-2 text-center hover:scale-105 ease-in-out duration-300 hover:shadow-xl'>
                  <div className=' flex items-center py-5'>
                    <img src={productCatagories} alt='showerImageSmall' className='mx-auto ' />
                  </div>
                  <div className='pt-5 pb-2 text-2xl  text-[#09565f] font-medium'>Air Shower</div>
                  <div className='text-[16px] text-normal text-[#65666d] pb-2'>Single-level basin mixer 1/2“RT5a0C3ACN0 </div>
                </div>
                <div className='bg-[#fff] shadow-md p-2 text-center hover:scale-105 ease-in-out duration-300 hover:shadow-xl'>
                  <div className=' flex items-center py-5'>
                    <img src={productCatagories} alt='showerImageSmall' className='mx-auto ' />
                  </div>
                  <div className='pt-5 pb-2 text-2xl  text-[#09565f] font-medium'>Air Shower</div>
                  <div className='text-[16px] text-normal text-[#65666d] pb-2'>Single-level basin mixer 1/2“RT5a0C3ACN0 </div>
                </div>
                <div className='bg-[#fff] shadow-md p-2 text-center hover:scale-105 ease-in-out duration-300 hover:shadow-xl'>
                  <div className=' flex items-center py-5'>
                    <img src={productCatagories} alt='showerImageSmall' className='mx-auto ' />
                  </div>
                  <div className='pt-5 pb-2 text-2xl  text-[#09565f] font-medium'>Air Shower</div>
                  <div className='text-[16px] text-normal text-[#65666d] pb-2'>Single-level basin mixer 1/2“RT5a0C3ACN0 </div>
                </div>
              </div>
            </TabPanel>
          </Box>
        </div>
      </div>
      <div className="py-10 container mx-auto px-4">
        <h1 className="text-center pt-5 pb-10 text-[#09565f] text-[36px] font-bold leading-[36px] font-[sans] tracking-[-1px]">
          Related Product
        </h1>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={16}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className='related-product-list'
        >
          <SwiperSlide>
            <div className='bg-[#fff] text-center'>
              <div className=''>
                <img src={relatedProduct1} alt='showerImageSmall' className='mx-auto w-full' />
              </div>
              <div className='text-[16px] text-normal text-[#65666d] pb-2 pt-2'>Single-level basin mixer 1/2“RT5a0C3ACN0 </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-[#fff] text-center '>
              <div className=''>
                <img src={relatedProduct2} alt='showerImageSmall' className='mx-auto w-full' />
              </div>
              <div className='text-[16px] text-normal text-[#65666d] pb-2 pt-2'>Single-level basin mixer 1/2“RT5a0C3ACN0 </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-[#fff] text-center'>
              <div className=''>
                <img src={relatedProduct3} alt='showerImageSmall' className='mx-auto w-full' />
              </div>
              <div className='text-[16px] text-normal text-[#65666d] pb-2 pt-2'>Single-level basin mixer 1/2“RT5a0C3ACN0 </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-[#fff] text-center'>
              <div className=''>
                <img src={relatedProduct4} alt='showerImageSmall' className='mx-auto w-full' />
              </div>
              <div className='text-[16px] text-normal text-[#65666d] pb-2 pt-2'>Single-level basin mixer 1/2“RT5a0C3ACN0 </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-[#fff] text-center'>
              <div className=''>
                <img src={relatedProduct5} alt='showerImageSmall' className='mx-auto w-full' />
              </div>
              <div className='text-[16px] text-normal text-[#65666d] pb-2 pt-2'>Single-level basin mixer 1/2“RT5a0C3ACN0 </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-[#fff] text-center'>
              <div className=''>
                <img src={relatedProduct1} alt='showerImageSmall' className='mx-auto w-full' />
              </div>
              <div className='text-[16px] text-normal text-[#65666d] pb-2 pt-2'>Single-level basin mixer 1/2“RT5a0C3ACN0 </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-[#fff] text-center'>
              <div className=''>
                <img src={relatedProduct3} alt='showerImageSmall' className='mx-auto w-full' />
              </div>
              <div className='text-[16px] text-normal text-[#65666d] pb-2 pt-2'>Single-level basin mixer 1/2“RT5a0C3ACN0 </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Footer />
    </>
  )
}

export default ProductDetail

