CREATE DATABASE spring;

CREATE TABLE projects(
  project_id SERIAL PRIMARY KEY,
  image_url text,
  title varchar(40),
  project_info text
);

CREATE TABLE attic_projects(
  attic_project_id SERIAL PRIMARY KEY,
  title varchar(40),
  project_info text
);

CREATE TABLE footer_projects(
  footer_project_id SERIAL PRIMARY KEY,
  title varchar(32),
  project_info text,
  project_link varchar(32)
);

CREATE TABLE users (
  userId SERIAL PRIMARY KEY,
  userName varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  firstName varchar(255) NOT NULL,
  lastName varchar(255) NOT NULL,
	age int NOT NULL
);

INSERT INTO projects
VALUES
(1,'https://spring.io/images/projects/spring-boot-7f2e24fb962501672cc91ccd285ed2ba.svg', 'Spring Boot', 'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.'),
(2,'https://spring.io/images/projects/spring-framework-640ad1b04f7efa89e0f0f7353e6b5e02.svg?v=2', 'Spring Framework', 'Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.'),
(3,'https://spring.io/images/projects/spring-data-79cc203ed8c54191215a60f9e5dc638f.svg', 'Spring Data', 'Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.'),
(4,'https://spring.io/images/projects/spring-cloud-81fe04ab129ab99da0e7c7115bb09920.svg', 'Spring Cloud', 'Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.'),
(5,'https://spring.io/images/projects/spring-data-flow-9eb1733b76b6cd62cbdd9bc9a2b04e56.svg', 'Spring Cloud Data Flow', 'Provides an orchestration service for composable data microservice applications on modern runtimes.'),
(6,'https://spring.io/images/projects/spring-security-b712a4cdb778e72eb28b8c55ec39dbd1.svg', 'Spring Security', 'Protects your application with comprehensive and extensible authentication and authorization support.'),
(7,'https://spring.io/images/projects/spring-edf462fec682b9d48cf628eaf9e19521.svg', 'Spring GrapgQL', 'Spring GraphQL provides support for Spring applications built on GraphQL Java.'),
(8,'https://spring.io/images/projects/logo-session-5b3068613a1bee9a50a69f12c6d255f5.png', 'Spring Session', 'Provides an API and implementations for managing a user’s session information.'),
(9,'https://spring.io/images/projects/spring-integration-ed45c92142d821851bf6c771f4c556bb.svg?v=2', 'Spring Integration', 'Supports the well-known Enterprise Integration Patterns through lightweight messaging and declarative adapters.'),
(10,'https://spring.io/images/projects/spring-hateoas-7da375e1fbd0213275eaa7009926e1cb.svg?v=2', 'Spring HATEOAS', 'Simplifies creating REST representations that follow the HATEOAS principle.'),
(11,'https://spring.io/images/projects/spring-restdocs-7ba253b6470bc54f9dba54e12eef549b.png', 'Spring REST Docst', 'Lets you document RESTful services by combining hand-written documentation with auto-generated snippets produced with Spring MVC Test or REST Assured.'),
(12,'https://spring.io/images/projects/spring-batch-4ed8fe7187bf70afd9c8efa229a4f77c.svg', 'Spring Batch', 'Simplifies and optimizes the work of processing high-volume batch operations.'),
(13,'https://spring.io/images/projects/spring-amqp-6d6aaf6b4861d1cb458e53fb029b4046.svg?v=2', 'Spring AMQP', 'Applies core Spring concepts to the development of AMQP-based messaging solutions.'),
(14,'https://spring.io/images/projects/spring-edf462fec682b9d48cf628eaf9e19521.svg', 'Spring CredHub', 'Provides client-side support for storing, retrieving, and deleting credentials from a CredHub server running in a Cloud Foundry platform.'),
(15,'https://spring.io/images/projects/spring-flo-9b976862b11e6dd682bcc4ae9f0eca1b.svg?v=2', 'Spring Flo', 'Provides a JavaScript library that offers a basic embeddable HTML5 visual builder for pipelines and simple graphs.'),
(16,'https://spring.io/images/projects/spring-kafka-1f159a30a8723794dfa7260ffbdae5b0.svg?v=2', 'Spring for Apache Kafka', 'Provides Familiar Spring Abstractions for Apache Kafka.'),
(17,'https://spring.io/images/projects/spring-ldap-17f0bafd562c86e8cff223288e171484.svg?v=2', 'Spring LDAP', 'Simplifies the development of applications that use LDAP by using Spring''s familiar template-based approach.'),
(18,'https://spring.io/images/projects/spring-shell-6e9620ae176781479de043aa55f85616.svg?v=2', 'Spring Shell', 'Makes writing and testing RESTful applications easier with CLI-based resource discovery and interaction.'),
(19,'https://spring.io/images/projects/spring-statemachine-2e96d8735e365841096c5ad848af5983.svg', 'Spring Statemachine', 'Provides a framework for application developers to use state machine concepts with Spring applications.'),
(20,'https://spring.io/images/projects/spring-edf462fec682b9d48cf628eaf9e19521.svg', 'Spring Vault', 'Provides familiar Spring abstractions for HashiCorp Vault.'),
(21,'https://spring.io/images/projects/spring-web-flo-c47fc8750aa924ea5751f1cabf2d9cdb.svg?v=2', 'Spring Web Flow', 'Supports building web applications that feature controlled navigation, such as checking in for a flight or applying for a loan.'),
(22,'https://spring.io/images/projects/spring-framework-640ad1b04f7efa89e0f0f7353e6b5e02.svg?v=2', 'Spring Web Services', 'Facilitates the development of contract-first SOAP web services.');

INSERT INTO attic_projects
VALUES
(1,'Spring IO Platform', 'Provides a cohesive, versioned platform for building modern applications. It is a modular, enterprise-grade distribution that delivers a curated set of dependencies.'),
(2,'Spring IO Platform', 'Provides key Spring components for use in developing Android applications.'),
(3,'Spring Flex', 'A project to make it easier to build Spring-powered Rich Internet Applications using Adobe Flex as the front-end client.'),
(4,'Spring Integration Groovy DSL', 'A Groovy based DSL for developing Spring Integration applications.'),
(5,'Spring Integration Scala DSL', 'A Scala based DSL for developing Spring Integration applications.'),
(6,'Spring Mobile', 'Simplifies the development of mobile web apps through device detection and progressive rendering options.'),
(7,'Spring Scala', 'A community run project that provides support for Spring framework development in Scala.'),
(8,'Spring Social', 'Easily connects your applications with third-party APIs such as Facebook, Twitter, LinkedIn, and more.'),
(9,'Spring Spring XD', 'Simplifies the development of big data applications by addressing ingestion, analytics, batch jobs and data export.');

INSERT INTO footer_projects
VALUES
(1,'Get ahead', 'VMware offers training and certification to turbo-charge your progress.', 'Learn more'),
(2,'Get support', 'Spring Runtime offers support and binaries for OpenJDK™, Spring, and Apache Tomcat® in one simple subscription.', 'Learn more'),
(3,'Upcoming events', 'Check out all the upcoming events in the Spring community', 'View all');

