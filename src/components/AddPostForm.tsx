"use client";

import { useState } from "react";
import { useCreatePostMutation } from "@/store/api";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Alert,
  Snackbar,
} from "@mui/material";
import type { CreatePostInput } from "@/types";

export function AddPostForm() {
  const [createPost, { isLoading }] = useCreatePostMutation();
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreatePostInput>({
    defaultValues: {
      title: "",
      content: "",
      author: "",
      excerpt: "",
    },
  });

  const onSubmit = async (data: CreatePostInput) => {
    try {
      setError(null);
      await createPost(data).unwrap();
      setShowSuccess(true);
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create post");
    }
  };

  return (
    <Paper elevation={0} sx={{ p: 4, maxWidth: "800px", mx: "auto" }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Add New Post
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller
          name="title"
          control={control}
          rules={{
            required: "Title is required",
            minLength: {
              value: 3,
              message: "Title must be at least 3 characters",
            },
            maxLength: {
              value: 100,
              message: "Title must be less than 100 characters",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              margin="normal"
              required
              fullWidth
              label="Title"
              error={!!errors.title}
              helperText={errors.title?.message}
              autoFocus
            />
          )}
        />
        <Controller
          name="author"
          control={control}
          rules={{
            required: "Author is required",
            minLength: {
              value: 2,
              message: "Author name must be at least 2 characters",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              margin="normal"
              required
              fullWidth
              label="Author"
              error={!!errors.author}
              helperText={errors.author?.message}
            />
          )}
        />
        <Controller
          name="excerpt"
          control={control}
          rules={{
            required: "Excerpt is required",
            minLength: {
              value: 10,
              message: "Excerpt must be at least 10 characters",
            },
            maxLength: {
              value: 200,
              message: "Excerpt must be less than 200 characters",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              margin="normal"
              required
              fullWidth
              label="Excerpt"
              multiline
              rows={2}
              error={!!errors.excerpt}
              helperText={errors.excerpt?.message}
            />
          )}
        />
        <Controller
          name="content"
          control={control}
          rules={{
            required: "Content is required",
            minLength: {
              value: 50,
              message: "Content must be at least 50 characters",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              margin="normal"
              required
              fullWidth
              label="Content"
              multiline
              rows={6}
              error={!!errors.content}
              helperText={errors.content?.message}
            />
          )}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={isLoading}
        >
          {isLoading ? "Creating..." : "Create Post"}
        </Button>
      </Box>

      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
      >
        <Alert severity="success" onClose={() => setShowSuccess(false)}>
          Post created successfully!
        </Alert>
      </Snackbar>

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
    </Paper>
  );
}
