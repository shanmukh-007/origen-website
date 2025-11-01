export default function Resources() {
  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Learning <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Resources</span>
            </h1>
            <p className="text-xl text-gray-300">
              Explore our collection of learning materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Tutorials', 'Documentation', 'Video Courses', 'Webinars', 'E-books', 'Case Studies'].map((resource, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:shadow-xl hover:shadow-cyan-400/20 hover:border-cyan-400/40 transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{resource}</h3>
                <p className="text-gray-300">Comprehensive {resource.toLowerCase()} to help you learn and grow.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

