<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">

                <div class="card">
                    <!--Card Header-->
                    <div class="card-header">

                        <h4 class="card-title" style="margin-left: 330px"> Manage Department </h4>

                        <div class="card-tools">
                            <button @click.prevent="openAddModal" class="btn btn-success">
                               Add Department
                                <i class="fa fa-plus"></i>
                            </button>
                        </div>

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

        <div aria-hidden="true" aria-labelledby="departmentModalTitle" class="modal fade" id="departmentModal"
             role="dialog" tabindex="-1">
            <div class="modal-dialog" role="document">

                <div class="modal-content">

                    <!--Header-->
                    <div class="modal-header">
                        <h5 style="margin-left: 150px">  {{editMode? 'Edit' :'Add'}} Department</h5>


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

                        </div>

                        <!--Footer-->
                        <div class="modal-footer">
                            <button class="btn btn-secondary" data-dismiss="modal" type="button">Close</button>
                            <button class="btn btn-primary" type="submit">{{editMode? 'Update' :'Add'}} Department </button>
                        </div>

                    </form>


                </div>
            </div>
        </div>

    </div>


</template>

<script>
    export default {
        name: "Department",

        data() {
            return {
                editMode: ''
            }
        },

        methods: {
            openAddModal() {
                this.editMode = false;

                $('#departmentModal').modal('show')
            },

            openEditModal() {
                this.editMode = true;

                $('#departmentModal').modal('show')
            }
        }
    }
</script>

<style scoped>

</style>
