package com.kxb.employmentServices.service;

import com.kxb.employmentServices.entity.MyFile;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.io.*;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class MyFileServiceImpl implements MyFileService {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Override
    public void download(String filename, MyFile myFile, HttpServletResponse response) {
        Path path = Paths.get(myFile.getPath())
                .resolve(myFile.getName());
        File file = path.toFile();
        logger.debug("输出文件类型");
        FileInputStream inputStream;
        try {
            inputStream = new FileInputStream(file);
        } catch (FileNotFoundException e) {
            logger.error("读取文件出错" + myFile.getId() + file.getAbsolutePath());
            e.printStackTrace();
            throw new RuntimeException("读取文件发生错误");
        }

        response.setHeader("Content-Type", myFile.getMime());

        logger.debug("输出文件长度");
        response.setContentLength((int) file.length());

        logger.debug("写入数据流");
        try {
            IOUtils.copy(inputStream, response.getOutputStream());
            response.flushBuffer();
        } catch (IOException e) {
            logger.error("下发数据时发生了错误");
            e.printStackTrace();
            throw new RuntimeException("下发数据时发生了错误");
        }
    }

    @Override
    public void download(MyFile f, OutputStream outputStream) {
        Path path = Paths.get(f.getPath())
                .resolve(f.getName());
        File file = path.toFile();
        logger.debug("输出文件类型");
        FileInputStream inputStream;
        try {
            inputStream = new FileInputStream(file);
        } catch (FileNotFoundException e) {
            logger.error("读取文件出错" + f.getId() + file.getAbsolutePath());
            e.printStackTrace();
            throw new RuntimeException("读取文件发生错误");
        }

        try {
            IOUtils.copy(inputStream, outputStream);
        } catch (IOException e) {
            logger.error("下发数据时发生了错误");
            e.printStackTrace();
            throw new RuntimeException("下发数据时发生了错误");
        }
    }
}
