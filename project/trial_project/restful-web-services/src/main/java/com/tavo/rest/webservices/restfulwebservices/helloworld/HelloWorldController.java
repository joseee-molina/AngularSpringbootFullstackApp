package com.tavo.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//We want to tell spring that this is a controller
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloWorldController {
	//we want to create a method that returns "Hello World"
	//whenever we define a Web service, we want to define:
	/*
	 * 1) What Method: GET
	 * 2) What URI: /hello-world
	 * So this program works as follows:
	 * if someone goes to the browser to the /hello-world
	 * and sends a get requests there, all I want to send is
	 * some text.
	 */
	//@RequestMapping(method=RequestMethod.GET, path="/hello-world")
	@GetMapping(path="hello-world")
	//WOW!! It works
	public String helloWorld() {
		return "Hello World";
	}
	//hello-world-bean 
	//We will create a bean, which is simply a 
	//spring boot object
	
	@GetMapping(path="hello-world/path-variable/{theName}")
	//Adding a path-variable inside the URL, so that we can add the {} var
	// and use that var as @PathVariable
	//This is super common and will be used later in this course
	//WOW!! It works
	public HelloWorldBean helloWorldBean(@PathVariable String theName) {
		//throw new RuntimeException("Some error has happeneed!!");
		return new HelloWorldBean(String.format("Hello World, now it is from Spring Boot, %s", theName) );
	}
}
