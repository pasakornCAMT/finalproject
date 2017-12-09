package camt.cbsd.finalproject.config;

import camt.cbsd.finalproject.dao.ProductDao;
import camt.cbsd.finalproject.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;

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
        Product product01=Product.builder().productId("P-001").name("Shingha").description("product1").price(250).image(imageBaseUrl+"product1.jpg").build();
        Product product02=Product.builder().productId("P-002").name("Nestle").description("product2").price(250).image(imageBaseUrl+"product2.jpg").build();
        Product product03=Product.builder().productId("P-003").name("Cristal").description("product2").price(250).image(imageBaseUrl+"product3.jpg").build();

        productDao.addProduct(product01);
        productDao.addProduct(product02);
        productDao.addProduct(product03);
    }
}
