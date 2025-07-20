"use client";

import React, { useEffect, useState } from 'react';

// Loader Component
interface LoaderProps {
  onLoadComplete?: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoadComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing Dreams...');
  const [isComplete, setIsComplete] = useState(false);

  const loadingSteps = [
    { progress: 20, text: 'Initializing Dreams...' },
    { progress: 40, text: 'Loading Innovation...' },
    { progress: 60, text: 'Crafting Reality...' },
    { progress: 80, text: 'Finalizing Experience...' },
    { progress: 100, text: 'Welcome to DreamGen Labs' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + Math.random() * 8 + 2;
        
        // Update loading text based on progress
        const currentStep = loadingSteps.find(step => newProgress >= step.progress && prev < step.progress);
        if (currentStep) {
          setLoadingText(currentStep.text);
        }
        
        if (newProgress >= 100) {
          setIsComplete(true);
          setTimeout(() => {
            if (onLoadComplete) {
              onLoadComplete();
            }
          }, 1000);
          clearInterval(timer);
          return 100;
        }
        
        return newProgress;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-all duration-1000 ${
      isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/60 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main Loader Content */}
      <div className="relative z-10 text-center max-w-md mx-auto px-8">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 animate-pulse">
              <span className="text-white font-bold text-3xl">G</span>
            </div>
            
            {/* Rotating Ring */}
            <div className="absolute inset-0 border-4 border-transparent border-t-blue-400 rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-2 border-transparent border-t-blue-300 rounded-full animate-spin animation-delay-150" style={{animationDirection: 'reverse'}}></div>
          </div>
        </div>

        {/* Company Name */}
        <h1 className="text-blue-400 font-bold text-2xl mb-2">DreamGen Labs</h1>
        <p className="text-blue-300 text-sm mb-8">Dream Beyond Limits</p>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${loadingProgress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>0%</span>
            <span className="text-blue-400 font-medium">{Math.round(loadingProgress)}%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-white text-lg font-medium mb-4 animate-pulse">
          {loadingText}
        </p>

        {/* Animated Dots */}
        <div className="flex justify-center gap-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1s'
              }}
            ></div>
          ))}
        </div>

        {/* Completion Message */}
        {/* {isComplete && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center animate-fadeIn">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white text-xl font-bold">Ready to Transform Dreams!</p>
            </div>
          </div>
        )} */}
      </div>

      {/* Orbital Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-80 h-80 border border-blue-400/20 rounded-full animate-spin-slow" style={{transform: 'translate(-50%, -50%)'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 border border-blue-300/10 rounded-full animate-spin-slow" style={{transform: 'translate(-50%, -50%)', animationDirection: 'reverse', animationDuration: '20s'}}></div>
      </div>
    </div>
  );
};

export default Loader;