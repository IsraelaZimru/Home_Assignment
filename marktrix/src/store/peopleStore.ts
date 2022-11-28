import { action, computed, makeObservable, observable } from "mobx";
import { PersonItem } from "../types/Person";

export class PeopleStoreImpl {
  people: PersonItem[] = [
    {
      id: 55,
      firstName: "israela zimru",
      gender: "female",
      nationality: "li",
      probability: 5,
    },
    {
      id: 566,
      firstName: "MIMI",
      gender: "female",
      nationality: "au",
      probability: 50,
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
      gender: "m",
      nationality: "m",
      probability: 5,
    };
    this.people.push(item);
  }
}

export const PeopleStore = new PeopleStoreImpl();
