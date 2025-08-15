<template>
  <section class="form-section" :class="theme">
    <h2 class="section-title">
      I AM A...
    </h2>

    <div class="role-buttons">
      <button 
        v-for="role in roles" 
        :key="role.value"
        :class="['role-btn', { active: activeRole === role.value }]"
        @click="activeRole = role.value"
      >
        {{ role.label }}
      </button>
    </div>

    <div class="form-wrapper">
      <component :is="activeFormComponent" />
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// Import form components
import HomeownerSellForm from '@/components/forms/HomeownerSellForm.vue'
import AgentForm from '@/components/forms/AgentForm.vue'
import HardshipForm from '@/components/forms/HardshipForm.vue'
import InvestorForm from '@/components/forms/InvestorForm.vue'

// Props
const props = defineProps({
  theme: {
    type: String,
    default: 'light',
    validator: val => ['dark', 'light'].includes(val)
  }
})

// Role definitions with direct component references
const roles = [
  { label: 'Homeowner Looking to Sell', value: 'homeowner-sell', form: HomeownerSellForm },
  { label: 'Real Estate Agent', value: 'real-estate-agent', form: AgentForm },
  { label: 'Homeowner in Financial Hardship', value: 'homeowner-hardship', form: HardshipForm },
  { label: 'Investor Looking to Sell', value: 'investor-sell', form: InvestorForm }
]

// State
const activeRole = ref(roles[0].value)

// Computed: get current form component
const activeFormComponent = computed(() => {
  const role = roles.find(r => r.value === activeRole.value)
  return role ? role.form : null
})
</script>


<style scoped lang="scss">
.form-section {
    margin: 0 15px;
    text-align: left;

    &.dark {
        .section-title { color: var(--text-light); }
        .role-btn { color: var(--text-light); }
        .role-btn.active { color: var(--text-light); }
    }

    &.light {
        .section-title { color: var(--text-dark); }
        .role-btn { color: var(--text-dark); }
        .role-btn.active { color: var(--text-dark); }
    }
}

.section-title {
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 122.631%;
    letter-spacing: 2.24px;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
}

.role-buttons {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    margin-bottom: 2rem;
}

.role-btn {
    padding: 0.75rem 1rem;
    border-radius: 9999px;
    border: 1px solid var(--Copper);
    background-color: var(--Copper-rgba);
    font-weight: 600;
    cursor: pointer;
    text-transform: uppercase;
    transition: all 0.18s ease;
    white-space: normal;
    text-align: center;
    width: 100%;
    font-size: 14px;
    

    &.active {
      background-color: var(--Copper);
    }

    &:hover {
      opacity: 0.92;
      transform: translateY(-1px);
    }
}


.form-wrapper {
    max-width: 600px;
    margin: 0 auto;
}

@media (min-width: 768px) {
  .form-section {
    margin: 0 auto;
    text-align: left;
  }

  .section-title {
    text-align: left;
    font-size: 32px;
  }

  .role-buttons {
    grid-template-columns: repeat(4, 1fr);
  }

  .role-btn {
    font-size: 18px;

  }


  .form-wrapper {
    max-width: 600px;
    margin: 0 auto;
  }
}

@media (min-width: 1200px) {
  .role-btn {
    font-size: 22px;

  }
}
</style>
