import { Index, createSignal } from "solid-js";
import "./App.css";

function App() {
  const [elements, setCount] = createSignal(["Element 1", "Element 2"]);

  function handleSubmit(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const input = formData.get("input-element") as string;
    if (
      elements().some((el) => {
        return el === input;
      })
    )
      return;
    if (input === "") return;
    setCount([...elements(), input]);
  }
  return (
    <>
      <form action="/" onSubmit={handleSubmit}>
        <label>
          <input name="input-element" type="text" placeholder="Element 3" />
          <button type="submit">Add!</button>
        </label>
      </form>
      <ul>
        <Index each={elements()}>
          {(element, _i) => (
            <li
              onClick={() => {
                setCount(
                  elements().filter((e) => {
                    return !(element() === e);
                  })
                );
              }}
            >
              {element()}
            </li>
          )}
        </Index>
      </ul>
    </>
  );
}

export default App;
