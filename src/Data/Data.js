const products = [
  {
    ProductId: 123,
    ProductName: "Product 1",
    ProductPrice: 123.5,
    AvailablePieces: 25,
    ProductImg: "https://www.decolore.net/wp-content/uploads/2017/04/product-mock-up-set-2.jpg"
  },
  {
    ProductId: 124,
    ProductName: "Product 2",
    ProductPrice: 100.0,
    AvailablePieces: 100,
    ProductImg: "https://www.decolore.net/wp-content/uploads/2017/04/product-mock-up-set-2.jpg"
  },
  {
    ProductId: 125,
    ProductName: "Product 3",
    ProductPrice: 250.5,
    AvailablePieces: 10,
    ProductImg: "https://www.decolore.net/wp-content/uploads/2017/04/product-mock-up-set-2.jpg"
  },
  {
    ProductId: 126,
    ProductName: "Product 4",
    ProductPrice: 124.9,
    AvailablePieces: 60,
    ProductImg: "https://www.decolore.net/wp-content/uploads/2017/04/product-mock-up-set-2.jpg"
  },
  {
    ProductId: 127,
    ProductName: "Product 5",
    ProductPrice: 253.2,
    AvailablePieces: 400,
    ProductImg: "https://cdn.shopify.com/s/files/1/1038/1798/products/Long-Tin-Can-Mock-Up-1-Free-by-MassDream_1024x1024.jpg?v=1529072551"
  },
  {
    ProductId: 128,
    ProductName: "Product 6",
    ProductPrice: 589.5,
    AvailablePieces: 20,
    ProductImg: "https://www.decolore.net/wp-content/uploads/2017/04/product-mock-up-set-2.jpg"
  },
  {
    ProductId: 129,
    ProductName: "Product 7",
    ProductPrice: 20.2,
    AvailablePieces: 1200,
    ProductImg: "https://cdn.shopify.com/s/files/1/1038/1798/products/Long-Tin-Can-Mock-Up-1-Free-by-MassDream_1024x1024.jpg?v=1529072551"
  },
  {
    ProductId: 130,
    ProductName: "Product 8",
    ProductPrice: 30.5,
    AvailablePieces: 30,
    ProductImg: "https://www.decolore.net/wp-content/uploads/2017/04/product-mock-up-set-2.jpg"
  },
  {
    ProductId: 131,
    ProductName: "Product 9",
    ProductPrice: 5.5,
    AvailablePieces: 5220,
    ProductImg: "https://cdn.shopify.com/s/files/1/1038/1798/products/Long-Tin-Can-Mock-Up-1-Free-by-MassDream_1024x1024.jpg?v=1529072551"
  },
  {
    ProductId: 132,
    ProductName: "Product 10",
    ProductPrice: 20.5,
    AvailablePieces: 1000,
    ProductImg: "https://www.decolore.net/wp-content/uploads/2017/04/product-mock-up-set-2.jpg"
  },
  {
    ProductId: 133,
    ProductName: "Product 11",
    ProductPrice: 4.5,
    AvailablePieces: 24,
    ProductImg: "https://cdn.shopify.com/s/files/1/1038/1798/products/Long-Tin-Can-Mock-Up-1-Free-by-MassDream_1024x1024.jpg?v=1529072551"
  },
  {
    ProductId: 134,
    ProductName: "Product 12",
    ProductPrice: 20.0,
    AvailablePieces: 5,
    ProductImg: "https://www.decolore.net/wp-content/uploads/2017/04/product-mock-up-set-2.jpg"
  },
  {
    ProductId: 135,
    ProductName: "Product 13",
    ProductPrice: 25.2,
    AvailablePieces: 4,
    ProductImg: "https://cdn.shopify.com/s/files/1/1038/1798/products/Long-Tin-Can-Mock-Up-1-Free-by-MassDream_1024x1024.jpg?v=1529072551"
  },
  {
    ProductId: 136,
    ProductName: "Product 14",
    ProductPrice: 200.0,
    AvailablePieces: 2,
    ProductImg: "https://www.decolore.net/wp-content/uploads/2017/04/product-mock-up-set-2.jpg"
  },
  {
    ProductId: 137,
    ProductName: "Product 15",
    ProductPrice: 30.0,
    AvailablePieces: 1,
    ProductImg: "https://cdn.shopify.com/s/files/1/1038/1798/products/Long-Tin-Can-Mock-Up-1-Free-by-MassDream_1024x1024.jpg?v=1529072551"
  },
  {
    ProductId: 138,
    ProductName: "Product 16",
    ProductPrice: 10.0,
    AvailablePieces: 1,
    ProductImg: "https://www.decolore.net/wp-content/uploads/2017/04/product-mock-up-set-2.jpg"
  },
  {
    ProductId: 139,
    ProductName: "Product 17",
    ProductPrice: 30.5,
    AvailablePieces: 2,
    ProductImg: "https://cdn.shopify.com/s/files/1/1038/1798/products/Long-Tin-Can-Mock-Up-1-Free-by-MassDream_1024x1024.jpg?v=1529072551"
  },
  {
    ProductId: 140,
    ProductName: "Product 18",
    ProductPrice: 63.5,
    AvailablePieces: 3,
    ProductImg: "https://www.decolore.net/wp-content/uploads/2017/04/product-mock-up-set-2.jpg"
  },
  {
    ProductId: 141,
    ProductName: "Product 19",
    ProductPrice: 60.0,
    AvailablePieces: 0,
    ProductImg: "https://cdn.shopify.com/s/files/1/1038/1798/products/Long-Tin-Can-Mock-Up-1-Free-by-MassDream_1024x1024.jpg?v=1529072551"
  },
  {
    ProductId: 142,
    ProductName: "Product 20",
    ProductPrice: 59.5,
    AvailablePieces: 0,
    ProductImg: "https://www.decolore.net/wp-content/uploads/2017/04/product-mock-up-set-2.jpg"
  }
];

const orders = [
  {
    OrderId: 1233,
    OrderDate: "Wed Sep 18 2019 12:45:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8475-2345-2312",
    Products: [
      {
        ProductId: 124,
        Quantity: 2
      },
      {
        ProductId: 127,
        Quantity: 1
      },
      {
        ProductId: 130,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1234,
    OrderDate: "Wed Sep 18 2019 12:45:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "1223-1223-1231",
    Products: [
      {
        ProductId: 132,
        Quantity: 12
      },
      {
        ProductId: 134,
        Quantity: 3
      },
      {
        ProductId: 130,
        Quantity: 2
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1235,
    OrderDate: "Wed Sep 18 2019 12:45:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "9843-2345-2345",
    Products: [
      {
        ProductId: 123,
        Quantity: 1
      },
      {
        ProductId: 131,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1236,
    OrderDate: "Thu Jul 19 2019 12:45:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "2343-1233-4323",
    Products: [
      {
        ProductId: 136,
        Quantity: 1
      },
      {
        ProductId: 139,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1237,
    OrderDate: "Wed Jul 19 2019 12:45:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "2343-1233-4323",
    Products: [
      {
        ProductId: 142,
        Quantity: 3
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1238,
    OrderDate: "Thu Jul 20 2019 12:45:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "3123-3242-1231",
    Products: [
      {
        ProductId: 126,
        Quantity: 6
      },
      {
        ProductId: 141,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1239,
    OrderDate: "Fri Jul 20 2019 12:55:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "1231-1244-1233",
    Products: [
      {
        ProductId: 135,
        Quantity: 6
      },
      {
        ProductId: 141,
        Quantity: 10
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1240,
    OrderDate: "Fri Jul 20 2019 01:55:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "1223-1223-1231",
    Products: [
      {
        ProductId: 142,
        Quantity: 3
      },
      {
        ProductId: 125,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1241,
    OrderDate: "Fri Jul 20 2019 03:55:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "1231-1244-1233",
    Products: [
      {
        ProductId: 131,
        Quantity: 3
      },
      {
        ProductId: 125,
        Quantity: 2
      },
      ,
      {
        ProductId: 123,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1242,
    OrderDate: "Fri Jul 20 2019 06:55:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "1231-1244-1233",
    Products: [
      {
        ProductId: 140,
        Quantity: 3
      },
      {
        ProductId: 125,
        Quantity: 8
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1243,
    OrderDate: "Fri Jul 20 2019 09:55:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "1231-1244-1233",
    Products: [
      {
        ProductId: 140,
        Quantity: 3
      },
      {
        ProductId: 125,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1244,
    OrderDate: "Fri Jul 20 2019 11:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "1231-1244-1233",
    Products: [
      {
        ProductId: 141,
        Quantity: 3
      },
      {
        ProductId: 130,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1245,
    OrderDate: "Fri Jul 20 2019 00:55:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "1231-1244-1233",
    Products: [
      {
        ProductId: 141,
        Quantity: 3
      },
      {
        ProductId: 130,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1246,
    OrderDate: "Fri Jul 20 2019 14:55:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "1231-1244-1233",
    Products: [
      {
        ProductId: 141,
        Quantity: 3
      },
      {
        ProductId: 130,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1247,
    OrderDate: "Fri Jul 20 2019 12:55:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "1231-1244-1233",
    Products: [
      {
        ProductId: 141,
        Quantity: 3
      },
      {
        ProductId: 130,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1248,
    OrderDate: "Fri Jul 20 2019 16:55:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "1231-1244-1233",
    Products: [
      {
        ProductId: 141,
        Quantity: 3
      },
      {
        ProductId: 130,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1249,
    OrderDate: "Fri Jul 20 2019 18:55:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "1231-1244-1233",
    Products: [
      {
        ProductId: 141,
        Quantity: 3
      },
      {
        ProductId: 130,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1250,
    OrderDate: "Fri Jul 20 2019 22:55:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "1231-1244-1233",
    Products: [
      {
        ProductId: 141,
        Quantity: 3
      },
      {
        ProductId: 130,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1251,
    OrderDate: "Fri Jul 20 2019 23:50:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "1231-1244-1233",
    Products: [
      {
        ProductId: 140,
        Quantity: 3
      },
      {
        ProductId: 130,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1252,
    OrderDate: "Sun Jul 22 2019 03:00:00 GMT+0200 (Eastern European Standard Time)",
    UserId: "5432-3425-1234",
    Products: [
      {
        ProductId: 141,
        Quantity: 3
      },
      {
        ProductId: 130,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1253,
    OrderDate: "Sun Jul 22 2019  01:55:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "5432-3425-1234",
    Products: [
      {
        ProductId: 141,
        Quantity: 3
      },
      {
        ProductId: 130,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1254,
    OrderDate: "Fri Jul 20 2019 12:55:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "5432-3425-1234",
    Products: [
      {
        ProductId: 141,
        Quantity: 3
      },
      {
        ProductId: 130,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1255,
    OrderDate: "Fri Jul 20 2019 01:05:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "5432-3425-1234",
    Products: [
      {
        ProductId: 141,
        Quantity: 3
      },
      {
        ProductId: 129,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1256,
    OrderDate: "Fri Jul 20 2019 14:50:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "5432-3425-1234",
    Products: [
      {
        ProductId: 141,
        Quantity: 3
      },
      {
        ProductId: 129,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1257,
    OrderDate: "Fri Jul 20 2019 14:50:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "5432-3425-1234",
    Products: [
      {
        ProductId: 141,
        Quantity: 3
      },
      {
        ProductId: 129,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1258,
    OrderDate: "Fri Jul 20 2019 14:50:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "5432-3425-1234",
    Products: [
      {
        ProductId: 141,
        Quantity: 3
      },
      {
        ProductId: 129,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1259,
    OrderDate: "Fri Jul 20 2019 14:50:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "5432-3425-1234",
    Products: [
      {
        ProductId: 141,
        Quantity: 3
      },
      {
        ProductId: 129,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1260,
    OrderDate: "Fri Jul 20 2019 22:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "5432-3425-1234",
    Products: [
      {
        ProductId: 141,
        Quantity: 3
      },
      {
        ProductId: 129,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1261,
    OrderDate: "Fri Jul 20 2019 22:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "5432-3425-1234",
    Products: [
      {
        ProductId: 141,
        Quantity: 3
      },
      {
        ProductId: 129,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1262,
    OrderDate: "Fri Jul 20 2019 22:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "5432-3425-1234",
    Products: [
      {
        ProductId: 140,
        Quantity: 3
      },
      {
        ProductId: 129,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1263,
    OrderDate: "Fri Jul 20 2019 22:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "2343-1233-4323",
    Products: [
      {
        ProductId: 140,
        Quantity: 3
      },
      {
        ProductId: 129,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1264,
    OrderDate: "Fri Jul 20 2019 22:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "2343-1233-4323",
    Products: [
      {
        ProductId: 140,
        Quantity: 3
      },
      {
        ProductId: 128,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1265,
    OrderDate: "Fri Jul 20 2019 22:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "2343-1233-4323",
    Products: [
      {
        ProductId: 140,
        Quantity: 3
      },
      {
        ProductId: 128,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1266,
    OrderDate: "Fri Jul 20 2019 22:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "2343-1233-4323",
    Products: [
      {
        ProductId: 140,
        Quantity: 3
      },
      {
        ProductId: 128,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1267,
    OrderDate: "Fri Jul 20 2019 22:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "2343-1233-4323",
    Products: [
      {
        ProductId: 140,
        Quantity: 3
      },
      {
        ProductId: 128,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1268,
    OrderDate: "Fri Jul 20 2019 22:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "2343-1233-4323",
    Products: [
      {
        ProductId: 140,
        Quantity: 3
      },
      {
        ProductId: 128,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1269,
    OrderDate: "Mon Jul 23 2019  22:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "2343-1233-4323",
    Products: [
      {
        ProductId: 142,
        Quantity: 3
      },
      {
        ProductId: 128,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1270,
    OrderDate: "Mon Jul 23 2019  22:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "2343-1233-4323",
    Products: [
      {
        ProductId: 142,
        Quantity: 3
      },
      {
        ProductId: 128,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1271,
    OrderDate: "Mon Jul 23 2019  06:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "2343-1233-4323",
    Products: [
      {
        ProductId: 142,
        Quantity: 3
      },
      {
        ProductId: 128,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1272,
    OrderDate: "Mon Jul 23 2019  06:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "2343-1233-4323",
    Products: [
      {
        ProductId: 142,
        Quantity: 3
      },
      {
        ProductId: 128,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1273,
    OrderDate: "Mon Jul 23 2019  06:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "2343-1233-4323",
    Products: [
      {
        ProductId: 142,
        Quantity: 3
      },
      {
        ProductId: 128,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1274,
    OrderDate: "Mon Jul 23 2019  06:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8573-2903-23443",
    Products: [
      {
        ProductId: 142,
        Quantity: 3
      },
      {
        ProductId: 128,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1275,
    OrderDate: "Mon Jul 23 2019  06:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8573-2903-23443",
    Products: [
      {
        ProductId: 142,
        Quantity: 3
      },
      {
        ProductId: 128,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1276,
    OrderDate: "Mon Jul 23 2019  06:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8573-2903-23443",
    Products: [
      {
        ProductId: 142,
        Quantity: 3
      },
      {
        ProductId: 128,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1277,
    OrderDate: "Mon Jul 23 2019  06:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8573-2903-23443",
    Products: [
      {
        ProductId: 139,
        Quantity: 3
      },
      {
        ProductId: 128,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1278,
    OrderDate: "Mon Jul 23 2019  06:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8573-2903-23443",
    Products: [
      {
        ProductId: 139,
        Quantity: 3
      },
      {
        ProductId: 127,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1279,
    OrderDate: "Mon Jul 23 2019  06:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8573-2903-23443",
    Products: [
      {
        ProductId: 139,
        Quantity: 3
      },
      {
        ProductId: 127,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1280,
    OrderDate: "Tue Jul 24 2019  06:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8573-2903-23443",
    Products: [
      {
        ProductId: 139,
        Quantity: 3
      },
      {
        ProductId: 127,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1281,
    OrderDate: "Tue Jul 24 2019  06:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8573-2903-23443",
    Products: [
      {
        ProductId: 139,
        Quantity: 3
      },
      {
        ProductId: 127,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1282,
    OrderDate: "Tue Jul 24 2019  06:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8573-2903-23443",
    Products: [
      {
        ProductId: 139,
        Quantity: 3
      },
      {
        ProductId: 127,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1283,
    OrderDate: "Tue Jul 24 2019  06:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8573-2903-23443",
    Products: [
      {
        ProductId: 139,
        Quantity: 3
      },
      {
        ProductId: 127,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1284,
    OrderDate: "Tue Jul 24 2019  06:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8573-2903-23443",
    Products: [
      {
        ProductId: 139,
        Quantity: 3
      },
      {
        ProductId: 127,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1285,
    OrderDate: "Tue Jul 24 2019  23:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8573-2903-23443",
    Products: [
      {
        ProductId: 139,
        Quantity: 3
      },
      {
        ProductId: 127,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1286,
    OrderDate: "Tue Jul 24 2019  23:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "9179-2312-3421",
    Products: [
      {
        ProductId: 138,
        Quantity: 3
      },
      {
        ProductId: 127,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1287,
    OrderDate: "Tue Jul 24 2019  23:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "9179-2312-3421",
    Products: [
      {
        ProductId: 138,
        Quantity: 3
      },
      {
        ProductId: 127,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1288,
    OrderDate: "Tue Jul 24 2019  23:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "9179-2312-3421",
    Products: [
      {
        ProductId: 138,
        Quantity: 3
      },
      {
        ProductId: 127,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1289,
    OrderDate: "Tue Jul 24 2019  23:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "9179-2312-3421",
    Products: [
      {
        ProductId: 138,
        Quantity: 3
      },
      {
        ProductId: 127,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1290,
    OrderDate: "Tue Jul 24 2019  23:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "9179-2312-3421",
    Products: [
      {
        ProductId: 138,
        Quantity: 3
      },
      {
        ProductId: 127,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1291,
    OrderDate: "Tue Jul 24 2019  23:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "9179-2312-3421",
    Products: [
      {
        ProductId: 138,
        Quantity: 3
      },
      {
        ProductId: 127,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1292,
    OrderDate: "Tue Jul 24 2019  23:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "9179-2312-3421",
    Products: [
      {
        ProductId: 138,
        Quantity: 3
      },
      {
        ProductId: 127,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1293,
    OrderDate: "Tue Jul 24 2019  23:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "9179-2312-3421",
    Products: [
      {
        ProductId: 138,
        Quantity: 3
      },
      {
        ProductId: 127,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1294,
    OrderDate: "Tue Jul 24 2019  23:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "9179-2312-3421",
    Products: [
      {
        ProductId: 138,
        Quantity: 3
      },
      {
        ProductId: 127,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1295,
    OrderDate: "Tue Jul 24 2019  23:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "9179-2312-3421",
    Products: [
      {
        ProductId: 136,
        Quantity: 3
      },
      {
        ProductId: 127,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1296,
    OrderDate: "Tue Jul 24 2019  23:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "9179-2312-3421",
    Products: [
      {
        ProductId: 136,
        Quantity: 3
      },
      {
        ProductId: 127,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1297,
    OrderDate: "Tue Jul 24 2019  23:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "9179-2312-3421",
    Products: [
      {
        ProductId: 136,
        Quantity: 3
      },
      {
        ProductId: 127,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1298,
    OrderDate: "Tue Jul 24 2019  23:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "9179-2312-3421",
    Products: [
      {
        ProductId: 136,
        Quantity: 3
      },
      {
        ProductId: 125,
        Quantity: 10
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1299,
    OrderDate: "Tue Jul 24 2019  23:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "9179-2312-3421",
    Products: [
      {
        ProductId: 136,
        Quantity: 3
      },
      {
        ProductId: 125,
        Quantity: 33
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1300,
    OrderDate: "Wed Jul 25 2019  23:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8475-2345-2312",
    Products: [
      {
        ProductId: 136,
        Quantity: 30
      },
      {
        ProductId: 125,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1301,
    OrderDate: "Wed Jul 25 2019  23:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8475-2345-2312",
    Products: [
      {
        ProductId: 136,
        Quantity: 3
      },
      {
        ProductId: 125,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1302,
    OrderDate: "Wed Jul 25 2019  23:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8475-2345-2312",
    Products: [
      {
        ProductId: 136,
        Quantity: 3
      },
      {
        ProductId: 125,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1303,
    OrderDate: "Wed Jul 25 2019  23:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8475-2345-2312",
    Products: [
      {
        ProductId: 135,
        Quantity: 3
      },
      {
        ProductId: 125,
        Quantity: 10
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1304,
    OrderDate: "Wed Jul 25 2019  01:55:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8475-2345-2312",
    Products: [
      {
        ProductId: 135,
        Quantity: 3
      },
      {
        ProductId: 125,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1305,
    OrderDate: "Wed Jul 25 2019  15:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8475-2345-2312",
    Products: [
      {
        ProductId: 135,
        Quantity: 3
      },
      {
        ProductId: 125,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1306,
    OrderDate: "Wed Jul 25 2019  15:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8475-2345-2312",
    Products: [
      {
        ProductId: 135,
        Quantity: 38
      },
      {
        ProductId: 125,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1307,
    OrderDate: "Wed Jul 25 2019  15:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8475-2345-2312",
    Products: [
      {
        ProductId: 135,
        Quantity: 3
      },
      {
        ProductId: 125,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1308,
    OrderDate: "Wed Jul 25 2019  15:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8475-2345-2312",
    Products: [
      {
        ProductId: 135,
        Quantity: 3
      },
      {
        ProductId: 125,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1309,
    OrderDate: "Wed Jul 25 2019  15:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8475-2345-2312",
    Products: [
      {
        ProductId: 135,
        Quantity: 3
      },
      {
        ProductId: 127,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1310,
    OrderDate: "Wed Jul 25 2019  15:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8475-2345-2312",
    Products: [
      {
        ProductId: 135,
        Quantity: 3
      },
      {
        ProductId: 126,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1311,
    OrderDate: "Wed Jul 25 2019  15:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8475-2345-2312",
    Products: [
      {
        ProductId: 134,
        Quantity: 3
      },
      {
        ProductId: 126,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1312,
    OrderDate: "Wed Jul 25 2019  15:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8475-2345-2312",
    Products: [
      {
        ProductId: 134,
        Quantity: 3
      },
      {
        ProductId: 126,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1313,
    OrderDate: "Wed Jul 25 2019  15:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8475-2345-2312",
    Products: [
      {
        ProductId: 134,
        Quantity: 3
      },
      {
        ProductId: 126,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1314,
    OrderDate: "Wed Jul 25 2019  15:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8475-2345-2312",
    Products: [
      {
        ProductId: 134,
        Quantity: 3
      },
      {
        ProductId: 126,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1315,
    OrderDate: "Wed Jul 25 2019  15:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8475-2345-2312",
    Products: [
      {
        ProductId: 134,
        Quantity: 3
      },
      {
        ProductId: 126,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1316,
    OrderDate: "Wed Jul 25 2019  15:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8475-2345-2312",
    Products: [
      {
        ProductId: 134,
        Quantity: 3
      },
      {
        ProductId: 126,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1317,
    OrderDate: "Thu Jul 26 2019  15:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8475-2345-2312",
    Products: [
      {
        ProductId: 134,
        Quantity: 3
      },
      {
        ProductId: 126,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1318,
    OrderDate: "Thu Jul 26 2019  15:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8475-2345-2312",
    Products: [
      {
        ProductId: 134,
        Quantity: 3
      },
      {
        ProductId: 126,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1319,
    OrderDate: "Thu Jul 26 2019  15:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "8475-2345-2312",
    Products: [
      {
        ProductId: 133,
        Quantity: 3
      },
      {
        ProductId: 126,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1320,
    OrderDate: "Thu Jul 26 2019  15:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "2343-1233-4323",
    Products: [
      {
        ProductId: 133,
        Quantity: 3
      },
      {
        ProductId: 126,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1321,
    OrderDate: "Thu Jul 26 2019  15:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "2343-1233-4323",
    Products: [
      {
        ProductId: 133,
        Quantity: 3
      },
      {
        ProductId: 126,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1322,
    OrderDate: "Thu Jul 26 2019  15:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "2343-1233-4323",
    Products: [
      {
        ProductId: 133,
        Quantity: 3
      },
      {
        ProductId: 124,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1323,
    OrderDate: "Thu Jul 26 2019  15:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "2343-1233-4323",
    Products: [
      {
        ProductId: 133,
        Quantity: 3
      },
      {
        ProductId: 124,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1324,
    OrderDate: "Thu Jul 26 2019  15:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "2343-1233-4323",
    Products: [
      {
        ProductId: 133,
        Quantity: 3
      },
      {
        ProductId: 124,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1325,
    OrderDate: "Thu Jul 26 2019  15:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "2343-1233-4323",
    Products: [
      {
        ProductId: 133,
        Quantity: 3
      },
      {
        ProductId: 124,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1326,
    OrderDate: "Thu Jul 26 2019  18:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "2343-1233-4323",
    Products: [
      {
        ProductId: 133,
        Quantity: 3
      },
      {
        ProductId: 124,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1327,
    OrderDate: "Thu Jul 26 2019  18:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "2343-1233-4323",
    Products: [
      {
        ProductId: 133,
        Quantity: 3
      },
      {
        ProductId: 124,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1328,
    OrderDate: "Thu Jul 26 2019  18:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "2343-1233-4323",
    Products: [
      {
        ProductId: 133,
        Quantity: 3
      },
      {
        ProductId: 124,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1329,
    OrderDate: "Thu Jul 26 2019  18:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "2343-1233-4323",
    Products: [
      {
        ProductId: 133,
        Quantity: 3
      },
      {
        ProductId: 125,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1330,
    OrderDate: "Thu Jul 26 2019  18:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "2343-1233-4323",
    Products: [
      {
        ProductId: 133,
        Quantity: 3
      },
      {
        ProductId: 123,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1331,
    OrderDate: "Thu Jul 26 2019  18:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "2343-1233-4323",
    Products: [
      {
        ProductId: 133,
        Quantity: 3
      },
      {
        ProductId: 123,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1332,
    OrderDate: "Thu Jul 26 2019  18:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "2343-1233-4323",
    Products: [
      {
        ProductId: 132,
        Quantity: 3
      },
      {
        ProductId: 123,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1333,
    OrderDate: "Thu Jul 26 2019  18:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "1231-1244-1233",
    Products: [
      {
        ProductId: 132,
        Quantity: 3
      },
      {
        ProductId: 123,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1334,
    OrderDate: "Thu Jul 26 2019  18:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "1231-1244-1233",
    Products: [
      {
        ProductId: 132,
        Quantity: 3
      },
      {
        ProductId: 123,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1335,
    OrderDate: "Fri Jul 27 2019  18:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "1231-1244-1233",
    Products: [
      {
        ProductId: 132,
        Quantity: 3
      },
      {
        ProductId: 123,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1336,
    OrderDate: "Fri Jul 27 2019  18:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "1231-1244-1233",
    Products: [
      {
        ProductId: 132,
        Quantity: 3
      },
      {
        ProductId: 123,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1337,
    OrderDate: "Fri Jul 27 2019  18:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "1231-1244-1233",
    Products: [
      {
        ProductId: 132,
        Quantity: 3
      },
      {
        ProductId: 123,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1338,
    OrderDate: "Fri Jul 27 2019  18:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "1231-1244-1233",
    Products: [
      {
        ProductId: 132,
        Quantity: 3
      },
      {
        ProductId: 123,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1339,
    OrderDate: "Fri Jul 27 2019  18:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "1231-1244-1233",
    Products: [
      {
        ProductId: 132,
        Quantity: 3
      },
      {
        ProductId: 125,
        Quantity: 88
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1400,
    OrderDate: "Fri Jul 27 2019  18:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "1231-1244-1233",
    Products: [
      {
        ProductId: 132,
        Quantity: 3
      },
      {
        ProductId: 125,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1401,
    OrderDate: "Fri Jul 27 2019  18:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "1231-1244-1233",
    Products: [
      {
        ProductId: 132,
        Quantity: 3
      },
      {
        ProductId: 125,
        Quantity: 5
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1402,
    OrderDate: "Fri Jul 27 2019  18:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "1231-1244-1233",
    Products: [
      {
        ProductId: 132,
        Quantity: 3
      },
      {
        ProductId: 125,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1403,
    OrderDate: "Fri Jul 27 2019  18:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "1231-1244-1233",
    Products: [
      {
        ProductId: 132,
        Quantity: 3
      },
      {
        ProductId: 125,
        Quantity: 2
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1404,
    OrderDate: "Fri Jul 27 2019  18:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "1231-1244-1233",
    Products: [
      {
        ProductId: 132,
        Quantity: 3
      },
      {
        ProductId: 125,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1405,
    OrderDate: "Fri Jul 27 2019  18:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "1231-1244-1233",
    Products: [
      {
        ProductId: 132,
        Quantity: 3
      },
      {
        ProductId: 125,
        Quantity: 8
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1406,
    OrderDate: "Fri Jul 27 2019  18:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "9179-2312-3421",
    Products: [
      {
        ProductId: 132,
        Quantity: 3
      },
      {
        ProductId: 125,
        Quantity: 90
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1407,
    OrderDate: "Fri Jul 27 2019  18:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "9179-2312-3421",
    Products: [
      {
        ProductId: 132,
        Quantity: 3
      },
      {
        ProductId: 125,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1408,
    OrderDate: "Fri Jul 27 2019  18:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "9179-2312-3421",
    Products: [
      {
        ProductId: 131,
        Quantity: 3
      },
      {
        ProductId: 125,
        Quantity: 6
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1409,
    OrderDate: "Fri Jul 27 2019  18:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "9179-2312-3421",
    Products: [
      {
        ProductId: 131,
        Quantity: 3
      },
      {
        ProductId: 125,
        Quantity: 3
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1410,
    OrderDate: "Sun Jul 22 2019 06:55:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "9179-2312-3421",
    Products: [
      {
        ProductId: 131,
        Quantity: 3
      },
      {
        ProductId: 125,
        Quantity: 30
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1411,
    OrderDate: "Sun Jul 22 2019 18:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "9179-2312-3421",
    Products: [
      {
        ProductId: 131,
        Quantity: 3
      },
      {
        ProductId: 125,
        Quantity: 1
      }
    ],
    PaymentType: "Online"
  },
  {
    OrderId: 1412,
    OrderDate: "Sat Jul 21 2019 18:30:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "9179-2312-3421",
    Products: [
      {
        ProductId: 131,
        Quantity: 3
      },
      {
        ProductId: 125,
        Quantity: 9
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1413,
    OrderDate: "Sat Jul 21 2019 01:00:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "9179-2312-3421",
    Products: [
      {
        ProductId: 131,
        Quantity: 3
      },
      {
        ProductId: 125,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  },
  {
    OrderId: 1414,
    OrderDate: "Sat Jul 21 2019 01:55:37 GMT+0200 (Eastern European Standard Time)",
    UserId: "9179-2312-3421",
    Products: [
      {
        ProductId: 131,
        Quantity: 3
      },
      {
        ProductId: 125,
        Quantity: 1
      }
    ],
    PaymentType: "Cash"
  }
];

const users = [
  {
    Id: "1231-1244-1233",
    Name: "Mohamed Ashraf",
    Email: "Mohamed.Ashraf@Gmail.com",
    Phone: "01144558866",
    Address: "55 Mohammed Mostafa El Sayed, An Nadi Al Ahli, Nasr City, Cairo Governorate",
    RegisterDate: "Wed Sep 18 2019 12:35:14 GMT+0200 (Eastern European Standard Time)"
  },
  {
    Id: "8573-2903-2344",
    Name: "Ahmed Hossam",
    Email: "Ahmed.Hossam@gmail.com",
    Phone: "01025458780",
    Address: "234 Al Abageyah, Qesm Al Khalifah, Cairo Governorate",
    RegisterDate: "Wed Sep 18 2019 12:35:14 GMT+0200 (Eastern European Standard Time)"
  },
  {
    Id: "8475-2345-2312",
    Name: "Hassan Mostafa Ahmed",
    Email: "HassanMostafa@gmail.com",
    Phone: "01235698458",
    Address: "1 Al Teraa, El-Masara El-Balad, Helwan, Cairo Governorate",
    RegisterDate: "Wed Sep 18 2019 12:35:14 GMT+0200 (Eastern European Standard Time)"
  },
  {
    Id: "9843-2345-2345",
    Name: "Abd El-Rahman Ahmed Abd El-Aleem",
    Email: "AbdoAhmed@hotmail.com",
    Phone: "01125452545",
    Address: "25 Street 214, Maadi as Sarayat Al Gharbeyah, Maadi, Cairo Governorate",
    RegisterDate: "Wed Sep 18 2019 12:35:14 GMT+0200 (Eastern European Standard Time)"
  },
  {
    Id: "5432-3425-1234",
    Name: "Hossam Ramadan",
    Email: "HossamRamadan2010@live.com",
    Phone: "01025485522",
    Address: "236A Al Labeini, Al Haraneyah, Giza District, Giza Governorate",
    RegisterDate: "Wed Sep 18 2019 12:35:14 GMT+0200 (Eastern European Standard Time)"
  },
  {
    Id: "9179-2312-3421",
    Name: "Hoda Ahmed",
    Email: "HodaHoda2020@gmail.com",
    Phone: "01256633333",
    Address: "25 Street 214, Maadi as Sarayat Al Gharbeyah, Maadi, Cairo Governorate",
    RegisterDate: "Wed Sep 18 2019 12:35:14 GMT+0200 (Eastern European Standard Time)"
  },
  {
    Id: "2343-1233-4323",
    Name: "Nada Hossam Ahmed",
    Email: "NadaAhmed2222@gmail.com",
    Phone: "01223655892",
    Address: "111, District 7, Neighborhood 1, Floor 7, El sheikh zayed, Giza Governorate 12577",
    RegisterDate: "Wed Sep 18 2019 12:35:14 GMT+0200 (Eastern European Standard Time)"
  },
  {
    Id: "1223-1223-1231",
    Name: "John Emad Peter",
    Email: "JohnP2011@gmail.com",
    Phone: "01566445588",
    Address: "88 10 Ramadan, Ezbet Saad, Sidi Gaber, Alexandria Governorate",
    RegisterDate: "Wed Sep 18 2019 12:35:14 GMT+0200 (Eastern European Standard Time)"
  },
  {
    Id: "3123-3242-1231",
    Name: "John Emad Peter",
    Email: "JohnP2011@gmail.com",
    Phone: "01002235544",
    Address: "125 Z, Hadayek Al Ahram, Haram, Giza Governorate",
    RegisterDate: "Wed Sep 18 2019 12:35:14 GMT+0200 (Eastern European Standard Time)"
  }
];

export function getProducts() {
  return products;
}

export function getOrders() {
  return orders;
}

export function getProductById(id) {
  let product = products.filter(product => {
    return product.ProductId === id;
  });
  return product;
}

export function getProductPrice(productId) {
  let product = getProductById(productId);
  return product[0].ProductPrice;
}

export function getOrder(id) {
  let order = orders.filter(order => {
    return order.OrderId === id;
  });
  return order;
}
