import Blog from "@/components/blog";
import Content from "@/components/content";

export default function Hack4Impact() {
    return (
        <Content scroll={true}>
            <Blog
                title="Hack4Impact Meeting"
                date="10/17/24"
                image="/images/meeting.jpg"
                imageAlt="React presentation"
                content="Today was the second meeting for Hack4Impact bootcamp. There was a Kahoot at the start of the meeting, and we apparently do not have Kahoot premium. How disappointing.... "></Blog>
        </Content>
    );
}
