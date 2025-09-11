<script setup lang="ts">
  import { ref } from 'vue'

  // Fake news posts
  interface Post {
    id: number
    title: string
    description: string
    date: string
    image: string
    link: string
  }

  const allPosts: Post[] = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `How Businesses Can Strengthen Their Security`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel risus eget eros feugiat.',
    date: 'December 12, 2024',
    image: `https://picsum.photos/seed/${i + 1}/400/400`,
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
  <Hero theme="news">
    <h1>News</h1>
    <p>
      Stay updated with the latest news, trends, and insights from around the
      world. Explore breaking stories and in-depth analysis on topics that
      matter to you
    </p>
  </Hero>

  <section class="section-one">
    <div class="container news-intro">
      <h2>Hot Topic</h2>
      <p>
        Stay ahead with the latest hot topics in the news, covering breaking
        stories, trending events, and insightful analyses. Get real-time updates
        on the issues shaping the world today
      </p>
      <a href="#">
        <div class="intro-card">
          <div class="card-footer">
            <h3>
              Revolutionizing Supply Chains: Emerging Trends in Global Logistics
            </h3>
            <p>December 12, 2024</p>
          </div>
        </div>
      </a>
    </div>

    <div class="container news-posts">
      <h2>Latest News</h2>
      <div class="news-grid">
        <div v-for="post in visiblePosts" :key="post.id" class="news-card">
          <a :href="post.link">
            <img :src="post.image" :alt="post.title" class="news-image" />
          </a>
          <h4>{{ post.title }}</h4>
          <p>{{ post.date }}</p>

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
  .news-intro {
    display: flex;
    flex-direction: column;
    gap: 24px;
    text-align: center;

    h2 {
      color: var(--blue);
    }
    p {
      color: var(--gray);
      max-width: 820px;
      margin: 0 auto;
    }

    .intro-card {
      display: flex;
      flex-direction: column;
      padding: clamp(15px, 5vw, 30px);
      min-height: 400px;
      background-image:
        linear-gradient(0deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.55) 100%),
        url('/news-topic-image.png');
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      color: var(--white);
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.2s;

      &:hover {
        transform: translateY(-4px);
      }

      .card-footer {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin: auto 0 0;
        text-align: left;
        max-width: 840px;
      }
      h3 {
        color: var(--white);
      }
      p {
        color: var(--white);
        margin: 0;
      }
    }
  }

  .news-posts {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 60px;

    h2 {
      color: var(--gray);
    }
  }
  .news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
  }

  .news-card {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: #fff;
    border-radius: 10px;
    border: 1px solid #e4e8ee;
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-4px);
    }

    .news-image {
      width: 100%;
      height: 250px;
      object-fit: cover;
      object-position: center 70%;
      border-radius: 8px;
    }

    h4 {
      color: var(--gray);
      font-size: 1.25rem;
    }

    p {
      color: var(--gray);
      font-size: 14px;
      line-height: 18px;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
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
