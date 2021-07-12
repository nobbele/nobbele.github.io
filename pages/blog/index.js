import Header from "../../components/Header";
import ContentWrapper from "../../components/ContentWrapper";
import { PostsData } from "../../data";

const postsData = PostsData();

export default function Blog({ posts }) {
    return (<>
        <Header />
        <ContentWrapper>
            <ol>
                {posts.map(post => <li key={post.slug}>
                    <h2><a href={`/blog/${post.slug}`}>{post.title}</a></h2>
                    <p>Posted on: {post.date}</p>
                </li>)}
            </ol>
        </ContentWrapper>
    </>)
}

export function getStaticProps() {
    return {
        props: {
            posts: postsData.map(data => ({ slug: data.slug, title: data.title, date: data.date.toDateString() }))
        }
    };
}