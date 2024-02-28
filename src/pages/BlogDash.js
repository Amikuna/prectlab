import React, { useEffect, useRef, useState } from "react";
import BundledEditor from "../components/BundledEditor";
import Header from "../components/Header";
import "../css/BlogDash.css";
import { Alert, Form } from "react-bootstrap";
import { firestore, storage } from "../Firebase";
import { useSearchParams } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import {
  doc,
  addDoc,
  updateDoc,
  getDocs,
  query,
  where,
  collection,
} from "firebase/firestore";
import { v4 } from "uuid";

export default function BlogDash() {
  const editorRef = useRef(null);
  const collectionRef = collection(firestore, "BlogPost");
  const [published, setPublished] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);
  const imagesRef = ref(storage, "images/");
  const [imageLink, setImageLink] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [searchParams] = useSearchParams();
  const params = searchParams.get("blog");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [thumbnailLink, setThumbnailLink] = useState("");
  const [documentId, setDocumentId] = useState(""); // State to store the document ID
  const propValuePlaceholder = `<textarea>${body}</textarea>`;
  let data = {};
  let titleRef = useRef();
  const [docId, setDocId] = useState(null);

  useEffect(() => {
    const q = query(collectionRef, where("slug", "==", params));

    getDocs(q)
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const data = doc.data();
          setDocId(doc.id); // Set the document ID in the state
          setTitle(data.title);
          setBody(data.body);
          setThumbnailLink(data.thumbnail);
        } else {
          console.log("Document not found");
        }
      })
      .catch((error) => {
        console.error("Error getting documents:", error);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (title === null) {
      if (thumbnail === null) {
        setShowAlert(true);
      } else {
        setShowAlert(false);
        let thumbnailPath = `images/${thumbnail.name + v4()}`;
        let thumbnailRef = ref(storage, thumbnailPath);

        uploadBytes(thumbnailRef, thumbnail).then((snapshot) => {
          listAll(imagesRef).then((res) => {
            res.items.map((item) => {
              if (item._location.path == thumbnailPath)
                getDownloadURL(item).then((url) => {
                  data = {
                    thumbnail: url,
                    title: titleRef.current.value,
                    body: editorRef.current.getContent(),
                    slug: titleRef.current.value
                      .toLowerCase()
                      .split(" ")
                      .join("-"),
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
      }
    } else {
      if (thumbnail === null) {
        console.log(editorRef.current.getContent());
        data = {
          title: titleRef.current.value,
          body: editorRef.current.getContent(),
          slug: titleRef.current.value.toLowerCase().split(" ").join("-"),
        };
        try {
          updateDoc(doc(firestore, "BlogPost", docId), data);
        } catch (e) {
          console.log(e);
        }
        console.log(data);
      } else {
        let thumbnailPath = `images/${thumbnail.name + v4()}`;
        let thumbnailRef = ref(storage, thumbnailPath);

        uploadBytes(thumbnailRef, thumbnail).then((snapshot) => {
          listAll(imagesRef).then((res) => {
            res.items.map((item) => {
              if (item._location.path == thumbnailPath)
                getDownloadURL(item).then((url) => {
                  data = {
                    thumbnail: url,
                    title: titleRef.current.value,
                    body: editorRef.current.getContent(),
                    slug: titleRef.current.value
                      .toLowerCase()
                      .split(" ")
                      .join("-"),
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
      }

      setTimeout(() => {
        setPublished(true);
      }, 1000);
    }
  };
  return (
    <div className="blog-dash">
      <Header />
      <div className="editor-container">
        <Alert show={showAlert} variant="danger">
          Please upload a thumbnail image
        </Alert>
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
            <Form.Control
              type="text"
              placeholder="Title"
              ref={titleRef}
              defaultValue={title}
            />
          </Form.Group>
          <Form.Group className="mb-3 group " controlId="formBasicEmail">
            <BundledEditor
              onInit={(evt, editor) => (editorRef.current = editor)}
              // initialValue="This is the initial content of the editor."
              initialValue={body}
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
