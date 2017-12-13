package camt.cbsd.finalproject.dao;

import camt.cbsd.finalproject.entity.Comment;

import java.util.List;

public interface CommentDao {
    List<Comment> getComments();
    Comment addComment(Comment comment);
}
