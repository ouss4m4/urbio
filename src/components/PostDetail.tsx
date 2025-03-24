"use client";

import { useGetPostQuery } from "@/store/api";
import { Box, Typography, Paper, CircularProgress, Alert } from "@mui/material";
import { formatDistanceToNow } from "date-fns";

export function PostDetail({ id }: { id: number }) {
  const { data: post, error, isLoading } = useGetPostQuery(id);

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        p={4}
        minHeight="400px"
        alignItems="center"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={2}>
        <Alert severity="error">
          {error instanceof Error ? error.message : "Failed to load post"}
        </Alert>
      </Box>
    );
  }

  if (!post) {
    return (
      <Box p={2}>
        <Alert severity="warning">Post not found</Alert>
      </Box>
    );
  }

  return (
    <Paper elevation={0} sx={{ p: 4, maxWidth: "800px", mx: "auto" }}>
      <Typography variant="h3" component="h1" gutterBottom>
        {post.title}
      </Typography>
      <Box sx={{ display: "flex", gap: 2, color: "text.secondary", mb: 4 }}>
        <Typography variant="body2">By {post.author}</Typography>
        <Typography variant="body2">•</Typography>
        <Typography variant="body2">
          {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
        </Typography>
      </Box>
      <Typography
        variant="body1"
        component="div"
        sx={{
          whiteSpace: "pre-wrap",
          "& p": { mb: 2 },
          "& h2": { fontSize: "1.5rem", fontWeight: 600, mb: 2, mt: 4 },
          "& h3": { fontSize: "1.25rem", fontWeight: 600, mb: 2, mt: 3 },
        }}
      >
        {post.content}
      </Typography>
    </Paper>
  );
}
