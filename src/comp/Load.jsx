import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [greeting, setGreeting] = useState('Loading...');

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(prevProgress => prevProgress + 1);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [progress]);

  useEffect(() => {
    const greetings = [
      'Hello',
      'こんにちは',
      'नमस्ते',
      'Bonjour',
      '你好'
    ];

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * greetings.length);
      setGreeting(greetings[randomIndex]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-screen flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-semibold mb-4">{greeting}</h1>
      <div className="loading-bar w-64 bg-gray-600 rounded-full">
        <div className="loading-progress h-1 bg-blue-500 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

export default LoadingScreen;
