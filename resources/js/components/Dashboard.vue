<template>
<div class="min-h-full">
  <main class="mt-12 pb-8">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 class="sr-only">Profile</h1>
      <!-- Main 3 column grid -->
      <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
        <!-- Left column -->
        <div class="grid grid-cols-1 gap-4 lg:col-span-2">
          <!-- Welcome panel -->
          <section aria-labelledby="profile-overview-title">
            <div class="rounded-lg bg-white overflow-hidden shadow">
              <h2 class="sr-only" id="profile-overview-title">Profile Overview</h2>
              <div class="bg-white p-6">
                <div class="sm:flex sm:items-center sm:justify-between">
                  <div class="sm:flex sm:space-x-5">
                    <div class="flex-shrink-0">
                      <svg class="mx-auto h-16 w-16 rounded-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    </div>
                    <div class="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                      <p class="text-sm font-medium text-gray-600">Welcome back,</p>
                      <p class="text-xl font-bold text-gray-900 sm:text-2xl">{{getUser.name}}</p>
                      <p class="text-sm font-medium text-gray-600">{{getSubjectByUser.subject}}</p>
                    </div>
                  </div>
                  <div class="mt-5 flex justify-center sm:mt-0">
                    <button @click="logoutUser" class="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">Logout</button>
                  </div>
                </div>
              </div>
              <div class="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
                <div class="px-6 py-5 text-sm font-medium text-center">
                  <span class="text-gray-900">12</span>
                  <span class="text-gray-600">Vacation days left</span>
                </div>

                <div class="px-6 py-5 text-sm font-medium text-center">
                  <span class="text-gray-900">4</span>
                  <span class="text-gray-600">Sick days left</span>
                </div>

                <div class="px-6 py-5 text-sm font-medium text-center">
                  <span class="text-gray-900">2</span>
                  <span class="text-gray-600">Personal days left</span>
                </div>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  </main>
</div>

</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        created(){
            this.$store.dispatch('subjects/subjectByUser', this.getUser.id)
        },
        computed: {
            ...mapGetters({
                getUser: 'users/getUser',
                getSubjectByUser: 'subjects/getSubjectByUser'
            }),
        },
        methods: {
            logoutUser(){
                this.$store.dispatch('users/logout')
                this.$router.push('/')
            }
        }
    }
</script>
