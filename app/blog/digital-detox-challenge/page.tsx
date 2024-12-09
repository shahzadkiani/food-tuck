import Image from 'next/image'

export default function DigitalDetoxChallengePage() {
  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">10 Reasons To Do A Digital Detox Challenge</h1>
        <Image src="/blog.png" alt="Digital Detox" width={800} height={400} className="rounded-lg mb-8" />
        <div className="prose lg:prose-xl">
          <p>In today's hyper-connected world, taking a break from technology can seem daunting. However, a digital detox can offer numerous benefits for your mental and physical well-being. Here are 10 compelling reasons to consider a digital detox challenge:</p>
          <ol>
            <li><strong>Improved Sleep:</strong> Reducing screen time, especially before bed, can lead to better sleep quality and duration.</li>
            <li><strong>Enhanced Productivity:</strong> Without constant digital distractions, you may find yourself more focused and productive in your daily tasks.</li>
            <li><strong>Better Relationships:</strong> Disconnecting from devices allows for more meaningful face-to-face interactions with friends and family.</li>
            <li><strong>Reduced Stress:</strong> Constant connectivity can lead to information overload and increased stress levels. A detox can help alleviate this.</li>
            <li><strong>Improved Posture:</strong> Less time hunched over devices can lead to better posture and reduced neck and back pain.</li>
            <li><strong>Increased Mindfulness:</strong> Without the constant pull of notifications, you can be more present in the moment and aware of your surroundings.</li>
            <li><strong>Better Eye Health:</strong> Reducing screen time can help alleviate eye strain and related issues.</li>
            <li><strong>Rediscovery of Hobbies:</strong> With more free time, you might rediscover old hobbies or find new interests.</li>
            <li><strong>Improved Mental Health:</strong> Reducing social media use can lead to less comparison and improved self-esteem.</li>
            <li><strong>Enhanced Creativity:</strong> Without the constant input from digital sources, your mind has more space for original thoughts and ideas.</li>
          </ol>
          <p>Consider starting with a short digital detox, perhaps for a day or a weekend, and gradually increase the duration. You might be surprised at the positive changes you experience in your life.</p>
        </div>
      </article>
    </div>
  )
}
