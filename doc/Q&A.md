# SpringCloud项目常见问题及处理方法

#### `SpringBoot启动报错：Failed to auto-configure a DataSource: 'spring.datasource.url' is not specified and`

启动报了如下的错误：
```
   Error starting ApplicationContext. To display the conditions report re-run your application with 'debug' enabled.
   2020-01-02 21:41:51.052 ERROR 1660 --- [           main] o.s.b.d.LoggingFailureAnalysisReporter   : 
   
   ***************************
   APPLICATION FAILED TO START
   ***************************
   
   Description:
   
   Failed to auto-configure a DataSource: 'spring.datasource.url' is not specified and no embedded datasource could be auto-configured.
   
   Reason: Failed to determine a suitable driver class
   
   
   Action:
   
   Consider the following:
   	If you want an embedded database (H2, HSQL or Derby), please put it on the classpath.
   	If you have database settings to be loaded from a particular profile you may need to activate it (no profiles are currently active).
  
```

 综合来看确定是在项目中使用了数据库相关的组件，但是没有配置数据源信息。
 看了一下项目 `pom文件` 的依赖，不知道自己什么时候引入了`spring-boot-starter-jdbc` 这个依赖包：
 
 ```xml
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-jdbc</artifactId>
    </dependency>
```
 
解决问题方法，如果你需要用到数据库组件，那么就需要配置一下数据源相关的信息；
如果暂时不需要数据库组件，那么可以在项目启动类上，
这样写`@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})` 就可以了；
或者就是注释掉pom文件中用到的数据库相关starter组件引入，重新更新一下maven项目依赖也可以。
       