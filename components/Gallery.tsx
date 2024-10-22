import Image from 'next/image'

const roomTypes = [
  {
    name: 'Standard Room',
    image: '/placeholder.svg?height=300&width=400',
    capacity: '2 Guests',
    size: '200 sq ft',
    price: '₹5,000/month'
  },
  {
    name: 'Deluxe Room',
    image: '/placeholder.svg?height=300&width=400',
    capacity: '2 Guests',
    size: '250 sq ft',
    price: '₹7,000/month'
  },
  {
    name: 'Premium Room',
    image: '/placeholder.svg?height=300&width=400',
    capacity: '1 Guest',
    size: '180 sq ft',
    price: '₹6,000/month'
  },
  {
    name: 'Shared Room',
    image: '/placeholder.svg?height=300&width=400',
    capacity: '4 Guests',
    size: '400 sq ft',
    price: '₹4,000/month per bed'
  },
]

export default function Gallery() {
  return (
    <section className="py-16 bg-[#FDF8F3]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Accommodations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roomTypes.map((room, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src={room.image}
                alt={room.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4">{room.capacity} • {room.size}</p>
                <p className="text-lg font-bold text-[#C8A27A] mb-4">{room.price}</p>
                <button className="w-full bg-[#C8A27A] text-white py-2 rounded-full hover:bg-[#A88A68] transition duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}