import React from "react";

export default function ContactForm() {
  return (
    <section id="contact" className="p-4 py-16">
      <h2 className="text-white text-3xl font-bold text-center mb-8 uppercase tracking-wider">
        LETS GET CONNECTED
      </h2>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_auto_1fr] gap-8 items-start">
        {/* Left Side - Contact Information */}
        <div className="flex flex-col gap-6 text-white/90">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white/70">Some Information</h3>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2 text-white/80">Location:</h4>
            <p className="text-white/70 pl-4">Kathmandu,Nepal</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2 text-white/80">Phone:</h4>
            <p className="text-white/70 pl-4">+977-980000000</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2 text-white/80">Email</h4>
            <p className="text-white/70 pl-4">contactouragency@gmail.com</p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-electric-purple h-full min-h-[300px]"></div>

        {/* Right Side - Contact Form */}
        <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent (demo)'); }}>
          <div>
            <input 
              id="name" 
              name="name" 
              placeholder="Enter your Fullname" 
              type="text"
              className="block w-full border-b-2 border-white/30 bg-transparent px-0 py-3 text-white placeholder:text-white/50 focus:border-white focus:ring-0 focus:outline-none" 
            />
          </div>

          <div>
            <input 
              id="email" 
              name="email" 
              placeholder="Enter your email" 
              type="email"
              className="block w-full border-b-2 border-white/30 bg-transparent px-0 py-3 text-white placeholder:text-white/50 focus:border-white focus:ring-0 focus:outline-none" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">Message</label>
            <textarea 
              id="message" 
              name="message" 
              placeholder="Drop a message here" 
              rows="6"
              className="block w-full border-b-2 border-white/30 bg-transparent px-0 py-3 text-white placeholder:text-white/50 focus:border-white focus:ring-0 focus:outline-none resize-none" 
            />
          </div>

          <button 
            className="w-fit px-8 py-3 bg-black text-white font-medium rounded hover:bg-black/80 transition-colors" 
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
