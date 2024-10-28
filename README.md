# Smart Reminder

## Author
* [Shubham](mailto:shubhamjethva92@gmail.com) - *(Maintainer)*

## Prerequisites
- **Node.js**: Install the latest version of Node.js from [here](https://nodejs.org/)
- **React.js**: Install the latest version of React.js from [here](https://legacy.reactjs.org/)

## Application Overview
**Smart Reminder** is an AWS-based application designed to help users receive timely task reminders. The application architecture leverages various AWS services to ensure scalability, security, and cost-effectiveness, following the four pillars of cloud architecture: operational excellence, security, reliability, and cost optimization.

The backend services are managed on AWS using a combination of API Gateway, VPC (with Public and Private Subnets), EC2, Lambda functions, Elastic Load Balancing, and Auto Scaling. This infrastructure is protected with Security Groups and IAM roles to enforce access control and security policies.

## Technologies Used
- **React JS**: A JavaScript library used for building dynamic and responsive user interfaces, providing a seamless user experience.
- **AWS**: Amazon Web Services (AWS) provides the platform and tools for hosting and managing this application.

## AWS Services and Architecture Components

### 1. **Virtual Private Cloud (VPC)**
   - The application is deployed in a VPC, which provides isolated networking environments with public and private subnets for enhanced security and traffic control.
   - **Subnets**:
     - **Public Subnet**: Hosts internet-accessible components, such as EC2 instances and load balancers.
     - **Private Subnet**: Hosts internal resources like databases that do not require direct internet access.

### 2. **Elastic Compute Cloud (EC2)**
   - EC2 instances are used to host and run the application, providing scalable compute resources as per demand.
   - **Auto Scaling Group**: Ensures the application automatically scales in or out based on traffic, maintaining optimal performance and minimizing costs.
   - **Elastic Load Balancing (ELB)**: Distributes incoming application traffic across multiple EC2 instances, improving fault tolerance and availability.

### 3. **API Gateway**
   - API Gateway provides a RESTful interface to communicate with backend services, handling HTTP requests and routing them to the appropriate Lambda functions or EC2 instances.
   - Supports request validation, throttling, and monitoring for efficient API management.

### 4. **Lambda Functions**
   - Lambda functions are used for backend processing and task reminder logic. The serverless approach allows for scaling based on demand without manual infrastructure management.
   - Used to trigger notifications, update tasks, and handle event-driven functions in response to API requests.

### 5. **DynamoDB**
   - **DynamoDB** is used as the primary database to store task information. It offers high scalability, fast performance, and automated backup for seamless data management.
   - Data is structured with primary and secondary indexes to support efficient querying and retrieval of task details.

### 6. **IAM Roles and Policies**
   - IAM roles are set up to manage access to AWS resources securely, assigning permissions to Lambda functions, EC2 instances, and other AWS services.
   - Enforces the principle of least privilege, restricting access based on the specific needs of each component.

### 7. **Security Groups**
   - Security Groups are configured to control inbound and outbound traffic for the EC2 instances, VPC, and other AWS resources, adding an additional layer of security.
   - Rules are customized to allow necessary communications while preventing unauthorized access.

### 8. **Simple Notification Service (SNS)**
   - SNS is used to send notifications to users as reminders before the task deadline, offering reliability in message delivery.
   - Works in tandem with Lambda functions to trigger reminders automatically, ensuring users receive timely updates.

### 9. **Simple Queue Service (SQS)**
   - SQS queues are used to decouple components and manage asynchronous communication between services, improving application resilience.
   - Provides message buffering and processing for tasks that may require delayed processing, reducing system load and handling peak traffic efficiently.

### 10. **Elastic Load Balancer (ELB)**
   - ELB distributes incoming application traffic across multiple instances in the Auto Scaling Group, enhancing availability and fault tolerance.
   - Supports health checks and automatic failover to ensure reliable service performance.

### 11. **Auto Scaling Group**
   - The Auto Scaling Group automatically adjusts the number of EC2 instances based on demand, optimizing performance and cost.
   - Ensures high availability and handles traffic spikes efficiently without manual intervention.

### 12. **Network Address Translation (NAT) Gateways**
   - NAT Gateways are used to allow instances in the private subnet to connect to the internet (for software updates, etc.) without exposing them to inbound internet traffic.

## Four Pillars of AWS Architecture
The architecture for Smart Reminder follows the four pillars of AWS's well-architected framework:
1. **Operational Excellence**: The application is designed to monitor and improve based on logs and performance metrics from CloudWatch and other AWS services.
2. **Security**: IAM roles, Security Groups, and private subnets protect sensitive resources, while encryption and authorization protocols (e.g., JWT) ensure data security.
3. **Reliability**: Auto Scaling, ELB, and redundancy across multiple AZs ensure continuous availability and failover support.
4. **Cost Optimization**: Leveraging serverless Lambda functions, Auto Scaling, and DynamoDB's on-demand pricing minimizes unnecessary costs while meeting application demands.