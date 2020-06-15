export default (tasks, searchValue) =>
  tasks.filter(({ name }) =>
    name.toLowerCase().includes(searchValue.toLowerCase())
  );
