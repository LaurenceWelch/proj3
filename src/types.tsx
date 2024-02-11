// todo stuff
export type Todo = {
  id: number;
  title: string;
  description: string;
  dueDate: string;
};

export type TodoListState = {
  nextId: number;
  list: Todo[];
};

// cart stuff
export type CartState = {list: Product[]; totalPrice: number};

export type Product = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  linePrice: number;
};
