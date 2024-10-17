"use client"

import { useRouter } from 'next/router';

const DynamicPage = () => {
  const router = useRouter();
  const { slug } = router.query; // Get dynamic slug

  return (
    <div>
      <h1>Dynamic Page</h1>
      {slug && (
        <p>Path: {slug.join(' / ')}</p>
      )}
    </div>
  );
};

export default DynamicPage;
