<template>
	<div>
		<Form ref="formInline" :model="formInline" inline class="myForm">
			<FormItem prop="user">
				<Input type="text" v-model="formInline.user" placeholder="Username">
					<Icon type="ios-person-outline" slot="prepend"></Icon>
				</Input>
			</FormItem>
			<FormItem prop="password">
				<Input type="password" v-model="formInline.password" placeholder="Password">
					<Icon type="ios-lock-outline" slot="prepend"></Icon>
				</Input>
			</FormItem>
			<FormItem>
				<Button type="primary" @click="handleSubmit('formInline')">查询</Button>
			</FormItem>
		</Form>

		<Table border :columns="columns12" :data="data6">
			<template slot-scope="{ row }" slot="name">
				<strong>{{ row.name }}</strong>
			</template>
			<template slot-scope="{ row, index }" slot="action">
				<Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">查看</Button>
				<Button type="error" size="small" @click="remove(index)">
					<Icon type="md-trash" size="18"/>
					删除
				</Button>
			</template>
		</Table>
		<br>
		<Page :total="100"/>
	</div>
</template>
<script>
export default {
	data() {
		return {
			formInline: {
				user: '',
				password: ''
			},

			columns12: [
				{
					title: 'Name',
					slot: 'name'
				},
				{
					title: 'Age',
					key: 'age'
				},
				{
					title: 'Address',
					key: 'address'
				},
				{
					title: 'Action',
					slot: 'action',
					width: 200,
					align: 'center'
				}
			],

			data6: [
				{
					name: 'John Brown',
					age: 18,
					address: 'New York No. 1 Lake Park'
				},
				{
					name: 'Jim Green',
					age: 24,
					address: 'London No. 1 Lake Park'
				},
				{
					name: 'Joe Black',
					age: 30,
					address: 'Sydney No. 1 Lake Park'
				},
				{
					name: 'Jon Snow',
					age: 26,
					address: 'Ottawa No. 2 Lake Park'
				}, {
					name: 'John Brown',
					age: 18,
					address: 'New York No. 1 Lake Park'
				},
				{
					name: 'Jim Green',
					age: 24,
					address: 'London No. 1 Lake Park'
				},
				{
					name: 'Joe Black',
					age: 30,
					address: 'Sydney No. 1 Lake Park'
				},
				{
					name: 'Jon Snow',
					age: 26,
					address: 'Ottawa No. 2 Lake Park'
				}
			]
		}
	},
	methods: {
		handleSubmit(name) {
			this.$refs[name].validate((valid) => {
				if (valid) {
					this.$Message.success('Success!');
				} else {
					this.$Message.error('Fail!');
				}
			})
		},
		show(index) {
			this.$Modal.info({
				title: 'User Info',
				content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
			})
		},
		remove(index) {
			this.data6.splice(index, 1);
		}
	}
}
</script>

<style>
.myForm{
	margin: 10px;
}
</style>
