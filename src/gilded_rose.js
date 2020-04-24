const { AGED_BRIE, BACKSTAGE_PASS, SULFURAS } = require("../Types");

class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (
        this.items[i].name != AGED_BRIE &&
        this.items[i].name != BACKSTAGE_PASS
      ) {
        this.checkForQualityOfNormalItem(this.items[i]);
      } else {
        this.increaseQualityOfItem(this.items[i]);
        this.checkForQualityOfBackStagePass(this.items[i]);
      }
      this.decreaseSellInValue(this.items[i]);
      if (this.items[i].sellIn < 0) {
        this.checkForQualityOfSellInNegativeItem(this.items[i]);
      }
    }
    return this.items;
  }

  checkForQualityOfSellInNegativeItem(item) {
    if (item.name != AGED_BRIE && item.name != BACKSTAGE_PASS) {
      if (item.quality > 0) {
        this.decreaseQualityOfNormalItem(item);
      } else {
        item.quality -= item.quality;
      }
    } else {
      if (item.name == BACKSTAGE_PASS) {
        item.quality = 0;
      } else {
        this.increaseQualityOfItem(item);
      }
    }
  }

  checkForQualityOfNormalItem(item) {
    if (item.quality > 0 && item.name != SULFURAS) {
      item.quality -= 1;
    }
  }

  checkForQualityOfBackStagePass(item) {
    if (item.name == BACKSTAGE_PASS && item.quality < 50) {
      if (item.sellIn >= 6 && item.sellIn < 11) {
        item.quality += 1;
      } else if (item.sellIn < 6) {
        item.quality += 2;
      }
    }
  }

  increaseQualityOfItem(item) {
    if (item.quality < 50) {
      item.quality += 1;
    }
  }

  decreaseSellInValue(item) {
    if (item.name != SULFURAS) {
      item.sellIn -= 1;
    }
  }
  decreaseQualityOfNormalItem(item) {
    if (item.name != SULFURAS) {
      item.quality -= 1;
    }
  }
}

module.exports = {
  Item,
  Shop,
};
