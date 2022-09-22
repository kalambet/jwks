import jwkToPem from 'jwk-to-pem';
import jwt from 'jsonwebtoken';
import fetch from 'node-fetch';
import util from 'util';

fetch('https://api.chainsafe.io/api/v1/certs')
.then(function(response){
    response.json().then(function (bady) {
        console.log(util.inspect(bady));
        let pem = jwkToPem(bady);
        let token = "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NjM4MzQyMzMsImlhdCI6MTY2MzgzMzMzMywiY25mIjp7ImprdSI6Ii9jZXJ0cyIsImtpZCI6IjlocThueVVRZ0xvb0RHaXpWcjlIQm04UjFUTDFLQkpIWU1FS1NFeHh4a0twIn0sInR5cGUiOiJhY2Nlc3MiLCJpZCI6MjE0LCJ1dWlkIjoiMDJiMDU5Y2MtYmZlNC00Y2MxLWE2ZTYtOWRmMzQyMzlkZGUwIiwicGVybSI6eyJiaWxsaW5nIjoiKiIsInNlYXJjaCI6IioiLCJzdG9yYWdlIjoiKiIsInVzZXIiOiIqIn0sInNlcnZpY2UiOiJzdG9yYWdlIn0.aYPXoyfSGiTlxlMhVl_7OgyLfpvSmeK_KYJ_ymkHDertK6orZzoSDsjHN1c91mHH4Yi4XGSQjKPlzQnZ9H8EFw";
        console.log("verify signature:");
        console.log(jwt.verify(token, pem));
    });
})
.catch(function (err){
    console.log(err);
});
