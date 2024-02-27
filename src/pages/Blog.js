import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/Blog.css";
import { firestore } from "../Firebase";
import { getDocs, collection } from "firebase/firestore";
import { Col, Row } from "react-bootstrap";
import parse from "html-react-parser";

function Blog() {
  const collectionRef = collection(firestore, "BlogPost");
  const [blogPosts, setBlogPosts] = useState([]);
  const truncateText = (text, maxWords) => {
    const words = text.split(" ");
    const truncatedWords = words.slice(0, maxWords);
    return truncatedWords.join(" ");
  };
  useEffect(() => {
    getDocs(collectionRef).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setBlogPosts((prevState) => [...prevState, doc.data()]);
      });
    });
  }, []);
  return (
    <div className="blog">
      <Header />
      <div className="blog-wrapper">
        <Row className="blog-row">
          {blogPosts.map((blogPost) => (
            <Col className="post-col" md={6}>
              <div className="blog-post" key={blogPost.title}>
                <img className="post-image" src={blogPost.thumbnail} alt="" />
                <a className="post-link" href={`/blog/${blogPost.slug}`}>
                  <h2>{blogPost.title}</h2>
                </a>
                <div className="post-body-wrap">
                  {parse(truncateText(blogPost.body, 80))}
                  {"..."}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <Footer className="blog-footer" />
    </div>
  );
}

export default Blog;
