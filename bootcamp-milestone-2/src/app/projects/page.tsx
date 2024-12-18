import connectDB from "@/database/db";
import Project from "@/database/projectSchema";
import Content from "@/components/content";
import ProjectLayout from "@/components/project-layout";

async function getProjects() {
    await connectDB();
    try {
        const data = await Project.find().orFail();
        const projects = JSON.parse(JSON.stringify(data));
        return projects;
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
