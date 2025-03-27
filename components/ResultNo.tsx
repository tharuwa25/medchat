import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BackgroundGradient } from './ui/background-gradient';

interface ResultProps {
    pass: string;
}

const ResultNo: React.FC<ResultProps> = ({ pass }) => {
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
                    <h3 className='font-bold mb-2'>
                        It seems like you are not diagnosed with
                    </h3>
                    <p className='text-blue-500 font-bold text-2xl mb-6'>{pass}</p>

                    <h5 className='font-bold text-2xl text-blue-200 mt-10'>
                        Explore Other Possible Diagnoses
                    </h5>

                    <div className="mt-6">
                        {Object.keys(other).length > 0 ? (
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
                </BackgroundGradient>
            </div>
        </div>
    );
};

export default ResultNo;
