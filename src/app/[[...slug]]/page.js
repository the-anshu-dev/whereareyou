"use client"

import { useRouter } from 'next/router';

const DynamicPage = () => {
  // const router = useRouter();
  // const { slug } = router.query; // Get dynamic slug
  const slug = 'static'

  return (
    <div>
      <h1>Dynamic Page</h1>
      {slug && (
        <p>Path: {slug}</p>
        // <p>Path: {slug.join(' / ')}</p>
      )}
    </div>
  );
};

export default DynamicPage;
