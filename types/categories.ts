import todo from "./todo";

type category = {
  idx: number;
  name: string;
  icon: string;
  todos: todo[];
};

export default category;
