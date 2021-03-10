import React, { useEffect } from "react";
import { Container, Typography, AppBar, Grow, Grid, FormHelperText } from "@material-ui/core";
import {useDispatch } from "react-redux";

import {getPosts} from "./actions/posts"
import memories from "../src/accests/memorie.jpg";
import Posts from "./component/Posts/Posts";
import Form from "./component/Form/Form";
import useStyle from "./Styles";

function App() {
  const classes = useStyle();
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherite">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>

        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </AppBar>

      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} lg = {9} sm={7}>
              <Posts></Posts>
            </Grid>
            <Grid item xs={12} lg = {3} sm={5}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
