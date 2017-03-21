<template>
    <div class="wrap" v-wheight>
		<div class="comp">
			<div class="monitor">
				<div class="mid">
					<div class="site">
						<div class="topbar">
							<div class="cerrar">
								<div class="circl"></div>
								<div class="circl"></div>
								<div class="circl"></div>
							</div>
						</div>
						<div class="inhead">
							<div class="mid">
								<div class="item"></div>
							</div>
							<div class="mid txr">
								<div class="item"></div>
								<div class="item"></div>
								<div class="item"></div>
								<div class="item"></div>
							</div>
						</div>
						<div class="inslid">
							
						</div>
						<div class="incont">
							<div class="item"></div>
							<div class="item"></div>
							<div class="item"></div>
							<div class="item"></div>
							<div class="wid">
								<div class="itwid">
									<div>
										<div class="contfoot"></div>
									</div>
								</div>
								<div class="itwid">
									<div>
										<div class="contfoot"></div>
									</div>
								</div>
								<div class="itwid">
									<div>
										<div class="contfoot"></div>
									</div>
								</div>
								<div class="clearfix"></div>
							</div>
							<div class="infoot">
								
							</div>
						</div>
					</div>
				</div>
				<div class="mid codigo">
					<div class="line">
						<div class="item var"></div>
						<div class="item cont"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line">
						<div class="item min var"></div>
						<div class="item min fun"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line">
						<div class="item min var"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line">
						<div class="item var"></div>
						<div class="item atr"></div>
						<div class="item cont"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line tab1">
						<div class="item min atr"></div>
						<div class="item lrg fun"></div>
						<div class="item min fun"></div>
						<div class="item lrg cont"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line tab1">
						<div class="item lrg atr"></div>
						<div class="item min fun"></div>
						<div class="item min cont"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line tab1">
						<div class="item atr"></div>
						<div class="item min fun"></div>
						<div class="item atr"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line tab1">
						<div class="item min atr"></div>
						<div class="item min cont"></div>
						<div class="item lrg atr"></div>
						<div class="item  fun"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line tab1">
						<div class="item min atr"></div>
						<div class="item lrg fun"></div>
						<div class="item lrg cont"></div>
						<div class="item min fun"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line tab1">
						<div class="item min var"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line tab1">
						<div class="item min var"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line tab2">
						<div class="item min var"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line tab2">
						<div class="item min atr"></div>
						<div class="item min fun"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line tab3">
						<div class="item min atr"></div>
						<div class="item min fun"></div>
						<div class="item lrg fun"></div>
						<div class="item lrg cont"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line tab3">
						<div class="item min atr"></div>
						<div class="item min fun"></div>
						<div class="item lrg atr"></div>
						<div class="item lrg cont"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line tab4">
						<div class="item min fun"></div>
						<div class="item lrg atr"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line tab1">
						<div class="item atr"></div>
						<div class="item var"></div>
						<div class="item cont"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line tab3">
						<div class="item min var"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line tab4">
						<div class="item min atr"></div>
						<div class="item min fun"></div>
						<div class="item lrg atr"></div>
						<div class="item lrg cont"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line">
						<div class="item min var"></div>
						<div class="clearfix"></div>
					</div>
					
				</div>
			</div>
			<div class="base">
				
			</div>
            <clearfix class="font-display1 font-thin color-white" style="margin-top: 20px;">Welcome To</clearfix>
            <clearfix class="font-display1 font-light color-white">Viu Documentation</clearfix>
            <clearfix style="width:auto" class="button-center-container">
                <router-link to="/components/buttons">
					<raised-button v-ripple class="primary background-pink"><icon name="xml"></icon> Start Explore</raised-button>
				</router-link>
                <raised-button @click="linkToGithub" v-ripple><icon name="github-circle"></icon> Github</raised-button>
            </clearfix>
		</div>
	</div>
    <!--<page-container style="height: 2000px; padding-top: 64px;">
        <checkbox name="k" v-model="input"></checkbox>
        <switches name="test" v-model="input"></switches>
        <radio name="test" :value="input"></radio>
        <radio name="test" :value="input2"></radio>
        <tooltip text="Nizul Zaim">
            <flat-button v-ripple @click="selectValue = 'madiha'" trigger-tooltip>Nizul Zaim</flat-button>
        </tooltip>
        
        <textfield v-model="textInput" placeholder="Testing" message="Testing message" :force-message="true" :is-info="true"></textfield>
        <data-table :sortable="true" @headerClick="headerTest">
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th class="unsortable">Comment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Lala</td>
                        <td>Lala</td>
                        <td>Lala</td>
                    </tr>
                    <tr>
                        <td>Lala</td>
                        <td>Lala</td>
                        <td>Lala</td>
                    </tr>
                    <tr>
                        <td>Lala</td>
                        <td>Lala</td>
                        <td>Lala</td>
                    </tr>
                    <tr>
                        <td>Lala</td>
                        <td>Lala</td>
                        <td>Lala</td>
                    </tr>
                </tbody>
            </table>
        </data-table>  
        <dropdown-menu>
            <flat-button v-ripple trigger-menu>Nizul Zaim</flat-button>
            <menu-content>
                <menu-item>Testing</menu-item>
                <menu-item>Testing</menu-item>
                <menu-item>Testing</menu-item>
                <menu-item>Testing</menu-item>
            </menu-content>
        </dropdown-menu>
        <clearfix></clearfix>
        <div class="row has-gutter">
            <div class="col-xs-fluid-6">
                <dropdown-select v-model="selectValue" label="Name">
                    <menu-option value="nizul">Nizul</menu-option>
                    <menu-option value="zaim">Zaim</menu-option>
                    <menu-option value="lili">Lili</menu-option>
                    <menu-option value="madiha">Madiha</menu-option>
                    <menu-option value="madiha">Madiha</menu-option>
                    <menu-option value="madiha">Madiha</menu-option>
                    <menu-option value="madiha">Madiha</menu-option>
                </dropdown-select>
            </div>
            <div class="col-xs-fluid-10">
                <flat-button v-ripple @click="changeChartData">Change Data</flat-button>
                <textfield v-model="textInput" placeholder="Testing" message="Testing message" :force-message="true"></textfield>
            </div>
            <div class="col-xs-fluid-24">
                <cards>
                    <cards-content>
                        <chart @legendclick="testDataClick" :data-json="chartData" type="pie"></chart>
                    </cards-content>
                </cards>
                <div>
                    <accordion :collapsible="true">
                        <accordion-item>
                            <accordion-item-header>Header</accordion-item-header>
                            <accordion-item-content>Content</accordion-item-content>
                        </accordion-item>
                        <accordion-item>
                            <accordion-item-header>Header</accordion-item-header>
                            <accordion-item-content>Content</accordion-item-content>
                        </accordion-item>
                    </accordion>
                </div>
                
            </div>
        </div>
        <tooltip text="Nizul Zaim">
            <flat-button v-ripple @click="selectValue = 'madiha'" trigger-tooltip>Nizul Zaim</flat-button>
        </tooltip>
        {{input}}
    </page-container>-->
</template>
<script>
    // import { PageLoadMixin, Snackbar } from "meteor/skynightz93:viu-ui";
    // export default {
    //     data() {
    //         return {
    //             input: "",
    //             input2: "n",
    //             textInput: "Nizul Zaim",
    //             src: null,
    //             selectValue: "madiha",
    //             chartData: {
    //                 data1: [30, 20, 50, 40, 60, 50],
    //                 data2: [200, 130, 90, 240, 130, 220],
    //                 data3: [300, 200, 160, 400, 250, 250]
    //             }, 
    //         }
    //     },
    //     methods: {
    //         loadImage() {
    //             console.log("hello");
    //             this.src = "/img/a.jpg";
    //         },
    //         changeChartData() {
    //             this.chartData = {
    //                 data1: [0, 20, 50, 40, 60, 50],
    //                 data2: [200, 130, 90, 240, 130, 220],
    //                 data3: [100, 200, 160, 400, 250, 250]
    //             }
    //         },
    //         testDataClick(chart, id) {
    //             chart.toggle(id);
    //         },
    //         headerTest(id, order) {
    //             console.log(id, order);
    //         }
    //     },
    //     mounted() {
    //     }
    // }
    export default {
        methods:{
            linkToGithub() {
                window.location.href = 'https://github.com/DevsignStudio/viu'
            }
        }
    }
</script>

<style lang="scss" scoped> 

.clear{
	clear: both;
}
img{
	max-width: 100%;
}
h1, h2, h3, h4{
	padding: 0;
	margin: 0;
}
// VARIABLES
$mainblack: #22262b;
$amain: #fbb053;
$grisclaro: #e0e2e2;
$display: #abadc6;
$item: #d1c9bf;
$codred: #ac5e47;

// MISC
.wrap{
	width: 100%;
	position: relative;
	background-color: #2a56c6;
	display: flex;
	justify-content: center;
	align-items: center
}
.comp{
    width: 100%;
    height: auto;
    text-align: center;
    .monitor{
		width: 275px;
		height: 181px;
		display: block;
		margin: 0 auto;
		border-radius: 10px 10px 0px 0px;
		padding: 9px;
		border: solid 1px $grisclaro;
		background-color: black;
    }
    .mid{
    	float: left;
    	display: block;
    	height: 100%;
    	position: relative;
    	background-color: $display;
    	width: 50%;
    	&.codigo{
    		background-color: $mainblack;
    	}
    }
    .site{
    	overflow: hidden;
    	position: absolute;
		width: 105px;
		height: 138px;
	    bottom: 0;
	    right: 0;
    	.topbar{
			width: 100%;

    	}
    	.cerrar{
			width: 100%;
			padding: 3px;
			line-height: 0;
			display: flex;
		    align-items: center;
		    justify-content: flex-start;
		    border-radius: 4px 4px 0px 0px;
			background-color: #afa895;
			&>div{
				display: inline-block;
				width: 2px;
				height: 2px;
				border-radius: 50%;
				background: white;
				margin: 0px 1px;
			}
		}
		.inhead{
			padding: 2px;
			height: 5px;
			background-color: #ddd8cf;
			.item{
				width: 10px;
    			height: 1px;
				background-color: $item;
				margin: 0 1px;
				display: block;
				float: left;
			}
		}
    }
    .txr{
    	text-align: right;
		.item{
			float: right;
		}
    }
    .inslid{
    	width: 100%;
    	height: 33px;
    	background-color: #efebe2;
    }
    .incont{
		padding-top: 10px;
		background: #fefaf0;
    	.item{
			background-color: $item;
			width: 53px;
			height: 2px;
			display: block;
			margin: 0 auto;
			margin-top: 1px;
			&:nth-child(1){
				width: 20px;
			}
			&:nth-child(2){
				margin-top: 3px;
				width: 41px;
			}
			&:nth-child(3){
				width: 32px;
			}
			&:nth-child(4){
				width: 23px;
			}
    	}
    	.wid{
    		width: 100%;
    		padding: 8px 1px;
    		.itwid{
    			width: 33.333%;
    			float: left;
    			height: 26px;
    			padding: 0px 3px;
    			&>div{
    				width: 100%;
    				height: 100%;
    				background-color: #f5f1e6;
    				position: relative;
    				.contfoot{
    					position: absolute;
    					bottom: 0;
    					left: 0;
    					height: 6px;
    					width: 100%;
    					background-color: #ebe5dc;
    				}
    			}
    		}
    	}
    	.infoot{
    		background-color: #efebe2;
    		height: 26px;
    		width: 100%;
    	}
    }
	@keyframes code {
	    0% {
			opacity: 1;
	    }
	    50% {
			opacity: 0.6;
	    }
	    100% {
			opacity: 1;
	    }
	}
    .codigo{
    	padding: 14px 0px 14px 14px;
    	.var{
    		background-color: $codred;
	    	animation: code;
			animation-duration: 0.3s;
			animation-iteration-count: infinite;
    	}
    	.cont{
    		background-color: #464748;
	    	animation: code;
			animation-duration: 0.5s;
			animation-iteration-count: infinite;
    	}
    	.fun{
    		background-color: $amain;
	    	animation: code;
			animation-duration: 0.2s;
			animation-iteration-count: infinite;
    	}
    	.atr{
    		background-color: #645572;
	    	animation: code;
			animation-duration: 0.1s;
			animation-iteration-count: infinite;
    	}
    	.item{
    		height: 3px;
    		width: 20px;
    		float: left;
    		margin-right: 3px;
    		&.min{
    			width: 13px;
    		}
    		&.lrg{
    			width: 30px;
    		}
    	}
    	.line{
    		padding: 2px 0;
    		width: 100%;
    	}
    	.tab1{
    		padding-left: 5px;
    	}
    	.tab2{
    		padding-left: 8px;
    	}
    	.tab3{
    		padding-left: 10px;
    	}
    	.tab4{
    		padding-left: 12px;
    	}
    }
}

.base {
    width: 338px;
    height: 12px;
    background: $grisclaro;
    display: block;
    margin: 0 auto;
    border-radius: 0px 0px 6px 6px;
}  
</style>