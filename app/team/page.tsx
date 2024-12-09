import Image from 'next/image'

const teamMembers = [
  { name: "Mark Henry", role: "Owner", image: "/owner.png" },
  { name: "Tahmina Rumi", role: "Chef", image: "/chef.png" },
  { name: "Mike Brown", role: "Pastry Chef", image: "/chef.png" },
  { name: "Emily Davis", role: "Kitchen Manager", image: "/chef.png" },
]

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-white mb-12">Meet Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src={member.image} alt={member.name} width={500} height={500} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
              <p className="text-gray-600">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

