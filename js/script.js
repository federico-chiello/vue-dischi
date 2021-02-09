// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Stampiamo tutto a schermo, in questo momento non è importante la parte grafica.
// Bonus:Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.
//Chiamata: https://flynn.boolean.careers/exercises/api/array/music
var app = new Vue ({
  el: '#music',
  data: {
    songs: [],
    genres: ['All'],
    groupRock: [],
    groupPop: [],
    groupJazz: [],
    groupMetal: [],
    selectGenre: 'All',
    newSong: []
  },
  mounted(){
    axios
    .get('https://flynn.boolean.careers/exercises/api/array/music')
    .then((result) => {
      this.songs = result.data.response;
      // console.log(this.songs);
      this.newSong = this.songs;
      this.groupRock = this.songs.filter((element) => element.genre == 'Rock');
      this.groupPop = this.songs.filter((element) => element.genre == 'Pop');
      this.groupJazz = this.songs.filter((element) => element.genre == 'Jazz');
      this.groupMetal = this.songs.filter((element) => element.genre == 'Metal');
      this.genreMusic();
    });
  },
  methods: {
    genreMusic(){
      this.songs.forEach((item, i) => {
        // console.log(item);
        if (!this.genres.includes(item.genre)) {
          this.genres.push(item.genre);
        }
      });
    },
    chooseOption(index){
      this.selectGenre = this.genres[index];
			// console.log(this.selectGenre);
			if(this.selectGenre == "All"){
				this.newSong = this.songs;
			} else if(this.selectGenre == "Rock") {
        this.newSong = '';
				this.newSong = this.groupRock;
			} else if(this.selectGenre == "Jazz") {
        this.newSong = '';
				this.newSong = this.groupJazz;
			} else if(this.selectGenre == "Pop") {
        this.newSong = '';
				this.newSong = this.groupPop;
			} else if(this.selectGenre == "Metal") {
        this.newSong = '';
				this.newSong = this.groupMetal;
			}
      // console.log(this.newSong);
    }
  }
});
