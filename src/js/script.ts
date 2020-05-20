//1 Return sum of two numbers

function sum(a: number, b: number): number {
  return a + b;
}

//2 Capitalise name of student then prompt it

function printStudentName(name: string): void {
  const formattedName: string = name.toUpperCase();
  console.log(`L'étudiant s'appelle ${formattedName}`);
}

//3 Takes string array, alphabetically orders it, then prompts items one by one

function printAlphabetically(items: Array<string>): void {
  const sortedItems: Array<string> = items.sort();
  sortedItems.forEach((item) => console.log(item));
}

//4 Takes object and prompts info

function printStudent(Student: {
  firstName: string;
  lastName: string;
  age: number;
  graduated: boolean;
}) {
  console.log(
    `L'étudiant(e) s'appelle ${Student.firstName} ${Student.lastName}`
  );
  console.log(`Il/elle a ${Student.age} ans`);

  if (Student.graduated) {
    console.log(`Il/elle a son diplôme !`);
  }
}

/*let moi: {
  firstName: string;
  lastName: string;
  age: number;
  graduated: boolean;
} = {
  firstName: "charles",
  lastName: "cousin",
  age: 20,
  graduated: true,
};*/

// 4.1 interfaces

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  graduated: boolean;
}

// 5 Classes

class Party {
  private items: Array<string>;

  constructor(private name: string, private author: string) {
    this.items = [];
  }

  getPartyDescription(): string {
    return `${this.name} - Proposé par ${this.author}`;
  }

  addItem(item: string): void {
    this.items.push(item);
  }
}

const myParty = new Party("Pot de départ", "Patrick");
myParty.addItem("caviar");
