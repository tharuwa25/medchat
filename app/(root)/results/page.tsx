'use client';

import { Suspense, useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ResultNo from '@/components/ResultNo';
import ResultYes from '@/components/ResultYes';

const Results = () => {
    const searchParams = useSearchParams();
    const disease = searchParams.get('result');
    const pass = searchParams.get('disease');
    const [loading, setLoading] = useState(true);
    const [desc, setDesc] = useState('');
    const [prevention, setPrevention] = useState<string[]>([]);

    const displayResult = useCallback(async () => {
        if (!disease) {
            console.warn("No disease result provided.");
            setLoading(false);
            return;
        }

        try {
            if (disease === 'No_Matching') {
                updateAllergy(disease);
            } else {
                const res = await fetch('https://medchat-server-1026438696562.asia-south1.run.app/getpreventions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ diseases: disease }),
                });

                if (!res.ok) throw new Error("Failed to fetch preventions");

                const data = await res.json();
                setDesc(data.desc || "No description available.");
                setPrevention(data.prevntion_list || []);
                
                if (pass) updateAllergy(pass);
            }
        } catch (error) {
            console.error("Error fetching preventions:", error);
        } finally {
            setLoading(false);
        }
    }, [disease, pass]);

    useEffect(() => {
        displayResult();
    }, [displayResult]);

    const updateAllergy = (result: string) => {
        const savedDetails = JSON.parse(localStorage.getItem('details') || '{}');
        if (result !== "No_Matching") savedDetails[result] = false;
        localStorage.setItem('details', JSON.stringify(savedDetails));
    };

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : disease === 'No_Matching' ? (
                <ResultNo pass={pass || ''} />
            ) : (
                <ResultYes disease={[disease || 'default_disease']} disc={desc} prevention={prevention} />
            )}
        </div>
    );
};

const ResultsPage = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Results />
    </Suspense>
);

export default ResultsPage;
