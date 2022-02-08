<template>
    <section>
        <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            </div>

            <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form @submit.prevent="loginUser" class="space-y-6">
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700"> Email address </label>
                            <div class="mt-1">
                                <input v-model="user.email" id="email" name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
                            </div>
                        </div>
                        <div>
                            <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
                            <div class="mt-1">
                                <input v-model="user.password" id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
                            </div>
                        </div>
                        <div>
                            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Sign in</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>

	</section>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        data(){
            return {
                user: {
                    email: null,
                    password: null
                }
            }
        },
        created(){
            if(this.getUser && this.getAccessToken){
                this.$router.push('/dashboard')
            }
        },
        computed: {
            ...mapGetters({
                getUser: 'users/getUser',
                getAccessToken: 'users/getAccessToken'
            })
        },
        methods: {
            loginUser(){
                this.$store.dispatch('users/login', this.user)
                .then(() => {
                    this.$router.push('/dashboard')
                })
            }
        }
    }
</script>
