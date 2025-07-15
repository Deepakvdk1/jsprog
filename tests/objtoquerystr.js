// input={name: 'John', age: 30}    Output: "name=John&age=30" convert object values to query string

// let s=Object.entries(input).map(([key,value])=>`${key}=${value}`).join('&')
// console.log(s)

const data = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice' },
  { id: 3, name: 'Charlie' },
  { id: 2, name: 'Bob' }
];
const uniqueData = data.reduce((acc, current) => {
  const x = acc.find(item => item.id === current.id && item.name === current.name);
  if (!x) {
    return acc.concat([current]);
  } else {
    return acc;
  }
}, []);
console.log(uniqueData);

