# Hướng dẫn cài đặt GhostBlog lên Vesta Control Panel
## Chuẩn bị
1. Vesta Control Panel với cấu hình Webserver: **Nginx as reverse proxy**
2. Root account hoặc bất cứ user nào được cấp quyền Sudo để có thể ssh vào server
3. FTP client, ví dụ [FileZilla](https://filezilla-project.org/download.php)
4. Nếu bạn sử dụng Windows, SSH bằng [Putty](http://www.putty.org/), nếu dùng Mac hoặc Ubuntu thì khỏi cần. Bạn có thể tự google search cách dùng putty, vì mình cũng chẳng biết dùng nó, mình SSH từ Mac mà :(
## Cài đặt các package cần thiết
### NodeJS & forever
Chạy lệnh `node -v` để kiểm tra NodeJS đã được cài đặt lên server chưa. Nếu chưa, chạy lần lượt các lệnh dưới đây để cài đặt `nodejs` và `forever`
```bash
$ yum -y install gcc-c++ make
$ curl -sL https://rpm.nodesource.com/setup_6.x | sudo -E bash -
$ yum install -y nodejs
$ yum update
$ npm install -g forever
```
### Tạo một website mới
![](http://i.imgur.com/CRrH0Oo.png)
1. Điền domain/subdomain bạn dự định dùng để host Ghost blog vào domain
2. DNS/Mail support có thể check hoặc không cũng chẳng sao
3. Vào Advanced Options, đảm bảo mục **Proxy support** được checked, thêm một account FTP để tiện cho việc config Ghost blog sau này.
Sau khi thêm website thành công, kết quả sẽ là như thế này
![](http://i.imgur.com/sABg0pD.png)
### Cài đặt Ghost blog
#### SSH
Giả sử account bạn dùng đăng nhập **Vesta CP** là admin
```bash
$ su admin
$ cd ~/web/<domain-blog-của-bạn>/public_html/
$ curl -L https://ghost.org/zip/ghost-latest.zip -o ghost.zip
$ unzip -uo ghost.zip
$ npm install
$ NODE_ENV=production forever start index.js
```
Kiểm tra việc cài đặt ghost bằng cách `cd node_modules; ls`. Nếu thấy xuất hiện một loạt các package khác nhau nghĩa là mọi thứ đã ổn.
#### config.js
Cũng không cần sửa gì. Mặc định blog sẽ được serve trên localhost với URL `http://localhost:2368`. Việc còn lại của chúng ta là cấu hình lại NginX để reverse proxy đến URL này.
#### NginX as reverse proxy
Đăng nhập FTP với tài khoản root (host: ip-của-bạn, user: root, pass: pass-của-root, port: **22**). Di chuyển đến thư mục `/home/admin/conf/web` và edit file `nginx.conf` bằng cách click chuột phải vào file, chọn **View/Edit**

Thay đổi nội dung file `nginx.conf` thành như sau, lưu ý việc thay **server IP** và **domain** thành serverIP/domain tương ứng của bạn.
```nginx
server {
    listen      139.59.124.221:80;
    server_name ghostdemo.hungphongbk.com www.ghostdemo.hungphongbk.com;
    error_log  /var/log/httpd/domains/ghostdemo.hungphongbk.com.error.log error;

    location / {
        proxy_http_version  1.1;
        proxy_set_header    X-Real-IP $remote_addr;
        proxy_set_header    Host $host;
        proxy_pass          http://127.0.0.1:2368;
        proxy_redirect off;

        location ~* ^.+\.(jpeg|jpg|png|gif|bmp|ico|svg|tif|tiff|css|js|htm|html|ttf|otf|webp|woff|txt|csv|rtf|doc|docx|xls|xlsx|ppt|pptx|odf|odp|ods|odt|pdf|psd|ai|eot|eps|ps|zip|tar|tgz|gz|rar|bz2|7z|aac|m4a|mp3|mp4|ogg|wav|wma|3gp|avi|flv|m4v|mkv|mov|mpeg|mpg|wmv|exe|iso|dmg|swf)$ {
            root           /home/admin/web/ghostdemo.hungphongbk.com/public_html;
            access_log     /var/log/httpd/domains/ghostdemo.hungphongbk.com.log combined;
            access_log     /var/log/httpd/domains/ghostdemo.hungphongbk.com.bytes bytes;
            expires        max;
            try_files      $uri @fallback;
            
        }
    }

    location /error/ {
        alias   /home/admin/web/ghostdemo.hungphongbk.com/document_errors/;
    }

    location @fallback {
        proxy_pass      http://127.0.0.1:2368;
    }

    location ~ /\.ht    {return 404;}
    location ~ /\.svn/  {return 404;}
    location ~ /\.git/  {return 404;}
    location ~ /\.hg/   {return 404;}
    location ~ /\.bzr/  {return 404;}

    disable_symlinks if_not_owner from=/home/admin/web/ghostdemo.hungphongbk.com/public_html;

    include /home/admin/conf/web/nginx.ghostdemo.hungphongbk.com.conf*;
}
```

Trở lại Vesta Control Panel. Truy cập vào **Server** (ở trên cùng) > nginx > restart. Thế là xong rồi nhé!
