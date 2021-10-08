# Product API Overview

### Which api service did you choose?

I chose Product API because my group decided to rotate services for this capstone project. It also allows me to challenge myself since I didn't work with this api during the Front-End-Capstone. 


### Goals for this System Design Capstone Project

- To implement this service, we will first have to design two database options (relational vs non-relational) to analyze and compare which option would be best suited.
- Transform an existing application data (csv) and load it into the database.
- Design and build an API server to provide data to the client in the format we used during the FEC
- Optimize our service by analyzing query times and server responses
- Deploy your service and integrate it successfully with the FEC web application
- Scale the service to support loads up to 10,000~ requests per second.

### Tools used for this project

#### Postgres
- I chose postgresql because i’ve yet to learn postgresql so this will be the perfect time for me to become acquainted with this database. 
- The pros of working with a relational databases is the simplicity to add data into the database. Relational database is also less prone to errors when inserting data.
- The cons of working with a relational database is the queries can get quite complicated if we want to retrieve data in a certain format/structure. 
- Overall, relational databases will be here for a long time so it’s beneficial to be proficient and familiar with the database.

### Docker
- For this SDC I decided to use docker to build my server image and database image.
- Using docker will make the process of horizontally scaling more efficient for me. I'm able to serve the image quickly everytime a new instance is created

### Link to Journal

https://gist.github.com/DrewHang/c73cb000108769ec86ec978f553b6d30
