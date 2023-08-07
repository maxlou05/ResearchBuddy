'use client'

import React, { useEffect, useState } from 'react';

export default function Page() {
  const [citations, setCitations] = useState([])

  useEffect(() => {
    // Function to fetch citations from localStorage or set an empty array if not available
    const getCitationsFromLocalStorage = () => {
      const json = localStorage.getItem('citations')
      if (json) setCitations(JSON.parse(json))
    };

    getCitationsFromLocalStorage()
  }, []);

  return (
    <div>
      {citations.map((citationHTML) => (
        <div dangerouslySetInnerHTML={{ __html: citationHTML }} />
      ))}
    </div>
  );
}
