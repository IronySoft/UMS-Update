<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <v-app id="inspire">
            <v-content>
                <v-container
                        fluid
                        fill-height
                >
                    <v-layout
                            align-center
                            justify-center
                    >
                        <v-flex
                                xs12
                                sm8
                                md4
                        >
                            <v-card class="elevation-12">
                                <v-toolbar
                                        color="primary"
                                        dark
                                        flat
                                >
                                    <v-toolbar-title>Login form</v-toolbar-title>
                                    <v-spacer></v-spacer>
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">
                                            <v-btn
                                                    :href="source"
                                                    icon
                                                    large
                                                    target="_blank"
                                                    v-on="on"
                                            >
                                                <v-icon>mdi-code-tags</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Source</span>
                                    </v-tooltip>
                                    <v-tooltip right>
                                        <template v-slot:activator="{ on }">
                                            <v-btn
                                                    icon
                                                    large
                                                    href="https://codepen.io/johnjleider/pen/pMvGQO"
                                                    target="_blank"
                                                    v-on="on"
                                            >
                                                <v-icon>mdi-codepen</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Codepen</span>
                                    </v-tooltip>
                                </v-toolbar>
                                <v-form @submit.prevent="login">
                                <v-card-text>

                                        <v-text-field
                                                v-model="person.email"
                                                label="Login"

                                                prepend-icon="person"
                                                type="email"
                                        ></v-text-field>

                                        <v-text-field
                                                v-model="person.password"
                                                label="Password"
                                                name="password"
                                                prepend-icon="lock"
                                                type="password"
                                        ></v-text-field>

                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn type="submit" color="primary">Login</v-btn>
                                </v-card-actions>
                                </v-form>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-content>
        </v-app>
    </div>
</template>

<script>
    export default {
        props: {
            source: String,
        },
        data: () => ({
            drawer: null,
            person:{
                password: '',
                email: '',
            }
        }),
        methods: {
            login() {
                axios.post('login',this.person).then(function (responce) {
                    alert(this.person)
                    this.$router.push('/department')
                }).catch(function (err) {
                    alert('No')
                })
            }
        }
    }
</script>