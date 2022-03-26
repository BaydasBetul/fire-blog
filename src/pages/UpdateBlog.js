import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { AuthContext } from "../contexts/AuthContext";
import { BlogContext } from "../contexts/BlogContext";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { useParams, useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { successNote } from "../helpers/toastNotify";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Loading from "../components/Loading";

const theme = createTheme();

export default function UpdateBlog() {
  const navigate = useNavigate();
  const { data } = React.useContext(BlogContext);
  const { currentUser } = React.useContext(AuthContext);
  const { id: currentId } = useParams();
  const [title, setTitle] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [content, setContent] = React.useState("");
  const formElement = React.useRef(""); // useRef  herhangi bir değişken değeri tutmak için kullanışlıdır
  const db = getFirestore();
  const docRef = doc(db, "datas", currentId);

  const handleSubmitForm = (event) => {
    event.preventDefault();
   
    const displayName = currentUser.displayName;

    updateDoc(docRef, { title, url, content, displayName }).then(() => {
      formElement.current.reset();
      successNote("Updated Succesfully");
      navigate("/");
    });
  };

  React.useEffect(() => {
    data.filter((item) =>
      item.id === currentId
        ? (setTitle(item.title), setUrl(item.url), setContent(item.content))
        : null
    );
  }, [data, currentId]);

  return data ? (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "30rem" },

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "3rem",
          }}
          noValidate
          autoComplete="off"
          ref={formElement}
          onSubmit={handleSubmitForm}
        >
          <Avatar
            sx={{ m: 1, bgcolor: "secondary.main", width: 120, height: 70 }}
            src="https://www.doz.com/cms/wp-content/uploads/2013/08/blog.jpg"
          />
          <Typography component="h1" variant="h4">
            Update BLog
          </Typography>
          <TextField
            id="outlined-multiline-flexible"
            label="Title"
            multiline
            maxRows={4}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            id="outlined-textarea"
            label="URL"
            placeholder="Placeholder"
            multiline
            rows={2}
            onChange={(e) => setUrl(e.target.value)}
          />
          <TextField
            id="outlined-multiline-static"
            label="Content"
            multiline
            rows={14}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button
            variant="contained"
            color="success"
            type="submit"
            sx={{ mr: 2 }}
          >
            SEND
          </Button>
          <Button variant="outlined" color="error" sx={{ mr: 2 }} onClick={() => navigate(-1)}>
            Back
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  ) : (
    <Loading />
  );
}
