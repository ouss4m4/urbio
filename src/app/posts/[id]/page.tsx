import { Box, Button } from "@mui/material";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { PostDetail } from "@/components/PostDetail";

interface Params {
  id: string;
}

export default async function PostPage({ params }: { params: Params }) {
  const { id: postId } = await params;

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
      <PostDetail id={parseInt(postId)} />
    </Box>
  );
}
