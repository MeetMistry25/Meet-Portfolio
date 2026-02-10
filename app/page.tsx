import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import CallToAction from "@/components/CallToAction";
import About from "@/components/About";
import KeyAchievements from "@/components/KeyAchievements";
import { supabase } from "@/Lib/supabase";
import { MOCK_PROJECTS } from "@/Lib/data";
import { Project } from "@/Lib/types";

export const revalidate = 60; // Revalidate data every 60 seconds

async function getProjects() {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(3);

    if (error || !data || data.length === 0) {
      console.warn("Using mock data due to Supabase error or empty table:", error);
      return MOCK_PROJECTS;
    }

    return data as Project[];
  } catch (err) {
    console.error("Failed to fetch projects:", err);
    return MOCK_PROJECTS;
  }
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Skills />
      <KeyAchievements />
      <FeaturedProjects projects={projects} />
      <Timeline />
      <CallToAction />
    </div>
  );
}
