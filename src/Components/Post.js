import React from 'react'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import arr from "../Data/Data";
const Post = () => {
  return (
    <>
    {arr.map((link, i) => (
    <Card sx={{margin:"5px"}}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor:"red" }} aria-label="recipe">
          {link.initials}
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVert />
        </IconButton>
      }
      title={link.title}
      subheader={link.subheader}
    />
    <CardMedia
      component="img"
      height="20%"
      image={link.image}
      alt="food image"
      
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {link.content}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
      </IconButton>
      <IconButton aria-label="share">
        <Share />
      </IconButton>
     
    </CardActions>

  </Card>
    ))}
  </>
  )
}

export default Post