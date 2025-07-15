import { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail, Phone, Download, ExternalLink, Send } from "lucide-react";
import harishProfile from "@/assets/harish-portfolio1.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "education", "projects", "certifications", "activities", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right");
    animatedElements.forEach((el) => observer.observe(el));

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  const skills = {
    "Cloud & Infrastructure": ["AWS", "Azure", "GCP", "Docker", "Jenkins"],
    "Programming Languages": ["Python", "Java", "C++", "C", "JavaScript", "SQL", "Spark"],
    "Databases & Big Data": ["MongoDB", "MySQL", "Oracle", "Apache Spark", "Hadoop", "MapReduce"],
    "Machine Learning & AI": ["TensorFlow", "PyTorch", "OpenAI", "Deep Learning", "NLP", "GAN"],
    "Development Tools": ["Git", "Linux", "Bash/Unix", "VS Code", "Jupyter"],
    "Operating Systems": ["Ubuntu", "Windows", "MacOS"],
    "Embedded Systems": ["Arduino Uno", "Jetson", "Raspberry Pi"]
  };

  const experiences = [
    {
      company: "Virran Tech Solutions Pvt Ltd",
      role: "ERP Functional Consultant",
      duration: "Mar 2025 – Present",
      achievements: [
        "Participated in the development and implementation of the Oracle Fusion ERP application.",
        "Actively worked on ERP module configuration and customization.",
        "Assisted in troubleshooting, debugging, and optimizing ERP workflows for better performance."
      ]
    },
    {
      company: "Nirajneme.ai Inno Pvt Ltd",
      role: "Software Engineer Intern",
      duration: "Nov 2024 – Jan 2025",
      achievements: [
        "Contributed to Web Development, enhancing the Valve Tagging Module for improved system efficiency.",
        "Engaged in product optimization, acquiring hands-on exposure to industry-grade engineering workflows.",
        "Collaborated with cross-functional teams to optimize and improve system performance.",
        "Participated in debugging, optimizing code, and implementing solutions to streamline the valve tagging module.",
        "Built enterprise-grade software proficiency with advanced ecosystems, and improved analytical thinking and adaptability."
      ]
    },
    {
      company: "AIESEC in Chennai",
      role: "Vice President - Operations Sector",
      duration: "Feb 2023 – Feb 2024",
      achievements: [
        "Progressed from General Body Member to Executive Board Member in the Outgoing Global Talent department.",
        "Developed leadership, communication, and problem solving skills through hands-on experience.",
        "Created a tangible impact by managing organizational challenges, collaborating with a diverse team, and delivering high-performance, seamless technologies that create real-world impact."
      ]
    }
  ];

  const projects = [
    {
      title: "Sentiment Analysis on Amazon Food Reviews",
      date: "Dec 2024",
      description: "Implemented sentiment analysis using the RoBERTa model, achieving an F1-score of 0.92. Presented findings at an International conference and achieved Scopus indexing.",
      tech: ["AI/ML", "NLP", "Deep Learning", "Python"],
      link: "https://ieeexplore.ieee.org/document/10961795"
    },
    {
      title: "2D vs 3D - Face Reconstruction Model",
      date: "Dec 2024",
      description: "Implemented accurate 3D face reconstruction using PyTorch and NVIDIA GeForce RTX 3050, leveraging the Deep3DFaceRecon framework for high-fidelity results.",
      tech: ["Custom GPU's (NVIDIA)", "Python", "PyTorch", "Computer Vision"],
      link: "#"
    },
    {
      title: "AI-Powered Personalized Learning & Progress Tracking for Visually Impaired",
      date: "Mar 2025 – Present",
      description: "Built an AI-driven TTS assistant using real-time behavior analytics and ML to personalize speech and learning content for visually impaired students.",
      tech: ["AWS", "OpenAI Whisper", "TensorFlow", "DL/ML Techniques"],
      link: "#"
    },
    {
      title: "Ear Based Biometric System",
      date: "Dec 2023",
      description: "Built an ear-based biometric system on Jetson Nano using YOLOv8 and CNN for real-time detection and feature extraction. Achieved 92.75% accuracy, optimizing deep learning models for edge AI.",
      tech: ["Jetson Nano", "YOLOv8", "Python", "Linux Commands"],
      link: "#"
    }
  ];

  const certifications = [
    {
      title: "Oracle Cloud Infrastructure Data Foundations Associate",
      date: "Oct 2024 – Present",
      type: "certification"
    },
    {
      title: "Amazon Web Services Cloud Practitioner",
      date: "Apr 2025 – Apr 2028",
      type: "certification"
    },
    {
      title: "Ossome Hacks Hackathon - HacktheBox SRMIST",
      date: "One among the top 5 teams",
      description: "Team of 4 designed an innovative 3D Mesh creation project from just 2D image to revolutionize 3D printing industries.",
      type: "award"
    },
    {
      title: "Ultron 8.0 Hackathon, CINTEL Department - SRMIST",
      date: "One among the top 20 teams",
      description: "Engaged in fast-paced, collaborative problem-solving by participating in hackathons, enhancing skills in innovation, teamwork, and real-world tech application under time constraints.",
      type: "award"
    }
  ];

  const activities = [
    {
      organization: "NWC Association",
      role: "Vice President",
      duration: "Jan 2025 – Present",
      description: "Leading cross-functional teams and coordinating high-impact events and initiatives that strengthened student engagement, leadership, and community outreach."
    },
    {
      organization: "Grad Society",
      role: "Creatives Head",
      duration: "Jan 2024 – Present",
      description: "Led creative strategy as Creatives Head of the Grad Society, designing alumni engagement campaigns and visual content that enhanced departmental branding and strengthened alumni-student relations."
    },
    {
      organization: "Blood Donation",
      role: "Active Blood Donor",
      duration: "Ongoing",
      description: "Active blood donor, consistently contributing to community health through regular participation in donation drives."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold gradient-text">HR</div>
            <div className="hidden md:flex space-x-6">
              {["Home", "About", "Skills", "Experience", "Education", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/HarishRadhakrishnan23" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 hover:text-primary transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/harish-radhakrishnan-207523255/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="fade-in">
            <div className="flex justify-center mt-12 mb-8">
              <div className="relative">
                <img 
                  src={harishProfile} 
                  alt="Harish Radhakrishnan" 
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-neon-cyan shadow-[0_0_30px_hsl(var(--neon-cyan)/0.6)] hover:shadow-[0_0_50px_hsl(var(--neon-cyan)/0.8)] transition-all duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 rounded-full border-4 border-neon-pink opacity-0 hover:opacity-100 transition-opacity duration-500 shadow-[0_0_30px_hsl(var(--neon-pink)/0.6)]"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="gradient-text">Harish</span>
              <br />
              <span className="text-foreground">Radhakrishnan</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Aspiring Cloud Engineer & ML Enthusiast
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Final-year Computer Science student passionate about transforming complex systems into 
              seamless technologies that create real-world impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/Harish_Resume.pdf" download className="relative z-10">
                <Button variant="neon">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </a>
              <Button 
                variant="neonPink" 
                onClick={() => scrollToSection("projects")}
                className="relative z-10"
              >
                View Projects
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 fade-in">
              About <span className="gradient-text">Me</span>
            </h2>
            <Card className="card-neon fade-in">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Aspire to be acquainted in the state-of-the-art cloud computing landscape, blending expertise in AWS, machine 
                  learning, and automation. With a strong foundation in software development and ERP solutions, I excel in optimizing scalable 
                  architectures and innovative solution delivery. A proactive learner passionate about transforming complex systems into 
                  high-performance, seamless technologies that create real-world impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 fade-in">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={category} className={`card-neon ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 fade-in">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="card-neon fade-in">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">{exp.role}</h3>
                      <p className="text-lg font-medium text-foreground">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="text-primary border-primary mt-2 md:mt-0">
                      {exp.duration}
                    </Badge>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">▸</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 fade-in">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="card-neon fade-in">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">Bachelor's of Technology</h3>
                    <p className="text-lg font-medium">Computer Science With Specialisation In Information Technology</p>
                    <p className="text-muted-foreground">SRM Institute of Science and Technology KTR</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <Badge variant="outline" className="text-primary border-primary mb-2">
                      Sept 2022 - Current
                    </Badge>
                    <p className="text-primary font-bold">CGPA: 8.09</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="card-neon slide-in-left">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">Grade XII (2020-2022)</h3>
                  <p className="text-foreground">Srimathi Sundaravalli Memorial School</p>
                  <p className="text-primary font-bold">85.25%</p>
                </CardContent>
              </Card>
              <Card className="card-neon slide-in-right">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">Grade X (2020-2022)</h3>
                  <p className="text-foreground">Srimathi Sundaravalli Memorial School</p>
                  <p className="text-primary font-bold">91.00%</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 fade-in">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className={`card-neon ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                    <Badge variant="outline" className="text-primary border-primary">
                      {project.date}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section id="certifications" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 fade-in">
            Certifications & <span className="gradient-text">Awards</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {certifications.map((item, index) => (
              <Card key={index} className="card-neon fade-in">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                      {item.description && (
                        <p className="text-muted-foreground mb-2">{item.description}</p>
                      )}
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <Badge 
                        variant="outline" 
                        className={`${item.type === 'certification' ? 'text-primary border-primary' : 'text-accent border-accent'}`}
                      >
                        {item.date}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section id="activities" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 fade-in">
            Extracurricular <span className="gradient-text">Activities</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {activities.map((activity, index) => (
              <Card key={index} className="card-neon fade-in">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">{activity.role}</h3>
                      <p className="text-lg font-medium">{activity.organization}</p>
                    </div>
                    <Badge variant="outline" className="text-primary border-primary mt-2 md:mt-0">
                      {activity.duration}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 fade-in">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="fade-in">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always excited to discuss new opportunities, innovative projects, or potential collaborations. 
                Feel free to reach out if you'd like to connect!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>harishradhakrishnan2304@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+91 9984136110</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="w-5 h-5 text-primary" />
                  <a 
                    href="https://github.com/HarishRadhakrishnan23" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    github.com/HarishRadhakrishnan23
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-primary" />
                  <a 
                    href="https://www.linkedin.com/in/harish-radhakrishnan-207523255/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    linkedin.com/in/harish-radhakrishnan-207523255
                  </a>
                </div>
              </div>
            </div>
            <Card className="card-neon fade-in">
              <CardContent className="p-6">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <Input 
                      placeholder="Your Name" 
                      required
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      required
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Your Message" 
                      required
                      rows={5}
                      className="bg-background/50 border-border focus:border-primary resize-none"
                    />
                  </div>
                  <Button type="submit" variant="neon" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Harish Radhakrishnan. Built with passion and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
