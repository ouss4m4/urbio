import { Box, Button } from "@mui/material";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { AddPostForm } from "@/components/AddPostForm";

export default function NewPostPage() {
  return (
    <Box component="main" p={4}>
      <Button
        component={Link}
        href="/"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 4 }}
        variant="text"
        color="primary"
      >
        Back to Posts
      </Button>
      <AddPostForm />
    </Box>
  );
}
