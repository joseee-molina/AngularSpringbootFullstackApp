package com.tavo.rest.webservices.restfulwebservices.todo;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.tavo.rest.webservices.restfulwebservices.todo.Todo;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoResource {
	@Autowired
	private TodoHardcodedService todoService;

	@GetMapping("/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username) {
		return todoService.findAll();
	}
//DELETE
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
		Todo todo = todoService.deleteById(id);
		if (todo != null) {
			return ResponseEntity.noContent().build();
			//We are returning a status of no content if we are able
			//ton succesfully delete it
		}
		return ResponseEntity.notFound().build();
	}
	
	/**
	 * Note: tested this delete method in the Talend API tester, 
	 * where I executed delete requests to the tavin user,
	 * deleting all of the todos. This was a lot of learning!
	 */
	
	@GetMapping("/users/{username}/todos/{id}")
	public Todo getAllTodos(@PathVariable String username, @PathVariable int id) {
		return todoService.findById(id);
	}
	
	//Edit a todo we use the following RESTful service:
	//PUT
	
	@PutMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable String username, 
			@PathVariable long id, 
			@RequestBody Todo todo) {
		Todo todoUpdated = todoService.save(todo);
		return new ResponseEntity<Todo>(todo, HttpStatus.OK);
	}
	
	
	
	//Create a new todo we use the following RESTful service:
	//POST
	@PostMapping("/users/{username}/todos")
	public ResponseEntity<Void> createTodo(@PathVariable String username, 
			@RequestBody Todo todo) {
		Todo createdTodo = todoService.save(todo);
		
		//What we usually return as the resone of a POST request, we need to
		//return the updated location of the created resource.
		//get current resource URL, and then append the ID to get the complete URL
		//there is a component called ServletUriComponentBuilder to do that
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().
				path("/{id}").
		buildAndExpand(createdTodo.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
	
}
