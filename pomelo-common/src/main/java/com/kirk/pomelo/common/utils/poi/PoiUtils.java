package com.kirk.pomelo.common.utils.poi;

import com.kirk.pomelo.common.utils.IOUtils;
import org.apache.poi.ss.usermodel.Workbook;

import java.io.*;

/**
 * @Description POI相关操作
 * @Author Administrator
 * @Date 14:41 2020/1/2
 **/

public class PoiUtils {

    /**
     * 生成Excel文件
     *
     * @param workbook
     * @param fileName
     * @return
     */
    public static File createExcelFile(Workbook workbook, String fileName) {
        OutputStream stream = null;
        File file = null;
        try {
            file = File.createTempFile(fileName, ".xlsx");
            stream = new FileOutputStream(file.getAbsoluteFile());
            workbook.write(stream);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            IOUtils.closeQuietly(workbook);
            IOUtils.closeQuietly(stream);
        }
        return file;
    }
}
