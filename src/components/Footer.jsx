import React from 'react'
import instagramIcon from '../assets/image/icon/instagram.svg'
import twitterIcon from '../assets/image/icon/twitter.svg'
import facebookIcon from '../assets/image/icon/facebook.png'
import pinterestIcon from '../assets/image/icon/pinterest.png'

function Footer() {
  return (
    <div>
      <div className="relative bg-[#1d1d1d]">
        <div className='grid grid-cols-2 h-[84vh] place-items-center relative'>
          <div className='text-center p-[7%]'>
            <h3 className="text-[48px] text-uppercase text-[#fff] font-bold leading-[50px] font-[sans] tracking-[-0.5px]">
              Stay in the know
            </h3>
            <p className="text-base font-base font-light text-[#fff] pt-10 ">
              Our emails are personal, informative and an interesting read on new launches,
              team stories and much more. you would not want to miss out.
            </p>
            <p className="text-base font-base font-light text-[#fff] pt-2 ">
              And we respect your privacy.
            </p>
            <div className="mail-form-w w-form">
              <form
                id="wf-form-Footer-Form"
                name="wf-form-Footer-Form"
                data-name="Footer Form"
                method="get"
                className="mail-form"
              >
                <div className='flex justify-center pt-10'>
                  <div>
                    <input
                      type="email"
                      className="h-full w-[250px] pl-4 bg-[#282828] border border-[#000] mr-3"
                      maxLength="256"
                      name="Footer-Email"
                      data-name="Footer Email"
                      placeholder="enter your email"
                      id="Footer-Email"
                      required
                    />
                  </div>
                  <button className="animation-button button--aatya button--aatya--white" data-text="Subscribe">
                    <span>S</span><span>u</span><span>b</span><span>s</span><span>c</span><span>r</span><span>i</span><span>b</span><span>e</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='h-full w-[1px] bg-[#999] absolute left-[50%]'></div>
          <div className='text-center p-[7%]'>
            <h3 className="text-[48px] text-uppercase text-[#fff] font-bold leading-[50px] font-[sans] tracking-[-0.5px]">
              Get in touch
            </h3>
            <p className="text-base font-base font-light text-[#fff] pt-10 ">
              Aatya is practically, promising and precisely designed to elevate your everyday oral care.
              We are an innovative brand with products that will make oral care easy, inviting and enjoyable!
            </p>
            <div className="pt-10 ">
              <button className="animation-button button--aatya button--aatya--white mx-auto" data-text="Send us to email">
                <span>S</span><span>e</span><span>n</span><span>d</span> <span>u</span><span>s</span> <span>t</span><span>o</span> <span>E</span><span>m</span><span>a</span><span>i</span><span>l</span>
              </button>
            </div>
          </div>
        </div>
        <div className='h-[16vh] relative'>
          <div className='h-[1px] w-full bg-[#999] absolute'></div>
          <div className='container mx-auto px-4 h-full'>
            <div className='flex justify-between items-center h-full '>
              <h3 className="text-[48px] text-uppercase text-[#d0ac31] font-bold leading-[50px] font-[sans] tracking-[-0.5px]">
                React</h3>
              <div className='text-[#fff] text-[14px]'>
                <div className='uppercase text-[#999] mb-3'>legal stuff</div>
                <div className='flex gap-5 uppercase text-xs'>
                  <div >privacy policy</div>
                  <div>Terms of use</div>
                  <div>FAQs</div>
                </div>
              </div>
              <div className='text-[#fff] text-[14px]'>
                <div className='uppercase  text-[#999] mb-3'>social media</div>
                <div className='flex gap-5'>
                  <div>
                    <img src={instagramIcon} />
                  </div>
                  <div>
                    <img src={facebookIcon} />
                  </div>
                  <div>
                    <img src={pinterestIcon} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
