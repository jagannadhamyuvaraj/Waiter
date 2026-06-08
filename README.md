# waiter - AI-Powered Food Delivery Website

A modern, responsive food delivery website with an intelligent AI waiter robot assistant that helps customers discover and order food from multiple cuisines.

---

## Architecture

<img width="800" height="600" alt="waiter architecture diagram" src="https://github.com/user-attachments/assets/ec26840d-9d63-4595-9c2a-f6a7745dc30d" />

### 1. Basic Setup
- HTML structure with navigation, hero section, and menu display
- CSS styling with responsive design (45.8% JavaScript, 34.9% CSS, 19.3% HTML)
- JavaScript for interactivity and AI chatbot

---

## 2. Amazon Bedrock

Created a Knowledge base on Amazon Bedrock with custom knowledge source by selecting a foundational model (Amazon Titan) for embeddings and data vectors store in S3 buckets for better results.

<img width="800" height="400" alt="Amazon Bedrock Configuration" src="https://github.com/user-attachments/assets/6bf97385-9a05-4ac7-afce-f0b1a5f61893" />

<img width="800" height="520" alt="Bedrock Knowledge Base Setup" src="https://github.com/user-attachments/assets/fbf69f65-7670-4b49-8b7f-4c2720e80091" />

---

## 3. Serverless Architecture

### AWS Lambda
Implementing serverless architecture through event-driven approach without managing servers.

<img width="800" height="310" alt="AWS Lambda Architecture" src="https://github.com/user-attachments/assets/48392872-c179-44cd-aa9d-6e702967feb3" />

---

## 4. API Gateway

**AWS API Gateway** - Configured as the first point of contact which invokes the Lambda function. Lambda processes the request and sends it to the Bedrock model.

<img width="800" height="480" alt="API Gateway Configuration" src="https://github.com/user-attachments/assets/6b8114a5-4a5c-41d3-9856-e6e9059bf72e" />

---

## 5. CDN Distribution

**AWS CloudFront** - Created a CloudFront distribution for global access with minimum latency.

<img width="800" height="375" alt="CloudFront Distribution" src="https://github.com/user-attachments/assets/c82c430b-a038-45ec-a17b-61d5c59f42f4" />

---

## Response from Waiter

Bedrock model fetches the most relevant items based on user's taste through embeddings.

<img width="800" height="435" alt="Waiter Response Example" src="https://github.com/user-attachments/assets/8a4928a8-0b95-4197-85a0-3577298e9bb3" />

---

**Tech Stack:**
- Frontend: HTML, CSS, JavaScript
- Backend: AWS Lambda (Serverless)
- API Management: AWS API Gateway
- AI/ML: Amazon Bedrock (Titan)
- Knowledge Base: Amazon Bedrock Knowledge Base
- Storage: S3
- CDN: AWS CloudFront
