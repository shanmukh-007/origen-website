import { Link } from 'react-router-dom';
import { FaGraduationCap, FaBook, FaUniversity, FaProjectDiagram } from 'react-icons/fa';
import StatsCounter from '../components/StatsCounter';
import SolarSystem from '../components/SolarSystem';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Empowering Education &{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your future with cutting-edge training, innovative solutions, and industry-leading expertise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1 transition-all"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-transparent text-white rounded-full font-semibold border-2 border-cyan-400/50 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/30 transform hover:-translate-y-1 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-blue-950/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-300">
              Driving excellence through education and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatsCounter
              end={10000}
              suffix="+"
              label="Students Trained"
              icon={<FaGraduationCap className="w-12 h-12" />}
            />
            <StatsCounter
              end={500}
              suffix="+"
              label="Courses Offered"
              icon={<FaBook className="w-12 h-12" />}
            />
            <StatsCounter
              end={100}
              suffix="+"
              label="College Partners"
              icon={<FaUniversity className="w-12 h-12" />}
            />
            <StatsCounter
              end={2000}
              suffix="+"
              label="Projects Completed"
              icon={<FaProjectDiagram className="w-12 h-12" />}
            />
          </div>
        </div>
      </section>

      {/* Solar System Services Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services Universe
            </h2>
            <p className="text-xl text-gray-300">
              Explore our comprehensive range of services orbiting around your success
            </p>
          </div>

          <SolarSystem />

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1 transition-all"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Origen?
            </h2>
            <p className="text-xl text-gray-300">
              We're committed to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl border border-cyan-400/20 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-400/20 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4">Expert Instructors</h3>
              <p className="text-gray-300">
                Learn from industry professionals with years of real-world experience
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl border border-cyan-400/20 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-400/20 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4">Hands-on Projects</h3>
              <p className="text-gray-300">
                Build real-world projects that showcase your skills to potential employers
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl border border-cyan-400/20 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-400/20 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4">Career Support</h3>
              <p className="text-gray-300">
                Get personalized career guidance and job placement assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-blue-950/30 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of students who have transformed their careers with Origen
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1 transition-all"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}

