package com.tavo.rest.webservices.restfulwebservices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//We want to tell spring that this is a controller
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
	
	@GetMapping(path="hello-world-bean")
	//WOW!! It works
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello World");
	}
}
