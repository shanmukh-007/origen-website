import { useNavigate } from 'react-router-dom';

export default function Careers() {
  const navigate = useNavigate();

  const handleApplyNow = () => {
    navigate('/contact');
  };

  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-300">
              Build your career with Origen
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {['Senior Developer', 'UI/UX Designer', 'Data Scientist', 'Marketing Manager'].map((position, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:shadow-xl hover:shadow-cyan-400/20 hover:border-cyan-400/40 transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{position}</h3>
                <p className="text-gray-300 mb-4">Full-time • Remote</p>
                <button
                  onClick={handleApplyNow}
                  className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

