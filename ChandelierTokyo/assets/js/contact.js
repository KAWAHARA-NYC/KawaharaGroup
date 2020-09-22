function changeDisabled() {
  if (document.Form1["contactType"][3].checked) {
    document.Form1["contactTypeEtc"].disabled = false;
    document.Form1["contactTypeEtc"].required = true;
    $('.toiawasenaiyo').css('display', 'block');
  } else {
    document.Form1["contactTypeEtc"].disabled = true;
    document.Form1["contactTypeEtc"].required = false;
    $('.toiawasenaiyo').css('display', 'none');
  }
}
window.onload = changeDisabled;

new Vue({
  el: "#postForm",
  data: {
    err_userName: "",
    err_email: "",
    err_address: "",
    err_userType: "",
    err_contactType: "",
    err_contactTypeEtc: "",
    showForm: true,
    userName: "",
    email: "",
    tel: "",
    address: "",
    userType: "",
    contactType: "",
    contactTypeEtc: "",
    content: ""
  },
  methods: {
    submit: function (e) {
      if (this.userName &&
        this.email &&
        this.validEmail(this.email) &&
        this.address &&
        this.userType &&
        (this.contactType && (this.contactType != "__other_option__")) || ((this.contactType == "__other_option__") && this.contactTypeEtc)
      ) {
        const submitParams = new FormData();
        // お問い合わせ内容のname属性値
        submitParams.append("entry.1690203451", this.userName);
        submitParams.append("entry.537968795", this.email);
        submitParams.append("entry.1208304358", this.tel);
        submitParams.append("entry.180164622", this.address);
        submitParams.append("entry.1906762036", this.userType);
        submitParams.append("entry.1495106858", this.contactType);
        submitParams.append("entry.1495106858.other_option_response", this.contactTypeEtc);
        submitParams.append("entry.258805767", this.content);

        // CORSエラー対策
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
        // Googleフォームのaction属性値
        const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdfUOFI-RwRRjMQ6VfkftTSasZ3alPb0O4-IBe5-Z6Q2qwlHQ/formResponse";

        // Ajax POST通信
        axios.post(CORS_PROXY + GOOGLE_FORM_ACTION, submitParams).then(res => {
          // フォーム非表示
          this.showForm = false;
        });
        // フォーム非表示
        this.showForm = false;

        return true;
      } else {
        this.err_userName = "";
        this.err_email = "";
        this.err_address = "";
        this.err_userType = "";
        this.err_contactType = "";
        this.err_contactTypeEtc = "";

        if (!this.userName) {
          this.err_userName = 'お名前を入力してください。';
        }
        if (!this.email) {
          this.err_email = 'メールアドレスを入力してください。';
        } else if (!this.validEmail(this.email)) {
          this.err_email = 'メールアドレスの形式で入力してください。';
        }
        if (!this.address) {
          this.err_address = 'お住まいを入力してください。';
        }
        if (!this.userType) {
          this.err_userType = '個人/法人をお選びください。';
        }
        if (!this.contactType) {
          this.err_contactType = 'お問い合わせ内容をお選びください。';
        } else if (!(this.contactTypeEtc)) {
          if (this.contactType == "__other_option__") {
            this.err_contactTypeEtc = 'その他の内容を入力してください。';
          }
        }

        e.preventDefault();
        $('html,body').animate({
          scrollTop: 0
        }, 1000); // 1秒で移動
      }
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
    /*
    
    */
  }
});