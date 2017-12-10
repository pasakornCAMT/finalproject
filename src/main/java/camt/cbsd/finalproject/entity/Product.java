package camt.cbsd.finalproject.entity;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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

}
