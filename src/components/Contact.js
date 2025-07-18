export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-indigo-700 mb-4">Contact Me</h2>
        <p className="text-gray-600 mb-6">
          Get in touch — I’d love to hear from you!
        </p>
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded"
          />
          <button className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
