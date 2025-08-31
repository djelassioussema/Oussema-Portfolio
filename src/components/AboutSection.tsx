import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Code, Server } from 'lucide-react';
import { SkillsShowcase } from './SkillsShowcase';

const About: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [outputLines, setOutputLines] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands: Record<string, string[]> = {
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

  const handleCommand = (cmd: string) => {
    setHistory(prev => [...prev, `$ ${cmd}`]);
    if (commands[cmd]) {
      setOutputLines(prev => [...prev, ...commands[cmd]]);
    } else {
      setOutputLines(prev => [...prev, `Command not found: ${cmd}`]);
    }
    setInput('');
  };

  useEffect(() => {
    // Scroll to bottom whenever output changes
    terminalRef.current?.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: 'smooth'
    });
  }, [history, outputLines]);

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
            <div
              ref={terminalRef}
              className="p-6 font-mono text-sm h-96 overflow-y-auto space-y-1"
            >
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

              {/* Display previous commands */}
              {history.map((line, idx) => (
                <div key={idx} className="text-white">{line}</div>
              ))}

              {/* Display command output */}
              {outputLines.map((line, idx) => {
                const color = line.startsWith('#')
                  ? 'text-gray-400'
                  : line.startsWith('export')
                    ? 'text-yellow-400'
                    : line.startsWith('-rw-') || line.startsWith('drwx')
                      ? 'text-blue-400'
                      : 'text-green-400';
                return <div key={idx} className={color}>{line}</div>;
              })}

              {/* Input prompt */}
              <div className="flex items-center space-x-2">
                <span className="text-green-400">oussema@ubuntu</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$</span>
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' && input.trim()) {
                      handleCommand(input.trim());
                    }
                  }}
                  className="bg-transparent focus:outline-none text-white flex-1 font-mono"
                  autoFocus
                />
              </div>
            </div>

            {/* Command Buttons */}
            <div className="bg-gray-800 p-4 flex flex-wrap gap-2 border-t border-gray-700">
              {Object.keys(commands).map(cmd => (
                <button
                  key={cmd}
                  onClick={() => handleCommand(cmd)}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded font-mono text-sm transition"
                >
                  {cmd}
                </button>
              ))}
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
      <SkillsShowcase />

    </section>
  );
};



export default About;
