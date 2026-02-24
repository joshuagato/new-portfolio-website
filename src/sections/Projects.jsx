import {ArrowUpRight, Github} from "lucide-react";
import {useState} from "react";

const sourceIdentifier = "?ref=joshuagato.online";

const projects = [{
    title: "Spotified",
    description: "A Spotify clone. ",
    credentials: "To play music create an account or login with Email: joshuagato2@gmail.com Password: 3712@ITstd",
    image: "/projects/spotified.png",
    tags: ["REACT/REDUX", "NODE/EXPRESS", "GRAPHQL", "POSTGRESQL"],
    link: "https://spotified.joshuagato.online" + sourceIdentifier,
    github: "https://github.com/joshuagato/react-redux-node-express-graphql-spotified-app",
}, {
    title: "Streamify",
    description: "A chat and video call application",
    credentials: "To see the App, create an account or login with Email: joshuagato2@gmail.com Password: 3712@ITstd",
    image: "/projects/streamify.png",
    tags: ["REACT/ZUSTAND", "NODE/EXPRESS", "REST API", "MONGODB"],
    link: "https://streamify.joshuagato.online" + sourceIdentifier,
    github: "https://github.com/joshuagato/react-node-vite-tailwindcss-getstream-tanstack-daisyui-zustand-lucide-streamify-chat-video-call-app",
}, {
    title: "The Furniture Store",
    description: "An AI shop powered by Vercel AI, helping users search for products smarter faster.",
    image: "/projects/aiecommerce.png",
    tags: ["NEXT/TS", "CLERK/SANITY", "ZUSTAND", "VERCEL-AI"],
    link: "https://joshua-gato-aiecommerce.netlify.app" + sourceIdentifier,
    github: "https://github.com/joshuagato/next-tailwindcss-clerk-sanity-shadcn-lucide-vercelai-furniture-ai-ecommerce-app",
}, {
    title: "Droply",
    description: "A dropbox clone: for saving files in folders in the cloud",
    image: "/projects/droply.png",
    tags: ["NEXT/TS", "DRIZZLE", "MongoDB", "Redis"],
    link: "https://joshua-gato-droply-app.netlify.app" + sourceIdentifier,
    github: "https://github.com/joshuagato/next-clerk-drizzle-neon-heroui-imagekit-zod-react_hook_forms-droply-app",
}, {
    title: "3Ninjas",
    description: "A website that provides betting tips.",
    credentials: "To see the Admin Dashboard, you can login with Phone number: 0242401113 Password: 12345678",
    image: "/projects/3ninjas.png",
    tags: ["VUE/VITE", "TAILWINDCSS", "MYSQL", "PHP/LARAVEL"],
    link: "https://threeninjas.joshuagato.online" + sourceIdentifier,
    github: "https://github.com/joshuagato/3ninjas_laravel_vue_tailwindcss_vite_mysql",
}, {
    title: "Amazoned",
    description: "An e-commerce web application.",
    credentials: "To see the Admin Dashboard, you can login with Phone number: 0242401113 Password: 12345678",
    image: "/projects/bbcom.png",
    tags: ["VUE/VUEX", "MIX/BOOTSTRAP", "MYSQL", "PHP/LARAVEL"],
    link: "https://laravueecommerce.joshuagato.online" + sourceIdentifier,
    github: "https://github.com/joshuagato/ecommerce_laravel_vue_bootstrap_mix_mysql",
}, {
    title: "Twitter Clone",
    description: "A web application clone of Twitter.",
    credentials: "You create an account or login with Email: joshuagato Password: some@Password",
    image: "/projects/twitter.png",
    tags: ["NUXT/TS", "PRISMA/SUPABASE", "MONGODB", "TAILWINDCSS"],
    link: "https://twitter.joshuagato.online" + sourceIdentifier,
    github: "https://github.com/joshuagato/nuxt-tailwindcss-primsa-bcrypt-formidable-cloudinary-twitter-clone-app",
}, {
    title: "AliExpress Clone",
    description: "A clone of AliExpress website.",
    credentials: "To see the Admin Dashboard, you can login with Phone number: 0242401113 Password: 12345678",
    image: "/projects/aliexpressclone.png",
    tags: ["NUXT/TS", "PRISMA/SUPABASE", "POSTGRESQL", "STRIPE"],
    link: "https://aliexpressclone.joshuagato.online" + sourceIdentifier,
    github: "https://github.com/joshuagato/nuxt-tailwindcss-pinia-supabase-prisma-stripe-aliexpress-clone-app",
},];

export const Projects = () => {
    const [activeProjectId, setActiveProjectId] = useState(null);

    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* ... (Background glows) */}
            <div className="container mx-auto px-6 relative z-10">
                {/* ... (Header) */}

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 cursor-pointer"
                            style={{animationDelay: `${(idx + 1) * 100}ms`}}
                            // 3. Toggle active state on click
                            onClick={() => setActiveProjectId(activeProjectId === idx ? null : idx)}
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={`w-full h-full object-cover transition-transform duration-700 
                                        ${activeProjectId === idx ? "scale-110" : "group-hover:scale-110"}`}
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"/>

                                {/* 4. Updated Overlay Logic */}
                                <div
                                    className={`absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 bg-black/40 md:bg-transparent
                                    ${activeProjectId === idx
                                        ? "opacity-100" // Stay visible if clicked
                                        : "opacity-0 group-hover:opacity-100" // Hover logic for desktop
                                    }`}
                                >
                                    <a
                                        target={'_blank'}
                                        href={project.link}
                                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the link
                                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                        <ArrowUpRight className="w-5 h-5"/>
                                    </a>
                                    <a
                                        target={'_blank'}
                                        href={project.github}
                                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the link
                                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                        <Github className="w-5 h-5"/>
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight
                                        className="w-5 h-5
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                                    />
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span
                                            key={tagIdx}
                                            className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                                        >
                      {tag}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
