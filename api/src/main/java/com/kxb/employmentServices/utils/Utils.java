package com.kxb.employmentServices.utils;

import org.springframework.core.io.InputStreamSource;
import org.springframework.util.Assert;

import java.io.InputStream;
import java.math.BigInteger;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.MessageDigest;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Utils {
    // 十六进制字符数组
    static char[] HEXES = {
            '0', '1', '2', '3',
            '4', '5', '6', '7',
            '8', '9', 'a', 'b',
            'c', 'd', 'e', 'f'
    };

    public static String removeExtension(String filename) {
        // 检查空值
        if (filename == null) {
            return null;
        }

        // 查找最后一个分隔符（Unix或Windows）
        int separatorIndex = Math.max(filename.lastIndexOf('/'), filename.lastIndexOf('\\'));

        // 查找最后一个点（扩展名分隔符）
        int extensionIndex = filename.lastIndexOf('.');

        // 如果没有找到扩展名分隔符，或者它在最后一个路径分隔符之前（这意味着它是一个目录中的点，而不是扩展名分隔符），则返回原始文件名
        if (extensionIndex == -1 || extensionIndex < separatorIndex) {
            return filename;
        }

        // 返回最后一个点之前的部分
        return filename.substring(0, extensionIndex);
    }

    public static String timestampToString(long timestamp, String format) {
        SimpleDateFormat sf = new SimpleDateFormat(format);
        Date date = new Date(timestamp);
        return sf.format(date);
    }

    public static String timestampToString(long timestamp) {
        return timestampToString(timestamp, "yyyy-MM-dd HH:mm");
    }

    /**
     * 获取文件名
     * @param filePath 带有路径的名称
     * @return a/b.c => b.c
     */
    public static String getFileName(String filePath) {
        // 使用Paths.get方法创建Path对象
        Path path = Paths.get(filePath);
        // 调用getFileName()方法来获取文件名部分
        return path.getFileName().toString();
    }

    public static String getYearMonthDay() {
        String pattern = "yyyyMMdd";
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
        return simpleDateFormat.format(new Date());
    }

    /**
     * 根据指定的算法加密文件数据, 返回固定长度的十六进制小写哈希值
     *
     * @param multipartFile 需要加密的文件
     * @param algorithm     加密算法, 例如: MD5, SHA-1, SHA-256, SHA-512 等
     * @return 字符串
     */
    public static String encrypt(InputStreamSource multipartFile, String algorithm) {
        InputStream in = null;

        try {
            // 1. 根据算法名称获实现了算法的加密实例
            MessageDigest digest = MessageDigest.getInstance(algorithm);

            in = multipartFile.getInputStream();
            byte[] buf = new byte[1024];
            int len;
            while ((len = in.read(buf)) != -1) {
                // 2. 文件数据通常比较大, 使用 update() 方法逐步添加
                digest.update(buf, 0, len);
            }

            // 3. 计算数据的哈希值, 添加完数据后 digest() 方法只能被调用一次
            byte[] cipher = digest.digest();

            // 4. 将结果转换为十六进制小写
            return bytesToString(cipher);

        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            if (in != null) {
                try {
                    in.close();
                } catch (Exception e) {
                    // nothing
                }
            }
        }
    }

    /**
     * https://www.cnblogs.com/zjk1/p/8623965.html
     * 校验手机号是否合法
     *
     * @param phoneNumber 手机号码
     */
    public static boolean isMobile(String phoneNumber) {
        boolean result = false;
        if (phoneNumber != null && !phoneNumber.isEmpty()) {
            Pattern pattern = null;
            Matcher matcher = null;
            String s2 = "^[1](([3|5|8][\\d])|([4][4,5,6,7,8,9])|([6][2,5,6,7])|([7][^9])|([9][1,8,9]))[\\d]{8}$";
            pattern = Pattern.compile(s2);
            matcher = pattern.matcher(phoneNumber);
            result = matcher.matches();
        }
        return result;
    }

    // 将字节转为字符串
    static String bytesToString(byte[] bytes) {
        if (bytes == null || bytes.length == 0) {
            return null;
        }

        StringBuilder stringBuilder = new StringBuilder();

        for (byte b : bytes) {
            stringBuilder.append(Utils.HEXES[(b >> 4) & 0x0F]);
            stringBuilder.append(Utils.HEXES[b & 0x0F]);
        }

        return stringBuilder.toString();
    }

    public static String md5(String str) throws Exception {
        try {
            // 生成一个MD5加密计算摘要
            MessageDigest md = MessageDigest.getInstance("MD5");
            // 计算md5函数
            md.update(str.getBytes());
            // digest()最后确定返回md5 hash值，返回值为8为字符串。因为md5 hash值是16位的hex值，实际上就是8位的字符
            // BigInteger函数则将8位的字符串转换成16位hex值，用字符串来表示；得到字符串形式的hash值
            return new BigInteger(1, md.digest()).toString(16);
        } catch (Exception e) {
            throw new Exception("MD5加密出现错误");
        }
    }

    public static String getDirtyIdentityCard(String identityCard) {
        if (null == identityCard || "".equals(identityCard.trim())) {
            return "";
        }
        // 1999年之前使用15位身份证
        identityCard = identityCard.trim();
        int length = identityCard.length();
        if (length == 18) {
            return identityCard.replaceAll("(\\d{2})\\d{4}(\\d{8})\\d{2}(\\d)\\w", "$1****$2**$3*");
        } else if (length == 15) {
            return identityCard.replaceAll("(\\d{2})\\d{4}(\\d{6})\\d{2}(\\w)", "$1****$2**$3");
        } else {
            // 如果身份证号码长度不是15位或18位，则不做加密处理
            return identityCard;
        }
    }

    /**
     * 生成随机数字字符串
     *
     * @param length 字符串长度
     * @return
     */
    public static String generateRandomNumberCode(int length) {
        Assert.isTrue(length > 0, "传入的长度必须为正值");
        Assert.isTrue(length <= 9, "最长支持9位随机数");
        int base = 1;
        for (int j = 0; j < length; j++) {
            base = base * 10;
        }
        int randomNum = new Random().nextInt(base);
        return String.format(String.format("%%%sd", length), randomNum).replace(" ", "0");
    }
}
