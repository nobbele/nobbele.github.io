import Header from "../../components/Header";
import ContentWrapper from "../../components/ContentWrapper";
import { PostsData } from "../../data";

const postsData = PostsData();

export default function Post({ title, content, date }) {
    return (<>
        <Header />
        <ContentWrapper>
            <h1>{title}</h1>
            <p>Date: {date}</p>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </ContentWrapper>
    </>)
}

export function getStaticProps({ params }) {
    let data = postsData.find(p => p.slug === params.slug);
    return {
        props: { title: data.title, content: data.content, date: data.date.toDateString() }
    }
}

export async function getStaticPaths() {
    return {
        paths: postsData.map(obj => ({
            params: {
                slug: obj.slug
            }
        })),
        fallback: false
    }
}