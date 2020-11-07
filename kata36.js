// Find Friend
// This function will take three parameters. One: the contact data. Two: a name of a contact in the data. Three: a form of contact (email or phone). It will then then return the email or phone and name of the first friend of the contact name given.

// Data
const contacts = [
  {
    name: "Laurel",
    phone: "123 456 7890",
    email: "laurel@comics.com",
    friends: ["Hardy", "Abbott", "Costello"]
  },
  {
    name: "Hardy",
    phone: "321 654 0987",
    email: "hardy@hardyharhar.com",
    friends: ["Laurel", "Buster"]
  },
  {
    name: "Buster",
    phone: "987 654 3210",
    email: "buster@keaton.ca",
    friends: ["Hardy"]
  },
  {
    name: "Abbott",
    phone: "888 123 4567",
    email: "abbott@whosonfirst.co",
    friends: ["Costello", "Laurel"]
  },
  {
    name: "Costello",
    phone: "767 676 7676",
    email: "costello@imonfirst.co",
    friends: ["Abbott", "Laurel"]
  }
];

const findFriend = (data, contact, field) => {
  const output = {};

  const contactObject = data.find(object => object.name === contact);
  if (!contactObject) return "Not found";
  const firstFriend = contactObject.friends[0];
  output["name"] = firstFriend;

  const friendObject = data.find(object => object.name === firstFriend);
  if (!friendObject[field]) return "Not found";
  output[field] = friendObject[field];

  return output;
};

const result = findFriend(contacts, "Abbott", "phone");
console.log(result);