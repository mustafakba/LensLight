# LensLight

Bu README dosyası, Lenslight projesinin nasıl kurulacağını ve çalıştırılacağını açıklamaktadır.

## Proje Açıklaması

Lenslight projesi, kullanıcıların sisteme kayıt olabildiği, giriş yapabildiği ve diğer kullanıcıların profillerini ve paylaştığı fotoğrafları görüntüleyebildiği Node.js tabanlı bir uygulamadır. Bu proje, kullanıcı yönetimi ve medya paylaşımı gibi temel işlevleri içerir.

## Kurulum

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

1. Projeyi klonlayın:

````bash
git clone https://github.com/mustafakba/LensLight.git

2. Proje gerekliliklerini yükleyin :

```bash

npm install

## Projede kullanılan paketler ve açıklamaları

Kullanılan Paketler ve Açıklamaları
Bu projede aşağıdaki paketler kullanılmıştır ve her birinin neden gerekli olduğu aşağıda belirtilmiştir:

bcrypt: Kullanıcı şifrelerini güvenli bir şekilde hash'lemek için kullanılır.
cloudinary: Medya dosyalarını yüklemek ve yönetmek için bulut tabanlı bir hizmeti entegre eder.
cookie-parser: Tarayıcı çerezlerini işlemek ve yönetmek için kullanılır.
dotenv: Çevresel değişkenleri projede kullanmak için kullanılır.
ejs: Şablon motoru olarak kullanılır, dinamik HTML içeriği oluşturmak için tercih edilir.
express: Web uygulama çerçevesidir, yönlendirme ve sunucu yönetimi için kullanılır.
express-fileupload: Dosya yükleme işlemlerini kolaylaştırmak için kullanılır.
jsonwebtoken: JSON Web Token'ları oluşturmak ve doğrulamak için kullanılır.
method-override: HTTP taleplerini düzenlemek ve geçersiz kılmak için kullanılır.
mongodb: MongoDB veritabanına erişim sağlar.
mongoose: MongoDB işlemlerini yönetmek ve veritabanını modellemek için kullanılır.
validator: Veri doğrulama işlemleri için kullanılır.

3.Projeyi çalıştırın

npm start
````
