// UserProfileData.js

const userData = {
  userProfiles: [
    {
      username: "shopaholic_123",
      image:
        "https://imgs.search.brave.com/3iIf0i5zix5GXlh5s_oxj2Y-6qVddhgdvuRVfq3gndY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGFy/c3VuZm9sZGVkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/My8wOC9Icml0aGlr/LVJvc2hhbi1JbWFn/ZS5qcGc",
      fullName: "Aarav Patel",
      email: "aarav.patel@example.in",
      contactNumber: "+91 9876543210",
      shippingAddress: "456 Shopping Lane,Mumbai,400001,India",

      billingAddress: {
        street: "789 Purchase Street",
        city: "Mumbai",
        state: "Maharashtra",
        zipCode: "400002",
        country: "India",
      },
      profileImage: "",
      loyaltyPoints: 500,
      orderHistory: [
        {
          orderId: "ORD123456",
          date: "2023-11-11T12:30:00Z",
          totalAmount: 150.75,
          status: 3,

          items: [
            {
              productId: "PROD789",
              productName: "Delicious Cake",
              quantity: 2,
              price: 29.99,
              status: 2,
            },
            {
              productId: "PROD456",
              productName: "cake",
              quantity: 1,
              price: 90.99,
              status: 1,
            },
            {
              productId: "CAKE001",
              productName: "Chocolate Celebration Cake",
              quantity: 1,
              price: 29.99,
              status: 4,
            },
          ],
        },
        {
          orderId: "ORD120456",
          date: "2023-11-11T12:30:00Z",
          totalAmount: 150.75,
          status: 3,

          items: [
            {
              productId: "PROD789",
              productName: "Delicious Cake",
              quantity: 2,
              price: 29.99,
              status: 2,
            },
            {
              productId: "PROD456",
              productName: "cake",
              quantity: 1,
              price: 90.99,
              status: 1,
            },
            {
              productId: "CAKE001",
              productName: "Chocolate Celebration Cake",
              quantity: 1,
              price: 29.99,
              status: 4,
            },
          ],
        },
        {
          orderId: "ORD128456",
          date: "2023-11-11T12:30:00Z",
          totalAmount: 150.75,
          status: 3,

          items: [
            {
              productId: "PROD789",
              productName: "Delicious Cake",
              quantity: 2,
              price: 29.99,
              status: 2,
            },
            {
              productId: "PROD456",
              productName: "cake",
              quantity: 1,
              price: 90.99,
              status: 1,
            },
            {
              productId: "CAKE001",
              productName: "Chocolate Celebration Cake",
              quantity: 1,
              price: 29.99,
              status: 4,
            },
          ],
        },
        {
          orderId: "ORD789012",
          date: "2023-10-25T15:45:00Z",
          totalAmount: 75.5,
          status: "Shipped",
          items: [
            {
              productId: "PROD123",
              productName: "Casual Sneakers",
              quantity: 1,
              price: 75.5,
              status: 3,
            },
          ],
        },
      ],
    },
  ],
};

export default userData;
