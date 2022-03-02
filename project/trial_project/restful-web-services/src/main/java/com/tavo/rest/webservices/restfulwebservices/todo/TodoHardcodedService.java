package com.tavo.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;


@Service
public class TodoHardcodedService {
	//We want to have a static list of todos
	
	private static List<Todo> todos = new ArrayList<Todo>();
	private static int idCounter = 0;
	static {
		todos.add(new Todo(++idCounter, "Tavin first", "learn to speak japanese", new Date(), false));
		todos.add(new Todo(++idCounter, "Tavin first", "learn to more about backend development", new Date(), false));
		todos.add(new Todo(++idCounter, "Tavin first", "take my family out for dinner", new Date(), false));

	}
	
	public List<Todo> findAll(){
		return todos;
	}
}
