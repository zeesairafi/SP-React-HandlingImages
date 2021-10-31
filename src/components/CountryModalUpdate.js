import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import countryStore from "../stores/countryStore";

function CountryModalUpdate(props) {
  const [show, setShow] = useState(false);
  const [country, setCountry] = useState({
    name: props.oldCountry.name,
    image: props.oldCountry.image,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) =>
    setCountry({ ...country, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    countryStore.updateCountry(country, props.oldCountry.id);
    console.log(country);
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit Country
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              value={country.name}
              onChange={(e) => handleChange(e)}
              placeholder="Country Name"
            />
            <input
              name="image"
              value={country.image}
              onChange={handleChange}
              placeholder="Image"
            />
            <button type="submit">Edit</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CountryModalUpdate;
