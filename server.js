const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send(customers);
})

app.listen(port, () => console.log(`Listening on port ${port}`));