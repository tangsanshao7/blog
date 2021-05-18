---
title: iText：PDF导出
date: 2019-10-07 20:53:26
sidebar: true
tags:
  - Java
  - pdf
categories:
  - "后端"
isShowComments: false
---

<Boxx/>

[[toc]]

## 简介

> 官网：https://itextpdf.com

- iText 是著名的开放源码的站点 sourceforge 一个项目，是用于生成 PDF 文档的一个 java 类库。通过 iText 不仅可以生成 PDF 或 rtf 的文档，而且可以将 XML、Html 文件转化为 PDF 文件。

## 使用场景

- 简单的：Java 生成 PDF 报表、文档或其它（PDF 中可以添加文字、图片、水印等）
- 复杂的：结合 echarts、phantomjs 动态生成 echar 图片插入 PDF 中

### 生成图示

![](/tangsanshao7/img/backend/itext/pdf2.png)

![](/tangsanshao7/img/backend/itext/pdf3.png)

- 图示这个比较复杂，具体代码可见 git 或联系我

## 简要步骤

- 用 iText 生成 PDF 文档需要 5 个步骤：

  ① 建立 com.itextpdf.text.Document 对象的实例。

  ​ `Document document= new Document();`

  ② 建立一个书写器(Writer)与 document 对象关联，通过书写器(Writer)可以将文档写入到磁盘中。

  ​ `PDFWriter.getInstance(document,new FileOutputStream("D:\\\ITextTest.pdf"));`

  ③ 打开文档。

  ​ `document.open();`

  ④ 向文档中添加内容。

  ​ `document.add(newParagraph("IText Test"));`

  ⑤ 关闭文档。

  ​ `document.close();`

  通过上面的 5 个步骤，就能产生一个 ITextTest.PDF 的文件，文件内容为"ITextTest"。

## SpringBoot 中使用 iText

### 添加依赖

```xml
<!-- itext方式导出pdf -->
<dependency>
    <groupId>com.itextpdf</groupId>
    <artifactId>itextpdf</artifactId>
    <version>5.5.10</version>
</dependency>
<dependency>
    <groupId>com.itextpdf</groupId>
    <artifactId>itext-asian</artifactId>
    <version>5.2.0</version>
</dependency>
```

### 一个简单 PDF 生成

```java
package com.wh;

importjava.io.FileOutputStream;
importcom.itextpdf.text.BaseColor;
importcom.itextpdf.text.Document;
importcom.itextpdf.text.Element;
importcom.itextpdf.text.Font;
importcom.itextpdf.text.Paragraph;
importcom.itextpdf.text.Rectangle;
importcom.itextpdf.text.pdf.BaseFont;
importcom.itextpdf.text.pdf.PdfPTable;
importcom.itextpdf.text.pdf.PdfWriter;

public class ToPDF{
       // 表头
       public static final String[] tableHeader= { "姓名", "性别", "年龄",
                     "学院", "专业", "年级"};

       // 数据表字段数
       private static final int colNumber = 6;

       // 表格的设置
       private static final int spacing = 2;

       // 表格的设置
       private static final int padding = 2;

       // 导出Pdf文挡
       public static void exportPdfDocument() {
              // 创建文Pdf文挡50, 50, 50,50左右上下距离
              Document document = newDocument(new Rectangle(1500, 2000), 50, 50, 50,
                            50);
              try {
                     //使用PDFWriter进行写文件操作
                     PdfWriter.getInstance(document,new FileOutputStream(
                                   "d:\\学生信息.pdf"));
                     document.open();
                     // 中文字体
                     BaseFont bfChinese =BaseFont.createFont("STSong-Light",
                                   "UniGB-UCS2-H",BaseFont.NOT_EMBEDDED);
                     Font fontChinese = newFont(bfChinese, 12, Font.NORMAL);
                     // 创建有colNumber(6)列的表格
                     PdfPTable datatable = newPdfPTable(colNumber);
                     //定义表格的宽度
                     int[] cellsWidth = { 8, 2,2, 8, 5, 3 };
                     datatable.setWidths(cellsWidth);
                     // 表格的宽度百分比
                     datatable.setWidthPercentage(100);
                     datatable.getDefaultCell().setPadding(padding);
                     datatable.getDefaultCell().setBorderWidth(spacing);
                     //设置表格的底色
                     datatable.getDefaultCell().setBackgroundColor(BaseColor.GREEN);
                     datatable.getDefaultCell().setHorizontalAlignment(
                                   Element.ALIGN_CENTER);
                     // 添加表头元素
                     for (int i = 0; i <colNumber; i++) {
                            datatable.addCell(newParagraph(tableHeader[i], fontChinese));
                     }
                     // 添加子元素
                     for (int i = 0; i <colNumber; i++) {
                            datatable.addCell(newParagraph(tableHeader[i], fontChinese));
                     }
                     document.add(datatable);
              } catch (Exception e) {
                     e.printStackTrace();
              }
              document.close();
       }

       public static void main(String[] args)throws Exception {
              exportPdfDocument();
       }

}
```

## 其它

[Java 操作 PDF 之 iText 超入门](https://www.cnblogs.com/liaojie970/p/7132475.html)

[iText API](https://www.cnblogs.com/ssslinppp/p/4976922.html)
