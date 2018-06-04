function initForms() {
    // Callback Calc Form
    var callForm = $('.call-form__form');
    // Callback Designer Form
    var designForm = $('.cont-form__form');

    if (callForm.length > 0) {

        callForm.addClass('bx-handle');

        var frm = callForm.get(0);

        $(frm.phone).mask('+7(000)000-00-00', {placeholder: "+7(___)___-__-__"});

        $(frm).validate({
            lang: 'ru',
            errorClass: 'invalid-feedback',
            errorElement: "span",
            errorElementClass: 'is-invalid',
            rules: {
                name: {
                    required: true,
                    minlength: 3
                },
                phone: {
                    required: true,
                    minlength: 16
                },
                agreeClb: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста укажите ваше имя",
                    minlength: "Имя должно содержать более двух символов"
                },
                phone: {
                    required: "Укажите ваш телефонный номер",
                    minlength: "Номер телефона должен состоять из 16-ти символов"
                },
                agreeClb: {
                    required: "Необходимо согласие"
                }
            },
            highlight: function (element, errorClass, validClass) {
                $(element).addClass(this.settings.errorElementClass).removeClass(errorClass);
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).removeClass(this.settings.errorElementClass).removeClass(errorClass);
            },
            submitHandler: function (form) {
                // grecaptcha.execute(window.gRecaptchaItem);
                var data = {
                    'sessid': $(form.sessid).val(),
                    'CLIENT_NAME': $(form.name).val(),
                    'CLIENT_PHONE': $(form.phone).val()
                };
                console.log('Callback data', data);

                $.post('/ajax/booking.php', data, function (data) {
                    console.log('Booking data', data);
                    if (typeof data !== 'object') {
                        data = JSON.parse(data);
                    }
                    if (data.result) {
                        // success
                        $(form.name).val('');
                        $(form.phone).val('');
                        $(form.agreeClb).css('checked', false);

                        swal({
                            title: 'Спасибо за заявку!',
                            text: 'Ваш заявка успешно принята, ожидайте звонка специалиста.',
                            icon: "success",
                            buttons: false,
                            timer: 5000
                        });
                    } else {
                        swal({
                            title: 'Произошла ошибка...',
                            text: ((typeof responce.error !== 'undefined') ? responce.error : 'Попробуйте повторить заявку позже или обратитесь в службу поддержки.'),
                            icon: "error",
                            buttons: true
                        });
                    }

                }).fail(function (err) {
                    console.log('Callback err', err);
                    swal({
                        title: 'Произошла ошибка...',
                        text: 'Попробуйте повторить заявку позже или обратитесь в службу поддержки.',
                        icon: "error",
                        buttons: true
                    });
                });

                return false;
            }
        });

    }


    if (designForm.length > 0) {
        designForm.addClass('bx-handle');

        var frm = designForm.get(0);

        $(frm.phone).mask('+7(000)000-00-00', {placeholder: "+7(___)___-__-__"});

        $(frm).validate({
            lang: 'ru',
            errorClass: 'invalid-feedback',
            errorElement: "span",
            errorElementClass: 'is-invalid',
            rules: {
                name: {
                    required: true,
                    minlength: 3
                },
                phone: {
                    required: true,
                    minlength: 16
                },
                agreeClb: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста укажите ваше имя",
                    minlength: "Имя должно содержать более двух символов"
                },
                phone: {
                    required: "Укажите ваш телефонный номер",
                    minlength: "Номер телефона должен состоять из 16-ти символов"
                },
                agreeClb: {
                    required: "Необходимо согласие"
                }
            },
            highlight: function (element, errorClass, validClass) {
                $(element).addClass(this.settings.errorElementClass).removeClass(errorClass);
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).removeClass(this.settings.errorElementClass).removeClass(errorClass);
            },
            submitHandler: function (form) {
                // grecaptcha.execute(window.gRecaptchaItem);
                var data = {
                    'sessid': $(form.sessid).val(),
                    'CLIENT_NAME': $(form.name).val(),
                    'CLIENT_PHONE': $(form.phone).val(),
                    'NEED_PROJECT': $(form.project).val(),
                    'NEED_CONSULT': $(form.consult).val()
                };
                console.log('Consult data', data);

                $.post('/ajax/booking.php', data, function (data) {
                    console.log('Booking data', data);
                    if (typeof data !== 'object') {
                        data = JSON.parse(data);
                    }
                    if (data.result) {
                        // success
                        $(form.name).val('');
                        $(form.phone).val('');
                        $(form.agreeClb).css('checked', false);

                        swal({
                            title: 'Спасибо за заявку!',
                            text: 'Ваш заявка успешно принята, ожидайте звонка специалиста.',
                            icon: "success",
                            buttons: false,
                            timer: 5000
                        });
                    } else {
                        swal({
                            title: 'Произошла ошибка...',
                            text: ((typeof responce.error !== 'undefined') ? responce.error : 'Попробуйте повторить заявку позже или обратитесь в службу поддержки.'),
                            icon: "error",
                            buttons: true
                        });
                    }

                }).fail(function (err) {
                    console.log('Consult err', err);
                    swal({
                        title: 'Произошла ошибка...',
                        text: 'Попробуйте повторить заявку позже или обратитесь в службу поддержки.',
                        icon: "error",
                        buttons: true
                    });
                });

                return false;
            }
        });
    }
};