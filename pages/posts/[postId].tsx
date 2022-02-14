import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostDetailPageProps {
  post: any;
}

export default function PostDetailPage(props: PostDetailPageProps) {
  const route = useRouter();

  return (
    <div>
      <h1>Post Detail Pages</h1>
      <p>{props.post.id}</p>
      <p>{props.post.title}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  return {
    paths: data.map((d: any) => ({ params: { postId: `${d.id}` } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const postId = context.params?.postId;

  if (!postId) return { notFound: true };

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
};
