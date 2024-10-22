'use client'

import Image from 'next/image'
import { ChevronDown, Minus, Plus } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Gallery from '../components/Gallery'
import Facilities from '../components/Facilities'
import Footer from '../components/Footer'

export default function HomePage() {
  const imageRef = useRef(null)
  const heroRef = useRef(null)

  useEffect(() => {
    const heroImage = imageRef.current
    const heroSection = heroRef.current

    gsap.set(heroImage, { y: '100%' })

    gsap.to(heroImage, {
      y: 0,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: heroSection,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    })
  }, [])

  return (
    <div className="min-h-screen bg-[#FDF8F3]">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-3xl font-serif">VK PG Boys Hostel</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Rooms</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Reservation</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Pages</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">News</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a>
        </nav>
        <button className="bg-[#C8A27A] text-white px-4 py-2 rounded">RESERVATION</button>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center overflow-hidden">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Premium Hostel</h1>
          <p className="text-xl mb-8">
            Immerse yourself in the epitome of comfort at VK PG Boys Hostel, your premier destination
            in the city. Our hostel redefines modern living, offering an exquisite
            escape for discerning students and young professionals.
          </p>
          <button className="bg-[#C8A27A] text-white px-6 py-3 text-lg">BOOK YOUR STAY</button>
          <div className="flex space-x-12 mt-12">
            <div>
              <div className="text-4xl font-bold">5000+</div>
              <div className="text-gray-600">Happy Residents</div>
            </div>
            <div>
              <div className="text-4xl font-bold">99+</div>
              <div className="text-gray-600">Positive Reviews</div>
            </div>
            <div>
              <div className="text-4xl font-bold">10+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 relative" style={{ height: '600px' }}>
          <div ref={imageRef} className="absolute inset-0">
            <Image
              src="/img/intirior.png"
              alt="VK PG Boys Hostel"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Contact Buttons */}
      <section className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl mb-6">Contact Us</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
              WhatsApp
            </a>
            <a
              href="tel:+911234567890"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/img/placeholder.svg"
                alt="VK PG Boys Hostel Room"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-[#C8A27A] text-lg font-semibold mb-2">WELCOME TO VK PG BOYS HOSTEL</h3>
              <h2 className="text-4xl font-bold mb-6">Your Comfort, Our Commitment</h2>
              <p className="text-gray-600 mb-6">
                At VK PG Boys Hostel, we understand the importance of a comfortable living space for students and young professionals. Our commitment to your comfort goes beyond just providing a room; we create a home away from home. With modern amenities, a supportive environment, and a focus on your well-being, we ensure that your stay with us is both pleasant and productive.
              </p>
              <p className="text-gray-600 mb-6">
                Our hostel features well-designed rooms, common areas for socializing and studying, and a range of services to make your daily life easier. From high-speed internet to regular housekeeping, we&apos;ve got you covered. Choose VK PG Boys Hostel for a living experience that supports your goals and enhances your journey.
              </p>
              <button className="bg-[#C8A27A] text-white px-6 py-3 rounded-full hover:bg-[#A88A68] transition duration-300">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Facilities Section */}
      <Facilities />

      {/* Footer */}
      <Footer />
    </div>
  )
}
