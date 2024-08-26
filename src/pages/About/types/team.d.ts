export interface SocialLink {
    link: string;
    icon: string;
}

export interface TeamMember {
    image: string;
    name: string;
    title: string;
    socials: SocialLink[];
}
