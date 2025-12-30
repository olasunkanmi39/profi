import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import ContactForm from "../components/Contact/ContactForm";
import ContactInfo from "../components/Contact/ContactInfo";
import Footer from "../components/Footer";

const Home = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />

      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <ContactForm
              contactForm={contactForm}
              setContactForm={setContactForm}
            />
          </div>
          <div className="lg:w-1/3">
            <ContactInfo />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;