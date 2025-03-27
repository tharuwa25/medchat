import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is this?",
      answer:
        "This tool helps users quickly identify possible illnesses based on selected symptoms.",
    },
    {
      question: "How does the system work?",
      answer:
        "Users select symptoms through a button-based interface, and the system predicts possible illnesses based on medical data.",
    },
    {
      question: "Is this a replacement for a doctor?",
      answer:
        "No, this is not a medical diagnosis tool. It provides potential matches, but you should always consult a healthcare professional.",
    },
    {
      question: "How accurate is the prediction?",
      answer:
        "The system uses symptom-disease mapping and may include machine learning models. Accuracy depends on data quality and user inputs.",
    },
    {
      question: "Do I need to register to use the tool?",
      answer:
        "No",
    },
    {
      question: "Is my data saved?",
      answer:
        "The system does not store personal health data permanently.",
    },
  ];

  // State to manage the open/close of the accordion
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  

  return (
    <div className="faq-container">
      {/* <h1 className="faq-title">Frequently Asked Questions</h1> */}
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleAccordion(index)}
            >
              <h2>{faq.question}</h2>
              <span className="arrow">{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>

      <style jsx>{`
        .faq-container {
          padding: 40px;
          max-width: 1000px;
          margin: 0 auto;
          font-family: Arial, sans-serif;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .faq-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: #333;
        }

        .faq-list {
          margin-top: 20px;
        }

        .faq-item {
          background-color: #fff;
          margin-bottom: 15px;
          padding: 20px;
          border-radius: 6px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          font-size: 1.25rem;
          font-weight: bold;
          color: #333;
        }

        .arrow {
          font-size: 1.5rem;
          transition: transform 0.3s ease;
        }

        .faq-answer {
          margin-top: 10px;
          font-size: 1.1rem;
          color: #555;
        }

        .faq-question:hover {
          color: #0070f3;
        }

        .faq-item:hover {
          background-color: #f1f1f1;
        }
      `}</style>
    </div>
  );
};

export default FAQ;