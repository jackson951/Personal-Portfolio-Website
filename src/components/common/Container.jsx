const Container = ({
  children,
  size = "default",
  padding = "default",
  className = "",
  center = false,
  id,
}) => {
  // Container max-width variants
  const sizeClasses = {
    sm: "max-w-3xl", // Small - for focused content (768px)
    default: "max-w-7xl", // Default - standard content (1280px)
    lg: "max-w-[1400px]", // Large - wide layouts (1400px)
    xl: "max-w-[1600px]", // Extra large - full width (1600px)
    full: "max-w-full", // Full width - no constraints
  };

  // Padding variants
  const paddingClasses = {
    none: "",
    sm: "px-4 sm:px-6",
    default: "px-4 sm:px-6 lg:px-8",
    lg: "px-4 sm:px-8 lg:px-12",
    xl: "px-6 sm:px-12 lg:px-16",
  };

  // Vertical padding options
  const verticalPaddingClasses = {
    none: "",
    sm: "py-8 sm:py-12",
    default: "py-12 sm:py-16 lg:py-20",
    lg: "py-16 sm:py-20 lg:py-24",
    xl: "py-20 sm:py-24 lg:py-32",
  };

  return (
    <div
      id={id}
      className={`
        ${sizeClasses[size]}
        ${paddingClasses[padding]}
        mx-auto
        w-full
        ${center ? "flex flex-col items-center justify-center" : ""}
        ${className}
      `
        .trim()
        .replace(/\s+/g, " ")}
    >
      {children}
    </div>
  );
};

// Section Container - Wrapper for full sections with vertical spacing
export const SectionContainer = ({
  children,
  size = "default",
  padding = "default",
  spacing = "default",
  background = "default",
  className = "",
  id,
}) => {
  // Background variants
  const backgroundClasses = {
    default: "bg-white dark:bg-gray-900",
    gray: "bg-gray-50 dark:bg-gray-800",
    gradient:
      "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800",
    blue: "bg-blue-50 dark:bg-blue-900/10",
    purple: "bg-purple-50 dark:bg-purple-900/10",
    transparent: "bg-transparent",
  };

  // Vertical spacing variants
  const spacingClasses = {
    none: "",
    sm: "py-8 sm:py-12",
    default: "py-12 sm:py-16 lg:py-20",
    lg: "py-16 sm:py-20 lg:py-24",
    xl: "py-20 sm:py-24 lg:py-32",
  };

  return (
    <section
      id={id}
      className={`
        ${backgroundClasses[background]}
        ${spacingClasses[spacing]}
        ${className}
      `
        .trim()
        .replace(/\s+/g, " ")}
    >
      <Container size={size} padding={padding}>
        {children}
      </Container>
    </section>
  );
};

export default Container;
