import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:h-screen overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/api/placeholder/1920/1080"
          alt="Modern Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative flex items-center min-h-[90vh] md:h-full">
        <div className="max-w-7xl mx-auto px-6 w-full">
          
          <div className="max-w-4xl text-white space-y-6">
            
            {/* Tagline */}
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-[10px] sm:text-xs uppercase tracking-widest">
              Award-Winning Architecture
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light leading-tight tracking-tight">
              Designing Spaces <br />
              <span className="font-medium">
                That Feel Like Home
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-xl text-neutral-200 max-w-2xl leading-relaxed">
              We create timeless architecture rooted in simplicity,
              functionality, and human experience that transforms the way you live.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-6">
              
              <Link
                to="/projects"
                className="group bg-white text-neutral-900 px-8 sm:px-10 py-3 sm:py-4 rounded-full text-sm font-medium hover:bg-neutral-100 transition-all shadow-lg hover:shadow-xl hover:scale-105 text-center"
              >
                View Projects
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>

              <Link
                to="/contact"
                className="border-2 border-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-sm font-medium hover:bg-white hover:text-neutral-900 transition-all text-center"
              >
                Contact Us
              </Link>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-9 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;