package com.tavo.rest.webservices.restfulwebservices;

public class HelloWorldBean {
	private int age = 21;
	private String message;
	//simple constructor
	public HelloWorldBean(String message) {
		// TODO Auto-generated constructor stub
		this.message=message;
	}
	//simple setter
	
	
	
	
	//simple toString() method
	@Override
	public String toString() {
		return String.format("HelloWorldBean [message=%s]", message);
	}

	public String getMessage() {
		return message;
	}


	public void setMessage(String message) {
		this.message = message;
	}

}
