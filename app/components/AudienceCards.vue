<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    <AudienceCard
      icon="agents"
      title="Real Estate Agents"
    />
    <AudienceCard
      icon="homeowners"
      title="Homeowners"
    />
    <AudienceCard
      icon="investors"
      title="Real Estate Investors"
    />
  </div>
</template>

<style lang="scss" scoped>
.grid {
  gap: 35px;
  padding: 20px 0 0;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .grid {
    gap: 70px;
    padding: 20px 45px;
  }
}
</style>
