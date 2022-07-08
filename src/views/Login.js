import { useEffect, useState } from "react";
import { useHistory } from "react-router";
const Login = (props) => {
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const nav = useHistory();
  useEffect(() => {
    fetch("http://localhost:8001/users")
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: No users</div>;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    for (let i = 0; i < items.length; i++) {
      if (items[i].password == Password && items[i].email == Email) {
        console.log("done");
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("userId", items[i].id);
        nav.push("/");
        location.reload();
      }
    }
  };
  return (
    <div className="create">
      <h2> Log In </h2>

      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            required
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            className="form-control"
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            required
            placeholder="password"
          />
        </div>
        <button type="submit" className="btn btn-primary  mt-5 mb-5 ">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Login;
