import React from 'react';
import { Link } from 'react-router-dom';

function Blogs() {
  // Blog postlarining to'liq ro'yxati
  const blogs = [
    { id: 1, title: 'Birinchi blog posti', content: 'Bu birinchi blog postining mazmuni.' },
    { id: 2, title: 'Ikkinchi blog posti', content: 'Bu ikkinchi blog postining mazmuni.' },
    // Qo'shimcha bloglar
  ];

  return (
    <div>
      <h1>Bloglar</h1>
      {blogs.map(blog => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content.substring(0, 100)}...</p>
          <Link to={`/blogs/${blog.id}`}>Batafsil o'qish</Link>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
