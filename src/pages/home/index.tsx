import { Button, Grid, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import CommentsArea from "../../components/comments";
import DialogModal from "../../components/modal";
import { Post } from "../../models/post.model";
import { ReduxState } from "../../store/base/interface";
import { createPost, deletePost, getAllPosts } from "../../store/posts/actions";

const HomePage = () => {
  const [actualComment, setActualComment] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [comments, setComments] = useState<any>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selected, setSelected] = useState<any>([]);

  const { posts } = useSelector((state: ReduxState) => state.PostState);

  const dispatch = useDispatch();

  const createAPost = async () => {
    if (actualComment?.length > 0 && title?.length > 0) {
      const info = await localStorage.getItem("@info");

      if (info) {
        const id = uuidv4();
        setComments([...comments, { id, title, content: actualComment }]);
        dispatch(
          createPost({
            id,
            userID: info,
            title,
            content: actualComment,
          })
        );
      }
    }
  };

  const handleDeletePost = (post: Post) => {
    const dataAfterDelete = comments.filter((item: Post) => item.id != post.id);
    setComments(dataAfterDelete);
    dispatch(deletePost(post?.id as any));
  };

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  useEffect(() => {
    if (posts) {
      setComments(posts);
    }
  }, [posts]);

  return (
    <div style={{ overflow: "scroll", maxHeight: "85vh", minHeight: "85vh" }}>
      <Grid container direction="column" style={{ padding: 50 }} spacing={2}>
        <Grid item>
          <Grid container direction="column" spacing={2}>
            <Grid item lg={2}>
              <TextField
                fullWidth
                label={"Title"}
                color="secondary"
                onChange={(e) => setTitle(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                label={"Post"}
                color="secondary"
                onChange={(e) => setActualComment(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item alignContent="flex-start">
              <Button
                variant="contained"
                color="primary"
                style={{ color: "#45A29E" }}
                onClick={createAPost}
              >
                Enviar
              </Button>
            </Grid>
            <Grid item>
              {comments?.map((item: Post) => {
                return (
                  <CommentsArea
                    props={item}
                    update={setOpenModal}
                    key={item.id}
                    handleDelete={handleDeletePost}
                    handleEdit={setSelected}
                  />
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <DialogModal
        openModal={openModal}
        close={setOpenModal}
        post={selected}
        comments={comments}
        setComments={setComments}
      />
    </div>
  );
};

export default HomePage;
