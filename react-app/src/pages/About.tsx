export default function About() {
  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Origen</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Empowering the next generation of tech professionals
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 text-lg">
                At Origen, we're dedicated to bridging the gap between education and industry. We provide cutting-edge training programs that equip students and professionals with the skills they need to thrive in today's rapidly evolving tech landscape.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-300 text-lg">
                To become the leading platform for technology education and innovation, empowering individuals and organizations to achieve their full potential through world-class training and solutions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
              <ul className="text-gray-300 text-lg space-y-3">
                <li>✨ Excellence in education and training</li>
                <li>🚀 Innovation and continuous improvement</li>
                <li>🤝 Collaboration and community building</li>
                <li>💡 Practical, hands-on learning experiences</li>
                <li>🎯 Student success and career growth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

