export default (tasks, options) => {
  let toggle;
  if (options.active) toggle = tasks.filter(({ done }) => !done);
  else if (options.done) toggle = tasks.filter(({ done }) => done);
  else if (options.all) toggle = tasks;
  return toggle;
};
