
const Skills = () => {
    const skillCategories = [
        {
            title: "Primary Stack",
            skills: ["React.js", "TypeScript", "JavaScript (ES6+)", "Node.js", "Redux Toolkit", "React Query", "Micro-Frontend", "RESTful APIs"]
        },
        {
            title: "UI & Frameworks",
            skills: ["Next.js", "Vite", "Material-UI (MUI)", "Tailwind CSS", "HTML5", "CSS3"]
        },
        {
            title: "Performance & Testing",
            skills: ["Code Splitting", "Lazy Loading", "Web Vitals", "Jest", "React Testing Library", "Lighthouse Optimization"]
        },
        {
            title: "Tools & DevOps",
            skills: ["Git", "CI/CD Pipelines", "Webpack", "Agile/Scrum", "SDLC", "SQL"]
        }
    ];

    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-center">Technical Skills</h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="bg-card border border-border rounded-xl p-8 shadow-sm">
                            <h3 className="text-xl font-bold mb-6 text-foreground">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1.5 bg-muted hover:bg-primary/10 hover:text-primary transition-colors rounded-lg text-sm font-medium text-muted-foreground cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
