const user = {
  name: "nasif",
  age: 23,
};

const proxyObject = new Proxy(user, {
  get: (target, prop) => {
    console.log(target, prop);
    return target[prop];
  },
  set: (target, prop, value) => {
    console.log(target, prop, value);
    return Reflect.set(target, prop, value);
  },
});
proxyObject.city = "pariyaram";
console.log(user);
// console.log(proxyObject.name);
// console.log(Reflect.set(user, "city", "kannur"));
// console.log(user)
const target = {
  name: "Nasif",
  age: 22,
};

const handler = {
  // get trap
  get(target, prop, receiver) {
    console.log(`Getting property ${prop}`);
    return Reflect.get(target, prop, receiver);
  },

  // set trap
  set(target, prop, value, receiver) {
    console.log(`Setting ${prop} to ${value}`);
    return Reflect.set(target, prop, value, receiver);
  },

  // delete trap
  deleteProperty(target, prop) {
    console.log(`Deleting property ${prop}`);
    return Reflect.deleteProperty(target, prop);
  },

  // has trap (for "in" operator)
  has(target, prop) {
    console.log(`Checking if ${prop} exists`);
    return Reflect.has(target, prop);
  },

  // ownKeys trap (Object.keys)
  ownKeys(target) {
    console.log("Listing keys");
    return Reflect.ownKeys(target);
  },

  // getOwnPropertyDescriptor trap
  getOwnPropertyDescriptor(target, prop) {
    console.log(`Getting descriptor for ${prop}`);
    return Reflect.getOwnPropertyDescriptor(target, prop);
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.name);

proxy.age = 25;

console.log("age" in proxy);

delete proxy.age;

console.log(Object.keys(proxy));

let user = {
  name: "nasif",
  age:12
}

let proxy = new Proxy(user, {
  get: (target, prop) => {
    console.log(`accessing ${prop}`)
    return Reflect.get(target,prop)
  },
  set: (target, prop, value) => {
    console.log("setting value")
    return Reflect.set(target,prop,value)
  },
  deleteProperty: (target, prop) => {
    console.log("deleting")
    return Reflect.deleteProperty(target,prop)
  },
  has: (target, prop) => {
    console.log("has accessed")
    return Reflect.has(target,prop)
  },
  ownKeys: (target) => {
    console.log("keys accessed")
    return Reflect.ownKeys(target)
  }
})

// console.log(Object.keys(proxy));


function sample(a,b,c) {}

const proxyFunc = new Proxy(sample, {
  apply: (target,thisArg,args) => {
    console.log(args)
    console.log("sample called")
    return Reflect.apply(target,thisArg,args)
  }
})
proxyFunc(1,2,3)
