<template>
    <div class="fillcontain">
        <div class="table_container">
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column type="expand">
                  <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                      <el-form-item label="店铺名称">
                        <span>{{ props.row.name }}</span>
                      </el-form-item>
                      <el-form-item label="店铺地址">
                        <span>{{ props.row.address }}</span>
                      </el-form-item>
                      <el-form-item label="店铺介绍">
                        <span>{{ props.row.description }}</span>
                      </el-form-item>
                      <el-form-item label="店铺 ID">
                        <span>{{ props.row.id }}</span>
                      </el-form-item>
                      <el-form-item label="联系电话">
                        <span>{{ props.row.phone }}</span>
                      </el-form-item>
                      <el-form-item label="评分">
                        <span>{{ props.row.rating }}</span>
                      </el-form-item>
                      <el-form-item label="销售量">
                        <span>{{ props.row.recent_order_num }}</span>
                      </el-form-item>
                      <el-form-item label="分类">
                        <span>{{ props.row.category }}</span>
                      </el-form-item>
                    </el-form>
                  </template>
                </el-table-column>
                <el-table-column
                  label="店铺名称"
                  prop="name">
                </el-table-column>
                <el-table-column
                  label="店铺地址"
                  prop="address">
                </el-table-column>
                <el-table-column
                  label="店铺介绍"
                  prop="description">
                </el-table-column>
                <el-table-column label="操作" width="300">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <!-- <el-button
                      size="mini"
                      type="Success"
                      @click="addFood(scope.$index, scope.row)">添加食品</el-button> -->
                    <el-button
                      size="mini"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                  </template>
                </el-table-column>
            </el-table>
            <div class="Pagination">
                <el-pagination
                  v-if="pagination.total > 0"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="pagination.pageNum"
                  :page-size="20"
                  layout="total, prev, pager, next"
                  :total="pagination.total">
                </el-pagination>
            </div>
            <el-dialog title="修改店铺信息" :visible.sync="dialogFormVisible">
                <el-form :model="selectTable">
                    <el-form-item label="店铺名称" label-width="100px">
                        <el-input v-model="selectTable.name" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="详细地址" label-width="100px">
                        <el-autocomplete
                          v-model="address.address"
                          :fetch-suggestions="querySearchAsync"
                          placeholder="请输入地址"
                          style="width: 100%;"
                          @select="addressSelect"
                        ></el-autocomplete>
                        <span>当前城市：{{city.name}}</span>
                    </el-form-item>
                    <el-form-item label="店铺介绍" label-width="100px">
                        <el-input v-model="selectTable.description"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话" label-width="100px">
                        <el-input v-model="selectTable.phone"></el-input>
                    </el-form-item>
                    <el-form-item label="店铺分类" label-width="100px">
                        <el-cascader
                          :options="categoryOptions"
                          v-model="selectedCategory"
                          change-on-select
                        ></el-cascader>
                    </el-form-item>
                    <el-form-item label="商铺图片" label-width="100px">
                        <el-upload
                          class="avatar-uploader"
                          :action="baseUrl + '/v1/addimg/shop'"
                          :show-file-list="false"
                          :on-success="handleServiceAvatarScucess"
                          :before-upload="beforeAvatarUpload">
                          <img v-if="selectTable.image_path" :src="baseImgPath + selectTable.image_path" class="avatar">
                          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>
                </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="updateShop">确 定</el-button>
              </div>
            </el-dialog>
        </div>
    </div>
</template>
<script>
    import {cityGuess, getResturants, getResturantsCount, foodCategory, updateResturant, searchplace, deleteResturant,baseUrl, baseImgPath} from '@/api/index'
    export default {
        data(){
            return {
                baseUrl: baseUrl,
                baseImgPath: baseImgPath,                
                city: {},
                tableData: [],
                pagination: {
                  pageNum: 1,
                  pageSize: 10,
                  total: 0
                },
                tableLoading: false,
                lastPage: 1,
                selectTable: {},
                dialogFormVisible: false,
                categoryOptions: [],
                selectedCategory: [],
                address: {},
            }
        },
        created(){
            this.initData();
            // this.axios({
            //   url: '/mock/login',
            //   method: 'post',
            //   data: {
            //     username:'1',
            //     password: '1'
            //   }
            // }).then(res => {
            //   console.log(res);
            // })            
        },
        methods: {
            initData(){
                cityGuess().then(res => {
                  if(res.code === 200){
                    this.city = res.data;
                    getResturantsCount().then(countData => {
                      if(countData.code == 200){
                        this.count = countData.count;
                      }
                    });
                  }
                })
                this.getResturants();
            },
            async getCategory(){
                try{
                    foodCategory().then(res => {
                      if(res.code === 200){
                        let categories = res.data.list;
                        categories.forEach(item => {
                            if (item.sub_categories.length) {
                                const addnew = {
                                    value: item.name,
                                    label: item.name,
                                    children: []
                                }
                                item.sub_categories.forEach((subitem, index) => {
                                    if (index == 0) {
                                        return
                                    }
                                    addnew.children.push({
                                        value: subitem.name,
                                        label: subitem.name,
                                    })
                                })
                                this.categoryOptions.push(addnew)
                            }
                        })
                      }
                    })
                    
                }catch(err){
                    console.log('获取商铺种类失败', err);
                }
            },
            getResturants(){
                const {latitude, longitude} = this.city;
                getResturants({...this.pagination, latitude, longitude}).then(res => {
                // getResturants(this.pagination).then(res => {
                  console.log(res);
                  this.tableData = [];
                  if(res.code === 200){
                    this.tableData = this.tableData.concat([], res.data.list);
                    this.pagination.total = res.data.recordTotal
                    this.lastPage = this.pagination.pageNum
                  }
                }).catch(e => {
                  this.tableLoading = false
                  this.pagination.pageNum = this.lastPage
                });
            },
            // 更改每页条数
            handleSizeChange(size) {
              this.pagination.pageSize = size
              if (this.pagination.pageNum * size - this.pagination.total <= size) {
                this.getResturants()
              }
            },
            // 更改页码
            handleCurrentChange(page) {
              this.pagination.pageNum = page
              this.getResturants()
            },
            handleEdit(index, row) {
                this.selectTable = row;
                this.address.address = row.address;
                this.dialogFormVisible = true;
                this.selectedCategory = row.category.split('/');
                if (!this.categoryOptions.length) {
                    this.getCategory();
                }
            },
            addFood(index, row){
                this.$router.push({ path: 'addGoods', query: { restaurant_id: row.id }})
            },
            async handleDelete(index, row) {
              this.$confirm('此操作将永久删除该店铺，是否继续？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {              
                deleteResturant(row.id).then(res => {
                  if (res.code == 200) {
                      this.$message({
                          type: 'success',
                          message: '删除店铺成功'
                      });
                      this.tableData.splice(index, 1);
                  }else{
                    this.$message({
                      type: 'error',
                      message: err.message
                  });
                  }
                });
              });
            },
            async querySearchAsync(queryString, cb) {
                if (queryString) {
                    try{
                        searchplace({
                            type: 'search',
                            city_id: this.city.id,
                            keyword: queryString
                        }).then(res => {
                          if(res.code === 200){
                            if (res.data.list instanceof Array) {
                                res.data.list.map(item => {
                                    item.value = item.address;
                                    return item;
                                })
                                cb(res.data.list)
                            }
                          }
                        });
                    }catch(err){
                        console.log(err)
                    }
                }
            },
            addressSelect(value){
                const {address, latitude, longitude} = value;
                this.address = {address, latitude, longitude};
            },
            handleServiceAvatarScucess(res, file) {
                if (res.code === 200) {
                    this.selectTable.image_path = res.image_path;
                }else{
                    this.$message.error('上传图片失败！');
                }
            },
            beforeAvatarUpload(file) {
                const isRightType = (file.type === 'image/jpeg') || (file.type === 'image/png');
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isRightType) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isRightType && isLt2M;
            },
            async updateShop(){
                this.dialogFormVisible = false;
                try{
                    Object.assign(this.selectTable, this.address);
                    this.selectTable.category = this.selectedCategory.join('/');
                    updateResturant(this.selectTable).then(res => {
                      if (res.code == 200) {
                          this.$message({
                              type: 'success',
                              message: '更新店铺信息成功'
                          });
                          this.getResturants();
                      }else{
                          this.$message({
                              type: 'error',
                              message: res.message
                          });
                      }
                    })
                }catch(err){
                    console.log('更新餐馆信息失败', err);
                }
            },
        }
    }
</script>

<style lang="scss">
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
    .Pagination{
        display: flex;
        justify-content: center;
        margin-top: 8px;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #20a0ff;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 120px;
        height: 120px;
        line-height: 120px;
        text-align: center;
    }
    .avatar {
        width: 120px;
        height: 120px;
        display: block;
    }
</style>