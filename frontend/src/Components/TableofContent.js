import React, { useEffect, useState } from 'react';

const TableOfContents = () => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const headingElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const headingsArray = Array.from(headingElements).map((heading) => ({
      level: parseInt(heading.tagName.charAt(1), 10),
      text: heading.textContent,
      id: heading.id,
    }));
    setHeadings(headingsArray);
  }, []);

  return (
    <div className="table-of-contents">
      <h2>Table of Contents</h2>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id}>
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;