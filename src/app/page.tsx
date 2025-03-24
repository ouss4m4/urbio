import { Box, Typography } from "@mui/material";
import { PostsList } from "@/components/PostsList";

export default function Home() {
  return (
    <Box component="main" p={4}>
      <Typography variant="h3" component="h1" gutterBottom>
        Blog Dashboard
      </Typography>
      <PostsList />
    </Box>
  );
}
