package camt.cbsd.finalproject.dao;

import camt.cbsd.finalproject.entity.Comment;
import camt.cbsd.finalproject.repository.CommentRepository;
import com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Repository;

import java.util.List;

@Profile("DBDataSource")
@Repository
public class CommentDaoImpl implements CommentDao {
    CommentRepository commentRepository;

    @Autowired
    public void setCommentRepository(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    @Override
    public List<Comment> getComments() {
        return Lists.newArrayList(commentRepository.findAll());
    }
}
