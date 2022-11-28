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
        </tr>
      </thead>
      <tbody>
        {list.map((item, i) => (
          <tr key={i}>
            <th>{item.firstName}</th>
            <th>
              {item.gender.gender} ({item.gender.probability}%)
            </th>
            <th>
              {item.nationality.map((cntry, i) => (
                <ul>
                  <li>
                    {cntry.name} ({cntry.probability}%)
                  </li>
                </ul>
              ))}
            </th>
          </tr>
        ))}
      </tbody>
    </Table>
  );
});

export default PeopleTable;
