<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">

                <div class="card">
                    <!--Card Header-->
                    <div class="card-header">

                        <h4 class="card-title" style="margin-left: 370px"> Manage Course </h4>

                        <div class="card-tools">
                            <button @click.prevent="openAddModal" class="btn btn-success">
                                Add Course
                                <i class="fa fa-plus"></i>
                            </button>
                        </div>

                    </div>

                    <!--Card Body-->
                    <div class="card-body">


                        <table class="table table-hover">
                            <thead>
                            <tr>
                                <th scope="col">Code</th>
                                <th scope="col">Name</th>
                                <th scope="col">Credit</th>
                                <th scope="col">Description</th>
                                <th scope="col">Department</th>
                                <th scope="col">Semester</th>
                                <th class="text-center" scope="col">Action</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>Ban-01</td>
                                <td>Bangla</td>
                                <td>3</td>
                                <td>It A Bangla</td>
                                <td>CSE</td>
                                <td>2nd</td>


                                <td class="text-center">

                                    <button @click.prevent="openEditModal" class="btn btn-primary btn-sm"
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

        <!-- Modal -->

        <div aria-hidden="true" aria-labelledby="courseModalTitle" class="modal fade" id="courseModal"
             role="dialog" tabindex="-1">
            <div class="modal-dialog" role="document">

                <div class="modal-content">

                    <!--Header-->
                    <div class="modal-header">
                        <h5 style="margin-left: 150px">  {{editMode? 'Edit' :'Add'}} Course</h5>


                        <button aria-label="Close" class="close" data-dismiss="modal" type="button">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>


                    <form action="" method="post">

                        <!--Body-->
                        <div class="modal-body">

                            <div class="form-group row ">
                                <label class="col-sm-3">Code</label>
                                <input class="form-control col-sm-8 " name="code" type="text">
                            </div>

                            <div class="form-group row ">
                                <label class="col-sm-3">Name</label>
                                <input class="form-control col-sm-8 " name="name" type="text">
                            </div>

                            <div class="form-group row ">
                                <label class="col-sm-3">Credit</label>
                                <input class="form-control col-sm-8 " name="credit" type="number">
                            </div>

                            <div class="form-group row ">
                                <label class="col-sm-3">Description</label>
                                <textarea class="form-control col-sm-8 " name="description"></textarea>
                            </div>


                            <div class="form-group row ">
                                <label class="col-sm-3">Department</label>
                                <select class="form-control col-sm-8 " name="department_id">
                                    <option>Select Your Department</option>
                                    <option>CSE</option>
                                    <option>EEE</option>
                                </select>
                            </div>


                            <div class="form-group row ">
                                <label class="col-sm-3">Semester</label>
                                <select class="form-control col-sm-8 " name="semester_id">
                                    <option>Select Your Semester</option>
                                    <option>1st</option>
                                    <option>2nd</option>
                                </select>
                            </div>


                        </div>

                        <!--Footer-->
                        <div class="modal-footer">
                            <button class="btn btn-secondary" data-dismiss="modal" type="button">Close</button>
                            <button class="btn btn-primary" type="submit">{{editMode? 'Update' :'Add'}} Course </button>
                        </div>

                    </form>


                </div>
            </div>
        </div>

    </div>


</template>

<script>
    export default {
        name: "Course",

        data() {
            return {
                editMode: ''
            }
        },

        methods: {
            openAddModal() {
                this.editMode = false;

                $('#courseModal').modal('show')
            },

            openEditModal() {
                this.editMode = true;

                $('#courseModal').modal('show')
            }
        }
    }
</script>

<style scoped>

</style>
