"use client"; // Add this at the top of the file

import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Next.js?",
      answer:
        "Next.js is a React framework that enables you to build static and dynamic websites with React. It provides features like server-side rendering, static site generation, and easy routing.",
    },
    {
      question: "How do I create a new Next.js project?",
      answer:
        "To create a new Next.js project, run the following command: `npx create-next-app@latest` and follow the setup steps.",
    },
    {
      question: "What is SSR (Server-Side Rendering)?",
      answer:
        "SSR is a feature in Next.js that allows you to render React pages on the server rather than in the browser, which can improve SEO and performance for certain pages.",
    },
    {
      question: "What is SSG (Static Site Generation)?",
      answer:
        "SSG is a feature in Next.js that allows you to generate HTML at build time. It is useful for creating pages that don't change often, such as blogs or documentation.",
    },
    {
      question: "How do I deploy my Next.js application?",
      answer:
        "You can deploy your Next.js app using platforms like Vercel, Netlify, or any other static hosting platform that supports React applications.",
    },
  ];

  // State to manage the open/close of the accordion
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
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
