const phonebook = [
  { name: "john", phone: "+777777777777" },
  { name: "joe", phone: "+72222222222" },
  { name: "jeffrey", phone: "+73333333333" },
];

const findByPhoneName = (name, arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].name === name) {
      return arr[i].phone;
    }
  }
};
