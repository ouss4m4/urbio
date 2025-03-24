'use client';

import dynamic from 'next/dynamic';
import { Box, CircularProgress } from '@mui/material';

const PostDetail = dynamic(() => import('./PostDetail').then(mod => mod.PostDetail), {
  ssr: false,
  loading: () => (
    <Box display="flex" justifyContent="center" p={4} minHeight="400px" alignItems="center">
      <CircularProgress />
    </Box>
  ),
});

interface Props {
  id: number;
}

export function PostDetailWrapper({ id }: Props) {
  return <PostDetail id={id} />;
} 