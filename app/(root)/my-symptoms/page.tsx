'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect, useState, useCallback, Suspense } from 'react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import intenseData from './intense.json';

const MySymptoms = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const disease = searchParams.get('disease');
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const symptomsData = intenseData.symptoms;

  //const disease1 = disease

  const GetSymptoms = useCallback(async () => {
    try {
      const res = await fetch('https://tharudila245.pythonanywhere.com/get_illess_name', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ diseases_input: disease }),
      });
  
      if (!res.ok) throw new Error("Failed to fetch symptoms");
      
      const data = await res.json();
  
      if (!data.symptoms || !Array.isArray(data.symptoms)) {
        console.error("Invalid response format:", data);
        setSymptoms([]); // Set an empty array to prevent errors
        return;
      }
  
      setSymptoms(data.symptoms);
      console.log(`Relevant Symptoms for ${disease}:`, data.symptoms);
    } catch (error) {
      console.error("Error fetching symptoms:", error);
      setSymptoms([]); // Prevent `undefined` state
    }
  }, [disease]);
  

  useEffect(() => {
    if (disease) GetSymptoms();
  }, [GetSymptoms, disease]);

  const handleToggle = (symptom: string) => {
    setSelectedSymptoms((prevSelected) =>
      prevSelected.includes(symptom)
        ? prevSelected.filter((s) => s !== symptom)
        : [...prevSelected, symptom]
    );
  };

  const handleSubmit = async () => {
    console.log('Selected Symptoms:', selectedSymptoms); // You can handle further logic here
    const cleanedSymptoms = selectedSymptoms.join(", "); // Convert array to comma-separated string

    console.log('Selected Symptoms:', cleanedSymptoms); // You can handle further logic here

    const res = await fetch('https://tharudila245.pythonanywhere.com/predictthediseases', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        symptoms: cleanedSymptoms
      })
    });
    const data = await res.json();
    console.log('data', data)
    //setResult(data.predicted_disease); // Assuming data.result contains the result
    console.log('result', data.predicted_disease)
    router.push(`/results?result=${data.predicted_disease}&disease=${disease}`);
  };

  const handleResultPage = (result: string) => {
    router.push(`/results?result=${result}&disease=${disease}`);
  };

  const getSymptomDescription = (symptom: string) => {
    return symptomsData.find((item) => item.name === symptom)?.description || "Description not available.";
  };

  return (
    <div className='bg-bgColor-700 h-screen py-16'>
      <div className='bg-white p-2 m-4 rounded-lg'>
        <h1 className='text-3xl font-bold text-center mt-8 mb-5'>Let's check if you have: {disease}</h1>
        <h4 className='text-xl font-bold text-center mt-8 mb-16'>Click all the symptoms that you experience right now</h4>

        <ToggleGroup type="multiple" className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center">
  {symptoms.map((symptom) => (
    <ToggleGroupItem key={symptom} value={symptom} className="mb-6 sm:mb-8">
      <div className="relative">
        <button
          aria-pressed={selectedSymptoms.includes(symptom)}
          className={`bg-blue-500 text-white p-3 sm:p-4 mb-6 text-sm sm:text-xl border-r-2 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${selectedSymptoms.includes(symptom) ? 'bg-blue-950' : ''}`}
          onClick={() => handleToggle(symptom)}
        >
          {symptom.replace(/_/g, ' ').replace(/^\w/, (c) => c.toUpperCase())}
        </button>
        <div className="w-60 absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs sm:text-sm p-2 rounded-md">
          {getSymptomDescription(symptom)}
        </div>
      </div>
    </ToggleGroupItem>
  ))}
</ToggleGroup>


        <div className="flex justify-center w-full mt-8 px-4">
          <button
            onClick={handleSubmit}
            className="text-xl mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-10 rounded w-full sm:w-auto">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};


// Wrap the page component with Suspense
const MySymptomsPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <MySymptoms />
  </Suspense>
);


export default MySymptoms;