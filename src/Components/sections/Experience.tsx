
import { Briefcase } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: "Software Engineer L2",
            company: "Gemini Solutions Pvt. Ltd.",
            period: "2024 – Present",
            location: "Haryana, India",
            description: "Leading architectural design and development of scalable web applications.",
            achievements: [
                "Led architectural design of a Micro-Frontend CRM system, accelerating delivery by 30%.",
                "Designed centralized UI component library (50+ components), reducing redundant code by 40%.",
                "Optimized RESTful APIs handling 10,000+ daily requests, improving response time by 25%.",
                "Reduced initial load time by 45% and achieved Lighthouse score of 92 via code splitting.",
                "Mentored junior developers and enforced best practices, reducing post-release defects by 35%."
            ]
        },
        {
            role: "Software Engineer L1",
            company: "Gemini Solutions Pvt. Ltd.",
            period: "Apr 2022 – Apr 2024",
            location: "Haryana, India",
            description: "Developed and enhanced internal portals and commercial microsites.",
            achievements: [
                "Enhanced internal service desk portal improving tracking efficiency by 20% using React/Redux.",
                "Built high-performance insurance microsite increasing user conversions by 15%.",
                "Created 30+ reusable UI components with Material-UI and Tailwind CSS.",
                "Led Webpack to Vite migration, cutting build times by 50%.",
                "Implemented comprehensive testing (Jest, RTL) maintaining 90%+ code coverage."
            ]
        }
    ];

    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-center">Professional Experience</h2>

                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-2">
                                <div>
                                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                                        <Briefcase size={20} className="text-primary" />
                                        {exp.role}
                                    </h3>
                                    <div className="text-lg text-muted-foreground font-medium">{exp.company}</div>
                                </div>
                                <div className="text-sm font-medium px-3 py-1 bg-muted rounded-full w-fit">
                                    {exp.period}
                                </div>
                            </div>

                            <ul className="space-y-3">
                                {exp.achievements.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                        <span className="mt-2 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
