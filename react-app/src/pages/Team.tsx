interface TeamMember {
  name: string;
  designation: string;
  image: string;
}

export default function Team() {
  const teamMembers: TeamMember[] = [
    {
      name: 'John Doe',
      designation: 'CEO & Founder',
      image: 'https://ui-avatars.com/api/?name=John+Doe&size=200&background=06b6d4&color=fff&bold=true',
    },
    {
      name: 'Jane Smith',
      designation: 'CTO',
      image: 'https://ui-avatars.com/api/?name=Jane+Smith&size=200&background=8b5cf6&color=fff&bold=true',
    },
    {
      name: 'Mike Johnson',
      designation: 'Head of Education',
      image: 'https://ui-avatars.com/api/?name=Mike+Johnson&size=200&background=06b6d4&color=fff&bold=true',
    },
    {
      name: 'Sarah Williams',
      designation: 'Lead Developer',
      image: 'https://ui-avatars.com/api/?name=Sarah+Williams&size=200&background=8b5cf6&color=fff&bold=true',
    },
    {
      name: 'David Brown',
      designation: 'UX Designer',
      image: 'https://ui-avatars.com/api/?name=David+Brown&size=200&background=06b6d4&color=fff&bold=true',
    },
    {
      name: 'Emily Davis',
      designation: 'Marketing Director',
      image: 'https://ui-avatars.com/api/?name=Emily+Davis&size=200&background=8b5cf6&color=fff&bold=true',
    },
  ];

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
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 text-center hover:shadow-xl hover:shadow-cyan-400/20 hover:border-cyan-400/40 transition-all hover:-translate-y-2"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-4 border-cyan-400/30 shadow-lg shadow-cyan-400/20"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-medium">{member.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

