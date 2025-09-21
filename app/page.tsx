'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  Download,
  ExternalLink,
  Code2,
  Database,
  Globe,
  Smartphone,
  ChevronDown,
  Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const skillCategories = [
  {
    title: "Frontend",
    icon: <Globe className="w-5 h-5" />,
    skills: ["Dart", "C", "C++"]
  },
  
  {
    title: "Mobile",
    icon: <Smartphone className="w-5 h-5" />,
    skills: ["Flutter", "Android", "iOS"]
  },
    {
    title: "Problem solving",
    icon: <Globe className="w-5 h-5" />,
    skills: ["C", "C++", "Data Structure","Algorithm"]
  }
];

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with Flutter. Features include user authentication, payment integration, and admin dashboard.",
    tech: ["Dart", "Flutter"],
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "#",
    live: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool built with Flutter. Real-time updates and progress tracking.",
    tech: ["Dart", "Flutter"],
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "#",
    live: "#"
  },
    {
    title: "Food Leap",
    description: "Food delivery on time tool built with Flutter. order your food anytime.",
    tech: ["Dart", "Flutter"],
    image: "data:image/png;base64,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",
    github: "#",
    live: "#"
  },
];

const experience = [
  {
    title: "Junior Developer",
    company: "Tech IT Solutions LTD.",
    period: "2024 - Out",
    description: "Problem solver, bug fixer, creating new screens with animation."
  },
    {
    title: "COO",
    company: "ByteCamp",
    period: "2025 - In",
    description: "I am cheif operating officer in ByteCamp right now."
  },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              MH
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item 
                      ? 'text-blue-400' 
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                Mahmudul Hasan
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed"
            >
             Competitive programmers try to solve every problem 
              <span className="text-blue-400"> simply and perfectly.</span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3"
              >
                View My Work
              </Button>
              
         <a 
  href="/Rusume-Hasan.pdf" 
  download="Hasan-CV.pdf"
>
  <Button
    variant="outline"
    size="lg"
    className="border-white/30 text-white hover:bg-white/10 px-8 py-3"
  >
    <Download className="w-4 h-4 mr-2" />
    Download CV
  </Button>
</a>

            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-white/60 animate-bounce cursor-pointer" 
              onClick={() => scrollToSection('about')} />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden border-4 border-white/10">
                  <img 
                    src="https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/482083538_973126278245842_7741667569145313304_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=j7myM5SzC60Q7kNvwFIr9IV&_nc_oc=AdkExHC0RztTmcY094EumSDtaf4xiSEOkj_yQouXHDZABMzRoMqeDWIPkachu0LS0zY&_nc_zt=23&_nc_ht=scontent.fdac41-2.fna&_nc_gid=_3vho6xW-emApQs1JoSMMQ&oh=00_AfaX6CfQwRYVWgsn-IHMCp8IyDIJ6oUCyG_8rdNBy0AqGw&oe=68D0C196"
                    alt="Mahmudul Hasan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-white/80 leading-relaxed">
               I'm a passionate software developer with over 1.5 years of experience creating innovative  mobile applications.
                I specialize in Flutter development for building beautiful,
                high-performance cross-platform apps,
                 and also have experience with full-stack technologies.
              </p>
              
              <p className="text-lg text-white/80 leading-relaxed">
                My journey in technology started with a curiosity to know how things work behind the scenes.
                  Today,
              I solve many complex problems at CodeForce where my coding skills and work ethic play a big role in optimizing the code.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Location</h4>
                  <p className="text-white/70 flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Bangladesh
                  </p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Experience</h4>
                  <p className="text-white/70">1.5+ Years</p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Email</h4>
                  <p className="text-white/70">dev.hasan715@gmail.com</p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Phone</h4>
                  <p className="text-white/70">+880 1981319897</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-3">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm hover:bg-white/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-lg overflow-hidden hover:bg-white/10 transition-all duration-300 group-hover:scale-105">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 right-4 flex gap-2">
                        <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/20">
                          <Github className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/20">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                    <p className="text-white/70 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-400 to-purple-400"></div>
            
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <Card className="bg-white/5 border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                      <h4 className="text-blue-400 font-medium mb-2">{exp.company}</h4>
                      <p className="text-purple-300 text-sm mb-4">{exp.period}</p>
                      <p className="text-white/70 leading-relaxed">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-slate-900"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-xl text-white/70 leading-relaxed">
              Let's discuss your next project or opportunity. I'm always interested in challenging work.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-white/70">dev.hasan715@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <p className="text-white/70">+880 1981319897</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-white/70">Dhaka, Bangladesh</p>
                </div>
              </div>
              
              <div className="flex space-x-4 pt-6">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Github className="w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div>
                      <Input
                        placeholder="Your Name"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Your Email"
                        type="email"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Subject"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        rows={4}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black/40 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">
            © 2025 CopyRight by Mahmudul Hasan
          </p>
        </div>
      </footer>
    </div>
  );
}
