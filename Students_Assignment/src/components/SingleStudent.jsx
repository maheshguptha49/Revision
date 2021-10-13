import axios from "axios";
import { useDispatch } from "react-redux";
import {
  studentsDelete,
  studentsGet,
  studentsPatch
} from "../store/students/actions";
import { baseUrl } from "../utills/link";
import styles from "./SingleStudent.module.css";
export function SingleStudent(item) {
  const { _id, gender, age, name, city, queriesString } = item;
  const dispatch = useDispatch();
  function editStudent(_id) {
    let nameChanged = prompt("edit name");
    let ageChanged = prompt("edit age");
    const payload = {
      name: nameChanged.length > 0 ? nameChanged : name,
      age: ageChanged.length > 0 ? ageChanged : age
    };
    dispatch(
      studentsPatch(_id, payload, `${baseUrl}/students?${queriesString}`)
    );
  }
  function handledeleteStudent(_id) {
    dispatch(studentsDelete(_id, `${baseUrl}/students?${queriesString}`));
  }
  return (
    <div className={styles.main}>
      <div>{name} </div>
      <div>{gender}</div>
      <div>{age}</div>
      <div>{city}</div>
      <div>
        <button onClick={() => editStudent(_id)}>Edit </button>
      </div>
      <div>
        <button onClick={() => handledeleteStudent(_id)}>Delete</button>
      </div>
    </div>
  );
}
