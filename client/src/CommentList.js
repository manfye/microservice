import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default ({ comments }) => {
  


  const renderedComments = comments.map(comment => {
  let content

  if (comment.status ==="approved"){
    content = comment.content
  }
  if (comment.status ==="pending"){
    content = "Awaiting moderation"
  }
  if (comment.status ==="rejected"){
    content = "Rejected comments"
  }
  
    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};
