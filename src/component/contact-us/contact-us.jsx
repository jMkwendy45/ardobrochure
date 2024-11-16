import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#011460] py-4">
        <h1 className="text-white text-center text-xl">Contact</h1>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Terms & Conditions Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">TERMS & CONDITIONS</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              The material on this website is in the public domain and has no
              copyright attached to it. The use of such material falls under the
              Fair Use provisions of intellectual property laws.
            </p>
          </div>

          {/* Contact Form Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              WE'D LOVE TO HEAR FROM YOU
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Whether you have a comment or a question, or want to contribute
              with new brochures, this is the place.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-700 mb-2"
                >
                  Your Name (required)
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-700 mb-2"
                >
                  Your Email (required)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-700 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md transition-colors"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
