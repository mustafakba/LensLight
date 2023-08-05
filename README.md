# LensLight

Bu README dosyası, Lenslight projesinin nasıl kurulacağını ve çalıştırılacağını açıklamaktadır.

## Proje Açıklaması

Lenslight projesi, kullanıcıların sisteme kayıt olabildiği, giriş yapabildiği ve diğer kullanıcıların profillerini ve paylaştığı fotoğrafları görüntüleyebildiği Node.js tabanlı bir uygulamadır. Bu proje, kullanıcı yönetimi ve medya paylaşımı gibi temel işlevleri içerir.

Kullanılan Paketler ve Açıklamaları
Bu projede aşağıdaki paketler kullanılmıştır ve her birinin neden gerekli olduğu aşağıda belirtilmiştir:

bcrypt: Kullanıcı şifrelerini güvenli bir şekilde hash'lemek için kullanılır. </br>
cloudinary: Medya dosyalarını yüklemek ve yönetmek için bulut tabanlı bir hizmeti entegre eder. </br>
cookie-parser: Tarayıcı çerezlerini işlemek ve yönetmek için kullanılır.</br>
dotenv: Çevresel değişkenleri projede kullanmak için kullanılır.</br>
ejs: Şablon motoru olarak kullanılır, dinamik HTML içeriği oluşturmak için tercih edilir.</br>
express: Web uygulama çerçevesidir, yönlendirme ve sunucu yönetimi için kullanılır.</br>
express-fileupload: Dosya yükleme işlemlerini kolaylaştırmak için kullanılır.</br>
jsonwebtoken: JSON Web Token'ları oluşturmak ve doğrulamak için kullanılır.</br>
method-override: HTTP taleplerini düzenlemek ve geçersiz kılmak için kullanılır.</br>
mongodb: MongoDB veritabanına erişim sağlar.</br>
mongoose: MongoDB işlemlerini yönetmek ve veritabanını modellemek için kullanılır.</br>
validator: Veri doğrulama işlemleri için kullanılır.

![Screenshot 2023-08-05 at 23 27 13](https://github.com/mustafakba/LensLight/assets/95040879/d83af8c3-0aa3-489e-b985-1f6a82b8efc0)

![dashboard-page](https://github.com/mustafakba/LensLight/assets/95040879/7bb87bcb-13ce-4b48-9c78-3b1125440af6)

![my-gallery](https://github.com/mustafakba/LensLight/assets/95040879/80244671-b9f6-463b-b316-7a3940b5b1bd)

![users-page](https://github.com/mustafakba/LensLight/assets/95040879/c9903353-6c39-45b9-ab91-549439d45541)


## Kurulum

Projeyi klonlayın

```bash
  git clone https://github.com/mustafakba/LensLight.git
```



Gerekli paketleri yükleyin

```bash
  npm install
```

Sunucuyu çalıştırın

```bash
  npm start
```

Giriş Yapın 

```bash
  username : admin1
  password : 12345
```


  
