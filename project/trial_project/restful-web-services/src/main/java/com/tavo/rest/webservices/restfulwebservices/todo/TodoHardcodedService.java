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
		todos.add(new Todo(++idCounter, "Tavin first", "learn to more about backend development!!", new Date(), false));
		todos.add(new Todo(++idCounter, "Tavin first", "take my family out for dinner", new Date(), false));

		
	}
	
	public List<Todo> findAll(){
		return todos;
	}
	public Todo deleteById(long id) {
		Todo todo = findById(id);
		if(todo==null) {
			return null;
		}
		todos.remove(todo);
		return todo;
	}
	public Todo findById(long id) {
		for (int i = 0 ; i<todos.size();i++) {
			if(todos.get(i).getId() == id) {
				return todos.get(i);
			}
		}
		return null;
	}
}
