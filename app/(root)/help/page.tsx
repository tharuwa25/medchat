import { Timeline } from '@/components/ui/timeline';
import Image from 'next/image';
import React from 'react'


const HowItWork = () => {

  const data = [
    {
      title: "STEP 01",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Go to find symptom page.
          </p>
          <div className="grid grid-cols gap-4">
            <Image
    src='Step1.png' 
    alt="startup template"
    width={700}
    height={800}
    className='bg-white p-2 rounded-lg object-cover'
            />
          </div>
        </div>
      ),
    },
    {
      title: "STEP 02",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Enter your main symptom or explain the symptom on a sentence.
          </p>
          {/* <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p> */}
          <div className="grid grid-cols gap-4">
            <Image
    src='Step6.png' 
    alt="hero template"
    width={700}
    height={800}
    className='bg-white p-2 rounded-lg object-cover'
            />

          </div>
        </div>
      ),
    },
    {
      title: "STEP 03",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Now Chose a Diseaeses to check.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-white dark:text-neutral-300 text-xs md:text-sm">
              ✅ Try to chose a disaes that you think most likely to you have
            </div>
            <div className="flex gap-2 items-center text-white dark:text-neutral-300 text-xs md:text-sm">
              ✅ If you dont't have an idea chose a random one
            </div>
          
          </div>
          <div className="grid grid-cols gap-4">
            <Image
    src='Step2.png' 
    alt="hero template"
    width={700}
    height={800}
    className='bg-white p-2 rounded-lg object-cover'
            />
          
          </div>
        </div>
      ),
    },
    {
      title: "STEP 04",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Here read carefully and chose every symptoms that you diagnose with right now.
          </p>
          
          <div className="grid grid-cols gap-4">
            <Image
    src='Step3.png' 
    alt="hero template"
    width={700}
    height={800}
    className='bg-white p-2 rounded-lg object-cover'
            />
          
          </div>
        </div>
      ),
    },
    {
      title: "STEP 05",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Read final result.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-white dark:text-neutral-300 text-xs md:text-sm">
              ✅ If you diagnosis with the relevant illness it will display it as it is.
            </div>
            <div className="flex gap-2 items-center text-white dark:text-neutral-300 text-xs md:text-sm">
              ✅ With preventions and treatements too.
            </div>
            <div className="flex gap-2 items-center text-white dark:text-neutral-300 text-xs md:text-sm">
              ✅ If not display yourn't diagnosis with it.
            </div>
          {/*   <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div> */}
          </div>
          <div className="grid grid-cols gap-4">
            <Image
    src='Step4.png' 
    alt="hero template"
    width={700}
    height={800}
    className='bg-white p-2 rounded-lg object-cover'
            />
          
          </div>
        </div>
      ),
    },
    {
      title: "STEP 06",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Select other illnesses.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-white dark:text-neutral-300 text-xs md:text-sm">
              ✅ Weather your are diagnosis with or not, Here you can chose other illness to check.
            </div>
          
           
          </div>
          <div className="grid grid-cols gap-4 ">
            <Image
    src='Step5.png' 
    alt="hero template"
              width={700}
              height={800}
              className='bg-white p-2 rounded-lg object-cover'
             // className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          
          </div>
        </div>
      ),
    }
  ];
  
  return (
    <div className="bg-bgColor-700 h-screen py-16">

    <div className="w-full">
      <Timeline data={data} />


    <div className='bg-bgColor-700'>
      <h2 className='text-white text-3xl text-center'>FAQ's</h2>

      <ul>
        <li>devolping....</li>
        
        
      </ul>
    </div>

    </div>
    </div>
  )
}

export default HowItWork