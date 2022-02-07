import * as types from "./../constants/actionTypes";
export const listAll = () => {
  return {
    type: types.LIST_ALL,
  };
};

export const saveTask = (task) => {
  return {
    type: types.SAVE_TASKS,
    task: task,
  };
};

export const toggleForm = () => {
  return {
    type: types.TOGGLE_FORM,
  };
};

export const closeForm = () => {
  return {
    type: types.CLOSE_FORM,
  };
};

export const openForm = () => {
  return { type: types.OPEN_FORM };
};

export const updateStatus = (id) => {
  return {
    type: types.UPDATE_STATUS_TASK,
    id,
  };
};

export const deleteTask = (id) => {
  return {
    type: types.DELETE_TASK,
    id,
  };
};
export const updateContent = (task) => {
  return {
    type: types.UPDATE_CONTENT,
    task,
  };
};
export const filterTaskTable = (filter) => {
  return {
    type: types.FILTER_TASK_TABLE,
    filter,
  };
};
export const searchTaskTool = (keyword) => {
  return {
    type: types.SEARCH_TASK_TOOL,
    keyword,
  };
};
export const sortTaskTool = (sort) => {
  return {
    type: types.SORT_TASK_TOOL,
    sort,
  };
};
