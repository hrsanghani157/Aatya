import Footer from "../components/Footer";
import Header from "../components/Header";
import showerCollectionBg from '../assets/image/showerCollection.png'
import collectionproduct1 from '../assets/image/product-collection-1.png'
import collectionproduct2 from '../assets/image/product-collection-2.png'
import collectionproduct3 from '../assets/image/product-collection-3.png'
import collectionproduct4 from '../assets/image/product-collection-4.png'
import generalContactIcon from '../assets/image/Contact-request.png'
import customerServiceIcon from '../assets/image/customer-service.png'
import showroomNearIcon from '../assets/image/showroom-near-you.png'
import '../App.css';

function ProductCatagories() {
  
  return (
    <>
    <Header />
    <div className='relative'>
        <img src={showerCollectionBg} alt='productBg' />
        <div className='absolute left-0 top-0 bg-[#000000a6] h-full w-full flex items-center justify-center'>
          <h1 className="text-[48px] font-bold leading-[50px] font-[sans] text-[#fff] shadow-md ">
            Aatya Shower Collection
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-20">
        <div className=''>
          <h1 className="text-[30px] font-bold font-[sans] tracking-[-1px]">
            Aatya For Your Bathroom Collection
          </h1>
          <p className="text-md md:leading-normal font-medium text-black pt-5 w-[85%]">
            In the Bathroom we have the widest range of products for all draw-off points and in three styles: Cosmopolitan, Contemporary and Authentic
            each with a distinct look and characteristic, to satisfy our consumers around the world. Other exciting evelopments include our pioneering
            Aatya Power&Soul® shower with seven ‘one click’ combinations of both invigorating and relaxing spray patterns, as well as the continued
            development of Aatya Eurocube, which offers a Cosmopolitan range at an affordable price.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-3'>
        <div className='flex flex-col'>
          <div className='flex'>
            <div className='w-[30%] bg-[#000] h-full'>
              <div className='text-[#fff]'>123</div>
            </div>
            <div className='w-[70%]'>
              <img src={collectionproduct1} alt='collectionproduct1' />
            </div>
          </div>
          <div className='flex'>
            <div className='w-[70%]'>
              <img src={collectionproduct2} alt='collectionproduct2' />
            </div>
            <div className='w-[30%] h-full text-[#000]'>11
            </div>
          </div>
        </div>
        <div className='flex w-full h-full'>
          <div className='w-[45%] h-full flex flex-col justify-between'>            
            <div>1</div>
            <div className='h-[50%] bg-[#000] text-[#fff]'>11</div>
          </div>
          <div className='w-[55%]'>
            <img src={collectionproduct3} alt='collectionproduct3' className='h-full'/>
          </div>
        </div>
        <div className='flex w-full h-full'>
          <div className='w-[45%] h-full flex flex-col justify-center'>
            <div className='h-[50%] bg-[#000] text-[#fff]'>11</div>
          </div>
          <div className='w-[55%]'>
            <img src={collectionproduct4} alt='collectionproduct3' className='h-full'/>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-20">
        <div className='grid grid-cols-3 gap-[20px]'>
          <div className='text-center border border-[#000] p-10'>
            <img src={generalContactIcon} alt='image here' className='mx-auto' />
            <p className="text-lg font-base font-light text-[#000] pt-5 ">
              General Contact request
            </p>
          </div>
          <div className='text-center border border-[#000] p-10'>
            <img src={customerServiceIcon} alt='image here' className='mx-auto' />
            <p className="text-lg font-base font-light text-[#000] pt-5 ">
              General Contact request
            </p>
          </div>
          <div className='text-center border border-[#000] p-10'>
            <img src={showroomNearIcon} alt='image here' className='mx-auto' />
            <p className="text-lg font-base font-light text-[#000] pt-5 ">
              General Contact request
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProductCatagories

