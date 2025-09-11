<script setup lang="ts">
  import { ref } from 'vue'

  // Fake blog posts
  interface Post {
    id: number
    title: string
    description: string
    image: string
    link: string
  }

  const allPosts: Post[] = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Blog Post ${i + 1}`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel risus eget eros feugiat.',
    image: `https://picsum.photos/seed/${i + 1}/400/250`,
    link: '#',
  }))

  const postsToShow = ref(6)

  const visiblePosts = ref(allPosts.slice(0, postsToShow.value))

  function loadMore() {
    postsToShow.value += 6
    visiblePosts.value = allPosts.slice(0, postsToShow.value)
  }
</script>

<template>
  <Hero>
    <h1>Blogs</h1>
    <p>
      Discover insightful articles, expert opinions, and the latest trends on
      our blog. Stay informed, inspired, and engaged with fresh content across
      various topics.
    </p>
  </Hero>

  <section class="section-one">
    <div class="container">
      <div class="blog-grid">
        <div v-for="post in visiblePosts" :key="post.id" class="blog-card">
          <a :href="post.link">
            <img :src="post.image" :alt="post.title" class="blog-image" />
          </a>
          <h4>{{ post.title }}</h4>
          <p>{{ post.description }}</p>
          <a :href="post.link" class="read-more">Read More →</a>
        </div>
      </div>

      <div v-if="visiblePosts.length < allPosts.length" class="load-more">
        <BaseButton @click="loadMore">Load More</BaseButton>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
  }

  .blog-card {
    padding: 16px;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 10px;
    border: 1px solid #e4e8ee;
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-4px);
    }

    .blog-image {
      width: 100%;
      height: auto;
      border-radius: 8px;
      margin-bottom: 12px;
    }

    h4 {
      font-size: 1.25rem;
      margin: 0 0 8px;
    }

    p {
      flex: 1;
      font-size: 0.95rem;
      margin: 0 0 12px;
      color: #555;
    }

    .read-more {
      font-weight: bold;
      text-decoration: none;
      color: var(--blue);
      align-self: flex-start;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .load-more {
    margin-top: 32px;
    text-align: center;
  }
</style>
