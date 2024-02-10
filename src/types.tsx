// todo stuff
export type Todo = {
  id: number;
  title: string;
  description: string;
  dueDate: number;
};
export type TodoListState = {nextId: number; list: Todo[]};

// cart stuff
export type cartState = {list: Product[]};
export type Product = {
  id: number;
  title: string;
  price: number;
  quantity: number;
};
