const employees = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@abc.com",
    gender: "Male",
    status: "Terminated",
    salary: 8000
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    email: "janedoe@abc.com",
    gender: "Female",
    status: "Active",
    salary: 5000
  },
  {
    id: 3,
    firstName: "Alice",
    lastName: "Doe",
    email: "alicedoe@abc.com",
    gender: "Female",
    status: "Active",
    salary: 5000
  },
  {
    id: 4,
    firstName: "Bob",
    lastName: "Doe",
    email: "bobdoe@abc.com",
    gender: "Male",
    status: "Active",
    salary: 10000
  },
  {
    id: 5,
    firstName: "Mayke",
    lastName: "Williams",
    email: "mikewilliams@abc.com",
    gender: "Male",
    status: "Active",
    salary: 10000
  },
  {
    id: 6,
    firstName: "Richard",
    lastName: "White",
    email: "rwhite@abc.com",
    gender: "Male",
    status: "Active",
    salary: 4000
  }
];

export const getEmployees = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(employees);
    }, 1000);
  });
};
