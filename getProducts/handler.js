'use strict';

module.exports.getProducts = async (event) => {

const products = [  {
  "count": 1,
  "description": "Betrayal at House on the Hill 3rd Edition",
  "id": "1",
  "price": 35,
  "title": "Betrayal at House on the Hill 3rd Edition"
},
{
  "count": 6,
  "description": "Rustling Leaves",
  "id": "2",
  "price": 68,
  "title": "Rustling Leaves"
},
{
  "count": 1,
  "description": "So Clover!",
  "id": "3",
  "price": 359,
  "title": "So Clover!"
},
{
  "count": 1,
  "description": "Quacks of Quedlinburg- Herb Witches",
  "id": "4",
  "price": 8,
  "title": "Quacks of Quedlinburg- Herb Witches"
},
]

  return {
    statusCode: 200,
    body: JSON.stringify(products),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
