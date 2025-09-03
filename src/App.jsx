
import Typewriter from './components/Typewriter';
import PortfolioSlider from './components/PortfolioSlider';
import ContactSection from './components/ContactSection';
import FloatingContactButton from './components/FloatingContactButton';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start relative">
      {/* Hero Section */}
      <section className="w-full py-16 px-4 text-center bg-gradient-to-br from-blue-50 to-purple-100">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900">
          Let's create
          <span className="block mt-2 text-primary">
            <Typewriter
              phrases={[
                'Faceless Videos',
                'Viral Insta Reels',
                'Ads',
                'Event Highlights',
                'YouTube Shorts',
                'Product Promos',
              ]}
            />
          </span>
        </h1>
        <a href="#contact" className="inline-block mt-8 px-8 py-4 bg-primary text-white rounded-full font-bold text-xl shadow-lg hover:bg-primary-dark transition">Get Started</a>
      </section>

      {/* Portfolio Section */}
      <section className="w-full max-w-4xl mx-auto py-12 px-4" id="portfolio">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Portfolio</h2>
        <PortfolioSlider />
      </section>

      {/* Contact Section */}
      <div id="contact" className="w-full max-w-3xl mx-auto">
        <ContactSection />
      </div>

      {/* Floating Contact Button */}
      <FloatingContactButton />
    </div>
  );
}

export default App;
