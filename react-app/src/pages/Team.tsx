export default function Team() {
  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-300">
              Meet the people behind Origen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'John Doe', role: 'CEO & Founder' },
              { name: 'Jane Smith', role: 'CTO' },
              { name: 'Mike Johnson', role: 'Head of Education' },
              { name: 'Sarah Williams', role: 'Lead Developer' },
              { name: 'David Brown', role: 'UX Designer' },
              { name: 'Emily Davis', role: 'Marketing Director' },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 text-center hover:shadow-xl hover:shadow-cyan-400/20 hover:border-cyan-400/40 transition-all"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500"></div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

