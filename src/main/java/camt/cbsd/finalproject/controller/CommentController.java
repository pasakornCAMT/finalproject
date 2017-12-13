package camt.cbsd.finalproject.controller;

import camt.cbsd.finalproject.entity.Comment;
import camt.cbsd.finalproject.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200",allowedHeaders = "*")
public class CommentController {
    CommentService commentService;

    @Autowired
    public void setCommentService(CommentService commentService) {
        this.commentService = commentService;
    }

    @CrossOrigin
    @GetMapping("/comment")
    public ResponseEntity<?> getComments(){
        List<Comment> comments = commentService.getComments();
        return ResponseEntity.ok(comments);
    }

    @PostMapping("/comment")
    public ResponseEntity<?> uploadComment(@RequestBody Comment comment){
        commentService.addComment(comment);
        return ResponseEntity.ok(comment);
    }




}
