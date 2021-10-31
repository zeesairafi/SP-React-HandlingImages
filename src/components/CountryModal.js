import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import countryStore from "../stores/countryStore";

function CountryModal() {
  const [show, setShow] = useState(false);
  const [country, setCountry] = useState({
    name: "",
    image: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) =>
    setCountry({ ...country, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(country);
    countryStore.createCountry(country);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create Country
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              onChange={(e) => handleChange(e)}
              placeholder="Country Name"
            />
            <input name="image" onChange={handleChange} placeholder="Image" />
            <button type="submit">Add Country</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CountryModal;
