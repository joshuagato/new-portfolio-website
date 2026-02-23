import {headerAndFooterLinks, myFullName, socialLinks} from '../utilities/reusables.js'


export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (<footer className="py-12 border-t border-border">
            <div className="container mx-auto px-2 lg:px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Logo & Copyright */}
                    <div className="text-center lg:text-left lg:flex lg:items-center lg:gap-2">
                        <a href="/" className="text-xl font-bold tracking-tight">
                            JG<span className="text-primary">.</span>
                        </a>
                        <p className="text-sm text-muted-foreground mt-2">
                            {`© 2025 - ${currentYear} ${myFullName}. All rights reserved.`}
                        </p>
                    </div>

                    {/* Links */}
                    <nav className="flex flex-wrap justify-center lg:gap-6">
                        {headerAndFooterLinks.map((link, index) => (<a
                            target={link.label === 'Old Portfolio Website' ? "_blank" : ''}
                            href={link.href}
                            key={index}
                            className={`px-4 py-2 text-sm rounded-full hover:bg-surface transition-colors ${
                                link.label === 'Old Portfolio Website'
                                    ? "text-red-500 hover:text-red-600"
                                    : "text-muted-foreground hover:text-foreground"
                            }`}
                        >
                            {link.label}
                        </a>))}
                    </nav>

                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                        {socialLinks.map((social) => (<a
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                target={"_blank"}
                                title={social.label}
                                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                            >
                                <social.icon className="w-5 h-5" />
                            </a>))}
                    </div>
                </div>
            </div>
        </footer>);
};
