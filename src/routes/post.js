import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Page from '../page';

export async function loader({ params }) {
  const API = `https://jsonplaceholder.typicode.com/posts/${params.postId}`;

  try {
    const response = await fetch(API);
    if (!response.ok) throw new Error();

    const data = await response.json();
    return data;
  } catch {
    throw new Response(null, {
      status: 500,
      statusText: 'Internal Server Error',
    });
  }
}

export default function Post() {
  const post = useLoaderData();

  return (
    <Page title={post.title}>
      {post.body.split('\n').map((paragraph, index) => (
        <p key={`paragraph-${index + 1}`}>{paragraph}</p>
      ))}
    </Page>
  );
}
