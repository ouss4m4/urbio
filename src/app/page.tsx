import { Box, Typography, Button } from "@mui/material";
import { PostsList } from "@/components/PostsList";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";

export default function Home() {
  return (
    <Box component="main" px={18} py={6}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography variant="h3" component="h1">
          Blog Dashboard
        </Typography>
        <Button
          component={Link}
          href="/posts/new"
          variant="contained"
          startIcon={<AddIcon />}
        >
          Create Post
        </Button>
      </Box>
      <PostsList />
    </Box>
  );
}
