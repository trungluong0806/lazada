Github URL: https://github.com/trungluong0806/lazada.git

User Credentials:
Customer: username - Trung Kumiko password-Lacussaber12345@@@
Vendor: username - Trung Kumik password - Lacussaber12345@@@
Shipper:
            Administrator: Trung Kumik password - Lacussaber12345@@@
            Delivery Man: Kumiko 819 - password - Lacussaber080699@@@

To run the application, run this command code node index.js. If error occurs, line comment the whole index.js file starting from the registration part (I have marked where each part starts and ends). Run app.get("/", (request, response) => response.send("Hello World")), then uncomment the file again block by block starting from the log in part. The problem usually occurs when different wifis try to access the database or run the server. the solution above should help you access the app

To log in, go to this URL: localhost:3500. After logging in, you will be redirected to my account pages. on these pages, you can update profile image and personal detail. For customers, they can see their orders by clicking on the my order button. URL of main pages (There are 4 other pages (search, filter, product detail, order detail) with dynamic URL accessible by links):
        localhost:3500/myCustomerAccount
        localhost:3500/myVendorAccount
        localhost:3500/myShipperAccount
        localhost:3500/main_page
        localhost:3500/viewmyproduct
        localhost:3500/shipping_management
        localhost:3500/shoppingCart

Instruction for Vendor: To open the dedicated product adding page (which is not necessary as we incorporate product adding function to the product view page), open localhost:3500/add
                        To access the product view page: go to localhost:3500/viewmyproduct after log in or click on the home icon on the account page. You can perform 4 actions on the page: create, read, update, delete. To create and update items, click on the name of the item in the table, the form will automatically be filled in, then choose the correct action

Instruction for Shippers: There are 2 types of shippers: Administrator: People who assign orders to Delivery Men and Delivery Men: People who do the delivery. To assign orders as an administrator, first click on the home icon on the account page (or loclahost:3500/shipping_management ), then click on the order id in the table, the order id will automatically be filled in the form, then select delivery man. As a delivery man, you can can change the status of your assigned orders when you have successfully delivered it. First click on the order number, you will then be redirected to Order detail page where there will be a select list for you to update your order status.

Instruction for Customers: on the customer account page, click on the home icon. You will be redirected to the main page. You can access the main page without logging in, however, you will not be able to access shopping cart. On the main page, you can filter and search for items. Clicking on the item name will redirect you to the product detail page. Item with 0 stock will have the add to cart button disabled. After you have added items to cart, click on the cart icon to go to the shopping cart page where you can remove items. To checkout, click on the checkout button. 
