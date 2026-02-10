export interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    image: string;
    github?: string;
    demo?: string;
    category?: string;
    problemStatement?: string;
    role?: string;
    architecture?: string;
    keyFeatures?: string[];
    challengesSolved?: string[];
    securityImplementations?: string[];
    whatILearned?: string[];
}
