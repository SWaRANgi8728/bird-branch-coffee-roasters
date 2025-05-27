"use client";
import Image from 'next/image';
import { useState, useEffect } from "react";
import { Menu, X, User, ShoppingCart, Coffee, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin  } from "lucide-react";
import { FaCoffee } from 'react-icons/fa';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showProfileForm, setShowProfileForm] = useState(false);

  const toggleProfileForm = () => {
    setShowProfileForm(!showProfileForm);
  }

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    "Home",
    "About",
    "Coffee",
    "Brew Guide",
    "Contact",
  ];

  return (
    <>
      {/* Global CSS for smooth scroll */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <main>
        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full bg-white  z-50">
          <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
            {/* Logo */}
            
            <div className="flex items-center space-x-2 text-2xl md:text-2xl font-bold text-amber-900 tracking-tight">
                 <span className="text-amber-700" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                       Bird Branch
                </span>
                     <FaCoffee className="w-6 h-6 text-amber-600 " />
            </div>

            {/* Toggle button */}
            <button
              className="md:hidden text-black hover:text-gray-700 transition"
              onClick={toggleNavbar}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>

            {/* Nav Links & Icons */}
            <div
              className={`absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 px-6 py-4 md:py-0 md:px-0 text-lg font-medium text-black transition-all duration-300 ease-in-out ${
                isOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto"
              }`}
            >


              <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                {navItems.map((item) => {
                  const targetId = item.toLowerCase().replace(/ /g, "-");
                  return (
                    <li key={item}>
                      <a
                        href={`#${targetId}`}
                        className="hover:text-gray-700 transition"
                        onClick={(e) => {
                          e.preventDefault();
                          const el = document.getElementById(targetId);
                          if (el) {
                            el.scrollIntoView({ behavior: "smooth" });
                          }
                          setIsOpen(false);
                        }}
                      >
                        {item}
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Profile and Cart Icons */}
              <div className="flex items-center gap-6 pt-2 md:pt-0">
                <a
                  href="#profile"
                  className="hover:text-gray-700 transition"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("profile");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                    setIsOpen(false);
                    toggleProfileForm();
                  }}
                >
                  <User className="h-6 w-6" />
                </a>
                <a
                  href="#cart"
                  className="hover:text-gray-700 transition"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("cart");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                    setIsOpen(false);
                    toggleCart(); 
                  }}
                >
                  <ShoppingCart className="h-6 w-6" />
                </a>
              </div>
            </div>
          </nav>
        </header>

       
      {/* Hero Section */}
<section
  id="home"
  className="min-h-screen w-full bg-cover bg-center flex items-center justify-start text-left text-white px-12 relative scroll-mt-20"
  style={{
    backgroundImage: `url('/img1.jpg')`,
    backgroundAttachment: 'fixed',
  }}
>
  {/* Text content */}
  <div className="relative z-10 max-w-2xl">
    <h1 className="text-4xl md:text-6xl  font-bold mb-4">
      Crafting the Perfect Roast
    </h1>
    <p className="text-lg md:text-xl font-bold mb-6" style={{letterSpacing:"1px"}}>
    Bird Branch Coffee delivers beans for experience.
    </p>
    <a
      href="#shop"
      className="inline-block bg-amber-700 hover:bg-amber-800 text-white py-3 px-6 rounded-full transition"
      onClick={(e) => {
        e.preventDefault();
        const el = document.getElementById("shop");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}
    >
      Shop Now
    </a>
  </div>
</section>


{/* About Us Section */}
<section
  id="about"
  className="max-w-8xl mx-auto px-6 py-20 bg-white rounded-lg shadow-lg scroll-mt-20"
>
  {/* Centered Heading */}
  <div className="text-center mb-9">
    <h2
      className={`text-4xl md:text-5xl font-bold text-amber-900 transition-opacity transition-transform duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      About Us
    </h2>
  </div>

  <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
    {/* Image */}
    <div className="group md:w-1/2 w-full flex justify-center">
      <Image
        src="/img.jpeg"
        width={100}
        height={100}
        alt="Coffee Roasting Process"
        className="w-full max-w-md md:max-w-lg h-96 rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105 group-hover:shadow-xl"
      />
    </div>

    {/* Text */}
    <div
      className={`md:w-1/2 w-full text-gray-900 transition-opacity transition-transform duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <Coffee className="text-amber-700" size={28} />
        <h3 className="text-2xl font-bold text-amber-900">Our Coffee Roasting</h3>
      </div>

      <p className="text-lg leading-relaxed mb-4">
        At Bird Branch Coffee, we believe in crafting the perfect roast by carefully selecting the finest beans and roasting them to perfection to bring out the rich, complex flavors.
      </p>

      {isExpanded && (
        <>
          <p className="text-lg leading-relaxed mb-4">
            Our expert roasters combine traditional techniques with modern technology to ensure every batch delivers an exceptional cup of coffee. From farm to cup, we maintain sustainability and quality in every step of our process.
          </p>

          <ul className="space-y-2 mb-6">
            {[
              "Ethically-sourced premium beans",
              "Traditional & modern roasting methods",
              "Rich, complex flavor profiles",
              "Sustainability in every step"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-amber-800 font-semibold">
                <span className="text-amber-700">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 px-4 py-2 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition"
        aria-expanded={isExpanded}
        aria-controls="about-text"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  </div>
</section>

{/* Coffee Section */}
<section
  id="coffee"
  className="max-w-8xl mx-auto px-6 py-8 bg-white rounded shadow-lg scroll-mt-20"
>
  <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4 text-center" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
  Beyond the Beans
  </h2>
  <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center mb-6 ">
  Discover the signature taste that truly sets us apart.
</p>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {/* Coffee Card 1 */}
    <div className="group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="w-full h-50 overflow-hidden">
        <Image
          src="/img2.png"
          width={100}
          height={100}
          alt="Espresso"
          className="w-full h-full  transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-amber-900 mb-2">Espresso</h3>
        <p className="text-sm text-gray-700 mb-3">
        Rich, bold flavor with a smooth finish, ideal for espresso shots or milk-based drinks.
        </p>
        <button className="bg-amber-700 text-white text-sm py-1.5 px-3 py-2 rounded-full hover:bg-amber-800 transition">
          Learn More
        </button>
      </div>
    </div>

    {/* Coffee Card 2 */}
    <div className="group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="w-full h-50 overflow-hidden">
        <Image
          src="/img3.jpeg"
          width={100}
          height={100}
          alt="redsatrt Roast"
          className="w-full h-full  transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-amber-900 mb-2">Redstart Roast</h3>
        <p className="text-sm text-gray-700 mb-3">
           Deep and complex, with layers of dark chocolate and a hint of caramel.
        </p>
        <button className="bg-amber-700 text-white text-sm py-1.5 px-3 py-2 rounded-full hover:bg-amber-800 transition">
          Learn More
        </button>
      </div>
    </div>

    {/* Coffee Card 3 */}
    <div className="group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="w-full h-50 overflow-hidden">
        <Image
          src="/img4.jpg"
          width={100}
          height={100}
          alt="Colombian Gold"
          className="w-full h-full  transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-amber-900 mb-2">Colombian Gold</h3>
        <p className="text-sm text-gray-700 mb-3">
          Balanced body with caramel sweetness and a hint of nuttiness perfect for every day.
        </p>
        <button className="bg-amber-700 text-white text-sm py-1.5 px-3 py-2 rounded-full hover:bg-amber-800 transition">
          Learn More
        </button>
      </div>
    </div>

    {/* Coffee Card 4 */}
    <div className="group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="w-full h-50 overflow-hidden">
        <Image
          src="/img5.png"
          width={100}
          height={100}
          alt="Kenyan Peaberry"
          className="w-full h-full  transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-amber-900 mb-2">Kenyan Peaberry</h3>
        <p className="text-sm text-gray-700 mb-3">
          Sweet, fruity, and bright a unique treat for your taste buds.
        </p>
        <button className="bg-amber-700 text-white text-sm py-1.5 px-3 py-2 rounded-full hover:bg-amber-800 transition">
          Learn More
        </button>
      </div>
    </div>
  </div>
</section>

{/* Brew Guide Section */}
<section
  id="brew-guide"
  className="max-w-8xl mx-auto px-5 py-10 bg-white rounded-lg shadow-lg scroll-mt-20"
>
  {/* Centered Heading */}
  <div className="text-center mb-10">
    <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4" style={{ fontFamily: '"Times New Roman", Times, serif' }}>Brew Guide</h2>
    
    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
         Discover the art of brewing coffee with Brewlia&apos;s expert tips and simple guides. Let&apos;s elevate your coffee journey together, one cup at a time.
    </p>
  </div>

  {/* Cards Grid */}
  <div className="flex flex-wrap justify-center gap-8 mb-6">
    {/* Card 1 */}
    <div className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-148 h-100">
      <Image
        src="/img9.jpg"
        width={148}
        height={100}
        alt="French Press"
        className="w-full h-full  transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
        <h3 className="text-white text-2xl font-bold">FRENCHPRESS</h3>
      </div>
    </div>

    {/* Card 2 */}
    <div className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-148 h-100">
      <Image
        src="/img6.png"
        width={148}
        height={100}
        alt="cold brew"
        className="w-full h-full  transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
        <h3 className="text-white text-2xl font-bold">COLD BREW</h3>
      </div>
    </div>
  </div>

  {/* Second Row with One Card */}
  <div className="flex flex-wrap justify-center gap-8 mb-6">
    <div className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-148 h-100">
      <Image
        src="/img7.jpg"
        width={148}
        height={100}
        alt="aeropress"
        className="w-full h-full  transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
        <h3 className="text-white text-2xl font-bold">AEROPRESS</h3>
      </div>
    </div>

    {/* Card 2 */}
    <div className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-148 h-100">
      <Image
        src="/img8.jpg"
        width={148}
        height={200}
        alt="Pour Over"
        className="w-full h-full  transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
        <h3 className="text-white text-2xl font-bold">POUR OVER</h3>
      </div>
    </div>
  </div>
</section>

{/* Contact Section */}
<section
  id="contact"
  className="max-w-8xl mx-auto px-6 py-20 bg-gray-100 rounded-lg shadow-lg scroll-mt-20"
>
  <h2 className="text-4xl font-bold text-amber-900 mb-10 text-center" style={{ fontFamily: '"Times New Roman", Times, serif' }}>Contact US</h2>

  <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">
    {/* Left column - Contact Info */}
    <div className="flex flex-col gap-8 md:w-1/2 text-gray-800">
      <div className="flex items-center gap-4">
        <Mail className="text-amber-700" size={28} />
        <div>
          
          <p>info@birdandbranch.com</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Phone className="text-amber-700" size={28} />
        <div>
          
          <p>+1 9172658444</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <MapPin className="text-amber-700" size={28} />
        <div>
          
          <p>359 W 45th St, New York, NY 10036, United States</p>
        </div>
      </div>
    </div>

    {/* Right column - Map */}
    <div className="md:w-1/2 h-[350px] rounded-lg overflow-hidden shadow-md">

    <iframe
        title="Bird Branch Coffee Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.995298792059!2d-73.98841908459488!3d40.75929137932625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f6cce7c3%3A0x3d8324aab3b12b98!2s359%20W%2045th%20St%2C%20New%20York%2C%20NY%2010036%2C%20USA!5e0!3m2!1sen!2sus!4v1716857569461!5m2!1sen!2sus"
        width="100%"
        height="100%"
        className="border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

    </div>
  </div>
</section>

{/*cart section*/}
{isCartOpen && (
          <section id="cart" className="fixed inset-0 bg-black/80 flex flex-col justify-center items-center text-center text-white z-50 scroll-mt-20">
            
            <ShoppingCart className="w-24 h-24 mb-4 text-white" />
            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-gray-300">Start exploring our coffee collection.</p>

            {/* Close button */}
            <button
              onClick={toggleCart}
              className="mt-6 bg-amber-700 text-white px-4 py-2 rounded-md hover:bg-amber-500"
            >
              Close
            </button>
          </section>
        )}

{/* Profile Form */}
{showProfileForm && (
        <section
          id="profile"
          className="fixed inset-0 bg-black/80  flex items-center justify-center z-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center text-amber-700">Login</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-amber-600 focus:border-amber-600"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-amber-600 focus:border-amber-600"
                  placeholder="+1 234 567 890"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-700 text-white py-2 px-4 rounded-md hover:bg-amber-800 transition"
              >
                Login
              </button>
              <button
                type="button"
                onClick={toggleProfileForm}
                className="w-full mt-2 text-amber-700 border border-amber-700 py-2 px-4 rounded-md hover:bg-amber-50 transition"
              >
                Close
              </button>
            </form>
          </div>
        </section>
      )}

<footer className="bg-amber-950 text-white py-10">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap md:flex-nowrap justify-between">
      
      {/* Column 1: Logo + Social Icons */}
      <div className="w-full md:w-1/4 mb-8 md:mb-0 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
          <h2 className="text-2xl font-bold" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
            Bird Branch
          </h2>
          <FaCoffee className="w-6 h-6 text-gray-400" />
        </div>
        <p className="text-sm text-gray-400 mb-6">Crafted with passion, roasted to perfection.</p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="https://www.facebook.com" target="_blank" aria-label="Facebook" className="bg-gray-300 text-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-amber-800 transition">
            <Facebook size={20} />
          </a>
          <a href="https://www.twitter.com" target="_blank" aria-label="Twitter" className="bg-gray-300 text-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-amber-800 transition">
            <Twitter size={20} />
          </a>
          <a href="https://www.instagram.com" target="_blank" aria-label="Instagram" className="bg-gray-300 text-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-amber-800 transition">
            <Instagram size={20} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" aria-label="Linkedin" className="bg-gray-300 text-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-amber-800 transition">
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      {/* Other Columns (unchanged) */}
      <div className="w-full md:w-1/4 mb-8 md:mb-0 text-center md:text-left">
        <h3 className="font-semibold mb-4">Our Coffee</h3>
        <ul>
          <li className="mb-2"><a href="#" className="hover:text-amber-600">Single Origin</a></li>
          <li className="mb-2"><a href="#" className="hover:text-amber-600">Blends</a></li>
          <li className="mb-2"><a href="#" className="hover:text-amber-600">Brewing Guide</a></li>
        </ul>
      </div>

      <div className="w-full md:w-1/4 mb-8 md:mb-0 text-center md:text-left">
        <h3 className="font-semibold mb-4">our Brew Guide</h3>
        <ul>
          <li className="mb-2"><a href="#" className="hover:text-amber-600">Brewing Guide</a></li>
          <li className="mb-2"><a href="#" className="hover:text-amber-600">Sustainability</a></li>
          <li className="mb-2"><a href="#" className="hover:text-amber-600">Our Process</a></li>
        </ul>
      </div>

      <div className="w-full md:w-1/4 text-center md:text-left">
        <h3 className="font-semibold mb-4">Support</h3>
        <ul>
          <li className="mb-2"><a href="#" className="hover:text-amber-600">Contact Us</a></li>
          <li className="mb-2"><a href="#" className="hover:text-amber-600">FAQs</a></li>
          <li className="mb-2"><a href="#" className="hover:text-amber-600">Shipping & Returns</a></li>
        </ul>
      </div>
    </div>

    <hr className="text-gray-500 w-full mt-8" />

    <div className="text-center text-sm text-gray-400 mt-8">
      &copy; 2025 Bird Branch Coffee. All rights reserved.
    </div>
  </div>
</footer>

    
</main>
 </>
  );
}
















