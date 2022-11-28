import { action, computed, makeObservable, observable } from "mobx";
import { PersonItem } from "../types/Person";

export class PeopleStoreImpl {
  people: PersonItem[] = [
    {
      id: 55,
      firstName: "israela zimru",
      gender: { gender: "female", probability: "0.9" },
      nationality: [
        { name: "li", probability: "0.4" },
        { name: "de", probability: "0.9" },
      ],
    },
    {
      id: 566,
      firstName: "MIMI",
      gender: { gender: "female", probability: "0.9" },
      nationality: [
        { name: "li", probability: "0.7" },
        { name: "de", probability: "0.88" },
      ],
    },
  ];

  constructor() {
    makeObservable(this, {
      people: observable,
      addPerson: action,
    });
  }

  addPerson(firstName: string) {
    const item: PersonItem = {
      id: +Math.random().toFixed(4),
      firstName,
      gender: { gender: "female", probability: "0.9" },
      nationality: [
        { name: "li", probability: "0.4" },
        { name: "de", probability: "0.9" },
      ],
    };
    this.people.push(item);
  }
}

export const PeopleStore = new PeopleStoreImpl();
