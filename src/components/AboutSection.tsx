import React, { useState, useEffect } from 'react';
import { Terminal, User, MapPin, Mail, Calendar, Code, Server } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const [currentCommand, setCurrentCommand] = useState('');
  const [showOutput, setShowOutput] = useState(false);
  const [outputLines, setOutputLines] = useState<string[]>([]);

  const commands = [
    'whoami',
    'cat /etc/profile',
    'ls -la ~/skills',
    'history | tail -5'
  ];

  const commandOutputs = {
    'whoami': [
      'oussema',
      '',
      '# DevOps & Cloud Engineer',
      '# Location: Tunisia',
      '# Experience: 5+ years in cloud infrastructure',
      '# Specialization: Kubernetes, AWS, GCP, CI/CD',
      ''
    ],
    'cat /etc/profile': [
      '# ~/.profile: executed by the command interpreter for login shells.',
      '',
      'export NAME="Oussema"',
      'export ROLE="DevOps & Cloud Engineer"',
      'export EXPERIENCE="5+ years"',
      'export SPECIALTIES="Kubernetes,Docker,Terraform,AWS,GCP"',
      'export PASSION="Building scalable cloud infrastructure"',
      'export MOTTO="Automate everything, monitor everything"',
      ''
    ],
    'ls -la ~/skills': [
      'total 42',
      'drwxr-xr-x  8 oussema oussema 4096 Jan 15 10:30 .',
      'drwxr-xr-x 12 oussema oussema 4096 Jan 15 10:30 ..',
      '-rw-r--r--  1 oussema oussema 2048 Jan 15 10:30 kubernetes.yml',
      '-rw-r--r--  1 oussema oussema 1024 Jan 15 10:30 terraform.tf',
      '-rw-r--r--  1 oussema oussema 1536 Jan 15 10:30 docker-compose.yml',
      '-rw-r--r--  1 oussema oussema  512 Jan 15 10:30 github-actions.yml',
      'drwxr-xr-x  2 oussema oussema 4096 Jan 15 10:30 aws/',
      'drwxr-xr-x  2 oussema oussema 4096 Jan 15 10:30 gcp/',
      'drwxr-xr-x  2 oussema oussema 4096 Jan 15 10:30 monitoring/',
      ''
    ],
    'history | tail -5': [
      '  998  kubectl get pods -n production',
      '  999  terraform plan -var-file=prod.tfvars',
      ' 1000  docker build -t app:latest .',
      ' 1001  helm upgrade myapp ./chart --namespace production',
      ' 1002  whoami',
      ''
    ]
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const randomCommand = commands[Math.floor(Math.random() * commands.length)];
      setCurrentCommand('');
      setShowOutput(false);
      setOutputLines([]);

      // Type the command
      let i = 0;
      const typeCommand = () => {
        if (i < randomCommand.length) {
          setCurrentCommand(randomCommand.slice(0, i + 1));
          i++;
          setTimeout(typeCommand, 100);
        } else {
          // Show output after command is typed
          setTimeout(() => {
            setShowOutput(true);
            const output = commandOutputs[randomCommand as keyof typeof commandOutputs];
            let lineIndex = 0;
            const showLines = () => {
              if (lineIndex < output.length) {
                setOutputLines(prev => [...prev, output[lineIndex]]);
                lineIndex++;
                setTimeout(showLines, 200);
              }
            };
            showLines();
          }, 500);
        }
      };
      typeCommand();
    }, 8000);

    // Initial command
    setCurrentCommand('whoami');
    setTimeout(() => {
      setShowOutput(true);
      const output = commandOutputs['whoami'];
      let lineIndex = 0;
      const showLines = () => {
        if (lineIndex < output.length) {
          setOutputLines(prev => [...prev, output[lineIndex]]);
          lineIndex++;
          setTimeout(showLines, 200);
        }
      };
      showLines();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Ubuntu Terminal */}
          <div className="bg-gray-900 rounded-lg border border-gray-700 shadow-2xl overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2 border-b border-gray-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-gray-300 text-sm font-mono">oussema@ubuntu: ~</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm">
              <div className="space-y-2">
                {/* Welcome message */}
                <div className="text-green-400">
                  Welcome to Ubuntu 22.04.3 LTS (GNU/Linux 5.15.0-91-generic x86_64)
                </div>
                <div className="text-gray-400">
                  * Documentation:  https://help.ubuntu.com
                </div>
                <div className="text-gray-400">
                  * Management:     https://landscape.canonical.com
                </div>
                <div className="text-gray-400">
                  * Support:        https://ubuntu.com/advantage
                </div>
                <div className="text-gray-400 mb-4">
                  Last login: {new Date().toLocaleDateString()} from 192.168.1.100
                </div>

                {/* Command prompt */}
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">oussema@ubuntu</span>
                  <span className="text-white">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">$</span>
                  <span className="text-white">
                    {currentCommand}
                    <span className="animate-pulse">|</span>
                  </span>
                </div>

                {/* Command output */}
                {showOutput && (
                  <div className="mt-2 space-y-1">
                    {outputLines.map((line, index) => (
                      <div key={index} className={`${
                        line && line.startsWith('#') ? 'text-gray-400' : 
                        line && line.startsWith('export') ? 'text-yellow-400' :
                        line && (line.startsWith('drwx') || line.startsWith('-rw-')) ? 'text-blue-400' :
                        line && line.includes('oussema') ? 'text-green-400' :
                        'text-gray-300'
                      }`}>
                        {line || ''}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <Code className="w-6 h-6 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">Philosophy</h3>
              </div>
              <p className="text-gray-300 text-sm">
                "Infrastructure as Code, Everything as Code. Automate the boring stuff, focus on innovation."
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <Server className="w-6 h-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">Expertise</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Cloud-native architectures, Kubernetes orchestration, and scalable CI/CD pipelines.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <Terminal className="w-6 h-6 text-green-400" />
                <h3 className="text-lg font-semibold text-white">Approach</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Security-first mindset with observability built-in from day one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;