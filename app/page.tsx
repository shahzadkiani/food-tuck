import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const featuredDishes = [
  { name: "Spicy Chicken Tacos", price: 12.99, image: "/placeholder.png" },
  { name: "Vegetarian Pizza", price: 14.99, image: "/placeholder.png" },
  { name: "Chocolate Lava Cake", price: 6.99, image: "/placeholder.png" },
]

const reviews = [
  { name: "John Doe", comment: "Best food I've ever had!", rating: 5 },
  { name: "Jane Smith", comment: "Great atmosphere and delicious meals.", rating: 4 },
  { name: "Mike Johnson", comment: "Excellent service and tasty dishes.", rating: 5 },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="bg-orange-100 py-20 bg-cover bg-center" style={{ backgroundImage: 'url(/banner.png)' }}>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Delicious Food for Every Mood</h1>
            <p className="text-xl mb-6 text-white">Experience the best flavors from our kitchen to your table.</p>
            <Button variant="default" size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Order Now
            </Button>
          </div>
          
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-white font-bold text-center mb-12">Our Featured Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image src={dish.image} alt={dish.name} width={400} height={300} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                  <p className="text-gray-600">${dish.price.toFixed(2)}</p>
                  <Button variant="outline" className="mt-4">Order Now</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Image src="/review.png" alt={review.name} width={50} height={50} className="rounded-full mr-4" />
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-xl mb-8">Experience our delicious meals today!</p>
          <Button variant="outline" size="lg" className="bg-white text-orange-500 hover:bg-orange-100">
            View Our Menu
          </Button>
        </div>
      </section>
    </div>
  )
}
