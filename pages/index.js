import Head from 'next/head'
import Link from 'next/link'
import Layout, {siteTitle} from '../components/layout';
import { getSortedPostData } from '../lib/posts'
import utilStyles from "../styles/utils.module.css";
import { useSelector } from "react-redux";
import { selectAuthState } from '../slices/authSlice';

export async function getStaticProps(){
  const posts = await getSortedPostData();
  return {
    props:{
      posts
    }
  };
}

export default function Home({posts}) {
  const authState = useSelector(selectAuthState);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your self introduction]</p>
        <p>(This is a sample website - you'll be building a site like this on {' '})</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        {authState ? (<p>Logged in</p>): (<p>Logged out</p>)}
        <Link href='/en'>En</Link>
        <ul className={utilStyles.list}>
          {posts.map((post)=>{
            return (
              <li className={utilStyles.listItem} key={post.id}>
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}
