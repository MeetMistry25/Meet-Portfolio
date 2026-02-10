import ProjectsPageContent from "@/components/ProjectsPageContent";
import { supabase } from "@/Lib/supabase";
import { MOCK_PROJECTS } from "@/Lib/data";
import { Project } from "@/Lib/types";

export const revalidate = 60;

async function getProjects() {
    try {
        const { data, error } = await supabase
            .from("projects")
            .select("*")
            .order("created_at", { ascending: false });

        if (error || !data || data.length === 0) {
            return MOCK_PROJECTS;
        }

        // Merge DB data with Mock data to ensure all new fields are populated
        // This is crucial if the DB schema/data hasn't been updated yet
        const enrichedData = data.map((dbProject: any) => {
            const mockProject = MOCK_PROJECTS.find(p =>
                p.title.toLowerCase() === dbProject.title.toLowerCase() ||
                p.title.toLowerCase().includes(dbProject.title.toLowerCase()) ||
                dbProject.title.toLowerCase().includes(p.title.toLowerCase())
            );

            if (mockProject) {
                return {
                    ...dbProject,
                    // Prioritize DB data if it exists, otherwise fall back to Mock data
                    problemStatement: dbProject.problemStatement || mockProject.problemStatement,
                    role: dbProject.role || mockProject.role,
                    architecture: dbProject.architecture || mockProject.architecture,
                    keyFeatures: (dbProject.keyFeatures && dbProject.keyFeatures.length > 0) ? dbProject.keyFeatures : mockProject.keyFeatures,
                    challengesSolved: (dbProject.challengesSolved && dbProject.challengesSolved.length > 0) ? dbProject.challengesSolved : mockProject.challengesSolved,
                    securityImplementations: (dbProject.securityImplementations && dbProject.securityImplementations.length > 0) ? dbProject.securityImplementations : mockProject.securityImplementations,
                    whatILearned: (dbProject.whatILearned && dbProject.whatILearned.length > 0) ? dbProject.whatILearned : mockProject.whatILearned,
                    category: dbProject.category || mockProject.category,
                    // Ensure arrays are arrays
                    tech: (dbProject.tech && dbProject.tech.length > 0) ? dbProject.tech : mockProject.tech,
                };
            }
            return dbProject;
        });

        return enrichedData as Project[];
    } catch (err) {
        return MOCK_PROJECTS;
    }
}

export default async function ProjectsPage() {
    const projects = await getProjects();
    return <ProjectsPageContent projects={projects} />;
}
