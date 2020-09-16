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
      submit: function () {
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
      }
    }
  });