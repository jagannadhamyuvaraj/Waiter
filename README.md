# waiter - AI-Powered Food Delivery Website

A modern, responsive food delivery website with an intelligent AI waiter robot assistant that helps customers discover and order food from multiple cuisines.



# Architecture


<img width="861" height="627" alt="waiter architecture drawio" src="https://github.com/user-attachments/assets/ec26840d-9d63-4595-9c2a-f6a7745dc30d" />



### 1. Basic Setup
- HTML structure with navigation, hero section, and menu display
- CSS styling with responsive design
- JavaScript for interactivity and AI chatbot


# 2. Amazon Bedrock

- Created a Knowledge base on amazon Bedrock with custom knowledge source by selecting a foundational model(Amazon Titan) for embeddings and data vectors store in S3 buckets for better results.


 <img width="2840" height="1420" alt="image" src="https://github.com/user-attachments/assets/6bf97385-9a05-4ac7-afce-f0b1a5f61893" />





 <img width="2050" height="1310" alt="image" src="https://github.com/user-attachments/assets/fbf69f65-7670-4b49-8b7f-4c2720e80091" />

 




### serverless
- **Aws Lambda** - Implementing serverless architecture through event driven approach without managing servers



<img width="2856" height="1102" alt="image" src="https://github.com/user-attachments/assets/48392872-c179-44cd-aa9d-6e702967feb3" />




## Api Gateway

- ** Aws Api Gateway** - Configure API gateway as first point of contact which invokes the lambda function and lambda process the request send bedrock model

- 

<img width="2096" height="1258" alt="image" src="https://github.com/user-attachments/assets/6b8114a5-4a5c-41d3-9856-e6e9059bf72e" 


  

### serverless
- **Aws Lambda** - Implementing serverless architecture through event driven approach without managing servers


<img width="2856" height="1102" alt="image" src="https://github.com/user-attachments/assets/48392872-c179-44cd-aa9d-6e702967feb3" />





### CDN
 - **Aws cloudfront** - Created a cloudfront distribution for global access with minimum latency




<img width="2458" height="1150" alt="image" src="https://github.com/user-attachments/assets/c82c430b-a038-45ec-a17b-61d5c59f42f4" />

   

### Response from waiter
- Bedrock model fetches the most relevant items based on users taste through embeddings



<img width="2824" height="1534" alt="image" src="https://github.com/user-attachments/assets/8a4928a8-0b95-4197-85a0-3577298e9bb3" />
