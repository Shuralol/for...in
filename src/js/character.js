  export function orderByProps(obj, order) {
  const orderedProps = order.concat(Object.keys(obj).sort());
  const resultArr = [];

  for (let prop of orderedProps) {
    if (obj.hasOwnProperty(prop)) {
      resultArr.push({key: prop, value: obj[prop]})
    }
  }

  return resultArr;
}

const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
const order = ["name", "level"];

console.log(orderByProps(obj, order)); 
