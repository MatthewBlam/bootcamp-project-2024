import mongoose, { Schema } from "mongoose";

// Project schema
type Project = {
    img: string;
    title: string;
    description: string;
    link: string;
};

// Mongoose schema
const projectSchema = new Schema<Project>({
    img: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
});

// Defining the collection and model
const Project =
    mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;
