var blogs = [
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
var blogContainer = document.getElementById("blog-container");
blogs.forEach(function (blog) {
    var _a;
    var blogLink = document.createElement("a");
    blogLink.setAttribute("href", "blogs/".concat(blog.slug, ".html"));
    var blogElement = document.createElement("div");
    blogElement.setAttribute("class", "blog");
    var title = document.createElement("h1");
    title.textContent = blog.title;
    var image = document.createElement("img");
    image.setAttribute("src", blog.image);
    image.setAttribute("alt", blog.imageAlt);
    var description = document.createElement("p");
    description.textContent = blog.description;
    blogElement.appendChild(title);
    blogElement.appendChild(image);
    blogElement.appendChild(description);
    blogLink.appendChild(blogElement);
    (_a = document.getElementById("blog-container")) === null || _a === void 0 ? void 0 : _a.appendChild(blogLink);
});
