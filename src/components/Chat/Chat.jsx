import { Avatar, Button, Container, Grid, TextField } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../..";
import s from "./Chat.module.scss";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Loader from "../AppRouter/Loader";
import firebase from "firebase/compat/app";

const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  );

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  const sendMessage = async () => {
    firestore.collection("messages").add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setValue("");
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        style={{ height: window.innerHeight - 50 }}
      >
        <div className={s.container}>
          {messages.map((message) => (
            <div
              style={{
                marginBottom: "10px",
                border:
                  user.uid === message.uid
                    ? "2px solid green"
                    : "2px dashed red",
                marginLeft: user.uid === message.uid ? "auto" : "10px",
                width: "fit-content",
                padding: "0.5rem",
              }}
            >
              <Grid container alignItems={"center"} style={{ gap: "0.5rem" }}>
                <Avatar src={message.photoURL} />
                <div>{message.displayName}</div>
              </Grid>
              <div>{message.text}</div>
            </div>
          ))}
          <div ref={messagesEndRef}></div>
        </div>
        <Grid
          className={s.inputbox}
          container
          alignItems={"end"}
          direction={"column"}
        >
          <TextField
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            value={value}
            fullWidth
            rowsMax={2}
            variant={"outlined"}
            label={"Сообщение"}
          />
          <Button onClick={() => sendMessage()} variant={"outlined"}>
            Отправить
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
