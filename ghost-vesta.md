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
yum -y install gcc-c++ make
curl -sL https://rpm.nodesource.com/setup_6.x | sudo -E bash -
yum install -y nodejs
yum update
npm install -g forever
```
### Tạo một website mới
![](http://i.imgur.com/CRrH0Oo.png)
1. Điền domain/subdomain bạn dự định dùng để host Ghost blog vào domain
2. DNS/Mail support có thể check hoặc không cũng chẳng sao
3. Vào Advanced Options, đảm bảo mục **Proxy support** được checked, thêm một account FTP để tiện cho việc config Ghost blog sau này.
Sau khi thêm website thành công, kết quả sẽ là như thế này
![](http://i.imgur.com/sABg0pD.png)
### Cài đặt Ghost blog
Có hai lựa chọn: FTP hoặc SSH.
#### FTP
Đơn giản là tải bộ cài Ghost về tại [đây](https://ghost.org/zip/ghost-latest.zip), sau đó giải nén ra.
Mở FileZilla lên, đăng nhập bằng account FTP bạn đã thêm khi tạo website (host: *<ip-server-của-bạn>*, port để trống), vào thư mục `public_html` và upload hết toàn bộ nội dung đã giải nén lên.
