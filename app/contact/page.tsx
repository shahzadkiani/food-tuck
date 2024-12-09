import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
  return (
    <div className="container text-white mx-auto px-4 py-8 flex justify-center items-center min-h-screen">
      <div className="text-center max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="text-gray-400 mb-8">
          Have questions or feedback? We'd love to hear from you! Fill out the form below, and we’ll get back to you shortly.
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
              Name
            </label>
            <Input id="name" type="text" placeholder="Enter your name" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
              Email
            </label>
            <Input id="email" type="email" placeholder="Enter your email" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message here"
              required
              className="w-full p-3 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
