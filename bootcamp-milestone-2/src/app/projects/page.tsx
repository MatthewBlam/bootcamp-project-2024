import connectDB from "@/database/db";
import Project from "@/database/projectSchema";
import Content from "@/components/content";
import ProjectLayout from "@/components/project-layout";

async function getProjects() {
    await connectDB();
    try {
        const projects = await Project.find().orFail();
        return JSON.parse(JSON.stringify(projects));
    } catch (err) {
        console.log(err);
        return null;
    }
}

export default async function Portfolio() {
    const projects = await getProjects();
    return (
        <Content scroll={true}>
            <ProjectLayout projects={projects}></ProjectLayout>
        </Content>
    );
}
