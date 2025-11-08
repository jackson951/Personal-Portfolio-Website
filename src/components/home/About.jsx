import { useState, useEffect, useRef } from "react";
import {
  Code2,
  Database,
  Shield,
  Coffee,
  Award,
  MapPin,
  Calendar,
  Download,
  Briefcase,
  GraduationCap,
  Zap,
} from "lucide-react";

const About = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1, rootMargin: "-100px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const stats = [
    { icon: Calendar, label: "Experience", value: "1+ Year" },
    { icon: Briefcase, label: "Projects", value: "15+" },
    { icon: Coffee, label: "Coffee", value: "500+ Cups" },
    { icon: Award, label: "Certifications", value: "4+" },
  ];

  const interests = [
    {
      icon: Code2,
      label: "Full-Stack Dev",
      color: "from-green-500 to-blue-500",
    },
    {
      icon: Shield,
      label: "Cybersecurity",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Database,
      label: "Data Analytics",
      color: "from-orange-500 to-red-500",
    },
    { icon: Zap, label: "Innovation", color: "from-blue-500 to-cyan-500" },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" ref={ref}>
          <h2
            className={`text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-700 ${
              isInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image & Stats */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-800 rounded-2xl flex items-center justify-center overflow-hidden">
                    {/* Replace this div with your actual image */}
                    <img
                      src="/profile-photo.jpg"
                      alt="Jackson Khuto"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextElementSibling.style.display = "flex";
                      }}
                    />
                    <div className="text-center hidden flex-col items-center justify-center w-full h-full">
                      <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Code2 className="w-12 h-12 text-white" />
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">
                        Jackson Khuto
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        Software Developer
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-500 cursor-pointer hover:scale-105 ${
                    isInView
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            {/* Introduction */}
            <div
              className={`transition-all duration-700 delay-200 ${
                isInView
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                BSc IT Graduate & Software Developer
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                <p>
                  Hello! I'm{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    Jackson Mahlotle Khuto
                  </span>
                  , a passionate full-stack developer with a strong foundation
                  in cybersecurity, data analytics, and software systems. I
                  graduated from North-West University with a BSc in Information
                  Technology in 2024.
                </p>
                <p>
                  Currently, I'm deeply immersed in{" "}
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    advancing my full-stack development skills
                  </span>
                  , with hands-on experience in modern technologies like React,
                  Node.js, and cloud platforms. My background includes designing
                  and optimizing business applications using C#, ASP.NET Core,
                  and React.js, where I successfully reduced reporting
                  turnaround time by 30% through automated dashboard solutions.
                </p>
                <p>
                  As a software developer, I specialize in building scalable,
                  secure, and user-centric web applications. My curiosity
                  extends into areas like{" "}
                  <span className="font-semibold">
                    digital forensics and cybersecurity
                  </span>{" "}
                  — which deeply informs my approach to writing resilient,
                  privacy-aware code. I thrive on solving complex technical
                  challenges with clean, maintainable solutions, and I’m driven
                  by building products that deliver real impact.
                </p>
              </div>
            </div>

            {/* Location & Status */}
            <div
              className={`flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 text-gray-600 dark:text-gray-400 transition-all duration-700 delay-300 ${
                isInView
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Tembisa, Gauteng, South Africa</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for opportunities</span>
              </div>
            </div>

            {/* Interests */}
            <div
              className={`transition-all duration-700 delay-400 ${
                isInView
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Areas of Expertise
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest, index) => (
                  <div
                    key={interest.label}
                    className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-800 rounded-lg px-4 py-3 transition-all hover:scale-105 hover:shadow-lg cursor-pointer"
                  >
                    <div
                      className={`w-10 h-10 bg-gradient-to-r ${interest.color} rounded-lg flex items-center justify-center`}
                    >
                      <interest.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                      {interest.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Highlight */}
            <div
              className={`bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800 transition-all duration-700 delay-500 ${
                isInView
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="flex items-start space-x-3">
                <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                    BSc Information Technology
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    North-West University, Vanderbijlpark (2024)
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                    Specialized in Cybersecurity, Software Engineering, and Data
                    Analytics
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 pt-6 transition-all duration-700 delay-600 ${
                isInView
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold"
              >
                Get In Touch
              </a>
              <a
                href="/jackson-khuto-cv.pdf"
                download
                className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-200 font-semibold flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
