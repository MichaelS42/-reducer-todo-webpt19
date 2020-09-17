import React from "react";

export const ADD_TASK = "ADD_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const CLEAR_TASK = "CLEAR_TASK";

export const initialState = {
  tasks: [
    {
      item: "sleep",
      completed: false,
      id: 100,
    },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        tasks: [
          ...state.tasks,
          {
            item: action.payload,
            completed: false,
            id: Date.now(),
          },
        ],
      };
    case CLEAR_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((item) => !item.completed),
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((item) => {
          if (action.payload === item.id) {
            return {
              ...item,
              completed: !item.completed,
            };
          }
          return {
            ...item,
          };
        }),
      };
    default:
      return state;
  }
};
