import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostDetailPageProps {}

export default function PostDetailPage(props: PostDetailPageProps) {
  const route = useRouter();

  return (
    <div>
      <h1>Post Detail Pages</h1>
      {JSON.stringify(route.query)}
    </div>
  );
}
