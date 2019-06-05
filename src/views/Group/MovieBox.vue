<template>
    <div class="MovieBox">
       <div v-if="!movies" class="bg-img"></div>
        <MovieItem
            v-for="movie in movies"
            :key = "movie.id"
            :movie = "movie"
        ></MovieItem>
       
    </div>
</template>

<script>
import MovieItem from  "./MovieItem"
export default {
    components:{
         MovieItem,
    },
    data(){
        return{
            movies:null
        }
    },
    methods:{
        getMovies(){
            this.$http.get("/api/db/in_theaters",{
                params:{
                    limit:6
                }
            }).then(res=>{
                this.movies = res.data.object_list
                // console.log(res)
            })
        }
    },
    created(){
        this.getMovies()
    }
}
</script>

<style>
    .MovieBox{
        margin-bottom:60px;
    }
</style>
