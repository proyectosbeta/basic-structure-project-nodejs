const swagger = {
    openapi: "3.0.3",
    info: {
      title: "Basic Structure Project in NodeJS",
      description: "The API REST Basic Structure Project in NodeJS",
      version: "0.1.0",
      contact: {
        email: "hello@proyectosbeta.net",
      },
    },
    servers: [
      {
        url: "http://localhost:3000/api",
        description: "Development server,",
      },
    ],
    paths: {
      "/": {
        get: {
          description: "Welcome to the API REST (basic-structure-project-nodejs-service)",
          summary: "Welcome to the API REST (basic-structure-project-nodejs-service)",
          parameters: [
            {
              in: "header",
              name: "accept-language",
              schema: {
                type: "string",
              },
            },
          ],
          responses: {
            200: {
              description: "Return a welcome",
            },
          },
        },
      },
    },
    components: {},
    tags: [],
  };
  
  export { swagger };
  