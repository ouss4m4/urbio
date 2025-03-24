import { Box, Button } from "@mui/material";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { PostDetail } from "@/components/PostDetail";

interface Props {
  params: {
    id: string;
  };
}

export default async function PostPage({ params }: Props) {
  const postId = parseInt(await Promise.resolve(params.id));

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
      <PostDetail id={postId} />
    </Box>
  );
}
