import Blog from "@/components/blog";
import Content from "@/components/content";
import connectDB from "@/database/db";
import _Blog from "@/database/blogSchema";

async function getBlog(slug: string) {
    await connectDB();
    try {
        const data = await _Blog.find().orFail();
        const blogs = JSON.parse(JSON.stringify(data));
        return blogs.find((blog: any) => blog.slug == slug);
    } catch (err) {
        console.log(err);
        return null;
    }
}

export default async function BlogPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;
    const blog = await getBlog(slug);
    return (
        <Content scroll={true}>
            <Blog blog={blog}></Blog>
        </Content>
    );
}
