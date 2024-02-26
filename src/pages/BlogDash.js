import React, { useEffect, useRef, useState } from "react";
import BundledEditor from "../components/BundledEditor";
import Header from "../components/Header";
import "../css/BlogDash.css";
import { Form } from "react-bootstrap";
import { firestore, storage } from "../Firebase";

import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { v4 } from "uuid";

export default function BlogDash() {
  const editorRef = useRef(null);
  const collectionRef = collection(firestore, "BlogPost");
  const [published, setPublished] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);
  const imagesRef = ref(storage, "images/");
  const [imageLink, setImageLink] = useState(null);

  useEffect(() => {}, []);

  let data = {};
  let titleRef = useRef();
  const handleSubmit = async (event) => {
    event.preventDefault();

    let thumbnailPath = `images/${thumbnail.name + v4()}`;
    let thumbnailRef = ref(storage, thumbnailPath);
    console.log(thumbnailRef);
    let imLink = null;

    uploadBytes(thumbnailRef, thumbnail).then((snapshot) => {
      console.log("Uploaded a blob or file!");
      listAll(imagesRef).then((res) => {
        res.items.map((item) => {
          if (item._location.path == thumbnailPath)
            getDownloadURL(item).then((url) => {
              data = {
                thumbnail: url,
                title: titleRef.current.value,
                body: editorRef.current.getContent(),
                slug: titleRef.current.value.toLowerCase().split(" ").join("-"),
              };
              try {
                addDoc(collectionRef, data);
              } catch (e) {
                console.log(e);
              }
              console.log(data);
            });
        });
      });
    });

    setTimeout(() => {
      setPublished(true);
    }, 1000);
  };
  return (
    <div className="blog-dash">
      <Header />
      <div className="editor-container">
        <Form onSubmit={handleSubmit}>
          {/* <Form> */}
          <Form.Group
            controlId="formFile"
            className="mb-3"
            style={{ color: "#fff" }}
          >
            <Form.Label>Upload Thumbnail</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => {
                setThumbnail(e.target.files[0]);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "#fff" }}>Title</Form.Label>
            <Form.Control type="text" placeholder="Title" ref={titleRef} />
          </Form.Group>
          <Form.Group className="mb-3 group " controlId="formBasicEmail">
            <BundledEditor
              onInit={(evt, editor) => (editorRef.current = editor)}
              // initialValue="This is the initial content of the editor."
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  "advlist",
                  "anchor",
                  "autolink",
                  "help",
                  "image",
                  "link",
                  "lists",
                  "searchreplace",
                  "table",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | blocks | " +
                  "bold italic forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
          </Form.Group>
          <div className="save-cont">
            <button className="btn send" type="submit">
              {published ? "Published!" : "Publish"}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
