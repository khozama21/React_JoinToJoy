import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import "./app.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPneding, setIsPending] = useState(false);
  const nav = useHistory();

  const handdleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email, password };

    fetch("http://localhost:8001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(() => {
      console.log("user has been successfully Added");
      setIsPending(false);
      localStorage.setItem("isLoggedIn", "true");
      nav.push("/");
    });
  };
  return (
    <div className="create   ">
      <h2> Sign Up </h2>

      <form onSubmit={handdleSubmit}>
        <div class="form-group">
          <label>Name </label>
          <input
            className="form-control"
            required
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Name"
          />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          />
        </div>
        {!isPneding && (
          <button className="btn btn-primary  mt-5 mb-5 ">Submit</button>
        )}
        {isPneding && (
          <button className="btn btn-primary" disabled>
            Submiting Reservation...
          </button>
        )}
      </form>

      {/* <Form onSubmit={handdleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" required value={name} onChange={e => { setName(e.target.value) }} />
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Email" required value={email} onChange={e => { setEmail(e.target.value) }} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                            <Form.Label>Place of Event</Form.Label>
                            <Form.Control type="text" placeholder="House, Farm, Hall..." required value={place} onChange={e => { setPlace(e.target.value) }} />
                            <Form.Label>Date of Event</Form.Label>
                            <Form.Control type="Date" placeholder="Date Of Event" required value={date} onChange={e => { setDate(e.target.value) }} />
                            <Form.Label>Theme Of Event</Form.Label>
                            <Form.Control type="text" placeholder="Theme Of Event" required value={theme} onChange={e => { setTheme(e.target.value) }} />

                        </Form.Group>
                        <Form.Label>Category</Form.Label>
                        <Form.Select aria-label="Default select example" required type="text" value={category} onChange={e => { setCategory(e.target.value) }}>
                            <option>Open this select menu</option>
                            <option value="Wedding">Wedding</option>
                            <option value="Conference">Conference</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Graduation">Graduation</option>
                        </Form.Select>

                     

                    </Form>
 */}
    </div>
  );
};
export default Signup;
