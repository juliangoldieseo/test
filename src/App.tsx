import React, { useState } from 'react';
import { Calculator, ArrowRight, X, DollarSign, Star, Check, Shield, Trophy, Target, Zap } from 'lucide-react';

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [keywords, setKeywords] = useState('');
  const [pages, setPages] = useState('');
  const [competition, setCompetition] = useState('medium');
  const [totalCost, setTotalCost] = useState(0);

  const calculateCost = () => {
    const baseRate = 1000;
    const keywordMultiplier = Math.max(1, parseInt(keywords) / 10);
    const pageMultiplier = Math.max(1, parseInt(pages) / 5);
    const competitionRates = { low: 1, medium: 1.5, high: 2 };
    
    const cost = baseRate * keywordMultiplier * pageMultiplier * competitionRates[competition];
    setTotalCost(Math.round(cost));
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "E-commerce Director",
      company: "StyleHub",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      quote: "The SEO calculator helped us plan our budget effectively. We've seen a 300% increase in organic traffic since working with Julian."
    },
    {
      name: "Michael Chen",
      role: "Marketing Manager",
      company: "TechFlow",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      quote: "Julian's SEO expertise transformed our online presence. Our conversion rate has doubled in just 6 months."
    },
    {
      name: "Emma Davis",
      role: "CEO",
      company: "GrowthWise",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      quote: "The most valuable investment we've made. Our ROI has been phenomenal since implementing Julian's SEO strategies."
    }
  ];

  const comparisonPlans = [
    {
      name: "Basic SEO",
      price: "$1,000/mo",
      features: [
        "5 Target Keywords",
        "Monthly Reporting",
        "Basic On-Page SEO",
        "Content Optimization",
        "Technical SEO Audit"
      ]
    },
    {
      name: "Professional SEO",
      price: "$2,500/mo",
      features: [
        "15 Target Keywords",
        "Weekly Reporting",
        "Advanced On-Page SEO",
        "Content Strategy",
        "Link Building",
        "Local SEO",
        "Competitor Analysis"
      ]
    },
    {
      name: "Enterprise SEO",
      price: "Custom",
      features: [
        "Unlimited Keywords",
        "Daily Reporting",
        "Full SEO Suite",
        "Custom Strategy",
        "Priority Support",
        "International SEO",
        "Advanced Analytics"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">Want to Skyrocket Your SEO?</h2>
            <p className="mb-6">Book your FREE SEO Strategy Session with me, Julian Goldie, and let's create a custom plan for your business.</p>
            <a
              href="https://go.juliangoldie.com/strategy-session"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
            >
              Book Free Strategy Session <ArrowRight size={20} />
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <header className="max-w-5xl mx-auto px-4 py-12">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">SEO Cost Calculator</h1>
            <p className="text-xl mb-8 max-w-2xl">Discover your perfect SEO investment with our advanced calculator. Get instant, personalized estimates based on your specific needs.</p>
            <a
              href="https://go.juliangoldie.com/strategy-session"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors font-semibold"
            >
              Free Strategy Session <ArrowRight size={20} />
            </a>
          </div>
        </header>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* Calculator Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Calculate Your SEO Investment</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Target Keywords
                  </label>
                  <input
                    type="number"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., 10"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Pages to Optimize
                  </label>
                  <input
                    type="number"
                    value={pages}
                    onChange={(e) => setPages(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., 5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Competition Level
                  </label>
                  <select
                    value={competition}
                    onChange={(e) => setCompetition(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="low">Low Competition</option>
                    <option value="medium">Medium Competition</option>
                    <option value="high">High Competition</option>
                  </select>
                </div>
                <button
                  onClick={calculateCost}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
                >
                  <Calculator size={20} />
                  Calculate SEO Cost
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              {totalCost > 0 ? (
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4 flex items-center justify-center gap-2">
                    <DollarSign size={24} className="text-green-500" />
                    Estimated Monthly SEO Investment
                  </h3>
                  <p className="text-5xl font-bold text-blue-600 mb-4">${totalCost}</p>
                  <p className="text-gray-600 mb-6">Based on your specific requirements</p>
                  <a
                    href="https://go.juliangoldie.com/strategy-session"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Discuss Your Custom Plan <ArrowRight size={20} />
                  </a>
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  <Calculator size={64} className="mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Enter your details to calculate your estimated SEO investment</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Invest in SEO?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Targeted Traffic</h3>
              <p className="text-gray-600">Attract visitors who are actively searching for your products or services.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Long-Term Results</h3>
              <p className="text-gray-600">Build sustainable organic traffic that continues to grow over time.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Trophy className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Competitive Edge</h3>
              <p className="text-gray-600">Stay ahead of your competitors in search results and market presence.</p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.quote}</p>
                <div className="flex text-yellow-400 mt-4">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Comparison */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">SEO Investment Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {comparisonPlans.map((plan, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                <p className="text-3xl font-bold text-blue-600 mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://go.juliangoldie.com/strategy-session"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">How accurate is the SEO Cost Calculator?</h3>
              <p className="text-gray-600">The calculator provides estimates based on industry standards and my experience with hundreds of successful SEO campaigns. Your actual investment may vary based on specific requirements and goals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">How long until I see results?</h3>
              <p className="text-gray-600">While initial improvements can be seen within 3-6 months, SEO is a long-term investment. Sustainable results typically become evident after 6-12 months of consistent optimization.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">What's included in the SEO service?</h3>
              <p className="text-gray-600">Services include keyword research, on-page optimization, technical SEO, content strategy, link building, and regular performance reporting. Each plan is customized to your specific needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Do you guarantee rankings?</h3>
              <p className="text-gray-600">While we can't guarantee specific rankings due to search engine algorithms, we have a proven track record of improving search visibility and organic traffic for our clients.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white p-12 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your SEO?</h2>
          <p className="text-xl mb-8">Book your free strategy session now and let's create a custom SEO plan for your business.</p>
          <a
            href="https://go.juliangoldie.com/strategy-session"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Book Your Free Strategy Session <Zap size={20} />
          </a>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Julian Goldie</h3>
              <p className="text-gray-400">SEO expert helping businesses achieve sustainable growth through strategic search engine optimization.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">Services</a></li>
                <li><a href="#" className="hover:text-white">Case Studies</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400">Get in touch for a personalized SEO strategy tailored to your business needs.</p>
              <a
                href="https://go.juliangoldie.com/strategy-session"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-400 hover:text-blue-300"
              >
                Book a Strategy Session
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Julian Goldie. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;