import axios from "axios";
import React, { useState } from "react";
import "./App.css";
export function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: email,
      first_name: name,
    };

    axios
      .post("https://reqres.in/api/users", user, {
        handeres: {
          "Contenet-type ": "application/josn",
        },
      })
      .then((respons) => {
        console.log(25, respons);
      })
      .catch((error) => {
        console.log(error);
      });

    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className="card">
      <form onSubmit={handleSubmit} className="wrapper">
        <div className="name">
          <input
            type="text"
            placeholder="Enter your name ..."
            className="input"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="email">
          <input
            type="email"
            placeholder="Enter your email ..."
            className="input"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="password">
          <input
            type="password"
            placeholder="Enter your enail password ..."
            className="input"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button className="btn">Save</button>
      </form>
    </div>
  );
}

export default App;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const UsersList = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         setUsers(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching users:", error);
//         alert("Foydalanuvchilarni olishda xatolik yuz berdi.");
//       });
//   }, []);

//   const deleteUser = (id) => {
//     axios
//       .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
//       .then(() => {
//         setUsers(users.filter((user) => user.id !== id));
//         alert("Foydalanuvchi muvaffaqiyatli o‘chirildi.");
//       })
//       .catch((error) => {
//         console.error("Error deleting user:", error);
//         alert("Foydalanuvchini o‘chirishda xatolik yuz berdi.");
//       });
//   };

//   return (
//     <div>
//       <h1>Foydalanuvchilar ro‘yxati</h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id} className="flex items-center gap-4">
//             <span>
//               {user.id}. {user.name} ({user.email})
//             </span>
//             <button
//               className="btn btn-outline text-red-500"
//               onClick={() => deleteUser(user.id)}
//             >
//               O‘chirish
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UsersList;


// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         setUsers(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("API xatosi:", error);
//         setError(true);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <p>Yuklanmoqda...</p>;
//   }

//   if (error) {
//     return <p>Ma'lumot yuklashda xatolik yuz berdi!</p>;
//   }

//   return (
//     <div>
//       <h2>Foydalanuvchilar ro'yxati</h2>
//       {users.map((user) => (
//         <ul key={user.id}>
//           <li>
//             <strong>ID:</strong> {user.id} <br />
//             <strong>Ism:</strong> {user.name} <br />
//             <strong>Email:</strong> {user.email}
//           </li>
//         </ul>
//       ))}
//     </div>
//   );
// }

// export default App;

// 2-topshiriqi

// import React from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import Layout from './pages/Layouts';
// import Home from './pages/Home'
// import Blogs from "./pages/Bloges";
// import BlogDetails from "./pages/BlogDeteils";

// const App = () => {
//   const location = useLocation();
//   React.useEffect(() => {
//     console.log("Current path:", location.pathname);
//   }, [location]);

//   return (
//     <Layout>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/blogs" element={<Blogs />} />
//         <Route path="/blogs/:id" element={<BlogDetails />} />
//       </Routes>
//     </Layout>
//   );
// };

// export default App;

// 3-Topshiriq
// import React from "react";
// import { Link } from "react-router-dom";

// const Layout = ({ children }) => {
//   return (
//     <div>
//       <header>
//         <nav>
//           <Link to="/">Home</Link> | <Link to="/blogs">Blogs</Link>
//         </nav>
//       </header>
//       <main>{children}</main>
//       <footer>Footer Content</footer>
//     </div>
//   );
// };

// export default Layout;

// 4-Topshiriq: 
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>Xush kelibsiz! Bizning bloglarimiz bilan tanishing.</h1>
//       <button onClick={() => navigate("/blogs")}>Bloglarga o'tish</button>
//     </div>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Blogs = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((data) => {
//         setBlogs(data);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError("Xatolik yuz berdi!");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Yuklanmoqda...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h1>Bloglar</h1>
//       <ul>
//         {blogs.slice(0, 10).map((blog) => (
//           <li key={blog.id}>
//             <h2>{blog.title}</h2>
//             <p>{blog.body.substring(0, 100)}...</p>
//             <button onClick={() => navigate(`/blogs/${blog.id}`)}>Tafsilotlar</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Blogs;

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const BlogDetails = () => {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then((response) => {
//         if (!response.ok) throw new Error("Xatolik yuz berdi!");
//         return response.json();
//       })
//       .then((data) => {
//         setBlog(data);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError("Xatolik yuz berdi!");
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) return <p>Yuklanmoqda...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h1>{blog.title}</h1>
//       <p>{blog.body}</p>
//       <button onClick={() => navigate(-1)}>Orqaga qaytish</button>
//     </div>
//   );
// };

// export default BlogDetails;









