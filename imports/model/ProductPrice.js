import { Class } from 'meteor/jagi:astronomy';
import { Region } from '/imports/model/Region';


const StockistPrice = Class.create({
    name: "StockistPrice",
    fields: {
        minOrder: {
            type: Number,
        },
        maxOrder: {
            type: Number,
        },
        priceInMYR: {
            type: String,
        },
        regionId: String,

    },
    helpers: {
        region() {
            return Region.findOne(this.regionId);
        }
    }
});

export const ProductPrice = Class.create({
    name: "ProductPrice",
    collection: new Mongo.Collection("productPrices"),
    fields: {
        productId: String,
        hqSellPrice: {
            type: String,
        },
        hqModalPrice: {
            type: String,
        },
        stockistPrices: {
            type: [StockistPrice],
            optional: true,
        }
    },
    helpers: {
        inBetween(num, regionId) {
            let isIn = false;
            let self = this;
            for (var i = 0; i < this.stockistPrices.length; i++) {
                let price = self.stockistPrices[i];
                if (price.regionId === regionId) {
                    if (price.minOrder <= num && price.maxOrder >= num) {
                        isIn = true;
                    }
                }
            }
            return isIn;
        }
    },
    behaviors: {
        timestamp: {
            hasCreatedField: true,
            createdFieldName: 'createdAt',
            hasUpdatedField: true,
            updatedFieldName: 'updatedAt'
        },
        softremove: {
            removedFieldName: 'removed',
            hasRemovedAtField: true,
            removedAtFieldName: 'removedAt'
        }
    }
});