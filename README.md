# 派遣マネージメントシステム HSYS

## 環境前提：
 - Apache2
 - PHP7
 - Tomcat8
    - Java8
    - mod_jk

## 設定重点：
 - Apacheが`.php`ファイルを動かすため：
    - PHP CGI (省略)
 - Tomcat8のDocumentRootをApacheのと同じにしたいなら：

        mkdir /var/lib/tomcat8/<LinkName>
        ln -Fs <Apache DocumentRoot> /var/lib/tomcat8/<LinkName>/ROOT

 - 同じPort(80)でApacheとTomcat一緒にリクエストを受け、`.php`と`.jsp`両方とも動かせるようにするため；
        # mod_jk configuration
        # JkMount /jsp worker1
        # JkMount /jsp/* worker1

        ProxyRequests       Off
        ProxyPreserveHost   On

        <Proxy *>
                Order deny,allow
                Deny from all
                Allow from all
        </Proxy>

        ProxyPassMatch ^/(.*\.jsp)$ ajp://localhost:8009/$1

## 遭った問題：
### Tomcat8のスタートが非常に遅い
ディフォルトのJava乱数生成器は乱数のエントロピーを増やすため、時間が結構かかります。システムのディフォルトの生成器を使ってこの問題を解決できます。

`/usr/lib/jvm/java-8-openjdk-armhf/jre/lib/security/java.security`
このファイルの中に、`securerandom.source`という変数を`file:/dev/./urandom`にセットします。

### "can't load mysql driver java.lang.ClassNotFoundException: com.mysql.jdbc.Driver"
MySqlのConnectorのJarファイルがTomcatのclasspathに入ってないからです。

[こちら](https://dev.mysql.com/downloads/file/?id=484819)からMySQLのJava ConnectorのJarファイルをダウンロードし、`/var/lib/tomcat8/lib`に置きます。

### "SQL Error 1064"
MySQL WorkBenchでデータベースを操作するときこのエラーはよく出ます。

このエラーが出る原因はMySQLのサーバーがMariaDBであることです。MariaDBは今までMySQL 5.5のシンタックスまでサポートしていますので、MySQL 8のVISIBLE/INVISIBLEなどのキーワードを使わないようにすれば解決きます。