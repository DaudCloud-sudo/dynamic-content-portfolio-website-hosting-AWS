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
    - [Step 4: Creating a DynamoDB Table](#step-4-creating-a-dynamodb-table)
    - [Step 5: Creating Lambda Functions](#step-5-creating-lambda-functions)
    - [Step 6: Setting Up API Gateway](#step-6-setting-up-api-gateway)
    - [Step 7: Deploying with SAM CLI](#step-7-deploying-with-sam-cli)
5. [Testing](#testing)
6. [Conclusion](#conclusion)

## Overview

This project is a dynamic portfolio website that includes a contact form. The backend is powered by AWS Lambda and DynamoDB, with API Gateway acting as the API endpoint. The static content is hosted on Amazon S3 and delivered via CloudFront for optimal performance and security.

## Architecture Diagram

![Architecture Diagram](daud-website-architecture.drawio.png)

## AWS Services

- **Route 53**: Managed DNS service for directing internet traffic to your domain.
- **CloudFront**: CDN for distributing content with low latency and high transfer speeds.
- **ACM (AWS Certificate Manager)**: Service for provisioning, managing, and deploying SSL/TLS certificates.
- **S3**: Scalable storage for static website content.
- **API Gateway**: Managed service for creating, publishing, and securing APIs.
- **Lambda**: Serverless compute service for running code in response to events.
- **DynamoDB**: NoSQL database for storing form submissions.

## Setup Steps

### Step 1: Creating a Hosted Zone

1. Open the Route 53 console.
2. Create a new hosted zone for your domain.

![Hosted Zone Creation](images/hosted-zone-creation.png)

### Step 2: Registering a Domain

1. If you don't have a domain, go to the Route 53 console and register a new domain.
2. Fill in your contact information and complete the registration process.

![Domain Registration](images/domain-registration.png)

3. Verify your domain by clicking the verification link sent to your email.

![Email Verification](images/email-verification.png)

### Step 3: Getting a SSL/TLS Certificate in ACM

1. Open the ACM console.
2. Request a public certificate for your domain.
3. Follow the validation process (DNS or email) to validate the certificate.

![ACM Certificate Request](images/acm-certificate-request.png)

### Step 4: Creating a DynamoDB Table

1. Open the DynamoDB console.
2. Create a new table with a primary key `id`.

![DynamoDB Table Creation](images/dynamodb-table-creation.png)

3. Click "Create table" to finalize.

### Step 5: Creating Lambda Functions

1. Open the Lambda console.
2. Create three Lambda functions for `put`, `get`, and `getById`.

![Lambda Function Creation](images/lambda-function-creation.png)

3. Use the existing IAM role for subsequent functions.

### Step 6: Setting Up API Gateway

1. Open the API Gateway console.
2. Create a new REST API.
3. Create methods (PUT, GET, etc.) and integrate them with your Lambda functions.

![API Gateway Setup](images/api-gateway-setup.png)

### Step 7: Deploying with SAM CLI

1. Install the AWS SAM CLI.
2. Build your application using SAM CLI to handle dependencies.
3. Deploy the application using the SAM CLI.

```bash
sam build
sam deploy --guided
