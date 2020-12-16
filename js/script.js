var root = new Vue({
  el: "#root",
  data: {
    emails:[],
  },
  methods:{

  },
  created: function () {
    let n = 0;
    while (n<10) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function (result) {
            let adress = result.data.response;
            root.emails.push(adress);
          });
          n++;
        }
  }

})
