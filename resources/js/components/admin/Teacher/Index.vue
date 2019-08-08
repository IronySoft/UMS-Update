<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-app>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div class="card">
                        <!--Card Header-->
                        <div class="card-header">
                            <div class="card-tools">

                                <v-layout justify-center>
                                    <v-dialog v-model="dialog" persistent max-width="600px">

                                        <template v-slot:activator="{ on }">
                                            <v-flex>
                                                <v-btn depressed color="red lighten-2"
                                                       dark v-on="on">Store Teacher's Info
                                                </v-btn>

                                            </v-flex>
                                        </template>

                                        <v-card>
                                            <v-form @submit.prevent="create()" ref="form">

                                                <v-card-title>
                                                    <span class="headline">User Profile</span>
                                                </v-card-title>
                                                <v-card-text>
                                                    <v-container grid-list-md>
                                                        <v-layout wrap>

                                                            <v-flex xs12>
                                                                <v-text-field v-model="teacher.name" label="Name"
                                                                              hint="Give Full Name of Teacher"
                                                                              :rules="nameRules"
                                                                              required>

                                                                </v-text-field>
                                                                {{teacher.name}}
                                                            </v-flex>
                                                            <v-flex xs12>
                                                                <v-text-field :rules="nameRules"
                                                                              v-model="teacher.address" label="Address"
                                                                              hint="Give a valid Address" required>

                                                                </v-text-field>
                                                                {{teacher.address}}
                                                            </v-flex>
                                                            <v-flex xs12>
                                                                <v-text-field v-model="teacher.email" label="Email"
                                                                              hint="Give a valid email"
                                                                              :rules="emailRules"
                                                                              required>

                                                                </v-text-field>
                                                                {{teacher.email}}
                                                            </v-flex>
                                                            <v-flex xs12>
                                                                <v-text-field :rules="nameRules"
                                                                              v-model="teacher.contact_number"
                                                                              label="Contact Number"
                                                                              hint="Give a valid Contact Number"
                                                                              required>

                                                                </v-text-field>
                                                                {{teacher.contact_number}}
                                                            </v-flex>

                                                            <v-flex xs12 sm6>
                                                                <v-select
                                                                        :rules="nameRules"
                                                                        v-model="teacher.department_id"
                                                                        :items="departments"
                                                                        label="Department"
                                                                        item-text="name"
                                                                        item-value="id"
                                                                        required
                                                                ></v-select>
                                                                {{teacher.department_id}}
                                                            </v-flex>
                                                            <v-flex xs12 sm6>
                                                                <v-select
                                                                        :rules="nameRules"
                                                                        v-model="teacher.designation_id"
                                                                        :items="designations"
                                                                        label="Designation"
                                                                        item-text="name"
                                                                        item-value="id"
                                                                        required
                                                                ></v-select>
                                                                {{teacher.designation_id}}
                                                            </v-flex>

                                                            <v-flex xs12>
                                                                <v-text-field :rules="nameRules"
                                                                              v-model="teacher.credit" label="Credit"
                                                                              hint="Credit should be minimum 5 and Maximum 30"
                                                                              required>

                                                                </v-text-field>
                                                                {{teacher.credit}}
                                                            </v-flex>
                                                        </v-layout>
                                                    </v-container>
                                                </v-card-text>

                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn color="blue darken-1" text @click="dialog = false">Close
                                                    </v-btn>
                                                    <v-btn color="blue darken-1" class="primary" type="submit">Save
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-form>
                                        </v-card>

                                    </v-dialog>
                                </v-layout>

                            </div>

                            <h4 class="card-title" style="margin-left: 330px"> Manage Department </h4>


                        </div>

                        <!--Card Body-->
                        <div class="card-body">


                            <table class="table table-hover">
                                <thead>
                                <tr>
                                    <th scope="col">SL</th>
                                    <th scope="col">Code</th>
                                    <th scope="col">Name</th>
                                    <th class="text-center" scope="col">Action</th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Code</td>
                                    <td>Name</td>


                                    <td class="text-center">

                                        <button class="btn btn-primary btn-sm"
                                                type="button">
                                            <i class="fa fa-edit"></i>
                                        </button>

                                        <button class="btn btn-danger btn-sm"
                                                type="button">
                                            <i class="fa fa-trash"></i>
                                        </button>

                                    </td>
                                </tr>

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    </v-app>
</template>

<script>

    export default {
        name: "Index",
        data() {
            return {
                dialog: false,
                teacher: {
                    name: '',
                    address: '',
                    email: '',
                    contact_number: '',
                    department_id: '',
                    designation_id: '',
                    credit: '',
                },
                departments: [
                    {name: 'CSE', id: 1},
                    {name: 'ETE', id: 2},
                    {name: 'EEE', id: 3},
                ],

                designations: [
                    {name: 'Professor', id: 1},
                    {name: 'Associate Professor', id: 2},
                    {name: 'Assistant Professor', id: 3},
                ],
                nameRules: [
                    v => !!v || 'Name is required',
                    v => (v && v.length <= 10) || 'Name must be less than 10 characters',
                ],

                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
            }
        },

        methods: {
            create() {

                if (this.$refs.form.validate()) {
                    this.dialog = false
                    console.log(this.teacher)
                }else {
                    this.dialog = true
                }

            }
        }
    }
</script>

<style scoped>

</style>