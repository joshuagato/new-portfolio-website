import WhatsApp from '../../public/whatsapp.svg';
import {Facebook, Github, Linkedin, Mail, MailsIcon, MapPin, Phone, PhoneCallIcon, Twitter} from "lucide-react";
import {FaWhatsapp} from 'react-icons/fa';

export const WhatsAppExport = FaWhatsapp;
export const PhoneCallIconExport = PhoneCallIcon;

export const socialLinks = [
    {icon: MailsIcon, href: "mailTo:joshuagato37@gmail.com", label: "Email"},
    {icon: PhoneCallIcon, href: "tel: +233278223838", label: "Call"},
    {
        icon: FaWhatsapp,
        href: "https://api.whatsapp.com/send/?phone=233278223838&text&type=phone_number&app_absent=0",
        label: "WhatsApp"
    },
    {icon: Github, href: "https://github.com/joshuagato", label: "GitHub"},
    {icon: Linkedin, href: "https://www.linkedin.com/in/joshuagato", label: "LinkedIn"},
    {icon: Twitter, href: "https://x.com/JoshuaGato5", label: "Twitter"},
    {icon: Facebook, href: "https://web.facebook.com/joshua.gato.5074/", label: "Facebook"},
];

export const headerAndFooterLinks = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#experience", label: "Experience"},
    {href: "#testimonials", label: "Testimonials"},
    {href: "#contact", label: "Contact"},
    {href: "https://joshuagato.github.io?ref=joshuagato.online", label: "Old Portfolio Website"},
];

export const myFullName = "Joshua Gato";

export const contactInfo = [{
    icon: Mail, label: "Email", value: "joshuagato37@gmail.com", href: "mailto:joshuagato37@gmail.com",
}, {
    icon: Phone, label: "Phone", value: "+233 (0) 278-22-38-38", href: "tel:+233278223838",
}, {
    icon: MapPin, label: "Location", value: "Accra, Ghana", href: "#",
},];

export const skills = ["React", "Next.js", "Vue", "Nuxt.js", "TypeScript", "Node.js", "Laravel", "Django",
    "GraphQL", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Vercel", "Tailwind CSS", "Prisma", "Jest", "Cypress",
    "Figma", "Git", "GitHub Actions"
];