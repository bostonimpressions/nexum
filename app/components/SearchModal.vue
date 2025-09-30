<script setup>
  import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'

  const isOpen = ref(false)
  const searchQuery = ref('')
  const searchResults = ref([])
  const isLoading = ref(false)
  const selectedIndex = ref(0)

  // Expose openModal method to parent
  defineExpose({
    openModal: () => {
      isOpen.value = true
      // Focus input after modal opens
      setTimeout(() => {
        document.getElementById('search-input')?.focus()
      }, 100)
    },
  })

  // Search function using Nuxt Content 3
  const performSearch = async () => {
    if (!searchQuery.value || searchQuery.value.length < 2) {
      searchResults.value = []
      return
    }

    isLoading.value = true

    try {
      // Get all content from the collection
      const allContent = await queryCollection('content').all()

      // Filter results based on search query
      const query = searchQuery.value.toLowerCase()

      const results = allContent
        .filter((item) => {
          const title = item.title?.toLowerCase() || ''
          const description = item.description?.toLowerCase() || ''
          const excerpt = item.excerpt?.toLowerCase() || ''

          // Search in body content if it exists
          let bodyText = ''
          if (item.body) {
            // Extract text from markdown body structure
            bodyText = extractTextFromBody(item.body).toLowerCase()
          }

          return (
            title.includes(query) ||
            description.includes(query) ||
            excerpt.includes(query) ||
            bodyText.includes(query)
          )
        })
        .slice(0, 10) // Limit to 10 results

      searchResults.value = results
    } catch (error) {
      console.error('Search error:', error)
      searchResults.value = []
    } finally {
      isLoading.value = false
    }
  }

  // Helper function to extract text from markdown body structure
  const extractTextFromBody = (body) => {
    if (!body) return ''

    let text = ''

    const traverse = (node) => {
      if (typeof node === 'string') {
        text += node + ' '
      } else if (node?.children) {
        node.children.forEach(traverse)
      } else if (Array.isArray(node)) {
        node.forEach(traverse)
      } else if (node?.value) {
        text += node.value + ' '
      }
    }

    traverse(body)
    return text
  }

  // Debounced search
  let searchTimeout
  watch(searchQuery, () => {
    clearTimeout(searchTimeout)
    searchTimeout = setTimeout(() => {
      performSearch()
    }, 300)
  })

  // Close modal
  const closeModal = () => {
    isOpen.value = false
    searchQuery.value = ''
    searchResults.value = []
    selectedIndex.value = 0
  }

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (!isOpen.value) return

    if (e.key === 'Escape') {
      closeModal()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      selectedIndex.value = Math.min(
        selectedIndex.value + 1,
        searchResults.value.length - 1
      )
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      selectedIndex.value = Math.max(selectedIndex.value - 1, 0)
    } else if (e.key === 'Enter' && searchResults.value[selectedIndex.value]) {
      navigateToResult(searchResults.value[selectedIndex.value])
    }
  }

  // Navigate to selected result
  const navigateToResult = (result) => {
    navigateTo(result._path)
    closeModal()
  }

  // Handle click outside
  const handleClickOutside = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal()
    }
  }

  // Prevent body scroll when modal is open
  watch(isOpen, (val) => {
    if (val) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  })

  onMounted(() => {
    document.addEventListener('keydown', handleKeyDown)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleKeyDown)
    document.body.style.overflow = ''
  })

  // Get excerpt from content
  const getExcerpt = (result) => {
    if (result.description) return result.description
    if (result.excerpt) return result.excerpt

    // Try to get text from body
    const bodyText = typeof result.body === 'string' ? result.body : ''
    return bodyText.slice(0, 150) + (bodyText.length > 150 ? '...' : '')
  }

  // Highlight search term in text
  const highlightText = (text, query) => {
    if (!text || !query) return text
    const regex = new RegExp(`(${query})`, 'gi')
    return text.replace(regex, '<mark>$1</mark>')
  }
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="modal-overlay search-modal"
        @click="handleClickOutside"
      >
        <div class="modal-content" @click.stop>
          <div class="search-header">
            <div class="search-input-wrapper">
              <svg
                class="search-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17.5 17.5L22 22"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
              </svg>
              <input
                id="search-input"
                v-model="searchQuery"
                type="text"
                placeholder="Search documentation, services, insights..."
                class="search-input"
              />
              <button
                v-if="searchQuery"
                class="clear-button"
                @click="searchQuery = ''"
              >
                ×
              </button>
            </div>
            <button class="close-button" @click="closeModal">
              <span class="sr-only">Close</span>
              ×
            </button>
          </div>

          <div class="search-body">
            <!-- Loading state -->
            <div v-if="isLoading" class="search-loading">
              <div class="spinner"></div>
              Searching...
            </div>

            <!-- Empty state -->
            <div v-else-if="!searchQuery" class="search-empty">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M17.5 17.5L22 22"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
              </svg>
              <p>Start typing to search...</p>
            </div>

            <!-- No results -->
            <div
              v-else-if="!isLoading && searchResults.length === 0"
              class="search-empty"
            >
              <p>No results found for "{{ searchQuery }}"</p>
            </div>

            <!-- Results -->
            <div v-else class="search-results">
              <div class="results-count">
                {{ searchResults.length }} result{{
                  searchResults.length !== 1 ? 's' : ''
                }}
              </div>
              <ul class="results-list">
                <li
                  v-for="(result, index) in searchResults"
                  :key="result._path"
                  :class="{ selected: index === selectedIndex }"
                  @click="navigateToResult(result)"
                  @mouseenter="selectedIndex = index"
                >
                  <div
                    class="result-title"
                    v-html="highlightText(result.title, searchQuery)"
                  ></div>
                  <div class="result-path">{{ result._path }}</div>
                  <div v-if="getExcerpt(result)" class="result-excerpt">
                    {{ getExcerpt(result) }}
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="search-footer">
            <div class="keyboard-hints">
              <span><kbd>↑</kbd><kbd>↓</kbd> Navigate</span>
              <span><kbd>Enter</kbd> Select</span>
              <span><kbd>Esc</kbd> Close</span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 10vh 20px 20px;
    z-index: 9999;
    overflow-y: auto;
  }

  .modal-content {
    background: #1a1a1a;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    width: 100%;
    max-width: 640px;
    max-height: 80vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  }

  .search-header {
    display: flex;
    gap: 12px;
    padding: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .search-input-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 0 16px;
    transition: all 0.2s;
  }

  .search-input-wrapper:focus-within {
    background: rgba(255, 255, 255, 0.08);
    border-color: var(--lightorange, #ffa827);
  }

  .search-icon {
    color: rgba(255, 255, 255, 0.5);
    flex-shrink: 0;
  }

  .search-input {
    flex: 1;
    background: none;
    border: none;
    color: white;
    font-size: 16px;
    padding: 12px 0;
    outline: none;
  }

  .search-input::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  .clear-button {
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.5);
    font-size: 24px;
    cursor: pointer;
    padding: 0 4px;
    line-height: 1;
    transition: color 0.2s;
  }

  .clear-button:hover {
    color: white;
  }

  .close-button {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: white;
    font-size: 24px;
    width: 44px;
    height: 44px;
    cursor: pointer;
    transition: all 0.2s;
    flex-shrink: 0;
  }

  .close-button:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
  }

  .search-body {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    min-height: 200px;
  }

  .search-loading,
  .search-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 40px 20px;
    color: rgba(255, 255, 255, 0.6);
    text-align: center;
  }

  .search-empty svg {
    opacity: 0.3;
  }

  .spinner {
    width: 24px;
    height: 24px;
    border: 3px solid rgba(255, 255, 255, 0.1);
    border-top-color: var(--lightorange, #ffa827);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .results-count {
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
    margin-bottom: 12px;
  }

  .results-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .results-list li {
    padding: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .results-list li:hover,
  .results-list li.selected {
    background: rgba(255, 255, 255, 0.05);
    border-color: var(--lightorange, #ffa827);
  }

  .result-title {
    color: white;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  .result-title :deep(mark) {
    background: var(--lightorange, #ffa827);
    color: #000;
    padding: 2px 4px;
    border-radius: 3px;
  }

  .result-path {
    color: rgba(255, 255, 255, 0.5);
    font-size: 13px;
    margin-bottom: 8px;
  }

  .result-excerpt {
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    line-height: 1.5;
  }

  .search-footer {
    padding: 16px 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .keyboard-hints {
    display: flex;
    gap: 16px;
    justify-content: center;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.5);
  }

  .keyboard-hints kbd {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    padding: 2px 6px;
    font-family: monospace;
    font-size: 12px;
    margin: 0 2px;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Modal transitions */
  .modal-enter-active,
  .modal-leave-active {
    transition: opacity 0.2s ease;
  }

  .modal-enter-active .modal-content,
  .modal-leave-active .modal-content {
    transition: transform 0.2s ease;
  }

  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
  }

  .modal-enter-from .modal-content,
  .modal-leave-to .modal-content {
    transform: scale(0.95) translateY(-20px);
  }

  @media (max-width: 768px) {
    .modal-overlay {
      padding: 0;
      align-items: stretch;
    }

    .modal-content {
      max-width: 100%;
      max-height: 100vh;
      border-radius: 0;
      height: 100vh;
    }

    .keyboard-hints {
      display: none;
    }
  }
</style>
