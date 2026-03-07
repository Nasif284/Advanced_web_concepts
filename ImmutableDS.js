const user = { name: "nasif", age: 34 };
user.city = "pariyaram";
const modifiedUser = { ...user, city: "pariyaram" };
console.log(user, modifiedUser);

const user2 = {
  name: "Nasif",
  address: {
    city: "Kochi",
    zip: 12345,
  },
};
const modifiedUser2 = {
    ...user2,
    address: {
        ...user2.address,
        dist:"Eranakulam"
    }
}


const arr = [1, 2, 3];
const inserted = [...arr, 4];
const deleted = arr.filter((n) => n !== 2);
const updated = arr.map((n) => (n === 2 ? 20 : n));

import {produce} from 'immer'

const updatedUser = produce(user, (draft) => {
    draft.age = 87
})
console.log(updatedUser)

const updatedUser2 = produce(user2, (draft) => {
  draft.address.dist= "Eranakulam";
});
console.log(updatedUser2)

