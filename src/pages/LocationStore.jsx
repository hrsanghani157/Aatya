import '../App.css';
import "swiper/swiper.css";
import arrowForward from '../assets/image/arrowForward.png'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import { Typography } from '@mui/material';

function LocationStore() {
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
        <div className='md:w-[70%] mx-auto text-center'>
          <h1 className="text-[48px] font-bold leading-[50px] font-[sans] tracking-[-1.5px]">
            Aatya Showroom Near You
          </h1>
          <p className="text-lg md:leading-normal font-medium text-black pt-5 ">
            Find the Closest Location
          </p>
        </div>
      </div>
      <div className='relative'>
        <div className="bg-[url('./assets/image/showroomLocationBg.png')] h-[300px]"></div>
        <div className="container mx-auto px-4 py-20 pt-0 mt-[-200px]">
          <div className='grid grid-cols-2 gap-3 '>
            <div className='bg-[#fff] p-2 shadow-md max-h-[515px] overflow-y-auto'>
              <div className='bg-[#f4f4f4] border border-[#cccccc] p-5'>
                <h4 className='text-[#09565f] uppercase text-[24px] font-bold'>SREE VENKTESH SWAMY AGENCIES</h4>
                <p className='text-[16px] md:leading-normal font-medium text-black pt-2 '>Shop no.4 To 7,Radha krishna Shopping,Near Navjivan
                  Circle,Udhana Magdalla Road, Surat, Gujarat</p>
                <p className='text-[#000] uppercase text-[18px] font-bold pt-5'>PHONE: <span className='text-[#09565f]'>+91 8866993323</span></p>
                <p className='text-[#000] uppercase text-[18px] font-bold flex items-center pt-2'>
                  GET DIRECTION <span className='ml-3'><img src={arrowForward} className='h-[22px]' /></span></p>
              </div>
              <div className='bg-[#f4f4f4] border border-[#cccccc] p-5 mt-3'>
                <h4 className='text-[#09565f] uppercase text-[24px] font-bold'>SREE VENKTESH SWAMY AGENCIES</h4>
                <p className='text-[16px] md:leading-normal font-medium text-black pt-2 '>Shop no.4 To 7,Radha krishna Shopping,Near Navjivan
                  Circle,Udhana Magdalla Road, Surat, Gujarat</p>
                <p className='text-[#000] uppercase text-[18px] font-bold pt-5'>PHONE: <span className='text-[#09565f]'>+91 8866993323</span></p>
                <p className='text-[#000] uppercase text-[18px] font-bold flex items-center pt-2'>
                  GET DIRECTION <span className='ml-3'><img src={arrowForward} className='h-[22px]' /></span></p>
              </div>
              <div className='bg-[#f4f4f4] border border-[#cccccc] p-5 mt-3'>
                <h4 className='text-[#09565f] uppercase text-[24px] font-bold'>SREE VENKTESH SWAMY AGENCIES</h4>
                <p className='text-[16px] md:leading-normal font-medium text-black pt-2 '>Shop no.4 To 7,Radha krishna Shopping,Near Navjivan
                  Circle,Udhana Magdalla Road, Surat, Gujarat</p>
                <p className='text-[#000] uppercase text-[18px] font-bold pt-5'>PHONE: <span className='text-[#09565f]'>+91 8866993323</span></p>
                <p className='text-[#000] uppercase text-[18px] font-bold flex items-center pt-2'>
                  GET DIRECTION <span className='ml-3'><img src={arrowForward} className='h-[22px]' /></span></p>
              </div>
              <div className='bg-[#f4f4f4] border border-[#cccccc] p-5 mt-3'>
                <h4 className='text-[#09565f] uppercase text-[24px] font-bold'>SREE VENKTESH SWAMY AGENCIES</h4>
                <p className='text-[16px] md:leading-normal font-medium text-black pt-2 '>Shop no.4 To 7,Radha krishna Shopping,Near Navjivan
                  Circle,Udhana Magdalla Road, Surat, Gujarat</p>
                <p className='text-[#000] uppercase text-[18px] font-bold pt-5'>PHONE: <span className='text-[#09565f]'>+91 8866993323</span></p>
                <p className='text-[#000] uppercase text-[18px] font-bold flex items-center pt-2'>
                  GET DIRECTION <span className='ml-3'><img src={arrowForward} className='h-[22px]' /></span></p>
              </div>
            </div>
            <div className='bg-[#fff] p-2 shadow-md'>
              <div className='bg-[#fff] border border-[#cccccc] '>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d59500.57644382356!2d72.85609260535372!3d21.24033188551879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1686243743582!5m2!1sen!2sin" width="100%" height="500" allowfullscreen="" loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LocationStore;
