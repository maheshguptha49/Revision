import { useEffect, useState } from "react";
import styles from "./Student.module.css";
import { useDispatch, useSelector } from "react-redux";
import { studentsGet } from "../store/students/actions";
import { baseUrl } from "../utills/link";
import { SingleStudent } from "./SingleStudent";
import { v4 as uuid } from "uuid";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import { useQuery } from "../hoooks/useQuery";
export function StudentComp() {
  const { studentsArray, totalPages } = useSelector((state) => state.students);
  const [buttons, setButtons] = useState([1, 2, 3, 4]);
  const params = useParams();
  const history = useHistory();
  let { queriesObj, queriesString } = useQuery();
  let [queryState, setQueryState] = useState(queriesString);
  const [page, setPage] = useState(queriesObj.page || 1);
  const [dummy, setDummy] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("runnnig useEffect");
    getData();
  }, [dummy]);
  async function getData() {
    dispatch(studentsGet(`${baseUrl}/students?${queriesString}`));
  }
  function handlePageChange(pageNumber) {
    if (pageNumber > 2) {
      let arr = [];
      for (let i = pageNumber - 2; i <= pageNumber + 1; i++) arr.push(i);
      setButtons(arr);
    } else {
      setButtons([1, 2, 3, 4]);
    }
    setDummy(["ljnj"]);
    getData();
    history.push(`?page=${pageNumber}`);
  }
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => {
            setDummy(["wdkjdw"]);
          }}
        >
          <Link to="?sort=age-1">sort by age high to low</Link>
        </button>
        <button
          onClick={() => {
            setDummy(["gr"]);
          }}
        >
          <Link to="?sort=age1">sort by age low to high</Link>
        </button>
        <button
          onClick={() => {
            setDummy(["dkjd"]);
          }}
        >
          <Link to="?gender=Male">male</Link>
        </button>
        <button
          onClick={() => {
            setDummy(["sjlsn"]);
          }}
        >
          <Link to="?gender=Female">female</Link>
        </button>
      </div>
      <div className={styles.main}>
        {studentsArray.map((item) => {
          return (
            <SingleStudent
              key={item._id}
              {...item}
              queriesString={queryState}
            />
          );
        })}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {buttons.map((item) => {
          return (
            <button
              style={{ margin: "5px" }}
              key={uuid()}
              onClick={() => handlePageChange(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}
