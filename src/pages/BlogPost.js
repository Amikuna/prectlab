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

  useEffect(() => {
    // Query to find the document based on the 'title' field
    console.log(slug);
    const q = query(collectionRef, where("title", "==", slug));

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
      })
      .catch((error) => {
        console.error("Error getting documents:", error);
      });
  }, []);
  return (
    <div className="BlogPost">
      <Header />

      {title ? (
        <div className="post-wrapper">
          <div className="blogBody">
            <div className="title-wrapper">
              <h1>{title}</h1>
            </div>
            <img className="thumbnail" src={thumbnail} alt="thumbnail" />
            <div className="body-wrapper">{parse(body)}</div>
          </div>
        </div>
      ) : (
        <div className="post-wrapper">
          <div className="blogBody d-flex justify-content-center align-tems-center">
            <div className="d-flex align-items-center">
              <h1 className="sorry">&#128531;</h1>
            </div>
            <h1 className="doesnt-exist">The Post Doesn't Exists!</h1>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default BlogPost;
