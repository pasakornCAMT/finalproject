package camt.cbsd.finalproject.entity;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
@Builder
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @NonNull
    long id;
    @NonNull
    String productId;
    @NonNull
    String name;
    @NonNull
    String description;
    @NonNull
    double price;
    @NonNull
    String image;
    @NonNull
    boolean show = true;
    @NotNull
    boolean selected = false;
    long clicked;
    @OneToMany
    List<Comment> comments;

    public List<Comment> addComment(Comment comment){
        comments = Optional.ofNullable(comments).orElse(new ArrayList<>());
        comments.add(comment);
        return comments;
    }


}
