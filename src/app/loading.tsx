import React from 'react';

export default async function Loading() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div>Loading</div>;
}
