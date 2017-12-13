package camt.cbsd.finalproject.service;

import camt.cbsd.finalproject.dao.CommentDao;
import camt.cbsd.finalproject.entity.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Service;

import java.util.List;

@ConfigurationProperties(prefix = "server")
@Service
public class CommentServiceImpl implements CommentService {
    @Autowired
    CommentDao commentDao;
    @Override
    public List<Comment> getComments() {
        return commentDao.getComments();
    }

    @Override
    public Comment addComment(Comment comment) {
        return commentDao.addComment(comment);
    }
}
