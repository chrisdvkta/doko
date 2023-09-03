import styles from '../style';

const Hero = () => (
  <section id="home" className = {`flex md:flex-row 
  flow-col ${styles.paddingY}`}>
   
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between         items-center w-full">
            <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text[[52px] text-white ss:leading-[100px] leading-[75px]'>
              <span className='text-gradient'>डोको</span>
            </h1>
          
          </div> 

          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
           A one-stop portal - or basket - where students can find all the necessary stuff required during their four years of bachelors program.
            
          </p>

          <div className={`flex-1 flex ${styles.flexCenter}md:my-0 my-10 relative`}>
            {/* <img src={doko_logo} alt="doko" class="w-[100%] h-[100%]relative z-[5]" /> */}
            <div className='absolute z-[0] w-[70%] h-[75%] bottom-30 rounded-full white__gradient '/>
            <div className='absolute z-[1] w-[40%] h-[35%] top-0 pink__gradient '/>
            <div className='absolute z-[0] w-[50%] h-[55%] right-20 blue__gradient '/>
          </div>
    </div>

  </section>
)

export default Hero