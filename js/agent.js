let smartPhones = ['iphone','ipod','ipad','opera mini','opera mobi','nokia','android',
'webos','windows ce','blackberry','iemobile','sonyericssion'];
//스마트 폰 구분
for(let i in smartPhones) {
    if(navigator.userAgent.toLowerCase().match(new RegExp(smartPhones[i]))) {
        document.location = 'http://skkim.dothome.co.kr/mindex.html'
    }
}



// alert(navigator.userAgent); 스마트폰 페이지 적용 안되면 쓸 것.
// 첫 줄 브라우저 정보 (스마트폰 운영체제, 본인의 기기정보)