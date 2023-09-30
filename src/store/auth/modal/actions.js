import store from "../../../store/index.jsx";
import {_setModal, _removeModal} from "./index";

export const setModal = (name, data = false) => store.dispatch(_setModal({name, data}))
export const removeModal = () => store.dispatch(_removeModal())