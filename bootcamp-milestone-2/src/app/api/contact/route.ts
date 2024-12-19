import { NextResponse, NextRequest } from "next/server";
import sendMail from "@/utils/sendMail";

function validate(body: any) {
    if (!body.name || !body.email || !body.message) {
        return NextResponse.json(
            {
                message: "Body must have 'name', 'email', and 'message'",
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
        const body = await req.json();
        const invalid = validate(body);
        if (invalid) {
            return invalid;
        }
        await sendMail(body.name, body.email, body.message);
        return NextResponse.json({
            message: "Message sent!",
        });
    } catch (err) {
        console.log(err);
        return NextResponse.json(
            { message: "An error occured" },
            { status: 500 }
        );
    }
}
