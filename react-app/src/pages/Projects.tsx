export default function Projects() {
  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-gray-300">
              Showcasing our work and student achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'E-Commerce Platform', category: 'Web Development' },
              { title: 'AI Chatbot', category: 'Machine Learning' },
              { title: 'Mobile Banking App', category: 'Mobile Development' },
              { title: 'Data Analytics Dashboard', category: 'Data Science' },
              { title: 'Social Media Campaign', category: 'Digital Marketing' },
              { title: 'Security Audit Tool', category: 'Cybersecurity' },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:shadow-xl hover:shadow-cyan-400/20 hover:border-cyan-400/40 transition-all hover:-translate-y-1"
              >
                <div className="h-40 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-lg mb-4"></div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.category}</p>
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all text-sm">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

