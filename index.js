//README DOSYASINDAKİ ADIMLARI TAKİP ETTİKTEN SONRA AŞAĞIDAKİLERİ YAPINIZ

// Başlangıç Challenge'ı

/**Örnek Görev: İlkini Dön
 * 
 * Bu örnek sonradan gelecek olan görevleri nasıl çözeceğinizi size gösterecek.
 * 
 * Aşağdıaki Yüksek dereceden fonskiyonu(higher-order function) kullanarak aşağıdakileri yapınız
 *  1. Stringlerden oluşan bir array'i parametre olarak alın
 *  2. Bir string'i değişken olarak alan bir callback fonksiyonunu parametre olarak alın 
 *  3. Array'in İLK elemanını değişken olarak alarak çalışacak olan callback fonksiyonunun sonucunu dönün
 * 
 * Aşağıdaki kodlar bu görevin nasıl yapılacağına örnek olacaktır
 * Bu fonskiyon 'asas' dönmeli(return)
*/

function ilkiniDon(stringArray, callback) {
  return callback(stringArray[0])
}
console.log('örnek görev:', ilkiniDon(['as','sa'],function(metin){return metin+metin}));

// Başlangıç Challenge'ı Sonu


///// M V P ///////

/*Görev 1: macSkoru()
  
  Aşağıdaki skor1 ve skor2 kodlarını inceleyiniz ve aşağıdaki soruları altına not alarak cevaplayın
  
  1. skor1 ve skor2 arasındaki fark nedir?
  skor1'de fonksiyon içinde fonksiyon tanımlanmış. Skor2'nin orda tanımlanan skor++ değişkeni dışardan da arttırabilir. Ama skor1'deki skor ++'yı sadece skorArtırıcı fonksiyonu içinde değiştirebiliriz. Skor2'de skora dışarıdan erişilebilirken. Skor1'deki skora dışarıdan erişilemez sadece fonksiyonun içiyle erişilebilir.

  2. Hangisi bir closure kullanmaktadır? Nasıl tarif edebilirsin? (yarınki derste öğreneceksin :) )
  Skor1'de var return'ünde başka bir fonksiyon olması sebebi ile çünkü içindeki ve üstündeki değişkeneer çalışmaya ve yaşamaya devam ediyor.
  
  3. Hangi durumda skor1 tercih edilebilir? Hangi durumda skor2 daha mantıklıdır?
  Closure kullanımı; veri gizliliği için önemli. Skor1 veri gizliliği için kullanılabilir. Normal zamanlarda bunu dışında skor 2 kullanılabilir.
*/

// skor1 kodları
function skorArtirici() {
  let skor = 0;
  return function skorGuncelle() {
   return skor++;
  }
}

const skor1 = skorArtirici();

// skor2 kodları
let skor = 0;

function skor2() {
  return skor++;
}


/* Görev 2: takimSkoru() 
Aşağıdaki takimSkoru() fonksiyonununda aşağıdakileri yapınız:
  1. Bir çeyrekte bir takımın ürettiği skoru rastgele(random) elde eden bir sonuc dönünüz(return)
  
  Ön Bilgi: Bir çeyrekte takımlar ortalama 10 ile 25 sayı üretebiliyor
  Örnek: takimSkoru çağrıldığında 10-25 arasında bir skor dönmeli
  
Not: Bu fonskiyon, aşağıdaki diğer görevler için de bir callback fonksiyonu olarak da kullanılacak
*/

function takimSkoru(){
 const skor = Math.floor(Math.random()*16) + 10; //  +10 olan kısma kadar kod şunu demek istiyor 0 ile 15 arasında bir sayı ata (0 ve 15 dahil demek) +10 diyerek 10 ile 25 arasıdna sayı üretebileceğini söyledik ve 10'da 25'de dahil edildi şu an bu şekilde *15 (arasındaki farktan geliyor, öyle olsaydı 0 dahil 10 dahil değil olacaktı)
 return skor;
}

// console.log("Takım Skoru:" , + takimSkoru());

/* Görev 3: macSonucu() 
Aşağıdaki macSonucu() fonksiyonununda aşağıdakileri yapınız:
  1. Görev 2'de oluşturduğunuz 'takimSkoru'nu callback fonskiyonunu olarak ilk parametrede alın
  2. Bir basketbol maçında oynanan çeyrek sayısını ikinci parametre olarak alın
  3. Her çeyrekte EvSahibi ve KonukTakim için bir skor oluşturun
  4. Her oynanan çeyrekten sonra EvSahibi ve KonukTakim için skoru güncelleyin
  5. Son çeyrekten sonra, maçın bitiş skorunu bir object olarak dönün(return)

  Örneğin: macSonucu(takimSkoru, 4) çalıştırınca aşağıdaki object'i dönmeli
{
  "EvSahibi": 92,
  "KonukTakim": 80
}
*/ 

function macSonucu(takimSkoru, periyotsayısı){
  let EvSahibi = 0;
  let konuktakım = 0;
  for(let i=1 ; i<=periyotsayısı; i++){ //periyotlR 1 2 3 4 old için i'leri ona göre yaptık
    EvSahibi += takimSkoru(); //fonk bir şey atamadım sadece çalıştırdım parantezi aç kapa yaparak += takımskoruna al evsahinie ekle ve ona ata demek 
    konuktakım += takimSkoru();
  }
  return {   // { } yaptık çünkü obje olarak dönmemizi istiyor returnde süslü parantez kullandık bu yüzden 
  "EvSahibi" : EvSahibi,
  "KonukTakim": konuktakım
  }
}
 // console.log(macSonucu(takimSkoru,4));


/* Zorlayıcı Görev 4: periyotSkoru()
Aşağıdaki periyotSkoru() fonksiyonununda aşağıdakileri yapınız:
  1. Görev 2'de oluşturduğunuz 'takimSkoru'nu callback fonskiyonunu olarak ilk parametrede alın
  2. takimSkoru callback fonksiyonunu kullanarak, EvSahibi ve KonukTakim için bir skor üretin
  3. Bir object olarak EvSahibi ve KonukTakim skorunu dönün
  
Örneğin: periyotSkoru(takimSkoru) çalıştırınca aşağıdaki object'i dönmeli
{
  "EvSahibi": 18,
  "KonukTakim": 12
}
  */


function periyotSkoru(takimSkoru,) {
 let skor ={   
    "EvSahibi" : takimSkoru(),
    "KonukTakim": takimSkoru()  
  } // önceki soruda retunle tanımlamamla aynı şey böyle de tanımlanabiliyor
return skor;
}
console.log(periyotSkoru(takimSkoru));

/* Zorlayıcı Görev 5: skorTabelasi() 
Aşağıdaki skorTabelasi() fonksiyonunu kullanarak aşağıdakileri yapınız:
  1. İlk parametre olarak Görev 4'te oluşturduğumuz 'periyotSkoru'nu bir değişken olarak almalı
  2. İkinci parametre olarak Gröev 2'de oluşturduğumuz 'takimSkoru'nu bir değişken olarak almalı
  3. Üçüncü parametre olarak da oynanacak olan çeyrek sayısını alın
  4. Her bir çeyreğin sonucunu bir string olarak bir array içinde dönün. Aşadaki örnek gibi olmalı. Her çeyrekteki atılan sayıları ayrı ayrı yazmalı(toplam skoru değil!).
  5. Eğer maç berabere biterse uzatmalar oynanmalı ve "Uzatma 1: Ev Sahibi 13 - Konuk Takım 11" eklemeli. (Her uzatma için ayrı ayrı eklemeli)
  6. Maç bitince de final skoru yazmalı: "Maç Sonucu: Ev Sahibi 101 - Konuk Takım 98"

MAÇ UZAMAZ ise skorTabelasi(periyotSkoru,takimSkoru,4)
  
[
  "1. Periyot: Ev Sahibi 10 - Konuk Takım 21", 
  "2. Periyot: Ev Sahibi 20 - Konuk Takım 13",
  "3. Periyot: Ev Sahibi 13 - Konuk Takım 9", 
  "4. Periyot: Ev Sahibi 18 - Konuk Takım 11", 
  "Maç Sonucu: Ev Sahibi 61 - Konuk Takım 54"  
]

MAÇ UZAR ise skorTabelasi(periyotSkoru,takimSkoru,4)
[
  "1. Periyot: Ev Sahibi 10 - Konuk Takım 21", 
  "2. Periyot: Ev Sahibi 20 - Konuk Takım 13",
  "3. Periyot: Ev Sahibi 13 - Konuk Takım 9", 
  "4. Periyot: Ev Sahibi 18 - Konuk Takım 18",
  "1. Uzatma: Ev Sahibi 10 - Konuk Takım 6" 
  "Maç Sonucu: Ev Sahibi 71 - Konuk Takım 67"  
]
] */
// NOTE: Bununla ilgili bir test yoktur. Eğer logladığınız sonuçlar yukarıdakine benziyor ise tmamlandı sayabilirsiniz.

function skorTabelasi(pskor, tskor, periyot) {
let skorarray =[];
let macskoru = {
  konuktakım : 0,
  EvSahibi : 0,
}
for( let i=1; i<=periyot; i++){
 let periyotSkoru = pskor(tskor) // bu bana ev sahibi ve konuktakımı döndürmemizi sağlıyor hangi takım hangi periyotta ne kadar attıyyı dödnürüyor bize
 let metin = `${i}.periyot: Ev Sahibi ${periyotSkoru.Evsahibi} - konuk takım: ${periyotSkoru.KonukTakim}`
skorarray.push(metin); //metni hazırlaskor arrayine ekle
macSkoru.EvSahibi += periyotSkoru.EvSahibi  // periyot skorunu maç skoruna ekle
macSkoru.konuktakımı += periyotSkoru.KonukTakim;
}
//skorlar eşitse uzatmaları oynat
    //metni hazırlaskor arrayine ekle
    // uzatma skorunu maç skoruna ekle
    let u = 1;
    while(macSkoru.KonukTakimi === macSkoru.Evsahibi){
      let uzatmaskoru = pskor(tskor)
      let metin = `${u}.periyot: Ev Sahibi ${uzatmaskoru.Evsahibi}
      - konuk takım ${uzatmaskoru.KonukTakim}`
      skorarray.push(metin),
      macSkoru.EvSahibi += uzatmaskoru.EvSahibi;
      macSkoru.KonukTakimi += uzatmaskoru.KonukTakim;
      u++ ;
    }

let metin =  `Maç Sonucu: Ev Sahibi ${macskoru.EvSahibi} - Konuk Takım ${macskoru.KonukTakimi}`;   // for döngüsünü bitir maç skoru için metni hazırla skor arrayine ekle
skorarray.push(metin);

return skorarray //benden döndürmemi istediği şey bu 
}
 // console.log(skorTabelasi(periyotSkoru, takimSkoru,4)); 


/* Aşağıdaki satırları lütfen değiştirmeyiniz*/
function sa(){
  console.log('Kodlar çalışıyor');
  return 'as';
}
sa();
module.exports = {
  sa,
  ilkiniDon,
  skor1,
  skor2,
  takimSkoru,
  macSonucu,
  periyotSkoru,
  skorTabelasi,
}
