import Content from "@/components/content";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";
import BlogLayout from "@/components/blog-layout";

async function getBlogs() {
    await connectDB();
    try {
        const blogs = await Blog.find().sort({ date: -1 }).orFail();
        return blogs;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export default async function Blogs() {
    const blogs = await getBlogs();
    console.log(blogs);
    return (
        <Content scroll={true}>
            <BlogLayout blogs={blogs}></BlogLayout>
        </Content>
    );
}
