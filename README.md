# Dynamic Portfolio Website

This repository contains the code and configuration for my dynamic portfolio website, leveraging AWS services such as Route 53, CloudFront, Lambda, DynamoDB, and others. This document serves as a guide for setting up and deploying the project.

## Table of Contents

1. [Overview](#overview)
2. [Architecture Diagram](#architecture-diagram)
3. [AWS Services](#aws-services)
4. [Setup Steps](#setup-steps)
    - [Step 1: Creating a Hosted Zone](#step-1-creating-a-hosted-zone)
    - [Step 2: Registering a Domain](#step-2-registering-a-domain)
    - [Step 3: Getting a SSL/TLS Certificate in ACM](#step-3-getting-a-ssl/tls-certificate-in-acm)
    - [Step 4: Creating a Cloudfront distribution](#step-4-creating-a-cloudfront-distribution)
    - [Step 5: Creating a DynamoDB Table](#step-4-creating-a-dynamodb-table)
    - [Step 6: Creating Lambda Functions](#step-5-creating-lambda-functions)
    - [Step 7: Setting Up API Gateway](#step-6-setting-up-api-gateway)
5. [Testing](#testing)
6. [Conclusion](#conclusion)

## Overview

This project is a dynamic portfolio website that includes a contact form. The backend is powered by AWS Lambda and DynamoDB, with API Gateway acting as the API endpoint. The static content is hosted on Amazon S3 and delivered via CloudFront for optimal performance and security.

## Architecture Diagram

![daud-website-portfolio-architecture](https://github.com/user-attachments/assets/231df027-4df1-4529-8a7e-9b02e624a3a1)

## AWS Services Overview
- **Amazon Route 53**: A scalable DNS web service for domain registration and routing.
- **Amazon CloudFront**: A content delivery network (CDN) service for fast content delivery.
- **Amazon S3**: A scalable storage service for hosting static content.
- **AWS Lambda**: A serverless compute service for running backend functions.
- **Amazon API Gateway**: A service for creating, publishing, maintaining, monitoring, and securing APIs.
- **AWS Certificate Manager (ACM)**: A service for provisioning, managing, and deploying SSL/TLS certificates.
- **Amazon DynamoDB**: A NoSQL database service for storing and retrieving data.

## Setup Steps

### Step 1: Creating a Hosted Zone

1. Open the Route 53 console.
2. Click on "Hosted zones" in the left-hand navigation pane.
3. Click the "Create hosted zone" button.
4. Enter your domain name and click "Create hosted zone".

![image](https://github.com/user-attachments/assets/47432d5e-6454-4332-bc1f-c94860665777)

### Step 2: Registering a Domain - Cost associated

1. If you don't have a domain, go to the Route 53 console and register a new domain.
2. Click "Registered Domains" in the left-hand navigation pane.
3. Click the "Register Domain" button.
4. Search for your desired domain name, select it, and proceed to the registration process.
5. Fill in your contact information and complete the registration.

![image](https://github.com/user-attachments/assets/1e348e4f-870f-4ff3-a0e9-02030037f5b9)

6. Verify your domain by clicking the verification link sent to your email.

![image](https://github.com/user-attachments/assets/aa8a16ad-bb4d-4bc2-8fc7-e6460ac4351c)

### Step 3: Getting a SSL/TLS Certificate in ACM

1. Open the ACM console.
2. Click the "Request a certificate" button.
3. Select "Request a public certificate" and click "Next".
4. Enter your domain name and click "Next".
5. Choose the validation method (DNS or email) and follow the instructions to validate the certificate.

![image](https://github.com/user-attachments/assets/7877949d-ae4a-42a8-8761-8f802f09b53e)

6. Once the Route is created in Route 53, validation is completed, and the certificate will be issued.

![image](https://github.com/user-attachments/assets/4b7e6b8c-39fa-445b-81a9-b53d3ea81ca3)

### Step 4: Creating a Cloudfront Distribution

1. Log in to AWS Console and open **CloudFront**.
2. Create a Distribution and select **Web**.
3. Configure Origin Settings: Set **Origin Domain Name** to your S3 bucket, choose **HTTPS Only**.
4. Set Cache Behavior: Redirect HTTP to HTTPS and configure allowed HTTP methods.
5. Add Custom Domain under **Alternate Domain Names (CNAMEs)** and configure the **SSL Certificate**.
6. Update DNS Records to point your domain to the CloudFront distribution.

![image](https://github.com/user-attachments/assets/823c405f-383a-4bad-883b-d66fcd477fab)

### Step 5: Creating a DynamoDB Table

1. Open the DynamoDB console.
2. Click the "Create table" button.
3. Enter `id` as the primary key.
4. Configure other settings as needed and click "Create".

![image](https://github.com/user-attachments/assets/7d38dc0e-22b0-4e0f-ac88-a60d9fdfe489)

5. Once the creation process is complete, a green banner will appear confirming that the table has been created, as shown in the image.

![image](https://github.com/user-attachments/assets/fb5c995c-2fe4-43b7-8773-416a19cb6b5c)

### Step 6: Creating Lambda Functions

1. Open the Lambda console.
2. Click "Create function".
3. Choose "Author from scratch", enter the function name (e.g., `putItemHandler`), and select a runtime (e.g., Node.js).
4. Assign an existing role or create a new one with necessary permissions.
5. Repeat steps for `getItemHandler` and `getAllItemsHandler`.

![image](https://github.com/user-attachments/assets/e740b71f-6909-4455-a6c7-8a7fa06732c7)

6. Once all Lambdas have been created, the Lambda dashboard will look like this.

![image](https://github.com/user-attachments/assets/7c7dd21b-6661-4b49-b583-78f82d75ba5c)

**All the necessary dependencies for the Node.js Lambda function are included in the ZIP file of this repo.**
 
### Step 7: Setting Up API Gateway

1. Open the API Gateway console.
2. Click "Create API" and choose "REST API".
3. Create a new resource and define methods (POST, GET) for your Lambda functions.
4. Integrate the methods with the corresponding Lambda functions.

![image](https://github.com/user-attachments/assets/3cf56330-979f-4af3-8c8b-84e776b08e73)

## Testing
### Submitting the Contact Form

1. Open the website in Google Chrome and fill out the contact form.
2. Submit the form and check for a 200 status code indicating success.

![image](https://github.com/user-attachments/assets/74fb528b-e5ab-4f3e-8a47-5b634014b82c)

3. Verify that the form data is stored in DynamoDB.

![image](https://github.com/user-attachments/assets/f6d2878e-6585-4afb-b062-335b3a9e6c74)

### Conclusion

This project demonstrates the complete setup and deployment of a dynamic portfolio website using various AWS services, including Route 53, CloudFront, S3, API Gateway, Lambda, ACM, and DynamoDB. The integration of these services provides a robust, scalable, and secure platform for hosting dynamic web content. The website handles form submissions seamlessly and stores data efficiently in DynamoDB. 

The successful deployment and operation of this dynamic website showcase the potential of AWS services in building modern web applications. The implementation ensures low latency, high availability, and secure communication, providing an excellent user experience.

You can view the static version of the portfolio website hosted on AWS S3 at the following link:
[Static Portfolio Website](https://github.com/DaudCloud-sudo/portfolio-website-hosting-on-AWS-S3/tree/main)

Future enhancements will further leverage AWS capabilities to improve functionality and user experience using AI and Artificial Bots, demonstrating the scalability and flexibility of cloud-based solutions.
