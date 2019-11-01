import React from 'react';
import './App.css';
import Customer from './Components/Customer'

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '장준수',
    'birthday': '970128',
    'gender': '여자',
    'job': '백수'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '이재영',
    'birthday': '961205',
    'gender': '남자',
    'job': '편입생'
  }
];
class App extends React.Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer key={c.id}
              id={c.id}
              image={c.image}
              name={c.name} 
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}/>
            );
          })
        }
      </div>
    );
  }
}

export default App;
