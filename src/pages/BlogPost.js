import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { query, where, getDocs, collection } from "firebase/firestore";
import { firestore, storage } from "../Firebase";
import parse from "html-react-parser";
import "../css/BlogPost.css";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { slug } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [documentId, setDocumentId] = useState(""); // State to store the document ID
  const collectionRef = collection(firestore, "BlogPost");
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const q = query(collectionRef, where("slug", "==", slug));

    getDocs(q)
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          // Assuming there's only one document with the specified title
          const doc = querySnapshot.docs[0];
          setDocumentId(doc.id); // Set the document ID in the state
          const data = doc.data();
          // Set your state variables here
          setTitle(data.title);
          setBody(data.body);
          setThumbnail(data.thumbnail);
        } else {
          console.log("Document not found");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error getting documents:", error);
      });
  }, []);
  return (
    <div className="BlogPost">
      <Header />

      {Loading ? (
        // Render a loading indicator while data is being fetched
        <div className="post-wrapper">
          <div className="blogBody d-flex justify-content-center">
            <div className="loading-indicator">
              <div className="loading-circle"></div>
            </div>
          </div>
        </div>
      ) : title ? (
        // Render the blog post content if title exists
        <div className="post-wrapper">
          <div className="blogBody">
            <div className="title-wrapper">
              <h1 className="title-wrap">{title}</h1>
            </div>
            <img className="thumbnail" src={thumbnail} alt="thumbnail" />
            <div className="body-wrapper">{parse(body)}</div>
          </div>
        </div>
      ) : (
        // Render a message if the post doesn't exist
        <div className="post-wrapper">
          <div className="blogBody d-flex justify-content-center align-tems-center">
            <div className="d-flex align-items-center">
              <h1 className="sorry">&#128531;</h1>
            </div>
            <h1 className="doesnt-exist">The Post Doesn't Exist!</h1>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default BlogPost;
