export const PostsData = () => {
    const path = require("path");
    const fs = require("fs");
    const matter = require("gray-matter");

    const postsDirectory = path.join(process.cwd(), 'posts');
    const filenames = fs.readdirSync(postsDirectory);

    let data = filenames.map((filename) => {
        const filePath = path.join(postsDirectory, filename)
        const fileContents = fs.readFileSync(filePath, 'utf8');
        let obj = matter(fileContents);
        return {
            slug: filename.replace(".md", ""),
            title: obj.data['title'],
            date: new Date(obj.data['date']),
            content: obj.content,
        };
    }).sort((a, b) => b.date - a.date);

    return data;
};