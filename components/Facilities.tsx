'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const facilities = [
  { name: 'Stay', image: '/placeholder.svg?height=400&width=600', description: 'Comfortable and modern accommodations' },
  { name: 'Dine', image: '/placeholder.svg?height=400&width=600', description: 'Delicious meals in our dining hall' },
  { name: 'Study', image: '/placeholder.svg?height=400&width=600', description: 'Quiet areas for focused learning' },
  { name: 'Relax', image: '/placeholder.svg?height=400&width=600', description: 'Recreational spaces for unwinding' },
]

export default function Facilities() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % facilities.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + facilities.length) % facilities.length)
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Facilities</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {facilities.map((facility, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="relative h-96">
                    <Image
                      src={facility.image}
                      alt={facility.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-start p-8 rounded-lg">
                      <div>
                        <h3 className="text-4xl font-bold text-white mb-2">{facility.name}</h3>
                        <p className="text-xl text-white">{facility.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>
    </section>
  )
}