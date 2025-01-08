import React from 'react';
import { useParams } from 'react-router-dom';

function BlogDetails() {
  const { id } = useParams();
  // Blog postining ma'lumotlarini olish
  const blog = {
    id: 1,
    title: 'Birinchi blog posti',
    content: 'Bu birinchi blog postining to\'liq mazmuni.',
  };

  // Agar blog topilmasa
  if (!blog) {
    return <div>Blog posti topilmadi.</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogDetails;
