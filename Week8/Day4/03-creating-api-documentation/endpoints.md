- Get all the posts 
(GET /posts)
- Create a new post 
(POST /posts)
- Edit a post 
(put /posts/postID)

- Create a new user 
(POST /users)

- Get the comments for a post 
(GET /posts/:postID/comments)

- Create a comment for a post 
(POST /posts/:postID/comments)

- Edit a comment for a post 
(PATCH /posts/:postID/comments/:commentID)

- Delete a comment for a post 
(DELETE /posts/:postID/comments/:commentID)

- Add a like for a post 
(PATCH /posts/:postID/likes)

- Remove a like for a post 
(DELETE /posts/:postID/likes/:likeID)

- Get all the posts of a user 
(GET /users/userID/posts)

- Submit a search on posts 
(POST /posts/search)

