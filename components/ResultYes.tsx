import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { BackgroundGradient } from './ui/background-gradient';

interface ResultYesProps {
    disease: string | string[];  
    disc: string;
    prevention: string[];
}

const ResultYes: React.FC<ResultYesProps> = ({ disease, disc, prevention }) => {
    const router = useRouter();
    const [other, setOther] = useState<Record<string, boolean>>({});

    useEffect(() => {
        const savedDetails = JSON.parse(localStorage.getItem('details') || '{}');
        setOther(savedDetails);
    }, []);

    const handleNextPage = (item: string) => {
        router.push(`/my-symptoms?disease=${encodeURIComponent(item)}`);
    };

    return (
        <div className='bg-blue-950 h-screen py-16 flex flex-col items-center text-center'>
            <div className='m-6 w-full max-w-3xl'>
                <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
                    <h4 className='text-black text-2xl font-bold mt-2'>
                        Based on your answers, you are most likely diagnosed with
                    </h4>
                    <p className='text-blue-500 font-bold text-4xl mt-6'>{disease}</p>

                    <p className='text-sm mt-6 w-3/4 mx-auto'>{disc}</p>

                    <h3 className='text-left text-xl font-bold mt-8 ml-4 bg-bgColor-800 text-white w-fit p-2 mb-4'>
                        Prevention and Treatment
                    </h3>

                    <ul className='text-left ml-6 list-disc text-sm'>
                        {prevention?.length > 0 ? (
                            prevention.map((preven, index) => <li key={index}>{preven}</li>)
                        ) : (
                            <li>No prevention or treatment information available.</li>
                        )}
                    </ul>
                </BackgroundGradient>
            </div>

            <h5 className='font-bold text-2xl text-white mt-10'>
                Explore Other Possible Diagnoses
            </h5>

            <div className='bg-blue-500 p-8 border-black rounded-lg border-2 mx-8 text-center'>
                {Object.entries(other).length > 0 ? (
                    Object.entries(other).map(([key, value]) => (
                        <button
                            key={key}
                            className={`text-white p-4 text-xl rounded-xl mr-4 transition-all mb-4 ${
                                value ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 cursor-not-allowed'
                            }`}
                            onClick={() => handleNextPage(key)}
                            disabled={!value}
                        >
                            {key}
                        </button>
                    ))
                ) : (
                    <p className='text-white'>No other diagnoses available.</p>
                )}
            </div>
        </div>
    );
};

export default ResultYes;