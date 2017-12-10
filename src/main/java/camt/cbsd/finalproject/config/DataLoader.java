package camt.cbsd.finalproject.config;

import camt.cbsd.finalproject.dao.ProductDao;
import camt.cbsd.finalproject.entity.Product;
import camt.cbsd.finalproject.entity.security.Authority;
import camt.cbsd.finalproject.entity.security.AuthorityName;
import camt.cbsd.finalproject.entity.security.User;
import camt.cbsd.finalproject.security.repository.AuthorityRepository;
import camt.cbsd.finalproject.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;

@ConfigurationProperties(prefix = "server")
@Component
public class DataLoader implements ApplicationRunner{
    ProductDao productDao;
    String baseUrl;
    String imageUrl;
    String imageBaseUrl;

    public void setBaseUrl(String baseUrl) {
        this.baseUrl = baseUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    @Autowired
    public void setProductDao(ProductDao productDao) {
        this.productDao = productDao;
    }

    @Transactional
    @Override
    public void run(ApplicationArguments args) throws Exception {
        imageBaseUrl = baseUrl + imageUrl;
        Product product01=Product.builder().productId("P-001").name("Shingha").description("product1").price(250).image(imageBaseUrl+"product1.jpg").show(true).build();
        Product product02=Product.builder().productId("P-002").name("Nestle").description("product2").price(250).image(imageBaseUrl+"product2.jpg").show(true).build();
        Product product03=Product.builder().productId("P-003").name("Cristal").description("product2").price(250).image(imageBaseUrl+"product3.jpg").show(true).build();

        productDao.addProduct(product01);
        productDao.addProduct(product02);
        productDao.addProduct(product03);

        securitySetup();
    }

    @Autowired
    UserRepository userRepository;

    @Autowired
    AuthorityRepository authorityRepository;

    public void securitySetup(){
        User user1 = User.builder()
                .username("cus")
                .password("cus")
                .firstname("cus")
                .lastname("cus")
                .email("cus@cus.com")
                .enabled(true)
                .lastPasswordResetDate(Date.from(LocalDate.of(2016,01,01).atStartOfDay(ZoneId.systemDefault()).toInstant()))
                .build();

        User user2 = User.builder()
                .username("shop")
                .password("shop")
                .firstname("shop")
                .lastname("shop")
                .email("shop@shop.com")
                .enabled(true)
                .lastPasswordResetDate(Date.from(LocalDate.of(2016,01,01).atStartOfDay(ZoneId.systemDefault()).toInstant()))
                .build();

        User user3 = User.builder()
                .username("admin")
                .password("admin")
                .firstname("admin")
                .lastname("admin")
                .email("admin@admin.com")
                .enabled(true)
                .lastPasswordResetDate(Date.from(LocalDate.of(2016,01,01).atStartOfDay(ZoneId.systemDefault()).toInstant()))
                .build();

        //Authority auth1 = Authority.builder().name(AuthorityName.ROLE_CUSTOMER).build();
        //Authority auth2 = Authority.builder().name(AuthorityName.ROLE_SHOPKEEPER).build();
        Authority auth3 = Authority.builder().name(AuthorityName.ROLE_ADMIN).build();
        Authority auth4 = Authority.builder().name(AuthorityName.ROLE_USER).build();

        authorityRepository.save(auth4);
        //authorityRepository.save(auth2);
        authorityRepository.save(auth3);

        user1.setAuthorities(new ArrayList<>());
        user1.getAuthorities().add(auth4);
        user1.getAuthorities().add(auth3);
        //user2.setAuthorities(new ArrayList<>());
        //user2.getAuthorities().add(auth2);
        //user3.setAuthorities(new ArrayList<>());
        //user3.getAuthorities().add(auth3);

        //userRepository.save(user1);
        //userRepository.save(user2);
        //userRepository.save(user3);


    }

}
