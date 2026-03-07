const user = {
    name: "nasif",
    age:23
}

const proxyObject = new Proxy(user, {
    get: (target, prop) => {
        console.log(target, prop)
        return target[prop]
    },
    set: (target, prop, value) => {
        console.log(target, prop, value)
        return Reflect.set(target,prop,value)
    }
})
proxyObject.city = "pariyaram"
console.log(user)
// console.log(proxyObject.name);
// console.log(Reflect.set(user, "city", "kannur"));
// console.log(user)