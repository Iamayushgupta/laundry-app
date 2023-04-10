# laundry-app
1. A CLI based laundry-app which consists of backend operations like submit,collect and view deliveries.
2. Delivery inforamation is being stored inside the JSON file.
3. "YARGS" module is being used in this to create CLI commands.

# Demonstration of App

<h3> Submit Clothes </h3>

node app.js submit --name="Ayush" --number=18

![image](https://user-images.githubusercontent.com/73697731/230732874-9c9239d5-cd5e-409c-a08a-9130581752e1.png)

deliveries.json has been updated

![image](https://user-images.githubusercontent.com/73697731/230732900-e20b6174-06bc-48eb-bf05-3f828f21f22f.png)

<h3> View Deliveries </h3>

node app.js view

![image](https://user-images.githubusercontent.com/73697731/230732996-acf91798-709f-441c-84b7-11ea0e69dace.png)

<h3> Collect Clothes </h3>

node app.js collect --name="Ayush"

![image](https://user-images.githubusercontent.com/73697731/230733047-a46b024d-0b5b-476a-98d3-920cf010df47.png)

deliveries.json has been updated

![image](https://user-images.githubusercontent.com/73697731/230733059-5c725ea8-4c09-4e2d-b5c5-7cc8a93ed48a.png)
