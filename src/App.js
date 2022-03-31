import "./styles.css";
import { Form } from "./components/Form";
import { List } from "./components/List";

export default function App() {
  return (
    <div className="App">
      <h1>TODO</h1>
      <Form />
      <List />
    </div>
  );
}
