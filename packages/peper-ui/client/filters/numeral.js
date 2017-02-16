import { Vue } from 'meteor/akryum:vue';
import numeral from 'numeral';

Vue.filter('currency', function(value) {
    return numeral(value).format('0,0.00');
});