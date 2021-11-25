import { v4 as uuidv4 } from "uuid";
import { DELETE_TASK, ADD_TASK } from '../Actions/Type'

const initState = [
  {
    id: uuidv4(),
    name: "Configuration Granite withdrawal open-source",
    isDone: false
  },
  {
    id: uuidv4(),
    name: "haptic Cross-platform Human Buckinghamshire",
    isDone: false
  },
  {
    id: uuidv4(),
    name: "Spain digital firewall turquoise",
    isDone: false
  },
  {
    id: uuidv4(),
    name: "programming Money Market Account Persevering networks",
    isDone: true
  },
  {
    id: uuidv4(),
    name: "programming Factors Cambridgeshire Frozen",
    isDone: true
  },
  {
    id: uuidv4(),
    name: "Steel Coves Latvia Home",
    isDone: false
  },
  {
    id: uuidv4(),
    name: "Architect green Licensed Clothing",
    isDone: true
  },
  {
    id: uuidv4(),
    name: "matrix Ergonomic Frozen Bacon GB Metical",
    isDone: true
  },
  {
    id: uuidv4(),
    name: "PCI action-items Program Synchronised",
    isDone: true
  }
]
const todosReducer = (state = initState, action) => {
  switch (action.type) {
    // case TOGGLE_FILTER:
    //   return state.map(el=>el.id===action.payload?{...el,isDone:!el.isDone}:el)
    case DELETE_TASK:
      return state.filter(el => el.id !== action.payload)
    case ADD_TASK:
      return [...state, action.payload]
    default:
      return state;
  };
};
export default todosReducer;