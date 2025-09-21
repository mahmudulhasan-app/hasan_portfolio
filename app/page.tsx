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
  }
    {
    title: "Problem solving",
    icon: <Coding className="w-5 h-5" />,
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
  
];

const experience = [
  {
    title: "Junior Developer",
    company: "Tech IT Solutions LTD.",
    period: "2024 - Out",
    description: "Problem solver, bug fixer, creating new screens with animation."
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
              Software Developer crafting digital experiences with
              <span className="text-blue-400"> modern technologies</span>
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
