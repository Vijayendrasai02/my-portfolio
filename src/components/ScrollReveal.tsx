"use client";
import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  animationDelay?: number;
}

export default function ScrollReveal({ children, animationDelay = 0 }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Toggle visibility based on aggressive intersection margins
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }, { 
      threshold: 0, 
      // Negative top margin means it vanishes before it fully leaves the top of the screen
      rootMargin: "-30% 0px -20% 0px" 
    });
    
    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`scroll-reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${animationDelay}ms` }}
    >
      {children}
    </div>
  );
}
