const projectsInfo = {
  projects: [
    {
      id: 1,
      imageUrl:
        'https://spring.io/images/projects/spring-boot-7f2e24fb962501672cc91ccd285ed2ba.svg',
      title: 'Spring Boot',
      text: 'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.'
    },
    {
      id: 2,
      imageUrl:
        'https://spring.io/images/projects/spring-framework-640ad1b04f7efa89e0f0f7353e6b5e02.svg?v=2',
      title: 'Spring Framework',
      text: 'Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.'
    },
    {
      id: 3,
      imageUrl:
        'https://spring.io/images/projects/spring-data-79cc203ed8c54191215a60f9e5dc638f.svg',
      title: 'Spring Data',
      text: 'Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.'
    },
    {
      id: 4,
      imageUrl:
        'https://spring.io/images/projects/spring-cloud-81fe04ab129ab99da0e7c7115bb09920.svg',
      title: 'Spring Cloud',
      text: 'Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.'
    },
    {
      id: 5,
      imageUrl:
        'https://spring.io/images/projects/spring-data-flow-9eb1733b76b6cd62cbdd9bc9a2b04e56.svg',
      title: 'Spring Cloud Data Flow',
      text: 'Provides an orchestration service for composable data microservice applications on modern runtimes.'
    },
    {
      id: 6,
      imageUrl:
        'https://spring.io/images/projects/spring-security-b712a4cdb778e72eb28b8c55ec39dbd1.svg',
      title: 'Spring Security',
      text: 'Protects your application with comprehensive and extensible authentication and authorization support.'
    },
    {
      id: 7,
      imageUrl:
        'https://spring.io/images/projects/spring-edf462fec682b9d48cf628eaf9e19521.svg',
      title: 'Spring GrapgQL',
      text: 'Spring GraphQL provides support for Spring applications built on GraphQL Java.'
    },
    {
      id: 8,
      imageUrl:
        'https://spring.io/images/projects/logo-session-5b3068613a1bee9a50a69f12c6d255f5.png',
      title: 'Spring Session',
      text: 'Provides an API and implementations for managing a user’s session information.'
    },
    {
      id: 9,
      imageUrl:
        'https://spring.io/images/projects/spring-integration-ed45c92142d821851bf6c771f4c556bb.svg?v=2',
      title: 'Spring Integration',
      text: 'Supports the well-known Enterprise Integration Patterns through lightweight messaging and declarative adapters.'
    },
    {
      id: 10,
      imageUrl:
        'https://spring.io/images/projects/spring-hateoas-7da375e1fbd0213275eaa7009926e1cb.svg?v=2',
      title: 'Spring HATEOAS',
      text: 'Simplifies creating REST representations that follow the HATEOAS principle.'
    },
    {
      id: 11,
      imageUrl:
        'https://spring.io/images/projects/spring-restdocs-7ba253b6470bc54f9dba54e12eef549b.png',
      title: 'Spring REST Docs',
      text: 'Lets you document RESTful services by combining hand-written documentation with auto-generated snippets produced with Spring MVC Test or REST Assured.'
    },
    {
      id: 12,
      imageUrl:
        'https://spring.io/images/projects/spring-batch-4ed8fe7187bf70afd9c8efa229a4f77c.svg',
      title: 'Spring Batch',
      text: 'Simplifies and optimizes the work of processing high-volume batch operations.'
    },
    {
      id: 13,
      imageUrl:
        'https://spring.io/images/projects/spring-amqp-6d6aaf6b4861d1cb458e53fb029b4046.svg?v=2',
      title: 'Spring AMQP',
      text: 'Applies core Spring concepts to the development of AMQP-based messaging solutions.'
    },
    {
      id: 14,
      imageUrl:
        'https://spring.io/images/projects/spring-edf462fec682b9d48cf628eaf9e19521.svg',
      title: 'Spring CredHub',
      text: 'Provides client-side support for storing, retrieving, and deleting credentials from a CredHub server running in a Cloud Foundry platform.'
    },
    {
      id: 15,
      imageUrl:
        'https://spring.io/images/projects/spring-flo-9b976862b11e6dd682bcc4ae9f0eca1b.svg?v=2',
      title: 'Spring Flo',
      text: 'Provides a JavaScript library that offers a basic embeddable HTML5 visual builder for pipelines and simple graphs.'
    },
    {
      id: 16,
      imageUrl:
        'https://spring.io/images/projects/spring-kafka-1f159a30a8723794dfa7260ffbdae5b0.svg?v=2',
      title: 'Spring for Apache Kafka',
      text: 'Provides Familiar Spring Abstractions for Apache Kafka.'
    },
    {
      id: 17,
      imageUrl:
        'https://spring.io/images/projects/spring-ldap-17f0bafd562c86e8cff223288e171484.svg?v=2',
      title: 'Spring LDAP',
      text: 'Simplifies the development of applications that use LDAP by using Spring"s familiar template-based approach.'
    },
    {
      id: 18,
      imageUrl:
        'https://spring.io/images/projects/spring-shell-6e9620ae176781479de043aa55f85616.svg?v=2',
      title: 'Spring Shell',
      text: 'Makes writing and testing RESTful applications easier with CLI-based resource discovery and interaction.'
    },
    {
      id: 19,
      imageUrl:
        'https://spring.io/images/projects/spring-statemachine-2e96d8735e365841096c5ad848af5983.svg',
      title: 'Spring Statemachine',
      text: 'Provides a framework for application developers to use state machine concepts with Spring applications.'
    },
    {
      id: 20,
      imageUrl:
        'https://spring.io/images/projects/spring-edf462fec682b9d48cf628eaf9e19521.svg',
      title: 'Spring Vault',
      text: 'Provides familiar Spring abstractions for HashiCorp Vault.'
    },
    {
      id: 21,
      imageUrl:
        'https://spring.io/images/projects/spring-web-flo-c47fc8750aa924ea5751f1cabf2d9cdb.svg?v=2',
      title: 'Spring Web Flow',
      text: 'Supports building web applications that feature controlled navigation, such as checking in for a flight or applying for a loan.'
    },
    {
      id: 22,
      imageUrl:
        'https://spring.io/images/projects/logo-web-services-97f11feddb1fe1c07ae6583e5846627d.svg',
      title: 'Spring Web Services',
      text: 'Facilitates the development of contract-first SOAP web services.'
    }
  ],
  atticProjects: [
    {
      id: 1,
      title: 'Spring IO Platform',
      text: 'Provides a cohesive, versioned platform for building modern applications. It is a modular, enterprise-grade distribution that delivers a curated set of dependencies.'
    },
    {
      id: 2,
      title: 'Spring IO Platform',
      text: 'Provides key Spring components for use in developing Android applications.'
    },
    {
      id: 3,
      title: 'Spring Flex',
      text: 'A project to make it easier to build Spring-powered Rich Internet Applications using Adobe Flex as the front-end client.'
    },
    {
      id: 4,
      title: 'Spring Integration Groovy DSL',
      text: 'A Groovy based DSL for developing Spring Integration applications.'
    },
    {
      id: 5,
      title: 'Spring Integration Scala DSL',
      text: 'A Scala based DSL for developing Spring Integration applications.'
    },
    {
      id: 6,
      title: 'Spring Mobile',
      text: 'Simplifies the development of mobile web apps through device detection and progressive rendering options.'
    },
    {
      id: 7,
      title: 'Spring Scala',
      text: 'A community run project that provides support for Spring framework development in Scala.'
    },
    {
      id: 8,
      title: 'Spring Social',
      text: 'Easily connects your applications with third-party APIs such as Facebook, Twitter, LinkedIn, and more.'
    },
    {
      id: 9,
      title: 'Spring XD',
      text: 'Simplifies the development of big data applications by addressing ingestion, analytics, batch jobs and data export.'
    }
  ],
  projectsFooterItems: [
    {
      id: 1,
      title: 'Get ahead',
      text: 'VMware offers training and certification to turbo-charge your progress.',
      linkText: 'Learn more'
    },
    {
      id: 2,
      title: 'Get support',
      text: 'Spring Runtime offers support and binaries for OpenJDK™, Spring, and Apache Tomcat® in one simple subscription.',
      linkText: 'Learn more'
    },
    {
      id: 3,
      title: 'Upcoming events',
      text: 'Check out all the upcoming events in the Spring community',
      linkText: 'View all'
    }
  ]
};

module.exports = projectsInfo;
