let app = new Vue({
   el: '#app',
   data() {
      return {
         searchBar: '',
         key: 'AIzaSyAqfJLO-q4nlUeNNy8aAVYK7Yhz4MINNLk',
      }
   },
   // mounted() {
      
   // },
   methods: {
      searchYoutubeChannel(e) {
         e.preventDefault();
         // console.log(this.searchBar)
         
         axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=${this.searchBar}&key=${this.key}`)
         .then( res => {
            console.log(res)
         })
          .catch(function (error) {
            console.log(error);
          });
         this.searchBar =  '';
      },
   }
})