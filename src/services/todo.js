import update from 'immutability-helper';

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

export function getItemById(itemId) {
  return getAll().find((item) => item.id === itemId);
}

export function updateStatus(items, itemId, completed) {
  let index = items.findIndex((item) => item.id === itemId);

  return update(items, {
    [index]: {
      completed: { $set: completed },
    },
  });
}

/**
 * Tạo bộ đếm tự động tăng
 * @type {Number}
 */
let todoCounter = 1;

/**
 * Thêm một dữ liệu mới và trả về danh sách đã cập nhật
 *
 * @param {Array} list
 * @param {Object} data
 * @return {Array}
 */
export function addToList(list, data) {
  let item = Object.assign(
    {
      id: getAll().length + todoCounter++,
    },
    data,
  );

  return list.concat([item]);
}
