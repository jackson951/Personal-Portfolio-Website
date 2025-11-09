// ==================== src/data/projects.js ====================

export const projects = [
  {
    id: 1,
    title: "Business Analytics & Invoicing Platform",
    category: "Full-Stack Web Application",
    description:
      "A comprehensive data-driven invoicing system with real-time analytics dashboards and automated report generation for business intelligence.",
    longDescription:
      "Built a complete invoicing platform that helps businesses track transactions, generate invoices, and analyze financial data in real-time. The system features interactive dashboards, automated report generation, and secure payment tracking.",
    image: "/projects/invoicing-platform.jpg",
    technologies: [
      "React.js",
      "ASP.NET Core",
      "SQL Server",
      "Chart.js",
      "REST APIs",
      "JWT Authentication",
    ],
    features: [
      "Real-time analytics dashboards for business insights",
      "Automated invoice generation and email delivery",
      "Transaction tracking and financial reporting",
      "Role-based access control for team management",
      "Export reports to PDF and Excel formats",
      "Mobile-responsive design",
    ],
    challenges: [
      "Implementing complex data aggregation for real-time analytics",
      "Ensuring data integrity across concurrent transactions",
      "Optimizing database queries for large datasets",
    ],
    results: [
      "Reduced invoice processing time by 60%",
      "Improved financial reporting accuracy",
      "Enhanced decision-making through data visualization",
    ],
    github: "https://github.com/jacksonkhuto/invoicing-platform",
    demo: "https://invoicing-demo.netlify.app",
    status: "Completed",
    date: "2024",
    featured: true,
    tags: ["Full-Stack", "Analytics", "Business Intelligence", "React", "C#"],
  },
  {
    id: 2,
    title: "Task Management API",
    category: "Backend API",
    description:
      "A secure REST API built with Node.js and Express, featuring JWT authentication and role-based access control for efficient team collaboration.",
    longDescription:
      "Designed and developed a robust task management API that enables teams to collaborate effectively. The API supports secure authentication, role-based permissions, and real-time task tracking aligned with modern project management principles.",
    image: "/projects/task-api.jpg",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Bcrypt",
      "Postman",
    ],
    features: [
      "JWT-based authentication and authorization",
      "Role-based access control (Admin, Manager, User)",
      "CRUD operations for tasks, projects, and teams",
      "Real-time task status updates",
      "File attachment support",
      "Comprehensive API documentation",
    ],
    challenges: [
      "Implementing secure authentication flow",
      "Designing scalable database schema",
      "Handling concurrent updates to shared resources",
    ],
    results: [
      "API handles 1000+ requests per minute",
      "Zero security vulnerabilities in testing",
      "Used by multiple frontend applications",
    ],
    github:
      "https://github.com/jackson951/Telemetry-Management-API-CRUD-operations.git",
    demo: "https://task-api-docs.netlify.app",
    status: "Completed",
    date: "2024",
    featured: true,
    tags: ["Backend", "API", "Node.js", "Security", "Authentication"],
  },
  {
    id: 3,
    title: "Student Information System",
    category: "Full-Stack Web Application",
    description:
      "A database-driven web application for managing academic records with focus on data integrity, scalability, and user-friendly design.",
    longDescription:
      "Created a comprehensive student information system that streamlines academic record management for educational institutions. The system handles student enrollment, course management, grade tracking, and generates academic reports.",
    image: "/projects/student-system.jpg",
    technologies: [
      "React.js",
      "PostgreSQL",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "Redux",
    ],
    features: [
      "Student enrollment and profile management",
      "Course registration and schedule management",
      "Grade tracking and GPA calculation",
      "Automated transcript generation",
      "Search and filter functionality",
      "Responsive dashboard interface",
    ],
    challenges: [
      "Ensuring data integrity with complex relationships",
      "Optimizing queries for large student databases",
      "Creating intuitive UI for non-technical users",
    ],
    results: [
      "Reduced administrative workload by 40%",
      "Improved data accuracy and accessibility",
      "Positive feedback from test users",
    ],
    github: "https://github.com/jacksonkhuto/student-information-system",
    demo: "https://student-system-demo.netlify.app",
    status: "In Progress",
    date: "2024",
    featured: true,
    tags: ["Full-Stack", "Education", "Database", "React", "PostgreSQL"],
  },
  {
    id: 4,
    title: "Leave Management App",
    category: "Full-Stack Web Application",
    description:
      "A modern Leave Management System that allows organizations to manage employee leave requests efficiently with role-based access.",
    longDescription:
      "Developed a full-stack Leave Management System that enables employees to submit and track their leave requests while allowing administrators to manage approvals, users, and system settings. The app features a responsive UI, authentication, and a robust backend powered by Prisma ORM.",
    image: "/projects/leave-management.jpg",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "SQLite",
      "Prisma ORM",
      "JWT Authentication",
    ],
    features: [
      "Employee leave submission and tracking",
      "Admin dashboard for managing users and leave requests",
      "Role-based access control (Admin / Employee)",
      "Leave approval workflow with notifications",
      "Responsive UI built with Tailwind CSS",
      "Secure authentication using JWT tokens",
    ],
    challenges: [
      "Implementing role-based access securely",
      "Designing flexible leave policies",
      "Ensuring accurate leave balance tracking",
    ],
    results: [
      "Streamlined HR processes by 50%",
      "Improved transparency in leave approvals",
      "Enhanced employee experience with self-service tools",
    ],
    github: "https://github.com/jackson951/leave-request-and-management-app",
    demo: "https://digititan-leave-app.vercel.app/login",
    status: "Completed",
    date: "2025",
    featured: true,
    tags: [
      "Full-Stack",
      "Management System",
      "React",
      "Prisma",
      "Node.js",
      "Tailwind CSS",
    ],
  },
  {
    id: 5,
    title: "E-Commerce Product Catalog",
    category: "Frontend Application",
    description:
      "A modern, responsive product catalog with advanced filtering, search functionality, and shopping cart integration.",
    longDescription:
      "Built a dynamic e-commerce product catalog featuring real-time search, multi-criteria filtering, and seamless shopping cart experience. Focused on performance optimization and user experience.",
    image: "/projects/ecommerce-catalog.jpg",
    technologies: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Axios",
      "React Router",
      "LocalStorage",
    ],
    features: [
      "Real-time product search and filtering",
      "Category-based navigation",
      "Shopping cart with persistence",
      "Product comparison functionality",
      "Wishlist management",
      "Mobile-optimized interface",
    ],
    challenges: [
      "Optimizing performance with large product datasets",
      "Implementing complex filter combinations",
      "Managing global state efficiently",
    ],
    results: [
      "Load time under 2 seconds",
      "Smooth user experience across devices",
      "High customer engagement metrics",
    ],
    github: "https://github.com/jacksonkhuto/ecommerce-catalog",
    demo: "https://catalog-demo.netlify.app",
    status: "In Progress",
    date: "2024",
    featured: false,
    tags: ["Frontend", "E-Commerce", "React", "UI/UX", "Performance"],
  },
  {
    id: 6,
    title: "Document Signing API",
    category: "Backend API",
    description:
      "A secure, auditable document signing API with user roles, signing workflows, and webhook integration for modern SaaS platforms.",
    longDescription:
      "A robust Document Signing API built with Node.js, Express, and Prisma for managing documents, templates, and electronic signatures. It provides secure signing workflows, audit trails, and webhook notifications for integration with external systems.",
    image: "/projects/document-signing-api.jpg",
    technologies: [
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "SQLite",
      "JWT Authentication",
      "Swagger UI",
    ],
    features: [
      "Upload and manage documents with version control",
      "Create signing requests with multiple signers",
      "Add signature fields (draw, type, date, image, etc.)",
      "Role-based user management (Admin, Developer, Signer)",
      "Audit logs for tracking document actions",
      "Webhook notifications for signing events",
    ],
    challenges: [
      "Designing secure and auditable signing workflows",
      "Managing multiple user roles and document permissions",
      "Ensuring data integrity and traceability",
    ],
    results: [
      "Improved signing process automation for organizations",
      "Enhanced compliance and traceability with audit logs",
      "Supports integration with SaaS platforms via webhooks",
    ],
    github: "https://github.com/jackson951/document-signing-api",
    demo: "https://document-signing-api-docs.netlify.app",
    status: "In Progress",
    date: "2025",
    featured: false,
    tags: [
      "Backend",
      "API",
      "Node.js",
      "Prisma",
      "Security",
      "Digital Signature",
    ],
  },
];

// ==================== Utility Functions ====================

export const getProjectsByCategory = (category) =>
  projects.filter((project) => project.category === category);

export const getFeaturedProjects = () =>
  projects.filter((project) => project.featured);

export const getProjectsByTag = (tag) =>
  projects.filter((project) => project.tags.includes(tag));

export const getProjectById = (id) =>
  projects.find((project) => project.id === id);

export const getCategories = () => [
  ...new Set(projects.map((project) => project.category)),
];

export const getAllTags = () => {
  const tags = projects.flatMap((project) => project.tags);
  return [...new Set(tags)];
};

export const projectStats = {
  total: projects.length,
  completed: projects.filter((p) => p.status === "Completed").length,
  inProgress: projects.filter((p) => p.status === "In Progress").length,
  featured: projects.filter((p) => p.featured).length,
};
// ==================== End of src/data/projects.js ====================
