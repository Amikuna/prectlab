import React from "react";

function Alert() {
  const [show, setShow] = useState(false);
  const handleButtonClick = () => {
    setShow(true);
  };
  return (
    <div>
      <Button onClick={handleButtonClick}>Show Error</Button>
      {show && (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Error</Alert.Heading>
          <p>Please upload a thumbnail image</p>
        </Alert>
      )}
    </div>
  );
}

export default Alert;
