# Todo-Blast
Todo-Blast is a real-time todo application built with Angular 17 that allows users to perform CRUD operations on a Supabase database. It also features authentication with GitHub OAuth using Supabase.

# Demo
Drive Link - https://drive.google.com/file/d/1I1oJwr0UDiZvctcTJEDMmArqgbZRVZsD/view?usp=sharing

![image](https://github.com/viraj-ramdin-dev/todo-blast/assets/71839277/e6d8c8f9-4699-451a-8bfd-9f9ef868f153)


🌟 **Key Features**
- Real-time synchronization: Todos are updated in real-time across all connected clients.
- GitHub OAuth Authentication: Users can authenticate using their GitHub account via Supabase authentication.
- Create, Read, Update, and Delete (CRUD) operations: Users can perform CRUD operations on their todo list.
- Angular 17: Built with the latest version of Angular for modern development.

🚀 **Getting Started**
1. Clone the repository: `git clone https://github.com/yourusername/todo-blast.git`
2. Install dependencies: `npm install`
3. Set up Supabase: Follow the instructions in the Supabase documentation to set up a Supabase project and configure authentication with GitHub OAuth.
4. add your Supabase API URL and public key in src\app\utils\initSupabase.ts

SUPABASE_URL=your-supabase-api-url
SUPABASE_ANON_KEY=your-supabase-public-key

5. Run the application: `ng start`
6. Open your browser and navigate to `http://localhost:4200` to access the Todo-Blast application.

🛠️ **Usage**
- Create a new todo: Click on the input field and type the task. Press Enter to add the task to the list.
- Edit a todo: Double-click on a todo to edit its title.
- Mark a todo as completed: Click on the checkbox next to a todo to mark it as completed.
- Delete a todo: Click on the delete button (X) next to a todo to remove it from the list.
- View active/completed todos: Use the filter options to view active or completed todos.
- Clear completed todos: Click on the "Clear Completed" button to remove all completed todos from the list.
- Toggle all todos: Click on the "Toggle All" checkbox to mark all todos as completed or active.

🔒 **Authentication**
- To authenticate with GitHub OAuth, click on the "Login with GitHub" button and follow the authentication flow.

📝 **Contributing**
Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests.

