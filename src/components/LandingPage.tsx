import { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Instagram, ChevronDown } from 'lucide-react';

const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeWord, setActiveWord] = useState('');
  const [activeIcon, setActiveIcon] = useState(null);

  // Properly defined socialIcons array
  const socialIcons = [
    { icon: Github, color: '#FF5733', url: '#' },
    { icon: Linkedin, color: '#66FCF1', url: '#' },
    { icon: Twitter, color: '#FFD700', url: '#' },
    { icon: Instagram, color: '#7B68EE', url: '#' }
  ];

  // Defined letterDetails object
  const letterDetails = {
    A: {
      color: '#FF5733',
      word: 'AI Personalized',
      description: 'Tailored AI solutions that adapt to your unique needs'
    },
    X: {
      color: '#66FCF1',
      word: 'Own Your Data',
      description: 'Complete control and sovereignty over your information'
    },
    I: {
      color: '#FFD700',
      word: 'Intelligent',
      description: 'Advanced systems that learn and evolve with you'
    },
    V: {
      color: '#FF3366',
      word: 'Vertically Integrated',
      description: 'End-to-end solutions that seamlessly work together'
    },
    M: {
      color: '#7B68EE',
      word: 'Self Managed',
      description: 'Autonomous systems that optimize and maintain themselves'
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-[#FFFFFF]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&display=swap');

        @keyframes letterHover {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }

        @keyframes restingPulse {
          0% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.1),
                         0 0 40px rgba(255, 255, 255, 0.05);
          }
          50% {
            text-shadow: 0 0 30px rgba(255, 255, 255, 0.2),
                         0 0 50px rgba(255, 255, 255, 0.1),
                         0 0 70px rgba(255, 255, 255, 0.05);
          }
          100% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.1),
                         0 0 40px rgba(255, 255, 255, 0.05);
          }
        }

        .title-letter {
          display: inline-block;
          position: relative;
          animation: restingPulse 3s ease-in-out infinite;
          transition: color 0.8s ease, text-shadow 0.8s ease;
        }

        .title-letter:hover {
          animation: letterHover 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          text-shadow: none;
        }

        .word-reveal {
          opacity: 0;
          transform: scale(0.95) translateY(10px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          filter: blur(10px);
          font-family: 'IBM Plex Mono', monospace;
          background: radial-gradient(circle at center, rgba(0,0,0,0.8) 0%, transparent 100%);
        }

        .word-reveal.active {
          opacity: 1;
          transform: scale(1) translateY(0);
          filter: blur(0);
        }

        .console-title {
          font-family: 'IBM Plex Mono', monospace;
          font-weight: 600;
          letter-spacing: 0.1em;
        }

        .console-description {
          font-family: 'IBM Plex Mono', monospace;
          font-weight: 400;
          opacity: 0.8;
          letter-spacing: 0.05em;
        }

        .social-icon {
          animation: restingPulse 3s ease-in-out infinite;
          transition: all 0.8s ease;
          position: relative;
          color: #FFFFFF;
        }

        .social-icon:hover {
          animation: none;
          transform: translateY(-5px);
        }

        .social-icon::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: currentColor;
          opacity: 0;
          filter: blur(1rem);
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .social-icon:hover::after {
          opacity: 0.2;
        }
      `}</style>

      <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#D35400]/10"/>
        <div className="text-center z-10 p-4">
          <h1 className="font-['Xaviera'] text-7xl md:text-9xl mb-6 relative">
            <span className="absolute -inset-1 blur-sm opacity-50 text-[#D35400]">AXIVM</span>
            <div className="relative">
              {'AXIVM'.split('').map((letter, index) => (
                <span
                  key={index}
                  className="title-letter"
                  style={{
                    animationDelay: `${index * 0.5}s`,
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.animation = 'none';
                    e.target.style.color = letterDetails[letter].color;
                    e.target.style.textShadow = `
                      0 0 30px ${letterDetails[letter].color}90,
                      0 0 50px ${letterDetails[letter].color}70,
                      0 0 70px ${letterDetails[letter].color}50,
                      0 0 90px ${letterDetails[letter].color}30
                    `;
                    setActiveWord(letter);
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '';
                    e.target.style.textShadow = '';
                    e.target.style.animation = 'restingPulse 3s ease-in-out infinite';
                    e.target.style.animationDelay = `${index * 0.5}s`;
                    setActiveWord('');
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>
          </h1>
          <div className="h-32 relative mt-8">
            {Object.entries(letterDetails).map(([letter, details]) => (
              <div
                key={letter}
                className={`word-reveal absolute w-full transition-all duration-500 ${
                  activeWord === letter ? 'active' : 'opacity-0'
                }`}
              >
                <div className="word-text" style={{ color: details.color }}>
                  <div className="console-title text-2xl mb-3">{details.word}</div>
                  <div className="console-description text-sm">{details.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center space-x-8 z-50">
          {socialIcons.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <div
                key={index}
                className="social-icon"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  color: activeIcon === index ? social.color : '#FFFFFF'
                }}
                onMouseEnter={() => setActiveIcon(index)}
                onMouseLeave={() => setActiveIcon(null)}
              >
                <IconComponent 
                  size={28}
                  className="transition-transform duration-300"
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
