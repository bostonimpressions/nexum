<script setup lang="ts">
  import { ref } from 'vue'
  import BaseButton from '~/components/base/BaseButton.vue'

  interface Event {
    id: number
    title: string
    description: string
    image: string
    date: string
    location: string
    link: string
  }

  // Fake events
  const allEvents: Event[] = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Tech Innovators Summit 2025 – Shaping The Future Of Technology`,
    description: `Join industry leaders, innovators, and tech enthusiasts at the Tech Innovators Summit 2025, where groundbreaking ideas and the latest advancements in technology take center stage. This event will feature keynote speeches, expert panel discussions, and hands-on workshops covering AI, cybersecurity, blockchain, and emerging technologies. Join industry leaders, innovators, and tech enthusiasts at the Tech Innovators Summit 2025, where groundbreaking ideas and the latest advancements in technology take center stage.`,
    image: `https://picsum.photos/seed/event${i + 1}/400/400`,
    date: `September 15-17, 2025`,
    location: `San Francisco, CA / Virtual Access`,
    link: '#',
  }))

  const eventsToShow = ref(6)
  const visibleEvents = ref(allEvents.slice(0, eventsToShow.value))

  function loadMore() {
    eventsToShow.value += 6
    visibleEvents.value = allEvents.slice(0, eventsToShow.value)
  }
</script>

<template>
  <Hero theme="events">
    <h1>Events</h1>
    <p>
      Stay informed about upcoming events, conferences, and workshops. Explore
      exciting opportunities to connect, learn, and engage with industry experts
      and like-minded individuals.
    </p>
  </Hero>

  <section class="section-one">
    <div class="container">
      <div class="events-list">
        <div v-for="event in visibleEvents" :key="event.id" class="event-card">
          <img :src="event.image" :alt="event.title" class="event-image" />
          <div class="event-content">
            <h4>{{ event.title }}</h4>
            <p>{{ event.description }}</p>
            <div class="event-meta">
              <div class="event-date">{{ event.date }}</div>
              <div class="event-location">{{ event.location }}</div>
            </div>
            <BaseButton solid arrow :href="event.link" class="event-btn"
              >Learn More</BaseButton
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .events-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
  }

  .event-card {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    background: #fff;
    border: 1px solid #e4e8ee;
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-4px);
    }

    .event-image {
      width: 100%;
      height: 250px;
      object-fit: cover;
      object-position: center 70%;
      border-radius: 6px;
    }

    .event-content {
      display: flex;
      flex-direction: column;
      gap: 12px;

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

      .event-meta {
        display: flex;
        gap: 16px;
        font-size: 14px;
        color: var(--gray);
      }

      .event-btn {
        margin-top: auto;
      }
    }
  }

  // @media (min-width: 768px) {
  //   .events-list {
  //     display: grid;
  //     grid-template-columns: 1fr 1fr 1fr;
  //     gap: 24px;
  //   }
  // }
</style>
