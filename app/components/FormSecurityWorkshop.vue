<script setup lang="ts">
  import { reactive, ref } from 'vue'

  // Slider questions
  const questions = reactive([
    {
      text: "How confident do you feel with your organization's security policies to ensure proper governance of your data?",
      value: 3,
    },
    {
      text: "How confident are you with your organization's security controls adoption for cloud and infrastructure?",
      value: 3,
    },
    {
      text: 'How confident is your organization with delivering applications securely to internal and external users?',
      value: 3,
    },
    {
      text: 'How confident are you in the tools and procedures used to keep your servers and endpoints secure?',
      value: 3,
    },
  ])

  // Dropdown question
  const solutionsOptions = [
    'Data and AI Security',
    'Cloud Solutions',
    'Email Security',
    'API Security',
    'Governance, Risk, & Compliance',
  ]
  const selectedSolution = ref('')

  // Contact fields
  const contact = reactive({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    jobTitle: '',
    phone: '',
    state: '',
    comments: '',
  })

  const formSubmitted = ref(false)

  const handleSubmit = () => {
    formSubmitted.value = true
    console.log('Form submitted:', {
      ratings: questions.map((q) => q.value),
      solution: selectedSolution.value,
      contact: { ...contact },
    })
  }
</script>

<template>
  <form @submit.prevent="handleSubmit" class="form-wrapper">
    <!-- Sliders -->
    <section class="sliders">
      <div v-for="(q, index) in questions" :key="index" class="slider-group">
        <label>{{ q.text }}</label>

        <div class="slider-wrapper">
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            v-model.number="q.value"
          />

          <div class="slider-markers">
            <span
              v-for="n in 5"
              :key="n"
              :class="{ active: Math.round(q.value) === n }"
              >{{ n }}</span
            >
          </div>
        </div>

        <div class="slider-labels">
          <span>Low</span>
          <span>High</span>
        </div>
      </div>
    </section>

    <!-- Dropdown -->
    <section class="dropdown">
      <label>Which security solution keeps you up at night?</label>
      <select v-model="selectedSolution">
        <option value="" disabled>Select one</option>
        <option v-for="opt in solutionsOptions" :key="opt" :value="opt">
          {{ opt }}
        </option>
      </select>
    </section>

    <!-- Contact fields -->
    <section class="contact-fields">
      <div class="field">
        <label>First Name <span>*</span></label>
        <input type="text" v-model="contact.firstName" required />
      </div>
      <div class="field">
        <label>Last Name <span>*</span></label>
        <input type="text" v-model="contact.lastName" required />
      </div>
      <div class="field">
        <label>Email <span>*</span></label>
        <input type="email" v-model="contact.email" required />
      </div>

      <div class="field">
        <label>Phone <span>*</span></label>
        <input type="text" v-model="contact.phone" required />
      </div>
      <div class="field">
        <label>State <span>*</span></label>
        <input type="text" v-model="contact.state" required />
      </div>
      <div class="field">
        <label>Company <span>*</span></label>
        <input type="text" v-model="contact.company" required />
      </div>
      <div class="field">
        <label>Job Title <span>*</span></label>
        <input type="text" v-model="contact.jobTitle" required />
      </div>
      <div class="field full-width">
        <label>Comments </label>
        <textarea v-model="contact.comments"></textarea>
      </div>
    </section>

    <!-- Submit -->
    <BaseButton solid variant="blue" type="submit">Submit</BaseButton>

    <div v-if="formSubmitted" class="thank-you">
      Thank you! Your responses have been recorded.
    </div>
  </form>
</template>

<style scoped lang="scss">
  .form-wrapper {
    max-width: 700px;
    margin: auto;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  /* Sliders */
  .sliders {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .slider-group {
      display: flex;
      flex-direction: column;

      label {
        font-weight: 600;
        margin-bottom: 0.5rem;
      }

      .slider-wrapper {
        position: relative;
        margin-bottom: 0.5rem;

        input[type='range'] {
          -webkit-appearance: none;
          width: 100%;
          height: 8px;
          background: #ddd;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 0.5rem;
        }

        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 24px;
          height: 24px;
          background: var(--orange);
          border: 2px solid #fff;
          border-radius: 50%;
          cursor: pointer;
        }

        input[type='range']::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: var(--orange);
          border: 2px solid #fff;
          border-radius: 50%;
          cursor: pointer;
        }

        .slider-markers {
          display: flex;
          justify-content: space-between;
          margin-top: 4px;

          span {
            font-size: 0.8rem;
            color: #555;
            &.active {
              font-weight: bold;
              color: var(--orange);
            }
          }
        }
      }

      .slider-labels {
        display: flex;
        justify-content: space-between;
        font-size: 0.8rem;
        color: #777;
        margin-top: 2px;
      }
    }
  }

  /* Dropdown */
  .dropdown {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
      font-weight: 600;
    }

    select {
      padding: 0.5rem;
      border-radius: 6px;
      border: 1px solid #ccc;
      font-size: 1rem;
    }
  }

  /* Contact fields */
  .contact-fields {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    .field {
      display: flex;
      flex-direction: column;

      &.full-width {
        grid-column: 1 / -1;
      }

      label {
        font-weight: 600;
        margin-bottom: 0.25rem;

        span {
          font-weight: 100;
          color: var(--orange);
        }
      }

      input,
      textarea {
        padding: 0.5rem;
        border-radius: 6px;
        border: 1px solid #ccc;
        font-size: 1rem;
      }

      textarea {
        min-height: 80px;
        resize: vertical;
      }
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      .full-width {
        grid-column: 1 / -1;
      }
    }
  }

  /* Thank you message */
  .thank-you {
    margin-top: 1rem;
    color: green;
    font-weight: 600;
    text-align: center;
  }
</style>
