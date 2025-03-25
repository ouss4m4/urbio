"use client";

import { useGetPostsQuery } from "@/store/api";
import Link from "next/link";
import {
  Card,
  CardContent,
  Typography,
  Box,
  CircularProgress,
  Alert,
  Grid,
} from "@mui/material";
import { formatDistanceToNow } from "date-fns";

export function PostsList() {
  const { data, isLoading, error } = useGetPostsQuery({ limit: 10 });

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" p={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={2}>
        <Alert severity="error">
          Error loading posts. Please try again later.
        </Alert>
      </Box>
    );
  }

  if (!data?.posts.length) {
    return (
      <Box p={2}>
        <Alert severity="info">No posts found.</Alert>
      </Box>
    );
  }

  return (
    <Grid container spacing={3}>
      {data.posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <Link href={`/posts/${post.id}`} style={{ textDecoration: "none" }}>
            <Card
              sx={{
                height: "100%",
                transition: "transform 0.2s",
                "&:hover": { transform: "scale(1.02)" },
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  By {post.author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {formatDistanceToNow(new Date(post.createdAt), {
                    addSuffix: true,
                  })}
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  {post.excerpt}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
