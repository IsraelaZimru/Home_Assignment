import "bootstrap/dist/css/bootstrap.min.css";
import { observer } from "mobx-react";
import React, { useState } from "react";
import { PeopleStoreImpl } from "../src/store/peopleStore";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import PeopleTable from "./components/PeopleTable";

interface PeopleListProps {
  peopleStore: PeopleStoreImpl;
}

export const App: React.FC<PeopleListProps> = observer(({ peopleStore }) => {
  const [value, setValue] = useState<string>("");

  return (
    <div id="main">
      <h1> People list</h1>
      <section>
        <input
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          type="text"
        />
        <Button
          variant="primary"
          className="ml-4"
          onClick={() => {
            if (value) {
              peopleStore.addPerson(value);
              setValue("");
            }
          }}
        >
          submit
        </Button>
      </section>
      <section>
        <PeopleTable list={peopleStore.people} />
      </section>
    </div>
  );
});

export default App;
