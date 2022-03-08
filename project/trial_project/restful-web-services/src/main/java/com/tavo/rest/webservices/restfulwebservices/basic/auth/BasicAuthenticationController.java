package com.tavo.rest.webservices.restfulwebservices.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//We want to tell spring that this is a controller
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BasicAuthenticationController {
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
	@GetMapping(path="/basicauth")
	//WOW!! It works
	public AuthenticationBean helloWorld() {
		return new AuthenticationBean("You are authenticated now!!!") ;
	}
	
}
