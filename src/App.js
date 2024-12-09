import "./App.css";
import Welcome from "./components/question1/Welcome";
import CurrentDate from "./components/question1/CurrentDate";
import HobbyList from "./components/question1/HobbyList";
import Button from "./components/question1/Button";
import ProfileCard from "./components/question1/ProfileCard";
import ItemList from "./components/question1/ItemList";
import Toggle from "./components/question2/Toggle";
import Counter from "./components/question2/Counter";
import ColorDiv from "./components/question2/ColorDiv";
import FormLog from "./components/question2/FormLog";
import DropDown from "./components/question2/DropDown";
import LoginForm from "./components/question3/LoginForm";
import CtrldForm from "./components/question3/CtrldForm";
import ValidForm from "./components/question3/ValidForm";
import MultiStepForm from "./components/question3/MultiStepForm";
import CheckForm from "./components/question3/CheckForm";
import Home from "./pages/Q4_router/Home";
import About from "./pages/Q4_router/About";
import Contact from "./pages/Q4_router/Contact";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/Q4_router/NotFound";
import Post from "./pages/Q4_router/Post";
import Blog from "./pages/Q4_router/Blog";
import ParentMemo from "./components/question5/ParentMemo";
import CounterList from "./components/question5/CounterList";
import Heavy from "./components/question5/Heavy";
import Todo from "./components/question5/Todo";
import LiveTime from "./components/question5/LiveTime";
import LecturerForm from "./components/question26/LecturerForm";
import StudentForm from "./components/question27/StudentForm";
import DriverForm from "./components/question28/DriverForm";
import BookForm from "./components/question29/BookForm";
import ModuleForm from "./components/question30/ModuleForm";

function App() {
  return (
    <div style={{ margin: "10px" }}>
      <h1 style={{ color: "purple" }}>1. Components</h1>
      <h4>
        1.Create a functional component that displays a welcome message and
        another component that displays the current date.
      </h4>
      <Welcome />
      <CurrentDate />
      <h4>
        2.Build a parent component with a list of hobbies and a child component
        that displays each hobby.
      </h4>
      <HobbyList />
      <h4>
        3.Create a reusable button component with customizable text and color
        props.
      </h4>
      <Button text={"Hello guys"} color={"red"} />
      <h4>
        4.Design a profile card component that accepts name, age, and email as
        prop
      </h4>
      <ProfileCard name={"dushime"} age={"24"} email={"dux@gmail.com"} />
      <h4>
        5.Build a component to display a list of items using the .map() function
      </h4>
      <ItemList />
      <h1 style={{ color: "purple" }}>2. Events</h1>
      <h4>
        6.Create a button that toggles between "ON" and "OFF" states when
        clicked
      </h4>
      <Toggle />
      <h4>7.Build a counter component with increment and decrement buttons.</h4>
      <Counter />
      <h4>
        8.Create a component that changes the background color of a div when
        hovered over.
      </h4>
      <ColorDiv />
      <h4>
        9.Build a form that logs the user's input to the console when the form
        is submitted.
      </h4>
      <FormLog />
      <h4>
        10.Create a dropdown menu component that shows and hides options when
        clicked.
      </h4>
      <DropDown />
      <h1 style={{ color: "purple" }}>3. Forms Handling</h1>
      <h4>
        11..Create a simple login form with fields for username and password.{" "}
      </h4>
      <LoginForm />
      <h4>
        12.Build a controlled form with a single input field and display the
        entered value below the form{" "}
      </h4>
      <CtrldForm />
      <h4>13.Design a form with validation for email and password fields. </h4>
      <ValidForm />
      <h4>
        14.Create a multi-step form where users can fill in details step-by-step
        (e.g., name, address, and payment information).{" "}
      </h4>
      <MultiStepForm />
      <h4>
        15.Build a form with multiple checkbox inputs and display the selected
        options.{" "}
      </h4>
      <CheckForm />
      <h1 style={{ color: "purple" }}>4. Routing</h1>
      <h4>16, 17, 18, 19, 20 </h4>
      <Router>
        <nav className="comp">
          <ul
            style={{
              display: "flex ",
              gap: "19px",
              justifyContent: "spacebetween",
            }}
          >
            <li style={{ listStyle: "none", textDecoration: "none" }}>
              <li style={{ listStyle: "none", textDecoration: "none" }}>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "black",
                    ":hover": { color: "blue" },
                  }}
                >
                  Home
                </Link>
              </li>
            </li>
            <li style={{ listStyle: "none", textDecoration: "none" }}>
              <Link
                to="/about"
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "black",
                  ":hover": { color: "blue" },
                }}
              >
                About
              </Link>
            </li>
            <li style={{ listStyle: "none", textDecoration: "none" }}>
              <Link
                to="/contact"
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "black",
                  ":hover": { color: "blue" },
                }}
              >
                Contact
              </Link>
            </li>
            <li style={{ listStyle: "none", textDecoration: "none" }}>
              <Link
                to="/products/123"
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "black",
                  ":hover": { color: "blue" },
                }}
              >
                Product
              </Link>
            </li>
            <li style={{ listStyle: "none", textDecoration: "none" }}>
              <Link
                to="/blog"
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "black",
                  ":hover": { color: "blue" },
                }}
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <div className="comp">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/:productID" element={<ProductDetails />} />
            <Route path="/blog" element={<Blog />}>
              <Route path=":postID" element={<Post />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
      {/*  <h4>17. </h4>
      <h4>
        <span style={{ color: "red", fontSize: "25px" }}>*</span>18.{" "}
      </h4>
      <h4>19. </h4>
      <h4>20. </h4> */}
      <h1 style={{ color: "purple" }}>5. React.memo</h1>
      <h4>
        21.Create a parent component that passes a prop to a child component.
        Use React.memo to prevent the child component from re-rendering
        unnecessarily{" "}
      </h4>
      <ParentMemo />
      <h4>
        22.Build a component that displays a counter. Use React.memo to optimize
        a list of unrelated items from re-rendering.{" "}
      </h4>
      <CounterList />
      <h4>
        23.Create a "heavy calculation" component that uses React.memo to
        optimize performance.{" "}
      </h4>
      <Heavy />
      <h4>
        24.Build a todo list app where the list component is memoized to prevent
        re-renders when the input changes.{" "}
      </h4>
      <Todo />
      <h4>
        25. Implement a component that shows live time updates but prevents
        unnecessary re-renders of static UI parts.
      </h4>
      <LiveTime />
      <h1 style={{ color: "purple" }}>6. Registration Forms</h1>
      <h4>
        26.Add validation to ensure the email is in the correct format and phone
        number is numeric.{" "}
      </h4>
      <LecturerForm />
      <h4>
        27.Validate the Student ID to ensure it contains only alphanumeric
        characters.{" "}
      </h4>
      <StudentForm />
      <h4>
        28. Add a dropdown to select the vehicle type (e.g., car, truck,
        motorcycle)
      </h4>
      <DriverForm />
      <h4>29.Validate that the Published Year is a four-digit number. </h4>
      <BookForm />
      <h4>
        30. Ensure the Credits field accepts only numeric values and is
        required.
      </h4>
      <ModuleForm />
    </div>
  );
}

export default App;
