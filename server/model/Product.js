// import { Class } from 'meteor/jagi:astronomy';
// import { User } from '/imports/model/User';
// import { Product } from '/imports/model/Product';
// import { ProductPrice } from '/imports/model/ProductPrice';
// import { ProductType } from '/imports/model/ProductType';
// import { Stock } from '/imports/model/Stock';

// Product.extend({
//     meteorMethods: {
//         create(product, productPrice) {
//             this.name = product.name;
//             this.description = product.description;
//             this.weight = product.weight;
//             this.save(function(err, id) {
//                 let price = new ProductPrice();
//                 price.productId = id;
//                 price.stockistPrice = [];
//                 price.set({
//                     hqSellPrice: productPrice.hqSellPrice,
//                     hqModalPrice: productPrice.hqModalPrice
//                 }, {
//                     cast: true
//                 });
//                 price.save();
//             });
//         },
//         update(product, productPrice) {
//             this.name = product.name;
//             let _id = this._id;
//             this.save(function(err, id) {
//                 let price = ProductPrice.findOne({ productId: _id });
//                 price.set({
//                     hqSellPrice: productPrice.hqSellPrice,
//                     hqModalPrice: productPrice.hqModalPrice
//                 }, {
//                     cast: true
//                 });
//                 price.save();
//             });
//         },
//         addType(type) {
//             let _id = this._id;
//             let pType = new ProductType({
//                 name: type.name,
//                 productId: _id,
//             });
//             return pType.save();
//         },
//         editType(objs) {
//             let pTypes = ProductType.find({ productId: this._id });
//             let i = 0;
//             pTypes.forEach(function(ptype) {
//                 ptype.name = objs[i].name;
//                 i += 1;
//                 ptype.save();
//             });
//         },
//         addPrice(obj, regionId) {
//             let price = ProductPrice.findOne({ productId: this._id });
//             if (price.inBetween(obj.minOrder, regionId) || price.inBetween(obj.maxOrder, regionId)) {
//                 throw new Meteor.Error('range', 'Cannot add stockist price. Possible duplicate range of price');
//             }
//             price.stockistPrices.push({
//                 priceInMYR: obj.price,
//                 minOrder: obj.minOrder,
//                 maxOrder: obj.maxOrder,
//                 regionId,
//             });
//             price.save({ cast: true });
//         },
//         delete() {
//             this.softRemove();
//         },
//         restore() {
//             this.softRestore();
//         },

//     }
// });

// ProductType.extend({
//     meteorMethods: {
//         updateStock(num, type) {
//             let user = User.findOne(Meteor.userId());
//             let stock = new Stock({
//                 productTypeId: this._id,
//                 numOfStock: num,
//                 type: type,
//                 branchId: user.profile.branchId,
//             });
//             stock.save({ cast: true });
//         },

//     }
// });


// Meteor.publishComposite('products', function(refresh = 0) {
//     return {
//         find: function() {
//             return Product.find();
//         },
//         children: [{
//             find: function(product) {
//                 let self = this;
//                 ProductType.extend({
//                     fields: {
//                         stock: {
//                             type: Number,
//                             transient: true,
//                             resolve(doc) {
//                                 let user = User.findOne(self.userId);
//                                 let total = 0;
//                                 Stock.find({ productTypeId: doc._id, branchId: user.profile.branchId }).fetch().map(function(d) {
//                                     if (d.type === 0) {
//                                         total += d.numOfStock;
//                                     } else {
//                                         total -= d.numOfStock;
//                                     }
//                                 });
//                                 return total;
//                             },
//                         }
//                     },
//                 });
//                 return ProductType.find({ productId: product._id });
//             }
//         }, {
//             find: function(product) {
//                 return ProductPrice.find({ productId: product._id });
//             }
//         }, ]
//     };
// });