type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
};

const blogs: Blog[] = [
    {
        title: "The Calc Free-Rider",
        date: "10/16/24",
        description: "It was supposed to be a PARTNER quiz >:|",
        image: ".../public/images/calc.jpg",
        imageAlt: "Calculus problems",
        slug: "calcfreerider",
    },
    {
        title: "Hack4Impact Meeting",
        date: "10/17/24",
        description: "Hack4Impact bootcamp meeting",
        image: ".../public/images/meeting.jpg",
        imageAlt: "React presentation",
        slug: "hack4impact",
    },
];

export default blogs;
