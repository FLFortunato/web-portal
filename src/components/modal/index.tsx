import React from "react";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { Button, Grid, TextField } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { editPost } from "../../store/posts/actions";
import { Post } from "../../models/post.model";

interface editModalProps {
  post: Post;
  openModal: boolean;
  close: Function;
  comments: any[];
  setComments: Function;
}

const DialogModal = ({
  post,
  openModal,
  close,
  comments,
  setComments,
}: editModalProps) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const dispatch = useDispatch();

  const handleEdit = useCallback(() => {
    const data = { ...post, title, content };
    dispatch(editPost(data));

    const newComments = [
      ...comments?.filter((item) => item.id !== post.id),
      data,
    ];
    setComments(newComments);
    close(!openModal);
  }, [post, content, title]);

  const handleCancel = useCallback(() => {
    close(!openModal);
    setTitle("");
    setContent("");
  }, [openModal]);

  useEffect(() => {
    setTitle(post.title);
    setContent(post.content);
  }, [post]);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Grid
          style={{
            backgroundColor: "white",
            borderRadius: "1%",
            minHeight: "40vh",
            minWidth: "70vh",
          }}
        >
          <Grid item>
            <Grid
              container
              direction={"column"}
              spacing={3}
              style={{ padding: 20 }}
            >
              <Grid item lg={2}>
                <TextField
                  fullWidth
                  label={"Title"}
                  color="secondary"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Grid>
              <Grid item lg={4}>
                <TextField
                  fullWidth
                  value={content}
                  label={"Post"}
                  color="secondary"
                  onChange={(e) => setContent(e.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              spacing={1}
              style={{
                position: "absolute",
                bottom: 0,
                padding: 5,
                justifyContent: "flex-end",
              }}
            >
              <Grid item>
                <Button
                  color="secondary"
                  variant="outlined"
                  onClick={handleEdit}
                >
                  Salvar
                </Button>
              </Grid>
              <Grid item>
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={handleCancel}
                >
                  Cancelar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Modal>
  );
};

export default DialogModal;
