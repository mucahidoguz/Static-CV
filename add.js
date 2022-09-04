



//pdf indirme
const pdfBtn = document.getElementById("pdfBtn");
//dil değişimi
const languageSelect = document.getElementById("language")

pdfBtn.addEventListener("click", function () {

    const myCv = document.getElementById("myCv");
    var opt = {
        margin: 0,
        filename: "Mücahid OĞUZ-CV.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(opt).from(myCv).save();
});

// opt bölümünde indirilen dosya adının otomatik gelmesini istiyorsak yapılacak işlemler şu şekildedir
//html sayfasındaki CV ismi (bkz: h1 etiketi Mücahid Oğuz) bir ID verip sonrasında şu işlemler yapılır.
// Örneğin h1 e verdiğimiz ID miz nameSurname olsun.
// 6. satır= const nameSurname= document.getElementById("nameSurname") eklenir.
// opt filename kısmına da
// filename: nameSurname.innerText + ".pdf" yazılır

//Değişecek dilleri tanımladığımız yani oluşturduğumuz sözlük

const languages = [

    {
        id: "prtBtn",
        tr: "Sayfayı Yazdır",
        en: "Print this page",
    },

    {
        id: "pdfBtn",
        tr: "PDF İndir",
        en: "Export to PDF",
    },

    {
        id: "job",
        tr: "Frontend Developer",
        en: "Frontend Developer",
    },

    {
        id: "personelInfo",
        tr: "33 Yaşında evli ve 2 çocuk babasıyım. 12 yıllık genel muhasebe geçmişim var. Mayıs 2022 den bu yana da IT alanında kendimi yetiştiriyorum. Bu alanda uluslararası bir kurumdan alınmış sertifikalı eğitimim var. Kurs sürecinde HTML5,CCS3,JavaScprit,React,Redux eğitimlerini tamamladım. Öğrenmeye ve gelişime açık bir kişiliğim vardır.Detaylı özgeçmişim LinkedIn profilimde mevcuttur. Ayrıca IT alanında yapmış olduğum çalışmalar da GitHub profilimde bulunmaktadır.",
        en: "I am 33 years old, married and have 2 children. I have 12 years of general accounting background.Since May 2022, I have been educating myself in the field of IT. An international institution in this field.I have a certified education. HTML5, CCS3, JavaScprit, React, Redux during the course.I have completed my education. I have a personality that is open to learning and development.My detailed resume is available on my LinkedIn profile. In addition, the work I have done in the field of IT.It's on my GitHub profile."
    },

    {
        id: "skillsJob",
        tr: "YETENEKLER",
        en: "ABILITIES",
    },

    {
        id: "foreignLanguages",
        tr: "YABANCI DİLLER",
        en: "FOREIGN LANGUAGES",
    },

    {
        id: "turkish",
        tr: "Türkçe",
        en: "Turkish",
    },

    {
        id: "english",
        tr: "İngilizce",
        en: "English",
    },

    {
        id: "motherTongue",
        tr: "Ana Dil",
        en: "Mother Tongue",
    },

    {
        id: "beginning",
        tr: "Başlangıç",
        en: "Beginning",
    },

    {
        id: "egitim",
        tr: "EĞİTİM",
        en: "EDUCATION",
    },

    {
        id: "university",
        tr: "Anadolu Üniversitesi",
        en: "Anadolu University",
    },

    {
        id: "publicAdministration",
        tr: "Kamu Yönetimi",
        en: "Puclic Administration",
    },

    {
        id: "theology",
        tr: "İlahiyat",
        en: "Theology",
    },

    {
        id: "experience",
        tr: "DENEYİM",
        en: "EXPERIENCE",
    },

    {
        id: "Arabulue",
        tr: "Arabuleu - Yazılım Şirketi",
        en: "Arabuleu - Software Company",
    },

    {
        id: "workDone1",
        tr: "Fronted developer staj eğitimi yapıyorum.",
        en: "I am doing fronted developer internship training.",
    },

    {
        id: "workDone2",
        tr: "HTML5, CSS3, JavaScprit, React projeleri üzerinde çalışmaktayım.",
        en: "I am working on HTML5, CSS3, JavaScprit, React projects.",
    },

    {
        id: "projects",
        tr: "PROJELER",
        en: "PROJECTS",
    },

    {
        id: "boostrapProjects",
        tr: "Boostrap Website Projesi",
        en: "Boostrap Website Project",
    },

    {
        id: "process1",
        tr: "Galeri sayfası yapılmıştır.",
        en: "Gallery page has been made.",
    },

    {
        id: "process2",
        tr: "İletişim sayfasında form doldurma bölümü yapılmıştır.",
        en: "A form filling section has been made on the contact page.",
    },

    {
        id: "process3",
        tr: "Boostrap kütüphanesinden yararlanmıştır.",
        en: "It has benefited from the Boostrap library.",
    },

    {
        id: "process4",
        tr: "Mix-blend-mode kullanılarak resim içine video yerleştirilmiştir.",
        en: "Video is embedded in the picture using mix-blend-mode.",
    },

    {
        id: "process5",
        tr: "Tokat ilimiz ile ilgili kısa bir tanıtım demosudur.",
        en: "It is a short promotional demo about our city of Tokat.",
    },

    {
        id: "process6",
        tr: "HTML5 ve CSS3 özellikleri kullanılarak oluşturulmuştur.",
        en: "Built using HTML5 and CSS3 features.",
    },

    {
        id: "process7",
        tr: "Font Awesome kütüphanesinden yararlanılmıştır.",
        en: "Font Awesome library is used.",
    },

    {
        id: "process8",
        tr: "JavaScprit ile arka plan rengi değiştirme uyguladı.",
        en: "Implemented background color replacement with JavaScprit.",
    },

    {
        id: "process9",
        tr: "Analog saat yapılarak çalışır hale getirildi.",
        en: "An analog clock was made and made operational.",
    },

    {
        id: "process10",
        tr: "Axios kütüphanesinden yararlanılmıştır.",
        en: "Axios library was used.",
    },

    {
        id: "details",
        tr: "Detaylı bilgi için lütfen tıklayınız.",
        en: "Please click here for more information.",
    },

];

//Sayfayı dilini değiştirme    
languageSelect.addEventListener("change", function (event) {
    translate(event.target.value);
});

function translate(selectedLanguage) {
    languages.map((item) => {
        const element = document.getElementById(item.id);
        switch (selectedLanguage) {
            case "tr":
                element.innerText = item.tr;
                break;
            case "en":
                element.innerText = item.en;
                break;
            default:
                console.log("default");
                break;
        }
    });
}

//Yazdır butonu
function print_current_page()
{
window.print();
}