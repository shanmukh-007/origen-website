import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

interface Service {
  title: string;
  desc: string;
  details: string[];
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      title: 'Web Development',
      desc: 'Modern web applications with cutting-edge technologies',
      details: [
        'Responsive and mobile-first design',
        'Progressive Web Applications (PWA)',
        'E-commerce solutions',
        'Content Management Systems',
        'API development and integration',
        'Performance optimization',
      ],
    },
    {
      title: 'AI & Machine Learning',
      desc: 'Intelligent solutions powered by machine learning',
      details: [
        'Predictive analytics and forecasting',
        'Natural Language Processing (NLP)',
        'Computer vision and image recognition',
        'Recommendation systems',
        'Chatbots and virtual assistants',
        'Custom ML model development',
      ],
    },
    {
      title: 'Cloud Computing',
      desc: 'Scalable cloud infrastructure and services',
      details: [
        'Cloud migration and deployment',
        'AWS, Azure, and Google Cloud solutions',
        'Serverless architecture',
        'Container orchestration with Kubernetes',
        'Cloud security and compliance',
        'Cost optimization strategies',
      ],
    },
    {
      title: 'Mobile Development',
      desc: 'Native and cross-platform mobile applications',
      details: [
        'iOS and Android native apps',
        'React Native and Flutter development',
        'Mobile UI/UX design',
        'App store optimization',
        'Push notifications and analytics',
        'Offline-first architecture',
      ],
    },
    {
      title: 'Data Science',
      desc: 'Data-driven insights and analytics',
      details: [
        'Big data processing and analysis',
        'Business intelligence dashboards',
        'Statistical modeling',
        'Data visualization',
        'ETL pipeline development',
        'Real-time analytics',
      ],
    },
    {
      title: 'Digital Marketing',
      desc: 'Strategic digital marketing campaigns',
      details: [
        'SEO and content marketing',
        'Social media management',
        'PPC advertising campaigns',
        'Email marketing automation',
        'Analytics and reporting',
        'Brand strategy development',
      ],
    },
    {
      title: 'Cybersecurity',
      desc: 'Comprehensive security solutions',
      details: [
        'Security audits and assessments',
        'Penetration testing',
        'Network security implementation',
        'Data encryption and protection',
        'Compliance and risk management',
        'Incident response planning',
      ],
    },
    {
      title: 'UI/UX Design',
      desc: 'Beautiful and intuitive user experiences',
      details: [
        'User research and personas',
        'Wireframing and prototyping',
        'Visual design and branding',
        'Usability testing',
        'Design systems and style guides',
        'Accessibility compliance',
      ],
    },
  ];

  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:shadow-xl hover:shadow-cyan-400/20 hover:border-cyan-400/40 transition-all hover:-translate-y-1"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.desc}</p>
                <button
                  onClick={() => setSelectedService(service)}
                  className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-gradient-to-br from-blue-900/90 to-purple-900/90 backdrop-blur-md border border-cyan-400/30 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes size={24} />
              </button>
            </div>
            <p className="text-gray-300 mb-6">{selectedService.desc}</p>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Key Features:</h3>
            <ul className="space-y-3">
              {selectedService.details.map((detail, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span className="text-gray-300">{detail}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setSelectedService(null)}
              className="mt-8 w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

