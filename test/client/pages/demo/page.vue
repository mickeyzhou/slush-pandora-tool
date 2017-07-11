<template>
	<h1> 一点xxxx工具</h1>
	<div class="search-panel" v-sticky :z-index="999" :sticky-top="0">
		
	</div>
</template>

<script>
	import 'iview/dist/styles/iview.css';
	import { Row, Col } from 'iview/src/components/layout';
	import { Select as iSelect, Option as iOption } from 'iview/src/components/select';
	import IButton from 'iview/src/components/button';
	import Radio from 'iview/src/components/radio';
	import ITable from 'iview/src/components/table';
	import Modal from 'iview/src/components/modal';
	import Spin from 'iview/src/components/spin';
	import VueSticky from '../../directives/sticky_directive.js';

	export default {
		data(){
			return {};
		},
		created: function(){

		},
		methods: {
			fn1(){

			},
			fn2(){

			}
		},
		computed: {
			attr1(){

			},
			attr2(){
				
			}
		},
		components: {
			Row,
			ICol: Col,
			iSelect,
			iOption,
			IButton,
			Radio,
			RadioGroup: Radio.Group,
			ITable,
			Spin	
		},
		directives: {
    		'sticky': VueSticky
  		}
	}
</script>

<style>
	
</style>
