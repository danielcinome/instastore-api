# InstaStore - API

## Getting Started

InstaStore is a microservice in charge of selecting the closest "convenience" store to deliver a groceries order to our B2B clients.

## Content

[Requirements](#requirements)

[Questions](#questions)

[Authors and Contact](#authors-and-contact)

  
## Requirements

**Non-functional**

We expect you to deliver idiomatic code in a way that is easy to read and follows the accepted guidelines in your area of expertise.

You should write it on Node.js with Express.js. Libraries, transpilers, etc are up to you.

 - Endpoints are fast (less than 300ms).
 - Endpoints respond to error codes that make sense to the case.
 - Please provide documentation for the endpoints you create

**Functional**

 - Our B2B clients should be able to consume an endpoint that provides
   them the following information:

	```plaintext
	storeId
	storeName
	isOpen
	coordinates
	nextDeliveryTime
	```
    
 - The endpoint returns the closest store available
 - We need to keep track of each call to the endpoint

## Questions
  
1. **Convenience Store Information:** In terms of functional requirements, is there a specific data source from which I can obtain the convenience store information? If there is no specific source, I will assume that I will use test data to develop the solution. Also;

	- ¿Could you please provide clarification on the meaning and the intended use of the parameter "**nextDeliveryTime**"? 
	- ¿Is the "**isOpen**" parameter subject to any specific schedule?

  
2.  **Parameters Sent by B2B Customers:** To properly define the data schema and processing logic, could you please indicate what parameters our B2B customers will send through the endpoint? This information will help me to ensure that the endpoint meets the expectations and needs of our customers. Additional;

	  - ¿Is there any specification or requirement regarding the handling of the nearest store, either by zipcode or specific coordinates?

  
3.  **Endpoint Call Tracking:**  Regarding the need to track each call to the endpoint, is there any specification on how this information should be stored or specific data to be recorded?
  
4.  **Security**: Are there any specific security requirements you should consider when designing the endpoint, such as authentication, authorization or data encryption?

## Authors and Contact

- Daniel Chinome
- Contact: danielchinomedev@gmail.com
- [LinkedIn](https://www.linkedin.com/in/danielchinome/)