<template>
    <div class="appbar-padding" v-wheight>
        <div style="height: 100%;">
            <tab id="tab">
                <tab-item v-ripple>View</tab-item>
                <tab-item v-ripple>Code</tab-item>
            </tab>
            <tab-content element="#tab" :size="2">
                <tab-content-item>
                    <list class="hover">
                        <list-item>
                            <icon name="solid"></icon>Nizul Zaim
                        </list-item>
                        <list-item>
                            <icon name="solid"></icon>Nizul Zaim
                        </list-item>
                        <list-item>
                            <icon name="solid"></icon>Nizul Zaim
                        </list-item>
                        <list-item>
                            <icon name="solid"></icon>Nizul Zaim
                        </list-item>
                        <list-item>
                            <icon name="solid"></icon>Nizul Zaim
                        </list-item>
                        <list-item>
                            <icon name="solid"></icon>Nizul Zaim
                        </list-item>
                    </list>

                    <list class="hover">
                        <list-item>
                            <avatar text="Nizul Zaim"></avatar> Nizul Zaim
                        </list-item>
                        <list-item>
                            <avatar text="Nizul Zaim"></avatar> Nizul Zaim
                        </list-item>
                        <list-item>
                            <avatar text="Nizul Zaim"></avatar> Nizul Zaim
                        </list-item>
                        <list-item>
                            <avatar text="Nizul Zaim"></avatar> Nizul Zaim
                        </list-item>
                        <list-item>
                            <avatar text="Nizul Zaim"></avatar> Nizul Zaim
                        </list-item>
                        <list-item>
                            <avatar text="Nizul Zaim"></avatar> Nizul Zaim
                        </list-item>
                    </list>
                </tab-content-item>
                <tab-content-item>
                    <div style="height:4000px;">DIV</div>
                </tab-content-item>
            </tab-content>
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
    import { PageLoadMixin, Snackbar } from "meteor/skynightz93:viu-ui";
    export default {
        data() {
            return {
                input: "",
                input2: "n",
                textInput: "Nizul Zaim",
                src: null,
                selectValue: "madiha",
                chartData: {
                    data1: [30, 20, 50, 40, 60, 50],
                    data2: [200, 130, 90, 240, 130, 220],
                    data3: [300, 200, 160, 400, 250, 250]
                }, 
            }
        },
        methods: {
            loadImage() {
                console.log("hello");
                this.src = "/img/a.jpg";
            },
            changeChartData() {
                this.chartData = {
                    data1: [0, 20, 50, 40, 60, 50],
                    data2: [200, 130, 90, 240, 130, 220],
                    data3: [100, 200, 160, 400, 250, 250]
                }
            },
            testDataClick(chart, id) {
                chart.toggle(id);
            },
            headerTest(id, order) {
                console.log(id, order);
            }
        }
    }
</script>