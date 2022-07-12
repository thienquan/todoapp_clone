/**
 * Get the list of todo items.
 * @return {Array}
 */
export function getAll() {
  return [
    {
      id: 1,
      text: 'Ghi chép chi tiêu trong ngày',
      completed: false,
    },
    {
      id: 2,
      text: 'Mua kệ cho vk',
      completed: false,
    },
    {
      id: 3,
      text: 'Code dự án cty',
      completed: false,
    },
  ];
}

export function createNew(text) {
  let nextId = this.state.items.length + 1;
  let item = {
    id: nextId,
    text: text,
  };
  return item;
}
