
"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  { id: 1, question: 'Question', answer: 'Answer' },
  { id: 2, question: 'Question', answer: 'Answer' },
  { id: 3, question: 'Question', answer: 'Answer' },
  { id: 4, question: 'Question', answer: 'Answer' },
  { id: 5, question: 'Question', answer: 'Answer' },
  { id: 6, question: 'Closed Question Example', answer: '' },
];

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold text-center mb-6">Resolve your Doubts here.</h1>
      <ul className="space-y-4">
        {questions.map(({ id, question, answer }) => (
          <li key={id} className="border-b">
            <div
              className="flex items-center justify-between py-2 cursor-pointer"
              onClick={() => toggleQuestion(id)}
            >
              <span className="text-lg font-medium break-words sm:text-base lg:text-lg">
                {id}. {question}
              </span>
              <button className="text-blue-600 font-bold text-xl sm:text-lg lg:text-xl">
                {openQuestion === id ? '×' : '+'}
              </button>
            </div>
            <AnimatePresence>
              {openQuestion === id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <p className="py-2 px-4 text-gray-600 text-sm sm:text-base lg:text-lg">
                    {answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </div>
  );
}

