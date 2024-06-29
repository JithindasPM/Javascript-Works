var products=[

    {id:1,title:"samasungs23ultra",price:130000,brand:"samsung"},
    {id:2,title:"m32",price:35000,brand:"samsung"},
    {id:3,title:"opporeno",price:27000,brand:"oppo"},
    {id:4,title:"mi21note",price:23000,brand:"mi"},
    {id:5,title:"moto edge 40",price:23000,brand:"moto"},
    {id:6,title:"moto ede40 neo",price:25000,brand:"moto"},
    {id:7,title:"iphone13",price:140000,brand:"apple"},
    {id:8,title:"iphone13pro",price:150000,brand:"apple"},
  
]

// length 
// console.log(products.length);


// var productName=products.map(p=>p.title)
// console.log(productName);

// var productFilter=products.filter(p=>p.price<35000).map(p=>p.title)
// console.log(productFilter);

// var samsungFilter=products.filter(p=>p.brand==['samsung'] && p.price<50000).map(p=>p.title);
// console.log(samsungFilter);

// var costlyProduct=products.reduce((p1,p2)=>p1.price<p2.price ? p2 : p1);
// console.log(costlyProduct.title);

// var priceDecOrder=products.sort((p1,p2)=>p2.price-p1.price);
// console.log(priceDecOrder);

// var priceRange= products.filter(p=>p.price>25000 && p.price<35000);
// console.log(priceRange);