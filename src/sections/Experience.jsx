const experiences = [{
    period: "August 2024 – Present",
    role: "Full Stack Engineer",
    company: "Elimel Labs",
    description: "Architected a diverse portfolio of scalable applications, including an AI-powered educational ERP system using React and Django and a high-performance betting insight platform using Laravel and Vue.js. Engineered complex data pipelines utilizing Django, Celery, and Pandas to automate hourly FTP-to-PostgreSQL ETL processes, while leveraging Figma and TypeScript (Next.js/Nest.js) to deliver modern, interactive user experiences.",
    technologies: ["React", "TypeScript", "Next.js", "Django", "GraphQL"],
    current: true,
}, {
    period: "Apr 2024 – Mar, 2025",
    role: "Full Stack Engineer",
    company: "RiskSpot",
    description: "Managed full-lifecycle DevOps for a Cybersecurity firm, from migrating VPS environments to automating daily database backups and resource monitoring scripts. Built custom Node.js applications for real-time server health tracking and streamlined enterprise user onboarding via bulk CSV and API integrations.",
    technologies: ["React", "Node.js", "Django", "VPS"],
    current: false,
}, {
    period: "Nov 2022 – Mar 2024",
    role: "Full Stack Developer",
    company: "Gradia",
    description: "Developed and maintained multiple web and mobile applications using Django, React, and Flutter, with a heavy focus on Test-Driven Development (TDD) and Selenium. Transformed complex Figma designs into interactive UIs and optimized enterprise workflows by implementing bulk data processing and integrated financial and roster management systems.",
    technologies: ["React", "Django", "Flutter", "PythonAnywhere"],
    current: false,
}, {
    period: "Nov 2021 – Oct 2022",
    role: "Tech Support || Web Developer",
    company: "VirTutor Online",
    description: "Led the architectural transition of a WordPress-based tutoring platform to a modern Laravel and Vue.js stack, significantly improving system performance and administrative insight. Developed custom plugin enhancements for real-time security and automated video recording, while managing end-to-end server operations and search performance analytics.",
    technologies: ["Vue", "Laravel", "WordPress", "Siteground"],
    current: false,
}, {
    period: "Nov 2020 – Oct 2021",
    role: "Full Stack Developer",
    company: "Enscript Solutions Limited",
    description: "Engineered complex FinTech solutions for fund managers and broker-dealers using the MERN stack and Groovy/Grails. Developed a custom automation API to streamline regulatory client onboarding and built a comprehensive end-to-end testing infrastructure using Nightwatch.js and Selenium to ensure high software reliability.",
    technologies: ["React", "Node.js", "MongoDB", "Heroku"],
    current: false,
}, {
    period: "Jan 2019 – Oct 2020",
    role: "Full Stack Developer",
    company: "Filly Coder",
    description: "Developed and deployed diverse web applications ranging from automotive rental platforms to fintech-integrated e-commerce sites using the MERN and Laravel stacks. Proven track record in maintaining legacy systems, implementing secure authentication workflows, and building custom automation tools with Python, alongside hands-on experience in cloud infrastructure management.",
    technologies: ["JavaScript", "PHP", "Node.js", "MySQL", "AWS EC2"],
    current: false,
},];

export const Experience = () => {
    return (<section id="experience" className="py-32 relative overflow-hidden">
        <div
            className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
        />

        <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="max-w-3xl mb-16">
          <span
              className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
                <h2
                    className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
                >
                    Experience that{" "}
                    <span className="font-serif italic font-normal text-white">
              {" "}
                        speaks volumes.
            </span>
                </h2>

                <p
                    className="text-muted-foreground
           animate-fade-in animation-delay-200"
                >
                    A timeline of my professional growth, from curious beginner to
                    senior engineer leading teams and building products at scale.
                </p>
            </div>

            {/* Timeline */}
            <div className="relative">
                <div
                    className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>

                {/* Experience Items */}
                <div className="space-y-12">
                    {experiences.map((exp, idx) => (<div
                        key={idx}
                        className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                        style={{animationDelay: `${(idx + 1) * 150}ms`}}
                    >
                        {/* Timeline Dot */}
                        <div
                            className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                            {exp.current && (<span
                                className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>)}
                        </div>

                        {/* Content */}
                        <div
                            className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                        >
                            <div
                                className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                            >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                                <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                <p className="text-muted-foreground">{exp.company}</p>
                                <p className="text-sm text-muted-foreground mt-4">
                                    {exp.description}
                                </p>
                                <div
                                    className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}
                                >
                                    {exp.technologies.map((tech, techIdx) => (<span
                                        key={techIdx}
                                        className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                    >
                          {tech}
                        </span>))}
                                </div>
                            </div>
                        </div>
                    </div>))}
                </div>
            </div>
        </div>
    </section>);
};
