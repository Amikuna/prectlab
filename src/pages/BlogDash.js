import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/BlogDash.css";
import { firestore } from "../Firebase";
import { doc, deleteDoc, getDocs, collection } from "firebase/firestore";
import { Col, Row } from "react-bootstrap";
import parse from "html-react-parser";

function Blog() {
  const collectionRef = collection(firestore, "BlogPost");
  const [blogPosts, setBlogPosts] = useState([]);
  const [docId, setDocId] = useState([]);
  const truncateText = (text, maxWords) => {
    const words = text.split(" ");
    const truncatedWords = words.slice(0, maxWords);
    return truncatedWords.join(" ");
  };
  const deleteBlogPost = async (id) => {
    const docRef = doc(firestore, "BlogPost", id);
    deleteDoc(docRef);
    getDocs(collectionRef).then((querySnapshot) => {
      const updatedBlogPosts = [];
      const updatedDocIds = [];

      querySnapshot.forEach((doc) => {
        updatedBlogPosts.push(doc.data());
        updatedDocIds.push(doc.id);
      });

      // Update state with the new data
      setBlogPosts(updatedBlogPosts);
      setDocId(updatedDocIds);
    });
  };

  useEffect(() => {
    getDocs(collectionRef).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setBlogPosts((prevState) => [...prevState, doc.data()]);
        setDocId((prevState) => [...prevState, doc.id]);
      });
    });
  }, []);
  return (
    <div className="blog">
      <Header />
      <div className="blog-wrapper">
        <Col className="blog-row">
          {blogPosts.map((blogPost, index) => (
            <Row className="post-col" md={6}>
              <div className="dash-blog-post" key={blogPost.title}>
                <img
                  className="dash-post-image"
                  src={blogPost.thumbnail}
                  alt=""
                />
                <a className="post-link" href={`/blog/${blogPost.slug}`}>
                  <h5>{blogPost.title}</h5>
                </a>
                <div className="me-auto"></div>
                <div className="post-body-wrap d-flex align-items-center">
                  <a href={`/blogdash/post?blog=${blogPost.slug}`}>
                    <button className="btn edit-button">Edit</button>
                  </a>
                </div>
                <div
                  className="post-body-wrap d-flex align-items-center"
                  style={{ marginLeft: "10px" }}
                >
                  <button
                    onClick={() => deleteBlogPost(docId[index])}
                    className="btn delete-button"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </Row>
          ))}
        </Col>
      </div>
      <Footer className="blog-footer" />
    </div>
  );
}

export default Blog;
