import people from './data';
import { useState } from 'react';

// Person 元件：接收 props 並解構
// 這裡不需要 key，key 應該放在 map 迴圈中的元件上
const Person = ({ id, name, age, image }) => {
  return (
    <article className="person " key={id}>
      <img className="img" src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age}years</p>
      </div>
    </article>
  );
};

// List 元件：使用解構 { data } 來獲取 props
// 並且使用 JSX <Person /> 來渲染元件
const List = ({ data }) => {
  return data.map((person) => <Person {...person} key={person.id}></Person>);
};
const App = () => {
  const [data, changeData] = useState(people);
  console.log(data);

  const number = data.length;
  const reset = () => {
    changeData([]);
  };
  return (
    <main>
      <section className="container">
        <h3 className="title">{number} birthdays today</h3>
        <div className="title-underline "></div>
        <List data={data} />
        <button className="btn btn-block" onClick={reset}>
          clear all
        </button>
      </section>
    </main>
  );
};
export default App;
