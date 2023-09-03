import {features} from '../constants';
import {layout} from '../style';
import styles from '../style';
import Button from './Button';


const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  
  </div>
);

const FeatureDesc = () => 
   (
    <section id="features" className={layout.section}>
        <div className={layout.sectionInfo}>
            <h3 className={`font-poppins font-semibold xs:text-[38px] text-[20px] text-white xs:leading-[56.8px] leading-[49.8px] w-full mb-2`}>DOKO is a Nepali word for a bamboo basket.</h3>
            <p className ={`${styles.paragraph} max-w-[450px] mt-5`}>These kind of baskets are popular all across the country to carry stuff.
            <br className='sm:block hidden'/> Doko, here, kind of represents similar basket.</p>

            <Button styles = "mt-10"/>

        </div>

        <div className={`${layout.sectionImg} flex-col`}>
          {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
        </div>

    </section>
  )


export default FeatureDesc

