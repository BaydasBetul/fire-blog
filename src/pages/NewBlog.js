import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { AuthContext } from "../contexts/AuthContext";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { addDoc } from "firebase/firestore";
import { colRef } from "../contexts/BlogContext";
import { successNote } from "../helpers/toastNotify";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//import moment from "moment";
import { BlogContext } from "../contexts/BlogContext";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function NewBlog() {
  const { currentUser } = React.useContext(AuthContext);
  const { google } = React.useContext(BlogContext);
  const navigate = useNavigate();
  const [title, setTitle] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [content, setContent] = React.useState("");
  const formElement = React.useRef(""); // useRef  herhangi bir değişken değeri tutmak için kullanışlıdır
  //const createDate = moment.format("LL");
  const like = [];
  const comment = [];
  const countLiked = 0;
  const countComment = 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    //const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const displayName = google
      ? currentUser.displayName[0]
      : currentUser.displayName;
    addDoc(colRef, {
      //createDate,
      title,
      url,
      content,
      like,
      displayName,
      comment,
      countLiked,
      countComment,
    }).then(() => {
      successNote("Added Suscesfully");
      formElement.current.reset();
      navigate("/");
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25rem" },

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "3rem",
          }}
          noValidate
          autoComplete="off"
          ref={formElement}
          onSubmit={handleSubmit}
        >
          <Avatar
            sx={{ m: 1, bgcolor: "secondary.main", width: 120, height: 70 }}
            src="https://www.doz.com/cms/wp-content/uploads/2013/08/blog.jpg"
          />

          <Typography component="h1" variant="h4">
            New BLog
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
            placeholder="Image URL"
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
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
