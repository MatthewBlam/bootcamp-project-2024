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
        image: "./images/calc.jpg",
        imageAlt: "Calculus problems",
        slug: "calcfreerider",
    },
    {
        title: "Hack4Impact Meeting",
        date: "10/17/24",
        description: "Hack4Impact bootcamp meeting",
        image: "./images/meeting.jpg",
        imageAlt: "React presentation",
        slug: "hack4impact",
    },
];

const blogContainer = document.getElementById("blog-container");

blogs.forEach((blog) => {
    const blogLink = document.createElement("a");
    blogLink.setAttribute("href", `blogs/${blog.slug}.html`);

    const blogElement = document.createElement("div");
    blogElement.setAttribute("class", "blog");

    const title = document.createElement("h1");
    title.textContent = blog.title;

    const image = document.createElement("img");
    image.setAttribute("src", blog.image);
    image.setAttribute("alt", blog.imageAlt);

    const description = document.createElement("p");
    description.textContent = blog.description;

    blogElement.appendChild(title);
    blogElement.appendChild(image);
    blogElement.appendChild(description);

    blogLink.appendChild(blogElement);
    document.getElementById("blog-container")?.appendChild(blogLink);
});
