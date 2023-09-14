import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const PostList = ({ post }) => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {post.title}
                </Typography> */}
                <Link to={`/post/${post.id}`}>
                    <h2>{post.title}</h2>
                </Link>
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
            <Container>
                <Link to={`/post/update/${post.id}`} >
                    <Button variant="contained" >edit</Button>
                </Link>
                <Button variant="contained" color="error">Delete</Button>
            </Container>
        </Card>
    );

}
