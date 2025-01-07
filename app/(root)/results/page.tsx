'use client';
import ResultNo from '@/components/ResultNo';
import ResultYes from '@/components/ResultYes';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Results = () => {
    const searchParams = useSearchParams();
    const diseaes = searchParams.get('result');
    const pass = searchParams.get('disease');
    //outer.push(`/results?result=${result}?disease=${disease}`);
    const[loading,setLoading] = useState(false);

    console.log('diseaes', diseaes, pass)


    const [disc, setDisc] = useState('');
    const [prevention, setPrevetion] = useState<string[]>([]);
    const [other, setOther] = useState<Record<string, boolean> | null>(null);

    const displayResult = async () => {
        if (diseaes == 'No_Matching'){
            updateAllergy()
        }else{
            const res = await fetch('http://127.0.0.1:5000/getpreventions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    diseases: diseaes,
                   //predicted_disease : diseaes
                }),
            });
    
            const data = await res.json();
            setDisc(data.desc);
            
            // Ensure prevention is always an array of strings
            const preventionList = Array.isArray(data.prevntion_list) ? data.prevntion_list : [];
            setPrevetion(preventionList);
            
            updateAllergy();
            setLoading(true);
        }
    };

    useEffect(() => {
        // Only runs on the client side
        const savedDetails = localStorage.getItem('details');
        
        // Check if savedDetails is not null before parsing
        if (savedDetails) {
            setOther(JSON.parse(savedDetails));
        } else {
            setOther(null);  // Handle the case where no details are stored
        }
    
        displayResult();
    }, []);

    const updateAllergy = () => {
        // Retrieve the current details from localStorage
        const savedDetails = localStorage.getItem('details');
        
        // Parse the details or fallback to an empty object if null
        const parsedDetails = savedDetails ? JSON.parse(savedDetails) : {};
    
        // Update the 'Allergy' value to false without losing other values
        parsedDetails['Allergy'] = false;
    
        // Save the updated details back to localStorage
        localStorage.setItem('details', JSON.stringify(parsedDetails));
    
        // Update the state to reflect changes
        setOther(parsedDetails);
    };

    return (
        <div>
            {!loading ? (
                <>
                 {/* <div>
                {other && Object.entries(other).map(([key, value]) => (
                  <>
                    <p key={key} style={{ color: value ? 'green' : 'red' }}>
                        {key}: {value ? 'True' : 'False'}
                    </p>
                  </>
                ))}
            </div> */}
            <ResultNo pass={pass}/>
            </>
            ) : (
                <>
                

            {/* <div>
                {other && Object.entries(other).map(([key, value]) => (
                    <p key={key} style={{ color: value ? 'green' : 'red' }}>
                        {key}: {value ? 'True' : 'False'}
                    </p>
                ))}
            </div> */}
<ResultYes diseaes={diseaes ?? ''} disc={disc} prevention={prevention} />
</>
            )}

            {/* <button onClick={updateAllergy}>Update Allergy to False</button> */}
        </div>
    );
};

export default Results;
