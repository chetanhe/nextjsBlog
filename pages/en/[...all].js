import { useRouter } from 'next/router';

export default function All() {
  const router = useRouter();

  return <div>{JSON.stringify(router.query)}</div>;
}

export async function getStaticPaths() {
  //fetch some of static pages

  return {
    paths: [
      { params: { all: ['/en/ed'] } }, // See the "paths" section below
    ],
    fallback: true,
  };
}

export async function getStaticProps() {
  return {
    notFound: true,
  };
}
