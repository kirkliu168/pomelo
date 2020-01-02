package com.kirk.pomelo.common.utils;

import java.io.Closeable;
import java.io.IOException;

/**
 * @Description IO相关工具类
 * @Author Administrator
 * @Date 14:42 2020/1/2
 **/

public class IOUtils {

    /**
     * 关闭对象，连接
     *
     * @param closeable
     */
    public static void closeQuietly(final Closeable closeable) {
        try {
            if (closeable != null) {
                closeable.close();
            }
        } catch (final IOException ioe) {
            // ignore
        }
    }
}
