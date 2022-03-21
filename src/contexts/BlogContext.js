/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState, useContext } from "react";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";

export const BlogContext = createContext();

export function useBlog() {
  return useContext(BlogContext);
}
// init services
const db = getFirestore();

// coolection ref

export const colRef = collection(db, "datas");

// get collection data

const BlogContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [google, setGoogle] = useState(false);

  // const [value, setValue] = useState([]);
  let value;

  //realTime collection data
  useEffect(() => {
    onSnapshot(colRef, (snapshot) => {
      value = [];
      snapshot.docs.forEach((doc) => {
        value.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setData(value);
      //console.log(value);
    });
  }, []);

  // get collection data

  //   useEffect(() => {
  //     async function getDoc() {
  //       await getDocs(colRef).then((snapshot) => {
  //         let value = [];
  //         snapshot.docs.forEach((doc) => {
  //           value.push({ ...doc.data(), id: doc.id });
  //         });
  //         setData(value);
  //       });
  //     }

  //     getDoc();
  //   }, []);

  return (
    <BlogContext.Provider value={{ value, data, google, setGoogle }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
