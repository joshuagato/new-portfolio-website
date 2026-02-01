import { Github, Linkedin, Twitter, PhoneCallIcon, MailsIcon, Mail, MapPin, Phone } from "lucide-react";

export const socialLinks = [
    {icon: MailsIcon, href: "mailTo:joshuagato37@gmail.com", label: "Email"},
    {icon: PhoneCallIcon, href: "tel: +233278223838", label: "Call"},
    {icon: PhoneCallIcon, href: "https://api.whatsapp.com/send/?phone=233278223838&text&type=phone_number&app_absent=0", label: "WhatsApp"},
    {icon: Github, href: "https://github.com/joshuagato", label: "GitHub"},
    {icon: Linkedin, href: "https://www.linkedin.com/in/joshuagato", label: "LinkedIn"},
    {icon: Twitter, href: "https://x.com/JoshuaGato5", label: "Twitter"},
];

export const headerAndFooterLinks = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#experience", label: "Experience"},
    {href: "#testimonials", label: "testimonials"},
    {href: "#contact", label: "Contact"},
];

export const myFullName = "Joshua Gato";

export const contactInfo = [{
    icon: Mail, label: "Email", value: "joshuagato37@gmail.com", href: "mailto:joshuagato37@gmail.com",
}, {
    icon: Phone, label: "Phone", value: "+233 (278) 22-38-38", href: "tel:+233278223838",
}, {
    icon: MapPin, label: "Location", value: "Accra, Ghana", href: "#",
},];