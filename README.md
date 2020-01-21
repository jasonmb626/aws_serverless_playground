## AWS Serverless Playground

A playground for exploring AWS and the serverless framework.

### Adding AWS RDS PostgreSQL instance for testing

The next step in the playground is to utilize TypeORM to access Postgres during offline testing and via lambda upon deploy.

I had to login with my root credentials. My IAM role with Console & AdministratorAccess could not? 

Access RDS from Console. Click create database.
* Standard Create
* PostgreSQL
* Free tier
* Name the database
* Autogenerate password
* Connectivity -> Additional connectivity configuration -> Publicly Accessible = Yes
* Other defaults should be fine
* Create Database

On the next window, a banner-style alert will containt access to the generated password. This is not available if you navigate away so make note immediately.

(Once database is created and backed up (7 minutes?) you can go back in and modify the database to change the password if you do indeed navigate away).

Even though you made it publicly available, it'll be inside a VPC that won't allow Postgres traffic by default.

Make note of the name of the VPC of this database. Click that VPC to access the VPC Dashboard. 

* Click Security Groups from the navigation pane. Click the checkbox next to the security group associated with the VPC ID. 
* Actions -> Edit inbound rules
* Add Rule -> PostgreSQL
* Choose all IPs (we're just testing for now). Save rules.

You should now have access. You can find the endpoint via the Amazon RDS Dashboard -> Databased -> (choose yours) -> Connectivity and Security tab