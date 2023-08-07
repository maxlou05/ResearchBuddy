'use client'

import React, { useEffect, useState } from 'react';
import fetchCitation from './fetchCitation';

export default function Page() {
  const [citations, setCitations] = useState([]);

  useEffect(() => {
    // Function to fetch citations from localStorage or set an empty array if not available
    const getCitationsFromLocalStorage = () => {
      const json = localStorage.getItem('citations');
      if (json) {
        return JSON.parse(json);
      } else {
        return [];
      }
    };

    const fetchCitations = async () => {
      const citationsFromLocalStorage = getCitationsFromLocalStorage();
      const fetchedCitations = await Promise.all(
        citationsFromLocalStorage.map(async (url) => {
          const citationHTML = await fetchCitation(url);
          return citationHTML;
        })
      );
      console.log(citationsFromLocalStorage)
      setCitations(fetchedCitations);
    };

    fetchCitations();
  }, []);

  return (
    <div>
      {citations.map((citationHTML) => (
        <div dangerouslySetInnerHTML={{ __html: citationHTML }} />
      ))}
    </div>
  );
}
