package camt.cbsd.finalproject.controller;

import camt.cbsd.finalproject.entity.Transaction;
import camt.cbsd.finalproject.service.TransactionService;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalTime;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200",allowedHeaders = "*")
public class TransactionController {
    TransactionService transactionService;

    @Autowired
    public void setTransactionService(TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    @CrossOrigin
    @GetMapping("/transaction")
    public ResponseEntity getTransactions(){
        List<Transaction> transactions = transactionService.getTransactions();
        return ResponseEntity.ok(transactions);
    }

    @GetMapping("transactions")
    public ResponseEntity<?> queryProduct(@RequestParam("search") String query) {
        List<Transaction> transactions = transactionService.queryTransaction(query);
        if (transactions != null)
            return ResponseEntity.ok(transactions);
        else
            //http code 204
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @GetMapping("transaction/{id}")
    public ResponseEntity getTransaction(@PathVariable("id")long id){
        Transaction transaction = transactionService.findById(id);
        if(transaction!=null){
            return ResponseEntity.ok(transaction);
        }else {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
    }
    @GetMapping("transactions-payment")
    public ResponseEntity<?> findByPayment(@RequestParam("search")String payment){
        List<Transaction> transactions = transactionService.findByPayment(payment);
        if(transactions != null)
            return ResponseEntity.ok(transactions);
        else
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @PostMapping("/transaction")
    public ResponseEntity<?> uploadOnlyProduct(@RequestBody Transaction transaction){
        transactionService.addTransaction(transaction);
        return ResponseEntity.ok(transaction);
    }
}
