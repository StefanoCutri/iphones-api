const express = require("express");
const app = express();
const port = 4000;

// Sample array of objects
const data = [
  {
    id: 1,
    name: "Iphone 14",
    price: "$1000",
    img: "https://mercadositio.com/ficha-1664-apple-iphone-14-pro-max#gallery-1",
  },

  {
    id: 2,
    name: "Iphone 13",
    price: "$900",
    img: "https://ar.oneclickstore.com/wp-content/uploads/2021/12/iPhone_13_Starlight_PDP_Image_position-1A__CLCO_v1.jpg",
  },

  {
    id: 3,
    name: "Iphone 12",
    price: "$820",
    img: "https://www.macstation.com.ar/img/productos/2492-2317-1.jpg",
  },

  {
    id: 4,
    name: "Iphone x",
    price: "$600",
    img: "https://todoapplecaba.com.ar/wp-content/uploads/2021/05/apple-iphone-x-64gb-silver-used-20191122085356800-_w500_1-8532858c58bff3411615996662135414-640-0.jpg",
  },

  {
    id: 5,
    name: "Iphone 8 Plus",
    price: "$450",
    img: "https://acdn.mitiendanube.com/stores/001/116/601/products/refurb-iphone8plus-gold1-134c24cb5eb8e426cb16364723565163-480-0.jpg",
  },

  {
    id: 6,
    name: "Iphone 7 Plus",
    price: "$200",
    img: "https://http2.mlstatic.com/D_NQ_NP_604878-MLA43704039116_102020-O.webp",
  },

  {
    id: 7,
    name: "Iphone 6s Plus",
    price: "$130",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi8IDYzEIbSgj_GDVDb_xLu0aL1sxJs6KdlbPyCpGXEvE2-G8m0BJ42puVstheTFP8PIg&usqp=CAU",
  },

  {
    id: 8,
    name: "Ipad Pro ",
    price: "$500",
    img: "https://cdn-ipoint.waugi.com.ar/25845-thickbox_default/ipad-pro-129-wi-fi-256gb-5ta-gen-space-grey.jpg",
  },
];

// Define a route that returns the array of objects
app.get("/api/iphones", (req, res) => {
  res.json(data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
