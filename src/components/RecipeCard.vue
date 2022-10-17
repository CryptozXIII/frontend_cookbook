<template>
  <div class="container-fluid">
    <div class="row">
      <div
        class="card mb-3 mx-auto"
        style="max-width: 800px; max-height: 207.34px"
      >
        <div class="row g-0">
          <div class="col-md-5">
            <img
              :src="recipe.image"
              class="img-fluid rounded-start"
              :alt="recipe.title"
            />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h5
                class="card-title"
                v-html="recipe.name"
                @click="goToRecipe(recipe.id)"
              ></h5>
              <p class="card-text" v-html="recipe.summary"></p>
              <div class="row">
                <div class="col-md-10"></div>
                <div class="col-md-2">
                  <like-button
                    :liked="this.recipe.liked"
                    @click="likeRecipe(recipe)"
                  ></like-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LikeButton from "@/components/LikeButton.vue";
export default {
  name: "RecipesCard",
  components: {
    LikeButton,
  },
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      recipes: [],
      // title: "",
      // image: "",
      // summary: {},
    };
  },
  methods: {
    goToRecipe(id) {
      this.$router.push("/recipe/" + id);
    },
    likeRecipe(recipe) {
      // this.recipe.liked = !this.recipe.liked
      this.$parent.$parent.likeRecipe(recipe);
    },
  },
};
</script>

<style scoped>
#like-button {
  font-size: 10px;
}

.card-title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /*number of lines to show*/
  line-clamp: 1;
  -webkit-box-orient: vertical;
}
.card-text {
  font-size: small;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5; /*number of lines to show*/
  line-clamp: 5;
  -webkit-box-orient: vertical;
}
.card-title:hover {
  text-decoration: underline;
}
.row > * {
  padding-left: 0%;
}

.card {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border: 0;
}
</style>
