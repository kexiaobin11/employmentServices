package com.kxb.employmentServices.service;

import com.kxb.employmentServices.entity.MyFile;
import jakarta.servlet.http.HttpServletResponse;

import java.io.OutputStream;

public interface MyFileService {
    void download(String filename, MyFile file, HttpServletResponse response);
    void download(MyFile file, OutputStream outputStream);
}
