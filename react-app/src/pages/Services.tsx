export default function Services() {
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
            {[
              { title: 'Web Development', desc: 'Modern web applications with cutting-edge technologies' },
              { title: 'AI & Machine Learning', desc: 'Intelligent solutions powered by machine learning' },
              { title: 'Cloud Computing', desc: 'Scalable cloud infrastructure and services' },
              { title: 'Mobile Development', desc: 'Native and cross-platform mobile applications' },
              { title: 'Data Science', desc: 'Data-driven insights and analytics' },
              { title: 'Digital Marketing', desc: 'Strategic digital marketing campaigns' },
              { title: 'Cybersecurity', desc: 'Comprehensive security solutions' },
              { title: 'UI/UX Design', desc: 'Beautiful and intuitive user experiences' },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:shadow-xl hover:shadow-cyan-400/20 hover:border-cyan-400/40 transition-all hover:-translate-y-1"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.desc}</p>
                <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

