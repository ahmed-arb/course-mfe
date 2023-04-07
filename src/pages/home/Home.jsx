import React, { useEffect, useState } from "react";

import { Container, Spinner } from "@edx/paragon";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import useHttp from "../../hooks/use-https";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const { sendRequest, isLoading, error } = useHttp();

  useEffect(() => {
    sendRequest({ url: "api/edx_course/list/" }, (data) => {
      setCourses(data.results);
    });
  }, [sendRequest]);

  return (
    <main>
      <Container className="py-5">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {isLoading ? (
            <Grid item xs={2} sm={4} md={4}>
              <Spinner
                animation="border"
                variant="info"
                className="mr-3"
                screenReaderText="loading"
              />
            </Grid>
          ) : error ? (
            <Grid item xs={2} sm={4} md={4}>
              <h2>{error}</h2>
            </Grid>
          ) : (
            courses?.map((item) => (
              <Grid item xs={2} sm={4} md={4} key={item.id}>
                <Card sx={{ maxWidth: 300 }}>
                  <CardMedia
                    sx={{ height: 200 }}
                    image={item.media.image.raw}
                    title={item.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </main>
  );
};

export default Home;
