import {ChevronLeft, ChevronRight, Quote} from "lucide-react";
import {useState} from "react";

const testimonials = [{
    quote: "I had the pleasure of working with Joshua Gato while I was a junior software engineer, and " +
        "I can confidently say he is one of the most dependable and supportive engineers I’ve worked with. " +
        "Joshua was always respectful, approachable, and incredibly patient. He made complex concepts easy " +
        "to understand and took the time to break down tasks step by step, helping me clearly see where to " +
        "begin and how to move forward.\n" +
        "He was always available whenever I needed guidance, no matter the time, and his tolerance and willingness " +
        "to help made him feel more like a brother than just a colleague. Joshua is someone you can truly rely on " +
        "when results are needed, he shows up, collaborates effectively, and gets the job done. He creates a " +
        "positive working environment, and it’s genuinely impossible to dislike working with him.\n" +
        "I highly recommend Joshua to any team looking for a skilled, collaborative, and reliable software engineer.",
    author: "Frank Paintsil",
    role: "Software Engineer, Riskspot",
    avatar: "/frank.jpeg",
}, {
    quote: "I’ve had the pleasure of working with Joshua at Talent Co-op, where I experienced " +
        "firsthand his T-shaped skillset—broad knowledge across technologies and deep expertise in " +
        "TypeScript, React, Node.js, NestJS, PostgreSQL, MongoDB, microservices, REST & GraphQL APIs, CI/CD, " +
        "GitHub Actions, and database design. Working with him, I saw how he can design scalable systems, " +
        "implement complex features, and build responsive, maintainable applications efficiently.\n" +
        "\n" +
        "Joshua collaborates seamlessly with teams, adapts quickly to new technologies, and consistently " +
        "delivers high-quality, practical solutions. Any team would benefit greatly from his advanced " +
        "technical skills and versatility.\n" +
        "\n" +
        "\n",
    author: "David Efui Yevu",
    role: "Full Stack Engineer, Talent Co-op",
    avatar: "/david.jpeg",
}, {
    quote: "I had the pleasure of working alongside Joshua Gato at Riskspot.io, a Ghana-based cybersecurity SaaS platform dedicated to reducing human cyber risk and building resilience in businesses . As a back-end developer, Joshua played a pivotal role in developing and refining our platform's features, which include threat simulation, detection and management, and vulnerability assessment . \n" + "\n" + "Joshua's deep understanding of back-end technologies was instrumental in delivering a user-friendly experience that empowers employees to become cybersecurity champions . \n" + "\n" + "Beyond his technical expertise, Joshua has a remarkable ability to demystify complex back-end concepts. His patient guidance significantly enhanced my understanding of our platform's architecture and functionality.\n" + "\n" + "Joshua's collaborative spirit and dedication to excellence make him an invaluable asset to any team. I wholeheartedly recommend him and am confident that his contributions will drive success in any endeavor he undertakes.\n" + "\n" + "\n",
    author: "Redeemer Dugbazah",
    role: "Frontend Engineer, Riskspot",
    avatar: "/redeemer.jpeg",
}, {
    quote: "Working alongside Joshua Gato at Riskspot Limited was genuinely impressive. Joshua was instrumental in bringing our cybersecurity web application from concept to reality—a robust platform now actively safeguarding numerous businesses across Africa. He is an exceptionally skilled Full Stack Engineer who effortlessly manages end-to-end software development, seamlessly translating detailed UI designs into polished, high-performance applications.\n" + "\n" + "Joshua excels across the entire technology stack, from crafting responsive front-end interfaces to engineering scalable and secure back-end solutions. His versatility is remarkable—he efficiently navigates between creating intuitive user experiences and architecting complex databases, APIs, and server-side functionalities. Joshua approaches every project with meticulous precision, ensuring not only functionality but optimal performance and user engagement.\n" + "\n" + "Beyond his outstanding technical capabilities, Joshua is genuinely kind, humble, and supportive. He consistently offers assistance, readily shares his expertise, and brings positivity into every interaction. His respectful and collaborative attitude creates a productive, uplifting environment that enhances the entire team's performance.\n" + "\n" + "Joshua Gato would undoubtedly be a tremendous asset to any organization looking for a highly capable, dependable Full Stack Engineer. I strongly recommend Joshua—he's someone who consistently exceeds expectations and elevates every project he's involved with.",
    author: "Bright Baiden",
    role: "Product Designer, Riskspot",
    avatar: "/bright.jpeg",
},];

export const Testimonials = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    const next = () => {
        setActiveIdx((prev) => (prev + 1) % testimonials.length);
    };

    const previous = () => {
        setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };
    return (
        <section id="testimonials" className="py-32 relative overflow-hidden">
            <div
                className="absolute top-1/2 left-1/2 w-[800px] h-[800px]
                bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
            />
            <div
                className="container mx-auto px-6 relative z-10"
            >
                {/* Section Header */}
                <div
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                <span
                    className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in"
                >
                    What People Say
                </span>
                    <h2
                        className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground"
                    >
                        Kind words from{" "}
                        <span
                            className="font-serif italic font-normal text-white"
                        >
                          amazing people.
                        </span>
                    </h2>
                </div>

                {/* Testimonial Carousel */}
                <div className="max-w-6xl mx-auto">
                    <div className="relative">
                        {/* Main Testimonial */}
                        <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
                            <div
                                className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                <Quote className="w-6 h-6 text-primary-foreground"/>
                            </div>

                            <blockquote className="text-sm md:text-xl font-medium leading-relaxed mb-8 pt-4">
                                "{testimonials[activeIdx].quote}"
                            </blockquote>

                            <div className="flex items-center justify-center gap-4">
                                <img
                                    src={testimonials[activeIdx].avatar}
                                    alt={testimonials[activeIdx].author}
                                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                                />
                                <div>
                                    <div className="font-semibold">
                                        {testimonials[activeIdx].author}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {testimonials[activeIdx].role}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonials Navigation */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button
                                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                                onClick={previous}
                            >
                                <ChevronLeft/>
                            </button>

                            <div className="flex gap-2">
                                {testimonials.map((_, idx) => (<button
                                    onClick={() => setActiveIdx(idx)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIdx ? "w-8 bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                                />))}
                            </div>

                            <button
                                onClick={next}
                                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                            >
                                <ChevronRight/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
};
