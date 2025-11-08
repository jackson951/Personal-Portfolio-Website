import { useState, useRef } from "react";
import { useInView } from "framer-motion";
import {
  Code2,
  Palette,
  Database,
  Cloud,
  Smartphone,
  Zap,
  Star,
  CheckCircle2,
  Sparkles,
  GitBranch,
  Server,
  Layout,
  CloudLightning,
  Cpu,
  Terminal,
  Wand2,
  Users,
  TestTube2,
  Workflow,
  TrendingUp,
} from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      id: "frontend",
      name: "Frontend Development",
      icon: Layout,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: "Expert", icon: Code2 },
        { name: "Next.js", level: "Advanced", icon: Workflow },
        { name: "JavaScript", level: "Expert", icon: Code2 },
        { name: "TypeScript", level: "Advanced", icon: Terminal },
        { name: "Vue.js", level: "Intermediate", icon: Wand2 },
        { name: "Tailwind CSS", level: "Advanced", icon: Palette },
        { name: "HTML5", level: "Expert", icon: Layout },
        { name: "CSS3", level: "Expert", icon: Palette },
      ],
    },
    {
      id: "backend",
      name: "Backend Development",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: "Advanced", icon: Cpu },
        { name: "Python", level: "Advanced", icon: Terminal },
        { name: "Express.js", level: "Advanced", icon: Server },
        { name: "PostgreSQL", level: "Advanced", icon: Database },
        { name: "MongoDB", level: "Advanced", icon: Database },
        { name: "GraphQL", level: "Intermediate", icon: Workflow },
        { name: "Redis", level: "Intermediate", icon: CloudLightning },
        { name: "Docker", level: "Intermediate", icon: Cloud },
      ],
    },
    {
      id: "design",
      name: "UI/UX Design",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Figma", level: "Advanced", icon: Palette },
        { name: "UI Design", level: "Advanced", icon: Layout },
        { name: "UX Research", level: "Intermediate", icon: Users },
        { name: "Prototyping", level: "Advanced", icon: Wand2 },
        { name: "Design Systems", level: "Advanced", icon: Workflow },
        { name: "Wireframing", level: "Advanced", icon: Layout },
        { name: "User Testing", level: "Intermediate", icon: TestTube2 },
        { name: "Interaction Design", level: "Advanced", icon: Sparkles },
      ],
    },
    {
      id: "mobile",
      name: "Mobile Development",
      icon: Smartphone,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "React Native", level: "Advanced", icon: Code2 },
        { name: "Flutter", level: "Intermediate", icon: Smartphone },
        { name: "iOS Development", level: "Intermediate", icon: Smartphone },
        {
          name: "Android Development",
          level: "Intermediate",
          icon: Smartphone,
        },
        { name: "Expo", level: "Advanced", icon: Zap },
        { name: "Mobile UI", level: "Advanced", icon: Layout },
      ],
    },
    {
      id: "devops",
      name: "Cloud & DevOps",
      icon: Cloud,
      color: "from-indigo-500 to-blue-500",
      skills: [
        { name: "AWS", level: "Advanced", icon: Cloud },
        { name: "Vercel", level: "Advanced", icon: CloudLightning },
        { name: "Netlify", level: "Advanced", icon: Cloud },
        { name: "CI/CD", level: "Advanced", icon: GitBranch },
        { name: "GitHub Actions", level: "Advanced", icon: Workflow },
        { name: "Linux", level: "Intermediate", icon: Terminal },
      ],
    },
  ];

  const featuredSkills = [
    { name: "Problem Solving", icon: Zap },
    { name: "Performance Optimization", icon: TrendingUp },
    { name: "Code Quality", icon: Star },
    { name: "Team Collaboration", icon: Users },
  ];

  const currentCategory = skillCategories.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" ref={ref}>
          <h2
            className={`text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-700 ${
              isInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Skills &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p
            className={`text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            A broad and balanced technical foundation across frontend, backend,
            design, and DevOps domains.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left column - categories */}
          <div className="lg:col-span-1 space-y-8">
            <div
              className={`space-y-3 transition-all duration-700 delay-200 ${
                isInView
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Layout className="w-5 h-5 text-blue-600 mr-2" />
                Categories
              </h3>
              {skillCategories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 group ${
                    activeCategory === category.id
                      ? `border-transparent bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                      : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 hover:scale-102"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`p-2 rounded-lg ${
                        activeCategory === category.id
                          ? "bg-white/20"
                          : `bg-gradient-to-r ${category.color}`
                      }`}
                    >
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-sm">
                      {category.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Featured skills */}
            <div
              className={`transition-all duration-700 delay-300 ${
                isInView
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                Core Strengths
              </h3>
              <div className="space-y-3">
                {featuredSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300"
                    style={{ transitionDelay: `${index * 100 + 300}ms` }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                        <skill.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Skills grid */}
          <div className="lg:col-span-3">
            <div
              className={`bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-700 shadow-xl transition-all duration-700 delay-300 ${
                isInView
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              {/* Category header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${currentCategory.color} shadow-lg`}
                  >
                    <currentCategory.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {currentCategory.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {currentCategory.skills.length} key technologies
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills list */}
              <div className="grid md:grid-cols-2 gap-6">
                {currentCategory.skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`group bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                      isInView
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                    style={{
                      transitionDelay: `${index * 100 + 400}ms`,
                      transitionProperty: "transform, opacity, border-color",
                    }}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-white dark:bg-gray-600 rounded-lg shadow-sm">
                        <skill.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      </div>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${currentCategory.color}`}
                        style={{
                          width:
                            skill.level === "Expert"
                              ? "100%"
                              : skill.level === "Advanced"
                              ? "80%"
                              : skill.level === "Intermediate"
                              ? "60%"
                              : "40%",
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        {skill.level}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Combining a broad technical foundation with strong problem-solving
              and collaboration skills — ready to take on your next challenge.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold shadow-md"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
