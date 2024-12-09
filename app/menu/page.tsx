import Image from 'next/image'
import { Button } from '@/components/ui/button'

const menuCategories = [
  {
    name: "Appetizers",
    items: [
      { name: "Bruschetta", price: 8.99, description: "Toasted bread topped with fresh tomatoes, garlic, and basil", image: "/menu-dish.png" },
      { name: "Spinach Artichoke Dip", price: 10.99, description: "Creamy dip served with tortilla chips", image: "/menu-dish.png" },
    ]
  },
  {
    name: "Main Courses",
    items: [
      { name: "Grilled Salmon", price: 22.99, description: "Fresh salmon fillet with lemon butter sauce", image: "/menu-dish.png" },
      { name: "Chicken Parmesan", price: 18.99, description: "Breaded chicken breast topped with marinara and mozzarella", image: "/menu-dish.png" },
    ]
  },
  {
    name: "Desserts",
    items: [
      { name: "Tiramisu", price: 7.99, description: "Classic Italian coffee-flavored dessert", image: "/menu-dish.png" },
      { name: "New York Cheesecake", price: 8.99, description: "Rich and creamy cheesecake with graham cracker crust", image: "/menu-dish.png" },
    ]
  }
]

export default function MenuPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl text-white font-bold text-center mb-12">Our Menu</h1>
      {menuCategories.map((category, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{category.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {category.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex bg-white rounded-lg shadow-md overflow-hidden">
                <Image src={item.image} alt={item.name} width={200} height={200} className="w-1/3 object-cover" />
                <div className="p-4 flex-1">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">${item.price.toFixed(2)}</span>
                    <Button variant="outline">Add to Cart</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

