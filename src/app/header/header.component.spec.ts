import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TodosService } from '../todos.service';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let todosServiceMock: jasmine.SpyObj<TodosService>; // Mock TodosService

  beforeEach(async () => {
    // Create a spy object for the TodosService
    todosServiceMock = jasmine.createSpyObj('TodosService', ['addItem']);

    await TestBed.configureTestingModule({
      imports: [ FormsModule ], // Import FormsModule if used
      providers: [
        { provide: TodosService, useValue: todosServiceMock } // Provide the mock TodosService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a todo', () => {
    // Set up test data
    const title = 'Test Todo';

    // Trigger addTodo method
    component.title = title;
    component.addTodo();

    // Verify that addItem method of TodosService was called with correct title
    expect(todosServiceMock.addItem).toHaveBeenCalledWith(title);
  });

  it('should not add a todo if title is empty', () => {
    // Set up test data
    const title = '';

    // Trigger addTodo method
    component.title = title;
    component.addTodo();

    // Verify that addItem method of TodosService was not called
    expect(todosServiceMock.addItem).not.toHaveBeenCalled();
  });
});