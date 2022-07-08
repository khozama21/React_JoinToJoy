import React from "react";
import { useState } from "react";
import { SingleCat } from "./SingleCat";
import { useHistory } from "react-router";
import "./app.css";

export const ApplicationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const [theme, setTheme] = useState("");
  const [category, setCategory] = useState("");
  const [isPneding, setIsPending] = useState(false);
  const nav = useHistory();

  const handdleSubmit = (e) => {
    e.preventDefault();
    const category1 = { name, email, place, date, theme, category };

    fetch("http://localhost:8001/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(category1),
    }).then(() => {
      console.log("Application has been successfully");
      setIsPending(false);
      nav.push("/categories");
    });
  };
  return (
    <div className="create   ">
      <h2> Fill Your Application </h2>

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
          <label>Place of Event</label>
          <input
            className="form-control"
            type="text"
            required
            value={place}
            onChange={(e) => {
              setPlace(e.target.value);
            }}
            placeholder="House, Farm, Hall..."
          />
        </div>
        <div class="form-group">
          <label>Date of Event</label>
          <input
            className="form-control"
            type="date"
            required
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            placeholder="Date Of Event"
          />
        </div>
        <div class="form-group">
          <label>Theme Of Event</label>
          <input
            className="form-control"
            required
            value={theme}
            onChange={(e) => {
              setTheme(e.target.value);
            }}
            placeholder="Theme Of Event"
          />
        </div>
        <label> Category </label>
        <select
          className="form-control"
          required
          type="text"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="Wedding">Wedding</option>
          <option value="Conference">Conference</option>
          <option value="Birthday">Birthday</option>
          <option value="Graduation">Graduation</option>
        </select>
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
