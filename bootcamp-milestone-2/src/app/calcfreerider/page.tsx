import Blog from "@/components/blog";
import Content from "@/components/content";

export default function Hack4Impact() {
    return (
        <Content scroll={true}>
            <Blog
                title="The Calc Free-Rider"
                date="10/16/24"
                image="/images/calc.jpg"
                imageAlt="Calculus problems"
                content="Yesterday was a pretty busy day for me. I woke up extra early to get some last minute studying in for my quiz in Calc III. Every week we have a partner quiz, and up until now I've had pretty good partners, so I was optimistic coming into this week's quiz.

When we began, I asked my partner how he felt about the content, but his response was that he didn't know how to do anything. He then proceeded to watch me take the entire quiz by myself. He didn't even have the decency to pick up his pencil!!! He just stared at me, paper blank. While other pairs were collaborating and helping each other out, I was left to thug it out all by myself.

Overall, the quiz itself wasn't all too bad, although I was the last person to finish since I was solo. Praying I never get that partner again. "></Blog>
        </Content>
    );
}
