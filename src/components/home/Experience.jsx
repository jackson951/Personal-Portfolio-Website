import { useState, useEffect, useRef } from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle,
  TrendingUp,
  Code,
  Users,
  Award,
  ExternalLink,
} from "lucide-react";
import { experiences, experienceStats } from "../../data/experience";

const Experience = () => {
  const [isInView, setIsInView] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(0);
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

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        gradient: "from-blue-500 to-cyan-500",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-800",
        text: "text-blue-600 dark:text-blue-400",
        hover: "hover:border-blue-500 dark:hover:border-blue-400",
      },
      purple: {
        gradient: "from-purple-500 to-pink-500",
        bg: "bg-purple-50 dark:bg-purple-900/20",
        border: "border-purple-200 dark:border-purple-800",
        text: "text-purple-600 dark:text-purple-400",
        hover: "hover:border-purple-500 dark:hover:border-purple-400",
      },
      green: {
        gradient: "from-green-500 to-emerald-500",
        bg: "bg-green-50 dark:bg-green-900/20",
        border: "border-green-200 dark:border-green-800",
        text: "text-green-600 dark:text-green-400",
        hover: "hover:border-green-500 dark:hover:border-green-400",
      },
    };
    return colors[color] || colors.blue;
  };

  const currentExp = experiences[selectedExperience];
  const colorClasses = getColorClasses(currentExp.color);

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
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
            Work{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p
            className={`text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            My professional journey and the impact I've made
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Stats Cards */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-700 delay-200 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 text-center border border-blue-200 dark:border-blue-800">
            <Calendar className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {experienceStats.totalYears}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Years
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 text-center border border-purple-200 dark:border-purple-800">
            <Code className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {experienceStats.projects}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Projects
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 text-center border border-green-200 dark:border-green-800">
            <Award className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {experienceStats.technologies}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Technologies
            </div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-6 text-center border border-orange-200 dark:border-orange-800">
            <TrendingUp className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {experienceStats.certifications}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Certifications
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Company List */}
          <div className="lg:col-span-1">
            <div
              className={`space-y-2 transition-all duration-700 delay-300 ${
                isInView
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              {experiences.map((exp, index) => (
                <button
                  key={exp.id}
                  onClick={() => setSelectedExperience(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                    selectedExperience === index
                      ? `${getColorClasses(exp.color).bg} ${
                          getColorClasses(exp.color).border
                        } ${getColorClasses(exp.color).hover}`
                      : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div
                      className={`text-4xl flex-shrink-0 ${
                        selectedExperience === index ? "scale-110" : ""
                      } transition-transform`}
                    >
                      {exp.logo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-semibold mb-1 truncate ${
                          selectedExperience === index
                            ? getColorClasses(exp.color).text
                            : "text-gray-900 dark:text-white"
                        }`}
                      >
                        {exp.company}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                        {exp.title}
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            exp.current
                              ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                              : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                          }`}
                        >
                          {exp.current ? "Current" : exp.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Experience Details */}
          <div className="lg:col-span-2">
            <div
              className={`bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 ${
                colorClasses.border
              } shadow-lg transition-all duration-700 delay-400 ${
                isInView
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
              key={currentExp.id}
            >
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {currentExp.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
                      <div className="flex items-center space-x-2">
                        <Briefcase className={`w-4 h-4 ${colorClasses.text}`} />
                        <span className="font-semibold text-gray-700 dark:text-gray-300">
                          {currentExp.company}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{currentExp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`text-4xl ${
                      currentExp.current ? "animate-bounce" : ""
                    }`}
                  >
                    {currentExp.logo}
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div
                    className={`flex items-center space-x-2 px-3 py-1 rounded-full ${colorClasses.bg}`}
                  >
                    <Calendar className={`w-4 h-4 ${colorClasses.text}`} />
                    <span
                      className={`text-sm font-medium ${colorClasses.text}`}
                    >
                      {currentExp.period}
                    </span>
                  </div>
                  {currentExp.current && (
                    <div className="flex items-center space-x-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-green-700 dark:text-green-400">
                        Currently Working
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {currentExp.description}
              </p>

              {/* Responsibilities */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Users className={`w-5 h-5 mr-2 ${colorClasses.text}`} />
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {currentExp.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle
                        className={`w-5 h-5 ${colorClasses.text} mt-0.5 flex-shrink-0`}
                      />
                      <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {resp}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              {currentExp.achievements &&
                currentExp.achievements.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <TrendingUp
                        className={`w-5 h-5 mr-2 ${colorClasses.text}`}
                      />
                      Key Achievements
                    </h4>
                    <div className="space-y-3">
                      {currentExp.achievements.map((achievement, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-lg border-l-4 ${colorClasses.border} ${colorClasses.bg}`}
                        >
                          <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* Skills/Technologies */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Code className={`w-5 h-5 mr-2 ${colorClasses.text}`} />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentExp.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-transform hover:scale-105 cursor-default ${colorClasses.bg} ${colorClasses.text}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Want to work together?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities and
              exciting projects. Let's create something amazing together!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
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
                className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-200 font-semibold flex items-center space-x-2"
              >
                <ExternalLink className="w-5 h-5" />
                <span>View Full Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
