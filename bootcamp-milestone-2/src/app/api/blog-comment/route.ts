import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

function validate(body: any) {
    if (!body.user || !body.comment || !body.slug || !body.time) {
        return NextResponse.json(
            {
                message: "Body must have 'user', 'comment', 'slug', and 'time'",
            },
            { status: 400 }
        );
    }
    return false;
}

export async function POST(req: NextRequest) {
    if (req.method !== "POST") {
        return NextResponse.json(
            {
                message: "Only POST requests allowed",
            },
            { status: 405 }
        );
    }
    try {
        await connectDB();
        const body = await req.json();
        const invalid = validate(body);
        if (invalid) {
            return invalid;
        }
        const blog = await Blog.findOne({ slug: body.slug });
        if (!blog) {
            return NextResponse.json(
                {
                    message: "Blog not found",
                },
                { status: 404 }
            );
        }
        const comment = {
            user: body.user,
            comment: body.comment,
            time: body.time,
        };
        blog.comments.push(comment);
        await blog.save();
        return NextResponse.json({
            message: "Comment added",
            comment: comment,
        });
    } catch (err) {
        console.log(err);
        return NextResponse.json(
            { message: "An error occured" },
            { status: 500 }
        );
    }
}
