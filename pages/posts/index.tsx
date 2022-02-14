import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import * as React from 'react';

export interface PostPageProps {
  posts: any[];
}

export default function PostPage(props: PostPageProps) {
  return (
    <div>
      <h1>Post pages</h1>
      <ul>
        {props.posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostPageProps> = async (
  context: GetStaticPropsContext
) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  console.log(data);

  return {
    props: {
      posts: data.map((d: any) => ({ id: d.id, title: d.title })),
    },
  };
};
