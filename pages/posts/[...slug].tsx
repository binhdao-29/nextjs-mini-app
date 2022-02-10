import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostParamsPageProps {}

export default function PostParamsPage(props: PostParamsPageProps) {
  const route = useRouter();

  return (
    <div>
      <h1>Post Params Pages</h1>
      {JSON.stringify(route.query)}
    </div>
  );
}
