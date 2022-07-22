import Head from "next/head";
import Date from "../../components/date";
import Layout from "../../components/layout";
import { getPostById, getSortedPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

export default function Post({post}){
    return(
        <Layout>
            <Head>
                {post.title}
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{post.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={post.date} />
                </div>
            </article>
        </Layout>
    );
}

export async function getStaticPaths(){
     // Return a list of possible value for id
    const posts = await getSortedPostData();
    const paths = posts.map((post)=>{
        return {params: {id: post.id}}
    });
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({params}){
    const post = await getPostById(params.id);
    
    return {
        props:{
            post
        }
    }
}