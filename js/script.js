// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Stampiamo tutto a schermo, in questo momento non è importante la parte grafica.
// Bonus:Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.
//Chiamata: https://flynn.boolean.careers/exercises/api/array/music
var app = new Vue ({
  el: '#music',
  data: {
    songs: [],
    genres: ['All']
  },
  mounted(){
    axios
    .get('https://flynn.boolean.careers/exercises/api/array/music')
    .then((result) => {
      this.songs = result.data.response;
      // console.log(this.songs);
      this.genreMusic();
    });
  },
  methods: {
    genreMusic(){
      // console.log(this.song);
      this.songs.forEach((item, i) => {
        // console.log(item);
        if (!this.genres.includes(item.genre)) {
          this.genres.push(item.genre);
        }
      });
    }
  }
});
