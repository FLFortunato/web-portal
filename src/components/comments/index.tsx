import React, { useCallback } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { CommentsAreaDiv } from "./styled";

const CommentsArea = ({ props, handleDelete, update, handleEdit }: any) => {
  const onEdit = useCallback(() => {
    handleEdit(props);
    update(true);
  }, [props]);

  return (
    <div style={{ maxWidth: 400 }}>
      <CommentsAreaDiv>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="h6">{props.title}</Typography>
          </Grid>
          <Grid item>{props.content}</Grid>
        </Grid>
      </CommentsAreaDiv>
      <Grid container justify="flex-end" style={{ padding: 15 }}>
        <Grid item>
          <Button onClick={onEdit}>
            <Edit color={"secondary"} />
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={() => handleDelete(props)}>
            <Delete />
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default CommentsArea;
