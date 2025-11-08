import { useEffect, useRef, useState } from "react";

const SectionHeader = ({
  title,
  subtitle,
  align = "center",
  badge,
  gradient = true,
  animate = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    if (!animate) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, [animate]);

  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div
      ref={headerRef}
      className={`flex flex-col ${alignmentClasses[align]} mb-12 md:mb-16`}
    >
      {/* Badge */}
      {badge && (
        <div
          className={`inline-flex items-center px-4 py-1.5 mb-4 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0ms" }}
        >
          {badge}
        </div>
      )}

      {/* Title */}
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-700 ${
          gradient
            ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            : "text-gray-900 dark:text-white"
        } ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: "100ms" }}
      >
        {title}
      </h2>

      {/* Decorative Line */}
      <div
        className={`relative h-1 w-20 mb-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-700 ${
          isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
        }`}
        style={{ transitionDelay: "200ms" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-md opacity-50"></div>
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;

// Usage Examples:

// Basic centered header
// <SectionHeader
//   title="My Projects"
//   subtitle="Check out some of my recent work"
// />

// Left-aligned with badge
// <SectionHeader
//   title="About Me"
//   subtitle="Learn more about my journey"
//   align="left"
//   badge="👋 Introduction"
// />

// Without gradient
// <SectionHeader
//   title="Contact"
//   subtitle="Let's work together"
//   gradient={false}
// />

// Without animation
// <SectionHeader
//   title="Skills"
//   subtitle="Technologies I work with"
//   animate={false}
// />
