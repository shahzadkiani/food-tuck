import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    title: "10 Reasons To Do A Digital Detox Challenge",
    excerpt: "Discover the benefits of taking a break from technology and how it can improve your overall well-being.",
    image: "/blog.png",
    date: "December 8, 2023",
    slug: "digital-detox-challenge"
  },
  
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-white mb-12">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src={post.image} alt={post.title} width={400} height={250} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.date}</span>
                <Link href={`/blog/${post.slug}`} className="text-orange-500 hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

