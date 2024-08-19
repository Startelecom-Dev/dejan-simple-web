openssl req -new -x509 -newkey rsa:2048 -sha256 -nodes -keyout cert.key -days 3560 -out cert.pem -config req.cnf
