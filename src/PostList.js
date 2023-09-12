import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const PostList = ({post}) => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                   {post.title}
                </Typography>
                <Typography variant="subtitle1">
                   {post.slug}
                </Typography>
                <Typography variant="body2">
                   {post.content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">read More</Button>
            </CardActions>
        </Card>
    );
  
}
