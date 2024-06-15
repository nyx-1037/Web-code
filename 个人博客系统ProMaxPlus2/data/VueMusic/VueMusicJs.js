const musicData = [{
    id: 1,
    name: 'Da Capo',
    author: 'HOYO-MiX',
    songSrc: './VueMusic/MusicData/HOYO-MiX - Da Capo.mp3'
},
{
    id: 2,
    name: '轻涟 La vaguelette',
    author: 'HOYO-MiX',
    songSrc: './VueMusic/MusicData/HOYO-MiX - 轻涟 La vaguelette.mp3'
},
{
    id: 3,
    name: 'Regression',
    author: '阿云嘎,HOYO-MiX',
    songSrc: './VueMusic/MusicData/阿云嘎,HOYO-MiX - Regression.mp3'
},
{
    id: 4,
    name: 'Moon Halo',
    author: '茶理理,TetraCalyx,Hanser',
    songSrc: './VueMusic/MusicData/茶理理,TetraCalyx,Hanser - Moon Halo.mp3'
},
{
    id: 5,
    name: 'TruE',
    author: '黄龄,HOYO-MiX',
    songSrc: './VueMusic/MusicData/黄龄,HOYO-MiX - TruE.mp3'
},
{
    id: 6,
    name: 'Starfall',
    author: '袁娅维TIA RAY',
    songSrc: './VueMusic/MusicData/袁娅维TIA RAY - Starfall.mp3'
},
{
    id: 7,
    name: 'Rubia',
    author: '周深',
    songSrc: './VueMusic/MusicData/周深 - Rubia.mp3'
},



];

new Vue({
el: '#app',
data: {
    musicData,
    currentIndex: 0
},
computed:{
    getCurrentSongSrc(){
        return this.musicData[this.currentIndex].songSrc;
    }
},
methods: {
    handleClick(index) {
        this.currentIndex = index;
    },
    handleEnded() {
        this.handleNext();
    },
    handleStarted() {
        this.handleBefore();
    },
    handleNext() {
        this.currentIndex++;
        if (this.currentIndex === this.musicData.length) {
            this.currentIndex = 0;
        }
    },
    handleBefore(){
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.musicData.length - 1;
        }
        }
    }
}
)