import { slider } from '@/assets';
import { Slider } from '@/components';

export default function Home() {
  return (
    <div className='flex w-full flex-col items-center justify-center my-2 gap-4'>
      <div className='w-full h-[800px]'>
        <Slider />
      </div>
      <section className='flex flex-col-reverse md:flex-row w-full md:px-10 animation-reveal mb-20'>
        <article className='h-[500px] tracking-normal sm:leading-10 md:w-1/2 lg:leading-12 flex flex-col justify-center  md:justify-evenly items-center px-8 gap-8'>
          <h2 className='text-2xl'>
            Your own city escape paradise at the heart of the City!
          </h2>
          <p className='text-right'>
            Are you looking for the perfect place to cool off and relax during
            hot days? Enjoy summer in your own aquatic paradise!
          </p>
        </article>
        <div className='flex justify-center h-[500px] md:w-1/2 rounded overflow-hidden'>
          <img
            src='https://res.cloudinary.com/didni0nof/image/upload/v1703882780/samples/rpvg-assets/rpvg9_mrf1c1.jpg'
            alt=''
            className='object-cover object-center scale-[1.5] aspect-[4/3]'
          />
        </div>
      </section>
      <section className='flex flex-col-reverse md:flex-row-reverse w-full md:px-10 animation-reveal mb-20'>
        <article className='h-[500px] px-8 sm:px-24 md:px-8 tracking-normal sm:leading-10 md:w-1/2 lg:leading-12 flex flex-col justify-center  md:justify-evenly items-center gap-4'>
          {/* <h2 className='text-xl'>Lorem ipsum dolor sit amet</h2> */}
          <p className='text-left'>
            Our pool is surrounded by lush greenery, creating an oasis of
            tranquility where you can escape the hustle and bustle of everyday
            life.
          </p>
          <p className='text-left'>
            With crystal clear water and a modern design, our pool is the ideal
            place to celebrate birthdays, family reunions or simply spend a day
            of fun in the sun. In addition, we have additional amenities.
          </p>
        </article>
        <div className='flex justify-center h-[500px] md:w-1/2 rounded overflow-hidden'>
          <img
            src='https://res.cloudinary.com/didni0nof/image/upload/v1703897828/samples/rpvg-assets/rpvg2_non9mw.jpg'
            alt=''
            className='object-cover object-center scale-[1] md:scale-[1.5]'
          />
        </div>
      </section>
    </div>
  );
}
