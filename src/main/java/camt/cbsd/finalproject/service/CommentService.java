package camt.cbsd.finalproject.service;

import camt.cbsd.finalproject.entity.Comment;

import java.util.List;

public interface CommentService {
    List<Comment> getComments();
    Comment addComment(Comment comment);
}
