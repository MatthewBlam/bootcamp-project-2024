import {
    ResumeContainer,
    ResumeSection,
    ResumeSectionEntry,
} from "../../components/resume";
import Content from "../../components/content";

export default function Resume() {
    return (
        <Content>
            <ResumeContainer
                name="Matthew Blam"
                contacts={[
                    "Irvine, CA",
                    "blammatthew@gmail.com",
                    "https://github.com/MatthewBlam",
                ]}></ResumeContainer>
        </Content>
    );
}
