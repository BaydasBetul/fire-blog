// import React from "react";
// import { useState } from "react";
// //import { getFirestore, collection } from "firebase/firestore";
// import { useBlog } from "../contexts/BlogContext";
// import Grid from "@mui/material/Grid";
// import SearchList from "../components/SearchList";
// import Home from "./Home";
// import SearchNavBar from "../components/SearchNavBar";
// //import value from "../contexts/BlogContext";

// // const db = getFirestore();
// // export const colRef = collection(db, "datas");

// const SeachResult = () => {
//   const [searchField, setSearchField] = useState("");
//   const [searchShow, setSearchShow] = useState(false);
//   const { value } = useBlog();

//   const filteredList = value?.filter((datas) => {
//     //console.log();
//     return datas.title
//       .toLocaleLowerCase()
//       .includes(searchField.toLocaleLowerCase());
//   });

//   const handleChange = (e) => {
//     setSearchField(e.target.value);
//     if (e.target.value === "") {
//       setSearchShow(false);
//     } else {
//       setSearchShow(true);
//     }
//   };
//   return (
//     <>
//       <SearchNavBar handleChange={handleChange} />
//       {searchShow ? (
//         <Grid
//           container
//           spacing={0}
//           direction="column"
//           alignItems="center"
//           justifyContent="center"
//           style={{ minHeight: "75vh" }}
//         >
//           <Grid item xs={12}>
//             <SearchList filteredList={filteredList} />
//           </Grid>
//         </Grid>
//       ) : (
//         <Home />
//       )}
//     </>
//   );
// };

// export default SeachResult;
//######################################################
// import React, { useState } from "react";
// //import "./SearchBar.css";
// import SearchIcon from "@material-ui/icons/Search";
// import CloseIcon from "@material-ui/icons/Close";

// function SearchBar() {
//   const [filteredData, setFilteredData] = useState([]);
//   const [wordEntered, setWordEntered] = useState("");

//   const handleFilter = (event) => {
//     const searchWord = event.target.value;
//     setWordEntered(searchWord);
//     const newFilter = data.filter((value) => {
//       return value.title.toLowerCase().includes(searchWord.toLowerCase());
//     });

//     if (searchWord === "") {
//       setFilteredData([]);
//     } else {
//       setFilteredData(newFilter);
//     }
//   };

//   const clearInput = () => {
//     setFilteredData([]);
//     setWordEntered("");
//   };

//   return (
//     <div className="search">
//       <div className="searchInputs">
//         <input
//           type="text"
//           placeholder={placeholder}
//           value={wordEntered}
//           onChange={handleFilter}
//         />
//         <div className="searchIcon">
//           {filteredData.length === 0 ? (
//             <SearchIcon />
//           ) : (
//             <CloseIcon id="clearBtn" onClick={clearInput} />
//           )}
//         </div>
//       </div>
//       {filteredData.length !== 0 && (
//         <div className="dataResult">
//           {filteredData.slice(0, 15).map((value, key) => {
//             return (
//               <div>
//                 <a className="dataItem" href={value.link}>
//                   <p>{value.title} </p>
//                 </a>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

// export default SearchBar;
