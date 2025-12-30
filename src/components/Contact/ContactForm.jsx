import { sendMessage } from "../../services/contactService";

const ContactForm  = ({ contactForm, setContactForm }) => {
  const handleInpuChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm({
      ...contactForm,
      [name]: value
    });
  };  
  
  
  
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendMessage(contactForm);
      alert("Thank you for your message! I will get back to you soon.");
      setContactForm({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Message failed. Please try again.");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-8">
      {/* 🔴 PASTE YOUR FORM JSX HERE */}
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={contactForm.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={contactForm.message}
                      onChange={handleInputChange}
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300"
                      placeholder="Tell me about your project or inquiry..."
                      required
                    ></textarea>
                  </div>
                  
                  <div className="mt-8">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
    </div>
  );
};

export default ContactForm;