import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getItemFromLocalStorage = () => {
  const storedDataSTR = localStorage.getItem("doctorInfo");
  if (storedDataSTR) {
    const parseData = JSON.parse(storedDataSTR);
    return parseData;
  } else {
    return [];
  }
};

const setItemToLocalStorage = (id, name) => {
  const storedData = getItemFromLocalStorage();
  if (storedData.includes(id)) {
    toast.error(`${name} Already Booked`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  } else {
    const newData = [...storedData, id]
    localStorage.setItem("doctorInfo", JSON.stringify(newData));
    toast.success(`Got Appointment of ${name}`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  }
};

const removeItemToLocalStorage = (id, name) => {
  const storedData = getItemFromLocalStorage();
  if (storedData) {
    const newData = storedData.filter((singleStoreData) => singleStoreData !== id);
    const newDataSTR = JSON.stringify(newData);
    localStorage.setItem("doctorInfo", newDataSTR);
  }
  toast.success(`Removed Appointment of ${name}`, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    transition: Bounce,
  });
};

export { getItemFromLocalStorage, setItemToLocalStorage, removeItemToLocalStorage };