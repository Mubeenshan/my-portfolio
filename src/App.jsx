import React from "react";

const whatsappLink = import.meta.env.VITE_WHATSAPP_LINK;
const facebookLink = import.meta.env.VITE_FACEBOOK_LINK;
const linkedinLink = import.meta.env.VITE_LINKEDIN_LINK;
const email = import.meta.env.VITE_EMAIL_LINK
const youtube = import.meta.env.Vite_YOUTUBE_LINK
import { Typewriter } from 'react-simple-typewriter';
const App = () => {
  return (
    <div className="bg-[#131212] text-white font-[Poppins] scroll-smooth">
      {/* Header */}
      <header className="fixed w-full top-0 left-0 z-50 flex justify-between items-center px-10 py-5 bg-black/90 shadow-lg backdrop-blur-md scroll-smooth">
        <a
          href="#home"
          className="text-3xl font-extrabold text-white hover:scale-105 transition-transform duration-300"
        >
          Mubeen <span className="text-[#00ffee] animate-pulse drop-shadow-lg">Shan</span>
        </a>
        <nav className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="text-lg text-white hover:text-[#00ffee] border-b-2 border-transparent hover:border-[#00ffee] transition-all duration-300"
          >
            Home
          </a>
          <a
            href="#Education"
            className="text-lg text-white hover:text-[#00ffee] border-b-2 border-transparent hover:border-[#00ffee] transition-all duration-300"
          >
            Education
          </a>
          <a
            href="#Contact"
            className="text-lg text-white hover:text-[#00ffee] border-b-2 border-transparent hover:border-[#00ffee] transition-all duration-300"
          >
            Contact Us
          </a>
        </nav>
      </header>

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 pt-32 pb-16 gap-12"
      >
        <div className="flex-1 flex flex-col gap-6 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold">
            Hi, It's <span className="text-[#00ffee] animate-glow">Mubeen</span>
          </h1>
         <h3 className="text-3xl font-semibold text-[#00ffee] animate-fade-in-up">
  I'm a{' '}
  <span className="text-[#00ffee] animate-fade-in-up animate-glow">
    <Typewriter
      words={['Web Developer', 'React Developer', 'Frontend Engineer', 'UI/UX Designer']}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </span>
</h3>
          

          <p className="text-lg max-w-xl leading-relaxed">
            Welcome to my portfolio! I’m Mubeen Shan, a passionate web developer
            with a knack for creating beautiful and functional websites.
          </p>
          <p className="text-base max-w-xl">
            I specialize in creating user-friendly websites that combine
            functionality with stunning design.
          </p>

          <div className="flex gap-4">
            <a href={linkedinLink} className="btn-primary hover:animate-glow bg-[#00ffee] text-black">
              Hire Me
            </a>
            <a href={whatsappLink} className="btn-primary border border-[#00ffee] bg-transparent text-[#fff] ">
              Contact
            </a>
          </div>

          <div className="flex gap-3 mt-4">
  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
    <img src="Whatsapp-icon.jpeg" alt="WhatsApp" className="w-10 h-10 rounded-full shadow-md hover:scale-110 transition-transform duration-300" />
  </a>
  <a href={facebookLink} target="_blank" rel="noopener noreferrer">
    <img src="facebook-icon.png" alt="Facebook" className="w-10 h-10 rounded-full shadow-md hover:scale-110 transition-transform duration-300" />
  </a>
  <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
    <img src="LinkedIn_icon.svg.png" alt="LinkedIn" className="w-10 h-10 rounded-full shadow-md hover:scale-110 transition-transform duration-300 " />
  </a>
  <a href={email} target="_blank" rel="noopener noreferrer">
    <img src="chrome-icon.jpeg" alt="LinkedIn" className="w-10 h-10 rounded-full shadow-md hover:scale-110 transition-transform duration-300" />
  </a>
  <a href={youtube} target="_blank" rel="noopener noreferrer">
    <img src="youtube-icon.png" alt="LinkedIn" className="w-10 h-10 rounded-full shadow-md hover:scale-115 transition-transform duration-300 hover:animate-glow " />
  </a>
</div>

        </div>

        <div className="flex-1 flex justify-center min-w-16">
          <img
            src="mubin.jpg"
            alt="Mubeen"
            className="w-80 h-80 object-cover rounded-full shadow-[0_0_25px_#00ffee] hover:scale-110 transition-transform duration-500 hover:animate-glow"
            style={{ boxShadow: '0 0 25px #00ffee' }}
          />
        </div>
      </section>

      {/* Education Section */}
      <section id="Education" className="bg-[#1a1818] py-20 px-10">
        <h2 className="text-5xl text-center text-[#00ffee] mb-12">Education</h2>
        <div className="flex flex-col gap-10 max-w-3xl mx-auto">
          {[{
            year: "2022",
            title: "High School",
            desc: "Graduated with honors and served as the president of the student council."
          }, {
            year: "2024",
            title: "F.Sc (Pre-Medical)",
            desc: "Participated in science fairs and earned recognition for my project on renewable energy sources."
          }, {
            year: "2025",
            title: "Software Engineering",
            desc: "Developed a mobile app as part of my final year project, which won the 'Best Project Award'."
          }].map((item, idx) => (
            <div key={idx} className="relative pl-6 border-l-4 border-[#00ffee] bg-[#131212] rounded-lg py-6 px-4 hover:translate-x-2 transition-transform duration-300">
              <div className="text-[#00ffee] font-semibold text-lg mb-2">{item.year}</div>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="Contact" className="py-20 px-10 text-center bg-[#131212]">
        <h2 className="text-4xl text-[#00ffee] mb-10">Contact Me</h2>
        <form
          action="https://formspree.io/f/yourID"
          method="POST"
          className="max-w-xl mx-auto flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-4 rounded-lg bg-[#1a1818] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ffee]"
          />
          <input
            type="email"
            name="_replyto"
            placeholder="Your Email"
            required
            className="p-4 rounded-lg bg-[#1a1818] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ffee]"
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="p-4 rounded-lg bg-[#1a1818] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ffee]"
          ></textarea>
          <button
            type="submit"
            className="btn-primary self-center"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default App;


// Add .btn-primary class in global styles or via @apply in Tailwind CSS file:
// .btn-primary {@apply px-6 py-3 rounded-full bg-[#00ffee] text-black font-bold hover:bg-transparent hover:text-[#00ffee] border border-[#00ffee] transition-all duration-300;}
