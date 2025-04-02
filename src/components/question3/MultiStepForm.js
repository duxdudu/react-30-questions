import { useState } from "react";

function MultiStepForm() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");

  const hundleClicked=(e)=>{
    e.preventDefault();
    alert(`name: ${name} address: ${address} payment:${payment}`)
    setName(" ")
    setAddress("")
    setAddress("")
  }
  return (
    <form onSubmit={hundleClicked} className="comp">
      <h4>Multistep form</h4>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      {name && (
        <>
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            id="address"
            name="address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </>
      )}
      <br />
      {address && (
        <>
          <label htmlFor="payment">Payment Information: </label>
          <input
            type="text"
            id="payment"
            name="payment"
            onChange={(e) => setPayment(e.target.value)}
          />
        </>
      )}
      <br />
      <button type="submit" onClick={hundleClicked} >Submit</button>
    </form>
  );
}

export default MultiStepForm;
