export interface PersonItem {
  id: number;
  firstName: string;
  gender: Gender;
  nationality: Nationality[];
}

type Gender = {
  gender: string;
  probability: string;
};

type Nationality = {
  name: string;
  probability: string;
};
