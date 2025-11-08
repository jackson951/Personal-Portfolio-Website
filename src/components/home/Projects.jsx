import { useState, useEffect, useRef } from "react";
import {
  ExternalLink,
  Github,
  Code,
  Filter,
  Star,
  Calendar,
  Zap,
  CheckCircle2,
  TrendingUp,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  projects,
  getFeaturedProjects,
  getCategories,
  getAllTags,
  projectStats,
} from "../../data/projects";

const Projects = () => {
  const [isInView, setIsInView] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);
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

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects);
    } else if (selectedCategory === "Featured") {
      setFilteredProjects(getFeaturedProjects());
    } else {
      setFilteredProjects(
        projects.filter((p) => p.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  const categories = ["All", "Featured", ...getCategories()];

  const ProjectCard = ({ project, index }) => {
    return (
      <div
        className={`group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
        onClick={() => setSelectedProject(project)}
      >
        {/* Project Image */}
        <div className="relative h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <div className="text-white">
              <p className="text-sm font-medium mb-1">Click to view details</p>
              <div className="flex space-x-2">
                {project.github && (
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Github className="w-4 h-4" />
                  </div>
                )}
                {project.demo && (
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
              <Star className="w-3 h-3 fill-current" />
              <span>Featured</span>
            </div>
          )}

          {/* Status Badge */}
          <div
            className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
              project.status === "Completed"
                ? "bg-green-500 text-white"
                : "bg-orange-500 text-white"
            }`}
          >
            {project.status}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category */}
          <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">
            {project.category}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded text-xs">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>{project.date}</span>
            </div>
            <div className="flex space-x-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  aria-label="View on GitHub"
                >
                  <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                  aria-label="View live demo"
                >
                  <ExternalLink className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      >
        <div
          className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex items-start justify-between z-10">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Featured</span>
                  </span>
                )}
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    project.status === "Completed"
                      ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                      : "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Project Image */}
            <div className="relative h-64 md:h-80 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                About This Project
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                <Code className="w-5 h-5 mr-2 text-blue-600" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-purple-600" />
                Key Features
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            {project.results && project.results.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                  Results & Impact
                </h3>
                <div className="space-y-2">
                  {project.results.map((result, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-lg"
                    >
                      <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                        {result}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-4 pt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>View on GitHub</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>View Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
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
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p
            className={`text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            A showcase of my recent work and personal projects
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-700 delay-200 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {projectStats.total}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Total Projects
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {projectStats.completed}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Completed
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              {projectStats.inProgress}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              In Progress
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              {projectStats.featured}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Featured
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div
          className={`flex items-center justify-center mb-12 transition-all duration-700 delay-300 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-xl p-2 shadow-lg overflow-x-auto">
            <Filter className="w-5 h-5 text-gray-400 ml-2" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Projects;
