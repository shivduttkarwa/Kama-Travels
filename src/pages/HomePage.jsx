import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Sections
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Destinations from '../sections/Destinations';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  useEffect(() => {
    // Set up scroll-triggered animations
    const setupScrollAnimations = () => {
      // Refresh ScrollTrigger after all content is loaded
      ScrollTrigger.refresh();

      // Add smooth scroll behavior for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });

      // Add reveal animations for elements with reveal class
      const revealElements = document.querySelectorAll('.reveal, .slide-left, .slide-right, .scale-in');
      
      revealElements.forEach(element => {
        gsap.fromTo(element, 
          {
            opacity: 0,
            y: element.classList.contains('reveal') ? 50 : 0,
            x: element.classList.contains('slide-left') ? -50 : 
               element.classList.contains('slide-right') ? 50 : 0,
            scale: element.classList.contains('scale-in') ? 0.8 : 1
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Add parallax effect to sections
      gsap.utils.toArray('.parallax').forEach(section => {
        gsap.to(section, {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

      // Add hover animations to interactive elements
      const cards = document.querySelectorAll('.hover-lift');
      cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
    };

    setupScrollAnimations();

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <main>
      <Hero />
      <Services />
      <Destinations />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default HomePage;