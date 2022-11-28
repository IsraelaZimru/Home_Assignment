import { observer } from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import { PersonItem } from "../types/Person";

interface ListProps {
  list: PersonItem[];
}

const PeopleTable: React.FC<ListProps> = observer(({ list }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>gender</th>
          <th>nationality</th>
          <th>probability.</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, i) => (
          <tr>
            <th>{item.firstName}</th>
            <th>{item.gender}</th>
            <th>{item.nationality}</th>
            <th>{item.probability}</th>
          </tr>
        ))}
      </tbody>
    </Table>
  );
});

export default PeopleTable;
